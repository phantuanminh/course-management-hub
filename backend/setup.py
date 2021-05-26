import datetime
import os

from flask import Flask, Response, json, request, jsonify
from flask_mongoengine import MongoEngine
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['MONGODB_SETTINGS'] = {
    'host': os.environ['MONGODB_HOST'],
    'username': os.environ['MONGODB_USERNAME'],
    'password': os.environ['MONGODB_PASSWORD'],
    'db': 'webapp'
}

db = MongoEngine()
db.init_app(app)


# class Todo(db.Document):
#     title = db.StringField(max_length=60)
#     text = db.StringField()
#     done = db.BooleanField(default=False)
#     pub_date = db.DateTimeField(default=datetime.datetime.now)


# @app.route("/api")
# def index():
#     Todo.objects().delete()
#     Todo(title="Simple todo A", text="12345678910").save()
#     Todo(title="Simple todo B", text="12345678910").save()
#     Todo.objects(title__contains="B").update(set__text="Hello world")
#     todos = Todo.objects().to_json()
#     return Response(todos, mimetype="application/json", status=200)


# @app.route("/api2")
# def index2():
#     Todo.objects().delete()
#     Todo(title="Simple todo A", text="12345678910").save()
#     Todo(title="Simple todo B", text="12345678910").save()
#     Todo.objects(title__contains="B").update(set__text="Hello world")
#     todos = Todo.objects().to_json()
#     return jsonify({'x': '1', 'y': '2'})


# @app.route('/add_first', methods=['GET', 'POST'])
# @cross_origin(supports_credentials=True)
# def add_first():
#     data = request.get_json()
#     return jsonify({'name': data['name'], 'num': data['num']})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
