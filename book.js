const books = []
const form = document.querySelector('form')
const bookTitle = document.getElementById('bookTitle')
const bookAuthor = document.getElementById('bookAuthor')
const text = document.getElementById('text')

let bookId = 1

form.addEventListener('submit', e => {
    e.preventDefault()
  
    bookTitle.style.backgroundColor = 'white'
    bookAuthor.style.backgroundColor = 'white'
    text.innerText = ''

    if (bookTitle.value === '' && bookAuthor.value === ''){
        bookTitle.style.backgroundColor = 'red'
        bookAuthor.style.background = 'red'
        text.innerText = 'Please enter Book Title and Book Author!'
        return
                                                            }
    
    else if (bookTitle.value === ''){
        bookTitle.style.backgroundColor = 'red'
        text.innerText = 'Please enter Book Title'
        return
                                }

    else if (bookAuthor.value === ''){
        bookAuthor.style.background = 'red'
        text.innerText ='Please enter Book Author!'
        return
                                }
  
const book = {
        bookId: bookId,
        title: bookTitle.value,
        author: bookAuthor.value,
   }
   
   books.push(book)
   
    // adding book and author
    const div = document.createElement('div')
    div.classList.add('bookItem')

    const bookIdCol = document.createElement('p')
    bookIdCol.classList.add('bookId')
    bookIdCol.innerText = `Book ID: ${book.bookId}`
    div.appendChild(bookIdCol)

    const titleCol = document.createElement('p')
    titleCol.classList.add('title')
    titleCol.innerText = `Book Title: ${book.title}`
    div.appendChild(titleCol)


    const authorCol = document.createElement('p')
    authorCol.classList.add('author')
    authorCol.innerText = `Book Author: ${book.author}`
    div.appendChild(authorCol)

    const editButton = document.createElement('button')
    editButton.classList.add('edit')
    editButton.innerText = `edit`
    editButton.addEventListener('click', e =>{

    })
    div.appendChild(editButton)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.innerText = `delete`
    removeBtn.addEventListener('click', e =>{
        for(let x of books){
        if(x = book.bookId){
        delete books[x-1];
       }
       removeBtn.parentElement.remove()
    }
       
    })
    div.appendChild(removeBtn)

    document.getElementById('list').appendChild(div) 

    form.reset()
    bookId++;

})
