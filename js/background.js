function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

let menu_btn = document.querySelector(".nav-button")
let menu = document.querySelector(".navbar-nav")

menu_btn.addEventListener("click", e => {
    menu.classList.toggle("nav-open")
})

if (!isMobile()) {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/js/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    let galleryItems = document.querySelectorAll(".gallery-item")
    let galleryItemsArray = [...galleryItems]
    let customModal = document.querySelector(".custom-modal")
    let customModalImageContainer = document.querySelector(".custom-modal-image-container")

    function openModal(image_url) {
        customModal.classList.toggle("custom-modal-open")
        customModalImageContainer.innerHTML = `<img class="custom-modal-image" src="${image_url}"/>`
    }

    customModal.addEventListener("click", e => {
        class_list = [...e.target.classList]
        if (class_list.includes("custom-modal-image")) return;
        customModal.classList.toggle("custom-modal-open")
    })

    galleryItemsArray.forEach(item => {
        item.addEventListener("click", e => {
            imgUrl = e.target.firstElementChild.src
            openModal(imgUrl)
        })
    })
}