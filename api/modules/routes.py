from flask import Blueprint, abort, request, jsonify, g, url_for
from modules import auth, db
from modules.modules import User, Card

# In Flask, a blueprint is just a group of related routes (the functions below), it helps organize your code
routes = Blueprint('api', __name__)


@auth.verify_password
def verify_password(username_or_token, password):
    # First try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # Try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


@routes.route('/api/register', methods=['POST'])
def new_user():
    """
    Register a new user by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
        $ curl http://localhost:5000/api/register -X POST \
            -d '{"username":"Yasoob","password":"strongpassword"}'
    """
    req = request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')

    # Missing arguments
    if username is None or password is None:
        abort(400)

    # User existed
    if User.query.filter_by(username=username).first() is not None:
        abort(400)

    # If valid, add new user to database
    user = User(username=username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()

    return (jsonify({'username': user.username}), 201)


@routes.route('/api/login', methods=['POST'])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
       $ curl http://localhost:5000/api/login -X POST \
         -d '{"username":"Yasoob","password":"strongpassword"}'
    """
    req = request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)

    # Validate user
    is_validated = verify_password(username, password)

    if not (is_validated):
        abort(400)

    return (jsonify({'username': username}), 201)


@routes.route('/api/users/<int:id>')
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(400)
    return jsonify({'username': user.username})


@routes.route('/api/verify', methods=['POST'])
def verify():
    req = request.get_json(force=True)
    token = req.get('token', None)

    if (verify_password(token, '')):
        return ('', 201)

    abort(400)


@routes.route('/api/token')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token(600)
    return jsonify({'access_token': token.decode('ascii')})


@routes.route('/api/resource', methods=['POST'])
def get_resource():
    """
    Get resources belong to an user, must pass a valid token!
    .. example::
       $ curl http://localhost:5000/api/resource -X POST \
         -d '{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI4MzQ1NTYzLjgxMTg4MTh9.JRrYIEE2WcD8ZSU6rQXJODfOjg_yXd79rXFzPn6bQdI"}'
    """
    req = request.get_json(force=True)
    token = req.get('token', None)

    if not (verify_password(token, '')):
        abort(400)

    cards = [card.serialize() for card in Card.get_cards(token).all()]

    return (jsonify(data=cards), 201)


@routes.route('/api/new_card', methods=['POST'])
def new_card():
    """
    Register a new user by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
        $ curl http://localhost:5000/api/new_card -X POST \
            -d '{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI4MzQ0OTM2LjQ5Mjc2ODN9.xvvYUetJkgoQPqefEnKrMv9WBx7Io_Neao4kYT_gQW0","user_id":"1","course_name":"CS126","course_home":"https://stackoverflow.com/","course_forum":"https://stackoverflow.com/","course_meeting":"https://stackoverflow.com/","course_todo":""}'
    """
    # Verify identity
    req = request.get_json(force=True)
    token = req.get('token', None)
    if not (verify_password(token, '')):
        abort(400)

    # If valid, find user
    user = User.verify_auth_token(token)

    # Data
    card = Card(user_id=user.id)
    card.course_name = req.get('course_name', None)
    card.course_home = req.get('course_home', None)
    card.course_forum = req.get('course_forum', None)
    card.course_meeting = req.get('course_meeting', None)
    card.course_todo = req.get('course_todo', None)

    db.session.add(card)
    db.session.commit()

    return ('', 201)
