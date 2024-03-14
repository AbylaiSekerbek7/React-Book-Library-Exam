import React from 'react'
import './Books.css'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Books = () => {

  const [books, setBooks] = useState([]);
  const [fullBooks, setFullBooks] = useState([]);
  const [top10Books, setTop10Books] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectGenre, setSelectGenre] = useState("");
  const [selectOrder, setSelectOrder] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:3001/books")
      .then((res) => {
        setBooks(res.data);
        setFullBooks(res.data);
      })
      .catch(error => console.log("Error - can not get Books", error));
    axios.get("http://localhost:3001/genres")
      .then((res) => setGenres(res.data))
      .catch(error => console.log("Error - can not get Genres", error));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/comments")
      .then((res) => {
        const comments = res.data;
        const bookCounts = {};

        comments.forEach(comment => {
          if (bookCounts[comment.bookId]) {
            bookCounts[comment.bookId]++;
          } else {
            bookCounts[comment.bookId] = 1;
          }
        });

        const sortedBooks = Object.keys(bookCounts).sort((a, b) => bookCounts[b] - bookCounts[a]);

        const top10 = sortedBooks.slice(0, 10);

        const top10BooksData = fullBooks.filter(book => top10.includes(book.id));
        console.log(top10BooksData);

        setTop10Books(top10BooksData);
      })
      .catch(error => console.log("Error - can not get Top Books", error));
  }, [fullBooks]);

  const handleSort = () => {
    let newBooks = [...fullBooks];
    if (selectGenre !== "") {
      newBooks = newBooks.filter((book) => book.genre === selectGenre);
    }
    switch (selectOrder) {
      case "asc": {
        newBooks = newBooks.sort((a, b) => (a.title > b.title) ? 1 : -1);
        break;
      }
      case "desc": {
        newBooks = newBooks.sort((a, b) => (a.title < b.title) ? 1 : -1);
        break;
      }
      default: {
        return;
      }
    }
    setBooks(newBooks);
  }

  return (
    <>
      <div className='custom-select'>
        <select onChange={(e) => setSelectOrder(e.target.value)}>
          <option value="asc">ascending sort</option>
          <option value="desc">descending sort</option>
        </select>
        <select onChange={(e) => setSelectGenre(e.target.value)}>
          <option value="">All genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>{genre.name}</option>
          ))}
        </select>
        <button className='sort_btn' onClick={handleSort}>Sort</button>
      </div>

      <div className='top10_books'>
        <h1>Top 10 commented books</h1>
        <div className="top10_books_box">
          {top10Books.map((book) => (
            <div className="top10_book_card" key={book.id}>
              <div className="top10_book_image">
                <img src={book.poster} alt="Book image" />
              </div>
              <div className="top10_book_tag">
                <h2>Top 10 book</h2>
                <p className='author'>{book.author} <br /></p>
                <p className='year'>{book.year}</p>
                <br />
                <Link to={`/books/${book.id}`}>View Book</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="books">
        <h1>All Books</h1>
        <div className="books_box">
          {books.map((book) => (
            <div className="books_card" key={book.id}>
              <div className="books_image">
                <img src={book.poster} alt="Book picture" />
              </div>
              <h4>{book.title}</h4>
              <p>{book.author} <br /> {book.year}</p>
              <br />
              <Link to={`/books/${book.id}`}>View Book</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Books;