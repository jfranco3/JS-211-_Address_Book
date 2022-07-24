window.onload = function () {
  const singleUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((user) => console.log(user));
  };
  singleUser();
};
