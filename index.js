const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('Sabía que dirías que sí y, otra vez, no fue obligado :3 xdxdxdxd\n\n' +
    'Bueno, ¡felices 3 años, amor! :3\n' +
    'En serio, el tiempo que paso contigo es increíble y hermoso :3\n' +
    'Te amo muchísimo, espero que te quede claro ♥\n' +
    'Espero que sigamos cumpliendo muchísimos años más. Te amo como no tienes idea :3 ♥.');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
