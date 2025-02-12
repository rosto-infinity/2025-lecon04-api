const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      displayUsers(users);
  };
  
  const displayUsers = (users) => {
      const userList = document.getElementById("user-list");
      userList.innerHTML = users.map(user => `
          <div>
              <h4>${user.name}</h4>
              <p>Email: ${user.email}</p>
              <p>Téléphone: ${user.phone}</p>
          </div>
      `).join("");
  };
  
  fetchUsers();