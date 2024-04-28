const url = 'https://jsonplaceholder.typicode.com/photos';
const gridContainer = document.getElementById("imagesContainer");

function load() {
    fetch(url).then((response)=> {
        response.ok ? response.json()
        .then((photos)=> {
            let Str = '';
            const ItemCount = 100;

            for (let i = 0; i < ItemCount; i++){
                Str += 
                `<li>
                    <div class="outerContainer">
                        <div class="containerDesign" id="eventListener${i}">
                            <div class="ImageContainer">
                                <img class="mainImage" id="photoImage${i}">
                            </div>
                        </div>
                        <div class="detailsContainer">
                            <p class="detainsContainer1" id="photoContent${i}">lorem ipsum delor sit amet.</p>
                        </div> 
                    </div>
                </li>`;
            }
            gridContainer.innerHTML = Str;
            for (let i = 0; i < ItemCount; i++) {
                let photoImageID = "photoImage" + i;
                let photoContentID = "photoContent" + i;
                let photoInsert = document.getElementById(photoImageID);
                let contentInsert = document.getElementById(photoContentID);
                let photosFromJSON = photos[i].url;
                photoInsert.src = photosFromJSON;
                let titleFromJSON = photos[i].title;
                let titleInsert = titleFromJSON.split(" ").slice(0,3).join(" ");
                contentInsert.innerText = titleInsert;
            }

            for (let i = 0; i < ItemCount; i++) {
                let eventListener = "eventListener" + i;
                let eventListenerID = document.getElementById(eventListener);
                eventListenerID.addEventListener("click", (e)=> {
                    e.preventDefault();
                    setTimeout(()=> {
                        const scrollTop = () => {
                            const scrollPos = window.pageYOffset;
                            if (scrollPos > 0) {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }
                        }; 
                        scrollTop();                 
                    }, 200);

                    const FloatingContainer = document.getElementById("MainFloatingContainer");
                    FloatingContainer.style.display = "inline";

                    const fullTitle = document.getElementById("fullTitle").innerText = photos[i].title;
                    const AlbumID = document.getElementById("AlbumID").innerText = "Album No. " + photos[i].albumId;
                    const PhotoID = document.getElementById("PhotoID").innerText = "Photo No. " + photos[i].id;
                    const PopupImage = document.getElementById("PopupImage").src = photos[i].url;

                    const PopupButton = document.getElementById("PopupButton");
                    PopupButton.addEventListener("click", ()=> {
                    FloatingContainer.style.display = "none";
            });
                });
            }
            
        }):pass
    })
}

load();
function backLogin() {
    document.getElementById("login").addEventListener("click", (e)=> {
        setTimeout(()=> {
            window.location.href = "login.html"
        }, 500)
        alert("Returning to Login");
    });
}

backLogin();