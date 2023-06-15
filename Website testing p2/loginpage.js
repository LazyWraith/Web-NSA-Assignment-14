function login()
{
    //getting the required data from html, trim to remove unnecessary spaces
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();

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
        console.log(data);
        return data;
    }
}