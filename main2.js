let addressBookArray = [];

//this fn waits for web pg to load. then runs the code inside of the fn
window.onload = function () {
  fetchAddressBook();
};

//make a fetch request to url inside its parameter brackets. 
then it will turn the response saved here as res. the res.json will not be saved as posts and saved into the variable.
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

  //.map then create li, text, pic to display each user info. create button to display more user info. Append all to all users.
  addressBookArray.results.map((user) => {   
    const li = document.createElement("li");
    const text = document.createTextNode(
      `${user.name.title}. ${user.name.first} ${user.name.last} : `
    );
    const pic = document.createElement("img");
    const moreInfoButton = document.createElement("button");
    moreInfoButton.innerHTML = "Display More User Info";
    li.appendChild(text);
    li.appendChild(pic);
    li.appendChild(moreInfoButton);
    pic.setAttribute("src", user.picture.large);
    allUsers.append(li);

  //add event listener, create li and text to display more user info with moreInfoButton. append text to li then append to allUsers.
    moreInfoButton.addEventListener("click", () => {
      const li = document.createElement("li");
      const text = document.createTextNode(
        ` AGE: ${user.dob.age}; Location: ${user.location.city}, ${user.location.state}; Phone: ${user.phone}`
      );
      li.appendChild(text);
      allUsers.append(li);
    });
  });
};
