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
    // window.location = "landingpage.html";
    console.log("true");
}
else if (matches == "")
{
    localStorage.setItem("token", "");
    //window.location = "loginpage.html";
    console.log("false");
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