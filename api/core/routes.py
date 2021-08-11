from flask import Blueprint, abort, request, jsonify, g, url_for
from core import auth, db
from core.modules import User, Card

# In Flask, a blueprint is just a group of related routes (the functions below), it helps organize your code
routes = Blueprint('api', __name__)


@auth.verify_password
def verify_password(username_or_token, password):
    # Try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # Try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


@routes.route('/api')
def check_connection():
    """
    Verify that API is online
    .. example::
        $ curl http://localhost:5000/api
    """
    return ('', 200)


@routes.route('/api/register', methods=['POST'])
def register():
    """
    Register a new user by parsing a POST request containing user credentials.
    .. example::
        $ curl http://localhost:5000/api/register -X POST \
            -d '{"username":"<username>","password":"<password>"}'
    """
    req = request.get_json(force=True)
    email = req.get('email')
    username = req.get('username')
    password = req.get('password')
    # Missing arguments
    if email is None or username is None or password is None or len(email) == 0 or len(username) == 0 or len(password) == 0:
        return (jsonify({'error': 'Missing one or more arguments!'}), 400)
    # Check syntax
    if not (User.is_email_syntax_valid(email)):
        return (jsonify({'error': 'Invalid email syntax!'}), 400)
    if not (User.is_username_syntax_valid(username)):
        return (jsonify({'error': 'Invalid username syntax!'}), 400)
    if not (User.is_password_syntax_valid(password)):
        return (jsonify({'error': 'Invalid password syntax!'}), 400)
    # Email existed
    if User.query.filter_by(email=email).first() is not None:
        return (jsonify({'error': 'Email has already been used!'}), 400)
    # User existed
    if User.query.filter_by(username=username).first() is not None:
        return (jsonify({'error': 'Username has already existed!'}), 400)
    user = User(username=username)
    user.email = email
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    g.user = user
    return (jsonify({'access_token': g.user.generate_auth_token(600).decode('ascii')}), 200)


@routes.route('/api/login', methods=['POST'])
def login():
    """
    Log a user in by parsing a POST request containing user credentials and issuing a JWT token.
    .. example::
       $ curl http://localhost:5000/api/login -X POST \
            -d '{"username":"<username>","password":"<password>"}'
    """
    req = request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    # Missing arguments
    if username is None or password is None or len(username) == 0 or len(password) == 0:
        return (jsonify({'error': 'Missing one or more arguments!'}), 400)
    # Validate user
    is_validated = verify_password(username, password)
    if not (is_validated):
        return (jsonify({'error': 'Incorrect username or password!'}), 400)
    return (jsonify({'access_token': g.user.generate_auth_token(600).decode('ascii')}), 200)


@routes.route('/api/auth', methods=['GET'])
@auth.login_required
def authenticate():
    """
    Verifiy whether user authenticated or not
    <username>:<password> === <token>:<dummy>
    .. example::
       $ curl http://localhost:5000/api/auth -i -X GET \
            -u <username>:<password>
    """
    return ('', 200)


@routes.route('/api/token')
@auth.login_required
def get_auth_token():
    """
    Request a new token
    <username>:<password> === <token>:<dummy>
    .. example::
       $ curl http://localhost:5000/api/token -i -X GET \
            -u <username>:<password>
    """
    token = g.user.generate_auth_token(600)
    return jsonify({'access_token': token.decode('ascii')})


@routes.route('/api/resource')
@auth.login_required
def get_resource():
    """
    Get resources of the authenticated user
    .. example::
       $ curl http://localhost:5000/api/token -i -X GET \
            -u <username>:<password>
    """

    cards = [card.serialize() for card in Card.get_cards(g.user.id).all()]

    return (jsonify(data=cards), 200)


@routes.route('/api/new_card', methods=['POST'])
@auth.login_required
def new_card():
    """
    Register a new user by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
        $ curl http://localhost:5000/api/new_card -X POST \
            -d '{"course_name":"<course_name>","course_home":"<course_home>","course_forum":"<course_forum>","course_meeting":"<course_meeting>","course_todo":"<course_todo>"}'\
            -u <username>:<password>
    """
    req = request.get_json(force=True)
    # Construct a card object with info
    card = Card(user_id=g.user.id)
    card.course_name = req.get('course_name', None)
    card.course_home = req.get('course_home', None)
    card.course_forum = req.get('course_forum', None)
    card.course_meeting = req.get('course_meeting', None)
    card.course_todo = req.get('course_todo', None)

    db.session.add(card)
    db.session.commit()

    return ('', 200)
