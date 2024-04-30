function backLogin() {
    document.getElementById("login").addEventListener("click", (e)=> {
        setTimeout(()=> {
            window.location.href = "index.html"
        }, 500);
        alert("Returning to Login");
    });
}
backLogin();

async function fetchJSON() {
    const response  = (await fetch('/json/freedomWall.json'));
    const data = await response.json();
    let Str = ``;
        let postCount = data.length;
    for(let i = 0; i < postCount; i++){
        Str += 
        `<li>
            <div class="designContainer">
                <div class="userInfo">
                    <div class="Profile-Picture">
                        <img id="userImage${i}" class="picture">
                    </div>
                    <div class="Profile-Post">
                        <p class="userName" id="userName${i}"></p>
                        <p class="userPost" id="userPost${i}"></p>
                    </div>
                </div>  
            </div>
        </li>`
    }
    const postContainer = document.getElementById("PostsList").innerHTML = Str;
    for (let i = 0; i < postCount; i++) {
        let userImage = document.getElementById("userImage" + i).src = data[i].userImage;
        let userName = document.getElementById("userName" + i).innerText = data[i].userName;
        let userPost = document.getElementById("userPost" + i).innerText = data[i].userMessage;
    }
}


fetchJSON();

