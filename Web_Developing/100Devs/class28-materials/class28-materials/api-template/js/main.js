document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.bookTitle').innerText = localStorage.getItem('books')
function getFetch(){
  const isbn = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const bookTitle = data.title;
        console.log(bookTitle)
        const title = document.createElement('p');
        localStorage.setItem('books', bookTitle)
          title.textContent = localStorage.getItem('books')
          document.querySelector('.bookTitle').appendChild(title);

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
