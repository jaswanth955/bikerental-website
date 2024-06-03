
'use strict'

document.querySelector('.contacts').addEventListener('click', function(){
    document.querySelector('.hidden').classList.remove('remove');
    document.querySelector('.blur').classList.remove('remove');

})

document.querySelector('.blur').addEventListener('click', function(){
    document.querySelector('.hidden').classList.add('remove');
    document.querySelector('.blur').classList.add('remove');
})
document.querySelector('.close-modal').addEventListener('click', function(){
    document.querySelector('.hidden').classList.add('remove');
    document.querySelector('.blur').classList.add('remove');
})


document.querySelector('.link').addEventListener('click', function(){
    document.querySelector('.hidden').classList.remove('remove');
    document.querySelector('.blur').classList.remove('remove');
    document.querySelector()

})
