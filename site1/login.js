function login()
{
    //getting the required data from html, trim to remove unnecessary spaces
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    //Sending the data to PHP
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    var matches = postData("loginpage.php", formData);

    //Account no have (Currently on placeholder)
    if (matches == '')
    {
        console.log("account no have");
    }

    //Correct credentials: Returns link + token and redirect
    else
    {
        window.location = matches;
    }
}


// Veri Important function don't touch
// For posting data to php
function postData(url, data)
{
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, false);
    xhr.send(data);
    if (xhr.status === 200)
    {
        var data = xhr.responseText
        return data;
    }
}

function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    if (username.trim() === '' || password.trim() === '') {
        messageElement.textContent = 'Please enter both username and password.';
        messageElement.classList.add('error-message');
    } else {
        // Clear the message element
        messageElement.textContent = '';
        messageElement.classList.remove('error-message');

        // Submit the form data to auth.nsa.php using AJAX or other method
        //Sending the data to PHP
        login();

        
        // fetch('auth.nsa.php', {
        //     method: 'POST',
        //     body: JSON.stringify({ username: username, password: password })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.auth === 'false') {
        //         messageElement.textContent = 'Authentication failure';
        //         messageElement.classList.add('error-message');
        //         document.getElementById('password').value = '';
        //     } else {
        //         // Authentication success
        //         var token = data.token;
        //         var redirectURL = data.redirectURL;

        //         // Store the token in cookies or local storage
        //         // Here's an example using localStorage:
        //         localStorage.setItem('token', token);

        //         // Redirect to the specified URL
        //         window.location.href = redirectURL;
        //     }
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });

    }
}

// Add event listener for Enter key press
document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    usernameInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitForm();
        }
    });
});
