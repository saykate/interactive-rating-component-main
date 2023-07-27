let yourRating = document.querySelector('.your-rating');
let ratings = document.querySelectorAll('.rating-label');
let submit = document.querySelector('.submit')
let ratingsPage = document.querySelector('.rating-page')
let thanksPage = document.querySelector('.thanks-page')

function getRating(e) {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
    e.target.classList.add('active');
    yourRating.innerText = `You selected ${e.target.textContent} out of 5`;
}

const submitRating = () => {
    thanksPage.classList.remove('hidden');
    ratingsPage.classList.add('hidden');
}


ratings.forEach(rating => {
    rating.addEventListener('click', getRating);
})

submit.addEventListener('click', submitRating)


