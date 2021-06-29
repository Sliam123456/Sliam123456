fetch('Data.txt')
  .then(response => response.text())
  .then(text => document.write(text))
