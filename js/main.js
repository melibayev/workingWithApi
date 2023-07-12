var users;
var posts;
var todos;
var albums;
var photos;
const loader = document.querySelector('.loader');

class ErrorResponse extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}

function getData(url) {
    return new Promise ((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        
        xhr.timeout = 10000;

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let data = JSON.parse(xhr.response);
                resolve(data);
            }else if (xhr.readyState === 4) {
                let err = new ErrorResponse(xhr.status, "invalid response");
                reject(err);
            }
        };

        xhr.open('GET', url);
        xhr.send();
    });
}


let userid = localStorage.getItem('userPost') || ''

const getDatas = async (id) => {
    try {
      users = await getData("https://jsonplaceholder.typicode.com/users");
      posts = await getData(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      todos = await getData(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
      albums = await getData(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
      photos = await getData(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
    //   console.log(users);
    //   console.log(posts);
    //   console.log(todos);
    //   console.log(albums);
    //   console.log(photos);
    } catch (err) {
      console.log(err);
    }
  };
  

