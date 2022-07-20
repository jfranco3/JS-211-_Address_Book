//call window.onload main fxn
window.onload = function () {
let addressBookArray = []

    const fetchAddressBook = () => {
        fetch("https://randomuser.me/api/?results=20")
            .then((res) => res.json())
            .then((users) => {
                console.log("USERS", users)
                addressBookArray.push(users)
                console.log("ARRAY", addressBookArray)
            });
    }
    
    
    fetchAddressBook() 
}



//listing users by name and pic
//take address array and find a way to make display this info
// [{name:'name', picture:'picture'}, {name:'name2', picture:'picture2'},]



//fetch data


//pick the fields I want to show
//format ONE user on how i want to display the return



//use the todo list project for hints on structure



//once i have one working, wrap it in a loop and use the index to display what multiple address (set by the query string in the fetch)



//button visibility


//testing how id write interpolated string to return in my main fxn

// let userInfo = `<h3>${name.first}, ${name.last}</h3>`
// //cant use node main.js because this isnt a node project
// console.log(userInfo)


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
        
//         interpolated sring with each entry
//         ;`
//     }

//   ).join('')
//   //joins it together
 
//   //console.log(displayContactsToHtml)

//   document
//   .getElementById('displayContacts')
//   .insertAdjacentHTMO('afterend', displayContactsToHTML)
// }


//access customer info
// let customerInfo = {cell: results[0].cell, dob: results[0].dob}
// customerInfo.cell