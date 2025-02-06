
// let UserData1 = [];
// const fetchUser1 = () => {
//   fetch("https://randomuser.me/api/?results=24")
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data.results)
//       UserData1 =data.results
//     })
//     // console.log(UserData1);    
// }
// fetchUser1()

let UserData = [];
const fetchUser = async () => {
 await  fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => UserData =data.results)
    console.log(UserData);    
}
const userDisplay = async () =>{
 await fetchUser()
  document.body.innerHTML = UserData.map(
      (user) => 
        ` 
        <div class="card">
          <img src="${user.picture.large}" 
          alt=" La phode de ${user.name.last}"  />
          <h4>${user.name.first} </h4> 
          <p> ${user.location.city} , ${user.dob.date}</p>
          <i> Membre depuis ${user.registered.date} </i>

        </div>
        `
     
  ).join("")
}
userDisplay()
