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
keep in mind this site: https://www.w3schools.com/cssref/pr_class_visibility.asp
--i can change this property-How?

Once you have the functionality working, feel free to style and structure your address book with CSS and HTML

{
results: [
{
gender: "female",
name: {
title: "Ms",
first: "Ellen",
last: "Hansen",
},
location: {
street: {
number: 792,
name: "Eason Rd",
},
city: "Greeley",
state: "Wyoming",
country: "United States",
postcode: 47226,
},
email: "ellen.hansen@example.com",
dob: { date: "1985-10-22T02:16:37.952Z", age: 36 },
phone: "(865) 404-1228",
cell: "(741) 297-5582",
picture: {
large: "https://randomuser.me/api/portraits/women/57.jpg",
medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg",
},
nat: "US",
},
],
info: { seed: "33885722b1bdb045", results: 1, page: 1, version: "1.4" },
},
