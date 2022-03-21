const paragraphs = document.querySelectorAll('p');

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].innerHTML = `This is paragraph ${i}.`;
}

console.log('All paragraphs are changed.');
