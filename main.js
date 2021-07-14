const likes = document.querySelector('.likes');
const heart = document.querySelector('.heart');
const image = document.querySelector('.img_post');

likes.innerText = "No likes";
let count = 0;

image.addEventListener('dblclick', () => {
    count++; //likes count
    if (count === 1) {
        likes.innerText = count + " like";
    }
    else{
        likes.innerText = count + ' Likes';
    }
    heart.classList.add('animate-like');
    setTimeout(() => {
        heart.classList.remove('animate-like');
    }, 500);
});