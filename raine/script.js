const confessionText = document.getElementById('confession-text');
const confessionMessage = document.getElementById('confession-message');
const revealButton = document.getElementById('reveal-button');

revealButton.addEventListener('click', () => {
  confessionMessage.innerHTML = `
    I must confess, I've had feelings for you. 
    Your [smile/laugh/eyes] brighten up my day, and I can't help but think of you whenever we're apart. 
    I know this might come as a surprise, but I wanted to be honest about my feelings. 
    Will you consider being more than just friends?
  `;
  confessionText.innerHTML = `Dear Raine,`;
  revealButton.disabled = true;
});
