
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('<Te Quiero mucho Brenda❤').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle('<Se que no nos conocemos hace mucho tiempo, pero hay cosas que no necesitan tanto tiempo para sentirlas especiales,y lo que yo siento no es una de esas. Ha sido que llegaras a mi vida y he cambiado la manera de ver muchas cosas. Quisiera invitarte a ser mi San Valentín, a que nos demos la oportunidad de pasar ese dia juntos. No te voy adelantar mucho de ese día, solo quiero verte ese dia sonriendo a mi lado. Quiero que este San Valentín se mas que un día del montón, quiero que se uno que recuerdes con cariño.... ¿Aceptas?') {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
