from flask import Flask, app, jsonify, request, json, make_response
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


@app.route('/api', methods=['GET', 'POST'])
def index():
    response = requests.get(
        'https://www.freetogame.com/api/games').json()
    for i in response:
        game = Game(gameID=i['id'], title=i['title'],
                    publisher=i['publisher'], developer=i['developer'],
                    description=i['short_description'], genre=i['genre'], platform=i['platform'],
                    release=i['release_date'], image=i['thumbnail'], download=i['game_url'])
        db.session.add(game)
        db.session.commit()

    # n = 0
    # array = {}
    # for i in range(10):
    #     game = (requests.get('https://www.freetogame.com/api/game?id=' + str(i+1))).json()
    #     if jsonify(game['status']) == 0:
    #         return 'no'
    #     else:
    #         description = jsonify(game["status"])
    #         array[i] = [description]
        # response[n].update( {"description":description} )
        # response[n].update( {"requirements":jsonify(game["minimum_system_requirements"])} )
        # n += 1

    # return jsonify(response)

    return jsonify(*map(info_serializer, Game.query.all()))
    # length is 364, but there are 513 games


@app.route('/api/<int:id>')
def show(id):
    return jsonify(*map(info_serializer, Game.query.filter_by(id=id)))


if __name__ == '__main__':
    app.run(debug=True)
