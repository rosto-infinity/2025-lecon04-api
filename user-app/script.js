
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
    // console.log(UserData);    
}
const userDisplay = async () =>{
 await fetchUser()

 const dateParser = (date) =>{
  const newDate = new Date(date)
  .toLocaleDateString("fr-FR", {
    year : "numeric",
    month : "long",
    day : "numeric",
    hour:"numeric"
  })
  return newDate
 }

 const calDay = (date) =>{
  const today = new Date()
  const todayTimestamp = Date.parse(today)
  
  const timestamp = Date.parse(date)
  // console.log((todayTimestamp - timestamp) /(1000*60*60*24));
  
  return Math.ceil((todayTimestamp - timestamp) /(1000*60*60*24))
 }
  document.body.innerHTML = UserData.map(
      (user) => 
        ` 
        <div class="card">
       
          <img src="${user.picture.large}" 
          alt=" La phode de ${user.name.last}"  />
          <h4>${user.name.first} </h4> 
          <p> ${user.location.city} , ${dateParser(user.dob.date)}</p>
          <i> Membre depuis ${calDay(user.registered.date)} jours </i>

        </div>
        `
     
  ).join("")
}
userDisplay()
