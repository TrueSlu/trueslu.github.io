window.addEventListener('load', () => {
    const puppetUserCount = document.getElementById("puppetUserCount");
    fetch("http://localhost:8090/api/users", {
        method: "POST",
    }).then((response) => {
        response.json().then((res) => {
            console.log(res.users);
            puppetUserCount.textContent = res.users;
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    });
}, false);