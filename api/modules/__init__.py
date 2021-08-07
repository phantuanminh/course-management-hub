#!/usr/bin/env python
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
from flask_cors import CORS

db = SQLAlchemy()
cors = CORS()
auth = HTTPBasicAuth()
secret_key = 'i am a turtle'


def create_app():
    # Initialization
    app = Flask(__name__)
    app.debug = True

    # Register secret key (DO NOT hardcode this in production)
    app.config['SECRET_KEY'] = secret_key

    # Register database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
    app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
    db.init_app(app)

    # Initializes CORS so that the api can talk to the client
    cors.init_app(app)

    # Register the API endpoints
    from modules.routes import routes
    app.register_blueprint(routes)

    # (Local) Init SQLite database if not existed
    if not os.path.exists('db.sqlite'):
        with app.app_context():
            db.create_all()

    return app
