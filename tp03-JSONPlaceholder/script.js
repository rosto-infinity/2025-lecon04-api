// const fetchUsers = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await response.json();
//       displayUsers(users);
//   };
  
//   const displayUsers = (users) => {
//       const userList = document.getElementById("user-list");
//       userList.innerHTML = users.map(user => `
//           <div>
//               <h4>${user.name}</h4>
//               <p>Email: ${user.email}</p>
//               <p>Téléphone: ${user.phone}</p>
//           </div>
//       `).join("");
//   };
  
//   fetchUsers();

const usersPerPage = 3; // Nombre d'utilisateurs par page
let currentPage = 1;
let users = [];

const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await response.json();
    displayUsers();
};

const displayUsers = () => {
    const userList = document.getElementById("user-list");
    const pagination = document.getElementById("pagination");
    userList.innerHTML = "";

    const start = (currentPage - 1) * usersPerPage;
    const end = start + usersPerPage;
    const usersToDisplay = users.slice(start, end);

    usersToDisplay.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h4>${user.name}</h4>
            <p>Email: ${user.email}</p>
            <p>Téléphone: ${user.phone}</p>
        `;
        userList.appendChild(userDiv);
    });

    updatePagination();
};

const updatePagination = () => {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(users.length / usersPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add("page-btn");
        if (i === currentPage) button.classList.add("active");
        button.addEventListener("click", () => {
            currentPage = i;
            displayUsers();
        });
        pagination.appendChild(button);
    }
};

fetchUsers();
