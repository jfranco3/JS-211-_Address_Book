let addressBookArray = [];

//make a fetch request to url inside its parameter brackets. then it will turn the response saved here as res. the res.json will not be saved as posts and saved into the variable
const fetchAddressBook = () => {
  fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((users) => (addressBookArray = users));
  console.log("ARRAY", addressBookArray);
};

//fetch the users
fetchAddressBook();

const DisplayUsers = () => {
//store them in a div
  const allUsers = document.getElementById("storage");

//create list item and another button for each listed item to display extra user info
  addressBookArray.results.map((user, index) => {
    const li = document.createElement("li");

    const button = document.createElement("button");
    button.innerHTML = "Display Users Info";

    const text = document.createTextNode(
      `${user.name.first}, ${user.name.last}, `
    );
    const pic = document.createElement("img");
    li.appendChild(text);
    li.appendChild(pic);
    li.appendChild(button);
    pic.setAttribute("src", user.picture.large);
    allUsers.append(li);
  });
};

// const addressBook = () => {
//     //fetch and cconsole log to make sure its ok
//     fetch("https://randomuser.me/api/")
//     .then(response => { console.log(response)
//         if(!response.ok) {
//             throw Error('ERROR')
//         }
//         return response.json()
//     })
//     //console log the data
//   .then(data => {
//     console.log(data.results);
//     //create a varaible by
//     const displayContactsToHTML = data.results.map(user => {
//         return `

//access customer info
// let customerInfo = {cell: results[0].cell, dob: results[0].dob}
// customerInfo.cell
