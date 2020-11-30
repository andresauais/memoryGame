const username = document.getElementById("username");

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