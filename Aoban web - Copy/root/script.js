document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const userInfo = document.getElementById('user-info');

    // Check if the user is signed in
    const user = JSON.parse(localStorage.getItem('user'));

    if (userInfo) {
        if (user) {
            userInfo.innerHTML = `
                <img src="${user.profilePicture}" alt="Profile Picture" class="profile-pic">
                <p>Welcome, ${user.username}!</p>
            `;
            document.querySelector('.button-container').style.display = 'none';
        } else {
            userInfo.innerHTML = '<p>Please sign up or log in.</p>';
        }
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(signupForm);
            const data = Object.fromEntries(formData.entries());

            // Here, we're using a placeholder profile picture
            data.profilePicture = 'https://via.placeholder.com/150';

            // Save user data to local storage
            localStorage.setItem('user', JSON.stringify(data));

            console.log(data); // Log the form data to the console

            // Simulate a successful signup
            alert('Signup successful!');
            window.location.href = 'index.html'; // Redirect back to the main page
        });
    }
});
