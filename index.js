let yourRating = document.querySelector('.your-rating');
let ratings = document.querySelectorAll('.rating-label');
let submit = document.querySelector('.submit')
let ratingsPage = document.querySelector('.rating-page')
let thanksPage = document.querySelector('.thanks-page')

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        yourRating.innerText = `You selected ${rating.textContent} out of 5`;
        rating.classList.add('active')
    })
})

const submitRating = () => {
    thanksPage.classList.add('visible');
    ratingsPage.classList.add('hidden');
}

submit.addEventListener('click', submitRating)


