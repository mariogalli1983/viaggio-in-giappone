
function checkAnswer(btn, isCorrect){
  const box = btn.closest('.quiz');
  const result = box.querySelector('.result');
  box.querySelectorAll('button').forEach(b => b.disabled = true);
  if(isCorrect){
    result.textContent = '🎉 正解! Seikai! Risposta esatta!';
  }else{
    result.textContent = 'Quasi! La risposta giusta è: ' + box.dataset.correctText;
  }
}
