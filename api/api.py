from flask import Flask, app, jsonify, request, json, make_response, session
import time
from flask_sqlalchemy import SQLAlchemy
import requests

app = Flask(__name__)
app.secret_key = 'SOMETHING-RANDOM'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///example.db'
db = SQLAlchemy(app)


class Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    gameID = db.Column(db.Integer, nullable=False)
    title = db.Column(db.Text, nullable=False)
    publisher = db.Column(db.Text, nullable=False)
    developer = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    genre = db.Column(db.Text, nullable=False)
    platform = db.Column(db.Text, nullable=False)
    release = db.Column(db.Text, nullable=False)
    image = db.Column(db.Text, nullable=False)
    download = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.gameID} {self.title} {self.publisher} {self.developer} {self.description} {self.genre} {self.platform} {self.release} {self.image} {self.download}'


def info_serializer(response):
    return {
        'id': response.id,
        'gameID': response.gameID,
        'title': response.title,
        'publisher': response.publisher,
        'developer': response.developer,
        'description': response.description,
        'genre': response.genre,
        'platform': response.platform,
        'release': response.release,
        'image': response.image,
        'download': response.download
    }


display_games = 'display games'


@app.route('/api', methods=['GET', 'POST'])
def index():
    # searched_title = json.loads(request.data)
    # print(searched_title)
    # if searched_title['content'] == "":
    #     print('other success')
    #     return jsonify(*map(info_serializer, Game.query.all()))
    # else:
    #     print('success')
    #     return jsonify(*map(info_serializer, Game.query.filter_by(title=searched_title['content'])))

    if session.get(display_games, None) is None:
        print('other success')
        print(jsonify(*map(info_serializer, Game.query.all())))
        return jsonify(*map(info_serializer, Game.query.all()))
    else:
        search_word = session[display_games]
        session.pop('display games', None)
        print('success')
        searched_for_games_contains = Game.query.filter(
            Game.title.contains(search_word)).all()
        searched_for_games_equivalent = Game.query.filter(
            Game.title.like('%'+search_word+'%')).all()
        searched_for_games = list(dict.fromkeys(
            searched_for_games_contains + searched_for_games_equivalent))
        print(search_word)

        return jsonify(*map(info_serializer, searched_for_games))


@app.route('/api/search', methods=['POST', 'GET'])
def search():
    searched_title = json.loads(request.data)
    session[display_games] = searched_title['content']
    print(session[display_games])
    return {'201': 'todo created successfully'}


@app.route('/api/<int:id>', methods=['POST', 'GET'])
def show(id):
    return jsonify(*map(info_serializer, Game.query.filter_by(id=id)))


if __name__ == '__main__':
    app.run(debug=True)
