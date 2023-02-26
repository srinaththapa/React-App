import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    img: './images/book-1.jpg',
    author: 'Alice Schertle',
    title: 'Little Blue Trucks homes',
    id: 1,
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Oa54UCQoL._AC_UL900_SR900,600_.jpg',
    author: 'B.Dylan Hollis',
    title: 'Baking Yesteryear: Book',
    id: 2,
  },
]
const BookList = () => {
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log('handle Form input')
    console.log(e.target)
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
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  )
}
const Book = ({ title, img, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
