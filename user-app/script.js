
let UserData1 = [];
const fetchUser1 = () => {
  fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results)
      UserData1 =data.results
    })
    console.log(UserData1);    
}
fetchUser1()