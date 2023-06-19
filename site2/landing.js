const token = localStorage.getItem("token");

let formData = new FormData();
formData.append("token", token);
var matches = postData("verifytoken.php", formData);
console.log(matches);
// Auth fail
if (matches == "")
{
    localStorage.setItem("token","");
    window.location.href = "http://login.nsagroup14.com";
    console.log("fail");
}
else console.log("pass");

//Auth correct (do nothing)

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

// logout function removes token from localstorage
function logout()
{
    localStorage.setItem("token","");
}