
const TOTAL_TAPPE = 10;

function getCompleted(){
  try{
    return JSON.parse(localStorage.getItem('tabi_completed') || '[]');
  }catch(e){
    return [];
  }
}

function saveCompleted(slug){
  const completed = getCompleted();
  if(!completed.includes(slug)){
    completed.push(slug);
    localStorage.setItem('tabi_completed', JSON.stringify(completed));
  }
  return completed;
}

function renderProgress(){
  const progress = document.querySelector('.progress');
  if(!progress) return;
  const completed = getCompleted();
  const n = completed.length;
  progress.textContent = `Tappe completate: ${n}/${TOTAL_TAPPE}`;
}

function answer(btn, ok){
  const box = btn.closest('.quiz');
  if(box.dataset.done === '1') return;

  const buttons = [...box.querySelectorAll('button')];
  buttons.forEach(b => b.disabled = true);

  const result = box.querySelector('.result');

  if(ok){
    btn.classList.add('correct');
    result.textContent = '正解! Seikai! Risposta esatta.';
  }else{
    btn.classList.add('wrong');
    const correctBtn = buttons.find(b => b.dataset.correct === 'true');
    if(correctBtn) correctBtn.classList.add('correct');
    result.textContent = 'Quasi! Guarda la risposta evidenziata.';
  }

  box.dataset.done = '1';

  const slug = document.body.dataset.slug;
  const completed = saveCompleted(slug);

  const complete = box.querySelector('.complete');
  if(complete) complete.classList.add('show');

  const next = document.querySelector('.next-step');
  if(next) next.classList.add('show');

  renderProgress();

  if(completed.length >= TOTAL_TAPPE){
    const finalBox = document.querySelector('.journey-complete');
    if(finalBox) finalBox.classList.add('show');
    if(next) next.classList.remove('show');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProgress();

  const slug = document.body.dataset.slug;
  if(!slug) return;

  const completed = getCompleted();
  if(completed.includes(slug)){
    const complete = document.querySelector('.complete');
    const next = document.querySelector('.next-step');
    if(complete) complete.classList.add('show');
    if(next) next.classList.add('show');
  }

  if(completed.length >= TOTAL_TAPPE){
    const finalBox = document.querySelector('.journey-complete');
    const next = document.querySelector('.next-step');
    if(finalBox) finalBox.classList.add('show');
    if(next) next.classList.remove('show');
  }
});
