document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
  
    // Check if the credentials are correct (replace this with your authentication logic)
    if (userId === "user123" && password === "pass123") {
      // Redirect to a separate page
      window.location.href ="welcome.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
  