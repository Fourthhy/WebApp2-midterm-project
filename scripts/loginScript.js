const url = "https://jsonplaceholder.typicode.com/users";

const form = document.getElementById('Form');
const button = form.querySelector('button');
const Prompt = document.getElementById('Prompt');
button.addEventListener('click', (e)=> {
    e.preventDefault();
    fetch(url).then((response) => {
        response.ok ? response.json()
        .then((users)=> {
            for (let i = 0; i < users.length; i++){
                const username = document.getElementById('username');
                const password = document.getElementById('password');
                if (username.value === users[i].username) {
                    if (password.value === "PathFinder") {
                        Prompt.innerText = "User Found";    
                        console.log("Succeeded");
                        setTimeout(()=> {
                            window.location.href = "Image-path.html";
                        }, 1000);
                        
                        break;
                    } else {
                        Prompt.innerText = "Wrong Password";
                        console.log("Wrong Password");
                        break;
                    }
                } else {
                    Prompt.innerText = "No User";
                    console.log("No User");
                }
            }
            setTimeout(()=> {
                Prompt.innerText = "PathFinder";
            }, 2000);
        }):pass
    });
})