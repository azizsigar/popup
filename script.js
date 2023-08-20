const openButton = document.getElementById('openButton');
let popup= document.getElementById("popup")


openButton.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);
function openPopup(){
    popup.classList.add("open-popup")
}function closePopup(){
    popup.classList.remove("open-popup")
    popup.classList.add("close-popup");
    setTimeout(function() {
        popup.classList.remove("close-popup");
    }, 400);

}