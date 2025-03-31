
![image](https://github.com/user-attachments/assets/984fc0e2-3433-4191-bc61-060822873e4d)


https://kanban-board-challenge-14-wvp7.onrender.com

login information:
username: 'JollyGuru', password: 'password'
username: 'SunnyScribe', password: 'password'
username: 'RadiantComet', password: 'password'

GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid username and password
THEN I am authenticated using JSON Web Tokens (JWT) and redirected to the main Kanban board page
WHEN I enter an invalid username or password
THEN I am presented with an error message indicating that the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored securely in the client's local storage for subsequent authenticated requests
WHEN I log out
THEN the JWT is removed from the client's local storage and I am redirected to the login page
WHEN I try to access the Kanban board page without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action

