const postRow = document.querySelector(".post");


// setTimeout(()=>{
//     loader.style = `opacity: 0;
//     z-index: -1;
//     display: none`
//     document.body.style = `display: block;`
// }, 1000)

window.addEventListener('', () => {
    
})

function getPost({title, body}) {
    return `
    <div class="post__card">
        <h2>${title}</h2>
        <p>${body}</p>
    </div>
    `
}

getDatas(userid).then(() => {
    posts.forEach((post) => {
        let card = getPost(post);
        postRow.innerHTML += card
    });
    loader.style = `opacity: 0;
    z-index: -1;
    display: none`
    document.body.style = `display: block;`
}).catch((err) => {
    console.log(err);
})