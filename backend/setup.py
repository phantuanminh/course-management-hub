import os
import bcrypt

from flask import Flask, request, jsonify, session, url_for
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# Enable Cross-Origin Requests
CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MONGO_DBNAME'] = 'course-management-hub'
app.config['MONGO_URI'] = 'mongodb://admin:password@localhost:27017/?authSource=admin'

mongo = PyMongo(app)


@cross_origin(supports_credentials=True)
@app.route('/api/sign_in', methods=['POST'])
def sign_in():
    # data = request.get_json()
    # return jsonify({'email': data['email'], 'password': data['password']})
    # data = request.get_json()
    # users = mongo.db.users
    # sign_in_user = users.find_one({'email': data['email']})

    # if sign_in_user:
    #     if bcrypt.hashpw(data['password'].encode('utf-8'), sign_in_user['password'].encode('utf-8')) == sign_in_user['password'].encode('utf-8'):
    #         session['email'] = data['email']
    #         return jsonify({'result': 'success'})

    return jsonify({'result': 'fail'})


@app.route('/api/sign_up', methods=['POST'])
@cross_origin(supports_credentials=True)
def sign_up():
    # data = request.get_json()
    # return jsonify({'email': data['email'], 'password': data['password']})
    # data = request.get_json()
    # if request.method == 'POST':
    #     users = mongo.db.users
    #     existing_user = users.find_one({'email': data['email']})
    #     if existing_user is None:
    #         hashpass = bcrypt.hashpw(
    #             data['password'].encode('utf-8'), bcrypt.gensalt())
    #         users.insert(
    #             {'email': data['email'], 'password': hashpass, 'firstName': data['firstName'], 'lastName': data['lastName']})
    #         session['email'] = data['email']
    #         return jsonify({'result': 'success'})

    return jsonify({'result': 'fail'})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
