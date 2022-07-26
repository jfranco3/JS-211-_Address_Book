let addressBookArray = [];

//this fn waits for web pg to load. then runs the code inside of the fn
window.onload = function () {
  fetchAddressBook();
};

//make a fetch request to url inside its parameter brackets. then it will turn the response saved here as res. the res.json will not be saved as posts and saved into the variable.
const fetchAddressBook = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((users) => (addressBookArray = users));
};

//console users
const consoleUsers = () => {
  console.log("ARRAY", addressBookArray);
};

const displayUsers = () => {
  //store users in a div
  const allUsers = document.getElementById("user-storage");

  //create list item and another button for each listed item to display extra user info. appends text and button inside it with the posts that were returned in the request.
  addressBookArray.results.map((user) => {
    const li = document.createElement("li");

    let moreInfoButton = document.createElement("button");
    moreInfoButton.innerHTML = "Display More User Info";
    moreInfoButton.addEventListener("click", () => {
      //try--store the data in an object/array to pass through fn. or store each one in variable and pass each through fn
      const li = document.createElement("li");
       let text = document.createTextNode(
        ` AGE: ${user.dob.age}, Location: ${user.location.city}, ${user.location.state}, Phone: ${user.phone}`
      );
      li.appendChild(text);
      allUsers.append(li);

      console.log("THIS IS MORE USER INFO", );
    });
    //.addEventListener inside .map-- create event listener

    const text = document.createTextNode(
      `${user.name.title}. ${user.name.first} ${user.name.last} : `
    );
    const pic = document.createElement("img");
    li.appendChild(text);
    li.appendChild(pic);
    li.appendChild(moreInfoButton);
    pic.setAttribute("src", user.picture.large);
    allUsers.append(li);
  });
};

//suppose to display more user info
// const button = document.querySelector("button");
// button.addEventListener("", () => {
//   const element = document.querySelector(".displayMoreInfo");
//   element.style.display = "none";
// });

// access customer info
// let customerInfo = {cell: results[0].cell, dob: results[0].dob}
// customerInfo.cell
