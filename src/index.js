import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    image: './images/book-1.jpg',
    author: 'Alice Schertle',
    title: 'Little Blue Trucks homes',
    id: 1,
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/81Oa54UCQoL._AC_UL900_SR900,600_.jpg',
    author: 'B.Dylan Hollis',
    title: 'Baking Yesteryear: Book',
    id: 2,
  },
]
const BookList = () => {
  return (
    <section className="booklist">
      {books.map(({ title, image, author, id }) => {
        return <Book img={image} title={title} author={author} key={id} />
      })}
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
