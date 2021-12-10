# **GameBud**

GameBud is a Flask-React web application that serves as a free-to-play game database. With hundreds of games, its a great way to find your next game on a budget.
Games can be searched for by keyword, and you can view each game's information. Additionally, a link to download each game is provided. The site uses React.js on the frontend and Flask on the backend. 

### **Technologies Used:**
- Python (Flask, sqlalchemy)
- JavaScript (React.js)
- HTML
- CSS (Flexbox)
- Free2Game API

### **Walkthrough**

1. The home page allows you to browse for games

![Screen Shot 2021-12-10 at 5 49 31 PM](https://user-images.githubusercontent.com/52982928/145651028-a92477d5-4013-4b13-b184-47a4efd9be7a.png)

2. Search for games via keyword (e.g. "War")

![Screen Shot 2021-12-10 at 5 53 48 PM](https://user-images.githubusercontent.com/52982928/145651296-eeb8d39e-a133-43a9-a8ae-ca82b9a46d0d.png)

3. View a game information (e.g. platform)

![Screen Shot 2021-12-10 at 5 59 39 PM](https://user-images.githubusercontent.com/52982928/145651765-3483f63f-d9ff-4182-9eb3-1e747471f97a.png)

4. Use the download link

![Screen Shot 2021-12-10 at 6 00 07 PM](https://user-images.githubusercontent.com/52982928/145651796-5d9ea889-35fc-4627-9cf6-1ce3dc4591c4.png)


### **Usage**
1. Ensure you have all the used technologies installed

2. Clone the repository locally
```
$ git clone https://github.com/Visheshss/GameBud.git
```
2. Navigate to GameBud
```
$ cd GameBud
```
3. Install the required dependencies
```
$ npm install
```
4. Navigate to the Flask application 
```
$ cd api
```
5. Set the Flask App 
```
$ export FLASK_APP=api.py
```
6. Start the Flask backend
```
$ flask run 
```
7. Open another command line and navigate to the main directory
```
$ cd GameBud
```
8. Launch the React frontend
```
$ npm start
```
