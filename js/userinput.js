const username = document.getElementById("username");

/*form.addEventListener("submit", (e) =>{
    if (username.value === "" || username.value === null) {
        alert("User name must not be empty")
    }else{
        ranking.push({name:username.value, score:'Currently playing...'})
    }
    e.preventDefault()
})*/

function getUsername(){
    if (username.value === "" || username.value === null) {
        alert("User name must not be empty");
        return false;
    }else{
        setNewValueToRanking(username.value, 'Currently playing...');
        username.value = "";
        return true;
    }
}