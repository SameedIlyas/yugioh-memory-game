
const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = [];
let attemptCount = 0;

function updateAttemptCount() {
    const attemptElement = document.getElementById('attempt-count');
    attemptElement.textContent = attemptCount;
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            attemptCount++;
            updateAttemptCount();

            const [card1, card2] = flippedCards;

            if (card1.querySelector('.card-front img').src === card2.querySelector('.card-front img').src) {
                matchedCards.push(card1, card2);
                flippedCards = [];

                if (matchedCards.length === cards.length) {
                    setTimeout(() => {
                        alert('Congratulations, You are the King of Duelists!');
                    }, 500);
                }
            } else {
                setTimeout(() => {
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    }
}

function shuffleCards() {
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
}

shuffleCards();

cards.forEach(card => card.addEventListener('click', flipCard));

// Initialize attempt count display
updateAttemptCount();

