// Static user data to simulate a JSON file. You can replace this with an actual API or JSON fetch.
const users = {
    "user1": "123987",
    "user2": "mypassword"
};

// Function to authenticate user
function authenticate(username, password) {
    return users[username] === password;
}

// Form submission handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginStatus = document.getElementById("login-status");

    // Authenticate user
    if (authenticate(username, password)) {
        loginStatus.style.color = "green";
        loginStatus.innerText = "Login Successful!";
        window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
        loginStatus.innerText = "Username or Password is incorrect!";
    }
});
fetch("users.json")
    .then(response => response.json())
    .then(data => {
        const users = data;

        // Form submission handling
        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const loginStatus = document.getElementById("login-status");

            if (users[username] === password) {
                loginStatus.style.color = "green";
                loginStatus.innerText = "Login Successful!";
                window.location.href = "dashboard.html";
            } else {
                loginStatus.innerText = "Username or Password is incorrect!";
            }
            console.log("Script.js berhasil diload");

        });
    });

// Function to load and display data
async function loadAboutData() {
    try {
        // Fetch data from the JSON file
        const response = await fetch('project.json'); // Adjust path if needed
        if (!response.ok) throw new Error("Failed to fetch About data.");

        const data = await response.json();

        // Update title and description (if any)
        document.getElementById('about-title').textContent = data.title || "About Us";
        document.getElementById('about-description').textContent = data.description || "Meet our team members";

        // Display team members
        const teamList = document.getElementById('team-list');
        data.tutors.forEach(member => {
            // Create and add member elements
            const memberElement = createMemberElement(member);
            teamList.appendChild(memberElement);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}
// About.js

fetch('project.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const teamList = document.getElementById('team-list');
    data.teamMembers.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('team-member');
      memberDiv.innerHTML = `<h4>${member.name}</h4><p>${member.role}</p>`;
      teamList.appendChild(memberDiv);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
