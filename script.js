let flippedCards = [];
let score = 0;

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const img1 = flippedCards[0].querySelector('.card_back img').src;
    const img2 = flippedCards[1].querySelector('.card_back img').src;

    if (img1 === img2) {
     
        score += 1;
        console.log(score);
        document.getElementById('score').textContent = score;
        flippedCards = [];
    } else {
       
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flipped'));
            flippedCards = [];
        }, 1000);
    }
}

function shuffleCards() {
    const gridContainer = document.querySelector('.grid_container');
    const cards = Array.from(gridContainer.children);

    const shuffledCards = cards.sort(() => Math.random() - 0.5);

    gridContainer.innerHTML = '';
    shuffledCards.forEach(card => gridContainer.appendChild(card));
}

function restart() {
    console.log('Restarting game...');
    score = 0;
    document.getElementById('score').textContent = score;
    const cards = document.querySelectorAll('.card');
    console.log('Cards found:', cards.length);
    cards.forEach(card => {
        console.log('Removing flipped class from card');
        card.classList.remove('flipped');
    });
    shuffleCards(); 
}

