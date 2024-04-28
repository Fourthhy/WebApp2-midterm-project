document.addEventListener("DOMContentLoaded", function() {
    const URLParams = new URLSearchParams(window.location.search);
    const postID = URLParams.get("id");

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(response => response.json())
    .then(post => {
        const postContainer = document.getElementById("PostsList");
        postContainer.innerHTML = 
        `<li>
            <div class="designContainer">
                <div class="userInfo" id="userInfo">
                    <div class="Profile-Picture">
                        <img id="userImage" class="picture">
                    </div>
                    <div class="Profile-Post">
                        <p class="userName" id="userName"></p>
                        <p class="userPost userTitle" id="userTitle"></p>
                        <p class="userPost" id="userPost"></p>
                    </div>
                </div>  
            </div>
        </li>`;
        const src = URLParams.get("src").replace('', );
        const img = document.getElementById("userImage").src = URLParams.get(`src`);

        const name = URLParams.get("name");
        const nameHolder = document.getElementById("userName").innerText = name;

        const Title = post.title;
        const TitleHolder = document.getElementById("userTitle").innerText = Title;

        const Body = post.body;
        const bodyHolder = document.getElementById("userPost").innerText = Body;
    })
});

function backLogin() {
    document.getElementById("login").addEventListener("click", (e)=> {
        setTimeout(()=> {
            window.location.href = "login.html"
        }, 500);
        alert("Returning to Login");
    });
}
backLogin();