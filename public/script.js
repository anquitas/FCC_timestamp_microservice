// testing
console.log('script working')

function navigate() {
  // get the value
  const userInput = document.getElementById('userInput').value;
  // construct the route to navigate to
  const route = `api/${userInput}`;
  // Simulate navigation
  window.location.href = route;
}

// testing after function run
console.log('script working more')