const url = window.location.search;
const urlParams = new URLSearchParams(url);
const token = urlParams.get("token");

localStorage.setItem("token", token);
let formData = new FormData();
formData.append("token", token);
var matches = postData("verifytoken.php", formData);
console.log(matches);
if (matches == "true")
{
    window.location.replace("account.nsagroup14.com/landing.html");
    console.log("true");
}
else if (matches == "")
{
    localStorage.setItem("token", "");
    console.log("false");
    window.location.replace("login.nsagroup14.com");
}

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