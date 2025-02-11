from core import db, secret_key
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import time
import re


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(32), index=True)
    username = db.Column(db.String(32), index=True)
    password_hash = db.Column(db.String(128))

    def hash_password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def generate_auth_token(self, expires_in=600):
        return jwt.encode(
            {'id': self.id, 'exp': time.time() + expires_in},
            secret_key, algorithm='HS256')

    @staticmethod
    def verify_auth_token(token):
        try:
            data = jwt.decode(token, secret_key,
                              algorithms=['HS256'])
        except:
            return
        return User.query.get(data['id'])

    @staticmethod
    def is_email_syntax_valid(email):
        """Check whether email syntax is valid."""
        regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        if(re.fullmatch(regex, email)):
            return True
        return False

    @staticmethod
    def is_username_syntax_valid(username):
        # TODO: Set a condition for this method
        return True

    @staticmethod
    def is_password_syntax_valid(password):
        # TODO: Set a condition for this method
        return True


class Card(db.Model):
    __tablename__ = 'cards'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    course_name = db.Column(db.String(128))
    course_home = db.Column(db.String(128))
    course_forum = db.Column(db.String(128))
    course_meeting = db.Column(db.String(128))
    course_todo = db.Column(db.String(128))

    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'user_id': self.user_id,
            'course_name': self.course_name,
            'course_home': self.course_home,
            'course_forum': self.course_forum,
            'course_meeting': self.course_meeting,
            'course_todo': self.course_todo,
        }

    @staticmethod
    def get_cards(user_id):
        """Return cards with specified user_id"""
        return Card.query.filter_by(user_id=user_id)
