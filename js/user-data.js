let userHome = document.querySelector('.home');


function getUser({name, email, id}) {
    return `
    <div class="home__card">
        <div class="home__card__img">
            <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="">
        </div>
        <div class="home__card__info">
            <h4>${name}</h4>
            <p>${email}</p>   
        </div>                    
        <div class="home__card__links">
            <a href="posts.html" class="link__item" onclick="setToMemory(${id})">
                <i class="fa-solid fa-newspaper"></i>
                <p>Posts</p>
            </a>
            <a href="album.html" class="link__item" onclick="setToMemory(${id})">
                <i class="fa-solid fa-image"></i>
                <p>albums</p>
            </a>
            <a href="todo.html" class="link__item" onclick="setToMemory(${id})">
                <i class="fa-solid fa-list"></i>
                <p>todos</p>
            </a>
        </div>
        <div class="home__card__btn">
            <button onclick="buttonControl(this)">Follow</button>
        </div>  
    </div>
    `
}

function setToMemory(id) {
    localStorage.setItem('userPost', id)   
}

function buttonControl(btn) {
    btn.classList.toggle("followed");
    if (btn.innerHTML == 'Follow') {
        btn.innerHTML = 'Unfollow'
    }else {
        btn.innerHTML = 'Follow'
    }
}


getDatas().then(() => {
    users.forEach((user) => {
        let card = getUser(user);
        userHome.innerHTML += card
    });
    loader.style = `opacity: 0;
    z-index: -1;
    display: none`
    document.body.style = `display: block;`
}).catch((err) => {
    console.log(err);
});

