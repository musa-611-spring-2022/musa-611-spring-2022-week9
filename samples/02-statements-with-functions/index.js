const paragraphs = document.querySelectorAll('p');

const changeAllParagraphs = () => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerHTML = `This is paragraph ${i}.`;
  }
};

console.log('Changing all paragraphs...');
changeAllParagraphs();
console.log('All paragraphs are changed.');

/*

Execution order:

Begin
1
3
9
10
4
5
4
5
4
5
4
5
4
5
4
11
End
