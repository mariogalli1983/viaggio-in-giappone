
function answer(btn,ok){
 const box=btn.closest('.quiz'); if(box.dataset.done==='1')return;
 const buttons=[...box.querySelectorAll('button')]; buttons.forEach(b=>b.disabled=true);
 const result=box.querySelector('.result');
 if(ok){btn.classList.add('correct');result.textContent='正解! Seikai! Risposta esatta.'}
 else{btn.classList.add('wrong');buttons[0].classList.add('correct');result.textContent='Quasi! Guarda la risposta evidenziata.'}
 box.dataset.done='1'; box.querySelector('.complete').classList.add('show');
}
