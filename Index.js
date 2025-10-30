const londing = document.querySelector('.londing');

// londing page 
setTimeout(() => {
    londing.classList.add('removeLonding');
    setTimeout(() => {
        londing.remove();
    }, 1000);
}, 2000);