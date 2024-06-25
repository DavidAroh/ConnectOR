 // Function to navigate to the next page
 function goToNextPage() {
    // Define the URL of the next page
    const nextPageUrl = "./pages/reg.html"; // Update this URL as needed

    // Redirect to the next page
    window.location.href = nextPageUrl;
}

// Set a timer to automatically navigate to the next page after a delay
// Delay time is in milliseconds (e.g., 5000 ms = 5 seconds)
const delayTime = 10000; // Adjust the delay time as needed
setTimeout(goToNextPage, delayTime);