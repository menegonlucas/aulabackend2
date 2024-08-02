const form = document.querySelector('form');
const errorMsg = document.querySelector('#error-msg');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	
	// Simulate authentication logic here
	// For demonstration purposes, we'll use a simple object to store user credentials
	const users = {
		'user1@example.com': 'password123',
		'user2@example.com': 'password456'
	};
	
	if (users[email] === password) {
		errorMsg.textContent = 'Login successful!';
		// Redirect to dashboard or other protected area
		window.location.href = 'dashboard.html';
	} else {
		errorMsg.textContent = 'Invalid email or password.';
	}
});