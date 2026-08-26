
function checkAnswer(btn, isCorrect){
  const box = btn.closest('.quiz');
  if(box.dataset.done === '1') return;
  const result = box.querySelector('.result');
  const buttons = [...box.querySelectorAll('button')];
  const correctText = box.dataset.correctText;
  buttons.forEach(b => b.disabled = true);

  if(isCorrect){
    btn.classList.add('correct');
    result.textContent = '正解! Seikai! Risposta esatta.';
  }else{
    btn.classList.add('wrong');
    const correctBtn = buttons.find(b => b.textContent.trim() === correctText);
    if(correctBtn) correctBtn.classList.add('correct');
    result.textContent = 'Quasi! La risposta giusta è: ' + correctText + '.';
  }
  box.dataset.done = '1';
  const complete = document.querySelector('.complete');
  if(complete) complete.classList.add('show');
}
