import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Search.css'
import { Link } from 'react-router-dom';

const Search = () => {

    const [books, setBooks] = useState([]);
    const [book, setBook] = useState({});
    const [searchBook, setSearchBook] = useState("");
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/books")
            .then((res) => setBooks(res.data))
            .catch(error => console.log("Error - can not get Books", error));
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const resBook = books.find((book) =>
            book.title.toLowerCase() === searchBook.toLowerCase() ||
            book.author.toLowerCase() === searchBook.toLowerCase() ||
            book.genre.toLowerCase() === searchBook.toLowerCase()
        );
        if (resBook) {
            setBook(resBook);
            setNotFound(false);
        } else {
            setBook({});
            setNotFound(true);
        }
    }

    return (
        <div className='search'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder='Search by Title, Author, Genre' onChange={(e) => setSearchBook(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            <div className="books">
                <h1>Searched Book</h1>
                {book && Object.keys(book).length > 0 ? (
                    <div className="books_box">
                        <div className="books_card" >
                            <div>
                                <div className="books_image">
                                    <img src={book.poster} alt="Book picture" />
                                </div>
                                <h4>{book.title}</h4>
                                <p>{book.author} <br /> {book.year}</p>
                                <br />
                                <Link to={`/books/${book.id}`}>View Book</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className='not_found'>{notFound ? "Not Found 😕" : ""}</p>
                )}
            </div>
        </div>
    )
}

export default Search;
