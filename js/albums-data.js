let albumRow = document.querySelector('.album')
let albumTitle = document.querySelector(".album__title")
function getAlbum({title, id}) {
    return `
    <a href="photos.html" class="album__card" onclick="setImage(${id})">
        <div class="album__img">
            <img src="https://getuikit.com/v2/docs/images/placeholder_600x400_2.svg" alt="">
        </div>
        <div class="album__info">
            <p>${title}</p>
        </div>
    </a>
    `
}

function setImage(id) {
    localStorage.setItem('album', id);
}

getDatas(userid).then(() => {
    albums.forEach((el) => {
        let card = getAlbum(el);
        albumRow.innerHTML += card;
    });
    albumTitle.style.display = 'block';
    loader.style = `opacity: 0;
    z-index: -1;
    display: none`
    document.body.style = `display: block;`
    console.log(albums);
    console.log(photos);
})