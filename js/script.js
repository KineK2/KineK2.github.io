// document.getElementById("btn-login").addEventListener("click",()=>{
//     window.open("login.html")
// });
// document.getElementById("btn-login").addEventListener("click",()=>{
//     window.open("reg.html")
// });



var char1 = document.getElementById("view-acc-with-id");
var char2 = document.getElementById("list-acc");
var id = document.getElementById("id-search").value;
var s = "";
function search() {
    s = document.getElementById(id).outerHTML;
    alert(s);
}