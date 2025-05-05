// script.js

// Add an event listener to the form to handle submission
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get the user input from the search bar
    const userInput = document.getElementById('search-input').value;
  
    if (userInput.trim() === "") {
      alert("Please enter something to search.");
      return;
    }
  
    // Send the user input to your server or API (for simplicity, logging here)
    console.log("User search input:", userInput);
  
    // Send data to a server (in this case, just printing it)
    sendSearchData(userInput);
  });
  
  function sendSearchData(data) {
    // In a real-world scenario, you'd likely send this data to a server or database
    // Here's a simple way to simulate this
    console.log("Sending data:", data);
    alert("Thank you for your search! We'll process your data.");
    
    // Optionally, you can also clear the search bar after submission
    document.getElementById('search-input').value = "";
  }
  