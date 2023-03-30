console.log('hello')

let title=document.getElementById('title')

console.log('before: ',title.innerText)

let message='Goodbye my lover!'

title.innerText=message;

console.log('after: ',title.innerText)

title.innerHTML='<p>HELLO</p>'