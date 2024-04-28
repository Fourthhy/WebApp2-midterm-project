document.addEventListener("DOMContentLoaded", ()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> {
        response.ok ? response.json()
        .then((posts)=> {
            const postContainer = document.getElementById("PostsList");
            const postCount = 100;
            let Str = ``;
            for(let i = 0; i < postCount; i++){
                Str += 
                `<li>
                    <div class="designContainer">
                        <div class="userInfo" id="userInfo${i}">
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
            postContainer.innerHTML = Str;
            for(let i = 0; i < postCount; i++){
                let userImage = document.getElementById("userImage" + i);
                let userName = document.getElementById("userName" + i);
                if(i < 11) {
                    userImage.src = "https://owobotcdn.com/background/71.png";
                    userName.innerText = "@Not_Nemo"
                } else if ( i > 10 && i < 21) { 
                    userImage.src = "https://owobotcdn.com/background/73.png";
                    userName.innerText = "@AWhiteDog"
                } else if ( i > 20 && i < 31) {
                    userImage.src = "https://owobotcdn.com/background/67.png";
                    userName.innerText = "@GigaTexel_Shader"
                } else if ( i > 30 && i < 41) {
                    userImage.src = "https://owobotcdn.com/background/68.png";
                    userName.innerText = "@AWildFox"
                } else if ( i > 40 && i < 51) {
                    userImage.src = "https://owobotcdn.com/background/50.png";
                    userName.innerText = "@Blue-bird"
                } else if ( i > 50 && i < 61) {
                    userImage.src = "https://owobotcdn.com/background/57.png";
                    userName.innerText = "@HewwoWord"
                } else if ( i > 60 && i < 71) {
                    userImage.src = "https://owobotcdn.com/background/58.png";
                    userName.innerText = "@Gojo_CAToro"
                } else if ( i > 70 && i < 81) {
                    userImage.src = "https://owobotcdn.com/background/11.png";
                    userName.innerText = "@Witch-Cat"
                } else if ( i > 80 && i < 91) {
                    userImage.src = "https://owobotcdn.com/background/34.png";
                    userName.innerText = "@ChillDudex"
                } else if ( i === 27 ) {
                    document.getElementById("userPost" + i).innerText = "Miss na kita";
                } else {
                    userImage.src = "https://owobotcdn.com/background/32.png";
                    userName.innerText = "@BearBareBear"
                }
                let userPost = "userPost" + i;
                let UserPost = document.getElementById(userPost);
                UserPost.innerText = posts[i].title
                if (i === 27) {
                    UserPost.innerText = "Miss na kita";
                }   
                let postItem = document.getElementById("userInfo" + i);
                postItem.setAttribute("data-id", posts[i].id);
                postItem.addEventListener("click", ()=> {
                    const id = postItem.getAttribute("data-id");
                    const name = document.getElementById("userName" + i).innerText;
                    const src = document.getElementById("userImage" + i).src;
                    window.location.href = `post.html?id=${id}&name=${name}&src=${src}`;
                });
            }
        }):pass
    })
});

function backLogin() {
    document.getElementById("login").addEventListener("click", (e)=> {
        setTimeout(()=> {
            window.location.href = "index.html"
        }, 500);
        alert("Returning to Login");
    });
}
backLogin();
