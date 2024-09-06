
console.log('script working')
function navigate() {
  // Get the value from the input field
  const userInput = document.getElementById('userInput').value;

  // Construct the route you want to navigate to
  const route = `api/${userInput}`;

  // Simulate navigation by redirecting the page (or you can use a router if using a framework)
  window.location.href = route;
}


console.log('script working more')