document.addEventListener("DOMContentLoaded", function(){
    fetchUsers();
})
let users=[];
async function fetchUsers(){
    const response=await fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME");
    users=await response.json();
    renderUsers();
}

function renderUsers(){
    const userList=document.getElementById("userList");
    userList.innerHTML="";
    users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${index + 1}</td>
        <td style="color:blue">${user.id}</td>
        <td style="color:blue">${user.url}</td>
        <td><img style="width:200px; height:100px" src="`+user.url+`"></td>`
        userList.appendChild(row);
    });
}