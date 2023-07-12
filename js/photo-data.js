let photoRow = document.querySelector('.photo')
let photoTitle = document.querySelector('.photo__title');

function getPhoto({title, url}) {
    return `
    <div class="photo__card">
        <div class="photo__img">
            <img src="${url}" alt="">
        </div>
        <div class="photo__info">
            <p>${title}</p>
        </div>
    </div>
    `
}

let albumId = localStorage.getItem('album');

getDatas(albumId).then(() => {
    console.log(photos);
    photos.forEach((el) => {
        let card = getPhoto(el);
        photoRow.innerHTML += card;
    });
    photoTitle.style.display = 'block';
    loader.style = `opacity: 0;
    z-index: -1;
    display: none`
    document.body.style = `display: block;`
})