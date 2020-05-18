document
  .querySelectorAll('.answer-button')
  .forEach(b => b.addEventListener('click', ev => {  
    let answers = ev.target.parentElement.nextElementSibling;
    if (answers.className === 'hide') {
      if (window.confirm('Really show the answers?')) { 
        answers.className = 'show';
      }
    } else {
      answers.className = 'hide';
    }
  }));
