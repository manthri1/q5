document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Regular expressions for validation
    const usernameRegex = /^[a-zA-Z0-9._-]{5,20}$/; // Example: Alphanumeric, 5-20 characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Example: Minimum 8 characters, at least one letter and one number

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username
    if (!usernameRegex.test(username)) {
        document.getElementById('usernameError').textContent = 'Invalid username. Must be 5-20 characters, alphanumeric.';
        event.preventDefault();
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Invalid password. Minimum 8 characters, at least one letter and one number.';
        event.preventDefault();
    }
});
