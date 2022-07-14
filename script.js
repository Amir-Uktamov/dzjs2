var ask = +prompt('Введите ваш возраст')

if(ask <= 18) {
    alert('Вы ещё молоды,вам нужно учиться.')
} else if(ask <= 50) {
    alert('Вам нужно работать.')
} else if(ask <= 59) {
    alert('Вам скоро на пенсию.')
}else if(ask <= 100) {
    alert('Вы пенсионер');
} else {
    alert('ВЫ КТО ВООБЩЕ!?')
}