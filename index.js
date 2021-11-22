function submitData(username, useremail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
       },
        body: JSON.stringify({
            name: `${username}`,
            email: `${useremail}`,
        })
    })
.then(response => response.json())
.then(function newID(object){
    document.body.innerHTML = object.id
})
.catch (function alertError(error) {
    document.body.innerHTML = error.message
})
}
