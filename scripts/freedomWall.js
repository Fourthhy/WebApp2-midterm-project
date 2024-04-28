function backLogin() {
    document.getElementById("login").addEventListener("click", (e)=> {
        setTimeout(()=> {
            window.location.href = "login.html"
        }, 500);
        alert("Returning to Login");
    });
}
backLogin();

function post() {
    fetch("/json/freedomWall.json").then((posts)=> {
        
    
    for (let i = 0; i < postCount; i++) {
        let imageHolder = document.getElementById("userImage" + i);
        console.log(posts[i].userName);
        // imageHolder.src = posts[i].userImage;
    }
    }).catch(err => console.log(err));
}

async function fetchJSON() {
    const response  = (await fetch('/json/freedomWall.json'));
    const data = await response.json();
    let Str = ``;
        let postCount = 40;
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

