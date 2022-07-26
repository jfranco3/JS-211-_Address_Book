# JS-211-\_Address_Book

Read these instructions and understand the requirements FIRST
Whiteboard your app
Make a code plan
Pseudo code and then translate to JavaScript
Create a new repo (name it descriptively well), clone it to your local machine and share it with your partner
Open the directory and create an index.html and main.js file to fetch a user and display them one at at time

Use the API: https://randomuser.me/api/ to fetch a user now
EXample:
const singleUser = () => {
fetch("https://randomuser.me/api/")
.then((res) => res.json())
.then((user) => console.log(user));
};

Fetch a new user multiple times and store them in an array
--link does this for me below

Then list out all the users in your address book array by name and picture
--loop through the objects

Figure out how to fetch multiple users in one fetch request
--from the doc, it says to use a query string
https://randomuser.me/api/?results=20

Fetch multiple users on window load
--window.onload call the main function

Add a button to each user that when clicked displays the rest of their information like DOB, address and so forth
--create html button css visible property
keep in mind this site: https://www.w3schools.com/cssref/pr_class_visibility.asp  --- display: none
--i can change this property via JS-how?

Once you have the functionality working, feel free to style and structure your address book with CSS and HTML