from flask import Blueprint, abort, request, jsonify, g, url_for
from modules import auth, db
from modules.modules import User

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

@routes.route('/api/user', methods=['POST'])
def new_user():
    """
    Register a new user by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
        $ curl http://localhost:5000/api/user -X POST \
            -d '{"username":"Yasoob","password":"strongpassword"}'
    """
    req = request.get_json(force=True)
    username = req.get('username')
    password = req.get('password')
    if username is None or password is None:
        abort(400)    # Missing arguments
    if User.query.filter_by(username=username).first() is not None:
        abort(400)    # Existing user
    user = User(username=username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return (jsonify({'username': user.username}), 201,
            {'Location': url_for('api.get_user', id=user.id, _external=True)})

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
    user = User(username=username)
    user.hash_password(password)
    return (jsonify({'username': user.username}), 201,
            {'Location': url_for('api.get_user', id=user.id, _external=True)})

@routes.route('/api/users/<int:id>')
def get_user(id):
    user = User.query.get(id)
    if not user:
        abort(400)
    return jsonify({'username': user.username})


@routes.route('/api/token')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token(600)
    return jsonify({'token': token.decode('ascii'), 'duration': 600})


@routes.route('/api/resource')
@auth.login_required
def get_resource():
    return jsonify({'data': 'Hello, %s!' % g.user.username})