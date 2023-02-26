import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books' //if export is on variable
//import books from './books' //if export is default from books.js
import Book from './book'

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <h1>Amazon Best Seller</h1>
      <section className="booklist">
        {/* <EventExample /> */}
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}
/*
const EventExample = () => {
  const handleFormInput = (e) => {
    console.log('handle Form input')
    //console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const handleButtonClick = () => {
    alert('Handle Button Click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form Submit')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: '1rem 0' }}
          onChange={handleFormInput}
        />
      </form>
      <button type="submit">Submit</button>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  )
}*/

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
