const cards = document.querySelectorAll('.cardyBox');
let moves = 0, firstCard = null, secondCard = null, lockBoard = false;
const emojis = ['😺', '😺', '🐶', '🐶', '🐰', '🐰', '🦁', '🦁', '🐻', '🐻', '🐼', '🐼', '🐷', '🐷', '🐸', '🐸'];

const shuffleEmojis = () => emojis.sort(() => Math.random() - 0.5);

const startGame = () => {
  shuffleEmojis();
  moves = 0;
  document.querySelector('#movesCounterBox').innerHTML = `Moves: ${moves}`;
  cards.forEach((card, i) => {
    card.querySelector('.insidePart').textContent = emojis[i];
    card.classList.add('flipped');
    card.querySelector('.insidePart').style.visibility = 'hidden';
    card.addEventListener('click', flipCard);
  });
};

const flipCard = ({target: card}) => {
  if (lockBoard || !card.classList.contains('cardyBox') || (!firstCard && !card.classList.contains('flipped'))) return;
  
  const inside = card.querySelector('.insidePart');
  
  if (card === firstCard && !card.classList.contains('flipped')) {
    card.classList.add('flipped');
    inside.style.visibility = 'hidden';
    firstCard = null;
    return;
  }
  
  if (!card.classList.contains('flipped')) return;

  card.classList.remove('flipped');
  inside.style.visibility = 'visible';

  if (!firstCard) return (firstCard = card);
  
  secondCard = card;
  moves++;
  document.querySelector('#movesCounterBox').innerHTML = `Moves: ${moves}`;
  checkMatch();
};

const checkMatch = () => {
  lockBoard = true;
  const [firstEmoji, secondEmoji] = [firstCard, secondCard].map(c => c.querySelector('.insidePart').textContent);
  
  if (firstEmoji === secondEmoji) {
    [firstCard, secondCard].forEach(c => c.removeEventListener('click', flipCard));
    resetBoard();
  } else {
    setTimeout(() => {
      [firstCard, secondCard].forEach(c => {
        c.classList.add('flipped');
        c.querySelector('.insidePart').style.visibility = 'hidden';
      });
      resetBoard();
    }, 1000);
  }
};

const resetBoard = () => {
  [firstCard, secondCard, lockBoard] = [null, null, false];
};

document.querySelector('#startOverBtn').addEventListener('click', startGame);

startGame();