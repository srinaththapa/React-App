const Book = ({ title, img, author, getBook, id, number }) => {
  /*const getSingleBook = () => {
    getBook(id)
  }*/
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {/* <button
        onClick={() => {
          getBook(id)
        }}
      >
        Click Me
      </button> */}
      <span className="number">{`#${number + 1}`}</span>
    </article>
  )
}

export default Book
