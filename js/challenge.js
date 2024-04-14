document.addEventListener('DOMContentLoaded', () => {
    // Timer functionality
    const timerDisplay = document.getElementById('counter');
    let timer = setInterval(() => {
      timerDisplay.textContent = parseInt(timerDisplay.textContent) + 1;
    }, 1000);
  
    // Plus and minus buttons
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    plusButton.addEventListener('click', () => {
      timerDisplay.textContent = parseInt(timerDisplay.textContent) + 1;
    });
    minusButton.addEventListener('click', () => {
      timerDisplay.textContent = parseInt(timerDisplay.textContent) - 1;
    });
  
    // Like functionality
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    const likes = {};
    likeButton.addEventListener('click', () => {
      const currentCount = parseInt(timerDisplay.textContent);
      if (!likes[currentCount]) {
        likes[currentCount] = 0;
      }
      likes[currentCount]++;
      const likeItem = document.createElement('li');
      likeItem.textContent = `${currentCount} has been liked ${likes[currentCount]} times`;
      likesList.appendChild(likeItem);
    });
  
    // Pause functionality
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', () => {
      clearInterval(timer);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.textContent = 'resume';
      pauseButton.id = 'resume';
    });
  
    // Resume functionality
    document.addEventListener('click', event => {
      if (event.target.id === 'resume') {
        timer = setInterval(() => {
          timerDisplay.textContent = parseInt(timerDisplay.textContent) + 1;
        }, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.textContent = 'pause';
        pauseButton.id = 'pause';
      }
    });
  
    // Comment functionality
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('list');
    commentForm.addEventListener('submit', event => {
      event.preventDefault();
      const commentInput = document.getElementById('comment-input');
      const newComment = document.createElement('li');
      newComment.textContent = commentInput.value;
      commentList.appendChild(newComment);
      commentForm.reset();
    });
  });
  