import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import uuid4 from 'uuid4';
import './Admin.css';

const Admin = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    id: uuid4(),
    title: "",
    author: "",
    genre: "",
    description: "",
    year: "",
    poster: "",
    source: ""
  });
  const [isAddBookFormOpen, setIsAddBookFormOpen] = useState(false);
  const [isEditBookFormOpen, setIsEditBookFormOpen] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/books")
      .then((res) => setBooks(res.data))
      .catch(error => console.log("Error - can not get books", error));;
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/books/${id}`).then(() => {
      axios.get("http://localhost:3001/books")
        .then((res) => setBooks(res.data))
        .catch(error => console.log("Error - can not delete book", error));
    })
  }

  const handleAddBookClick = () => {
    setIsAddBookFormOpen(true);
    setIsEditBookFormOpen(false);
  }

  const handleEditBook = (book) => {
    setNewBook(book);
    setIsEditBookFormOpen(true);
    setIsAddBookFormOpen(false);
  }

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3001/genres").then((res) => {
      const existingGenre = res.data.find((genre) => genre.name === newBook.genre);
      if (!existingGenre) {
        const newGenre = {
          id: uuid4(),
          name: newBook.genre
        }
        axios.post("http://localhost:3001/genres", newGenre);
      }
    });

    axios.post("http://localhost:3001/books", newBook)
      .then(() => {
        axios.get("http://localhost:3001/books").then((res) => setBooks(res.data));
        setNewBook({
          id: uuid4(),
          title: "",
          author: "",
          genre: "",
          description: "",
          year: "",
          poster: "",
          source: ""
        });
        setIsAddBookFormOpen(false);
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  }

  const handleEditBookSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/books/${newBook.id}`, newBook)
      .then(() => {
        axios.get("http://localhost:3001/books").then((res) => setBooks(res.data));
        setNewBook({
          id: uuid4(),
          title: "",
          author: "",
          genre: "",
          description: "",
          year: "",
          poster: "",
          source: ""
        });
        setIsEditBookFormOpen(false);
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'author', headerName: 'Author', width: 200 },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: "year", headerName: "Year", width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <>
          <button className="update-btn" onClick={() => handleEditBook(params.row)}>Update</button>
          <button className="delete-btn" onClick={() => handleDelete(params.row.id)}>Delete</button>
        </>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Panel</h1>
      </div>
      <div className="admin-sidebar">
        <ul>
          <li onClick={() => { setIsAddBookFormOpen(false); setIsEditBookFormOpen(false); }}>Books</li>
          <li onClick={handleAddBookClick}>Add Book</li>
        </ul>
      </div>
      <div className="admin-content">
        {isAddBookFormOpen && (
          <div className="add-book-form">
            <form onSubmit={handleAddBookSubmit}>
              <input
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                type="text"
                placeholder="Enter Title"
              /> <br />
              <input
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                type="text"
                placeholder="Enter Author"
              /> <br />
              <input
                value={newBook.genre}
                onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                type="text"
                placeholder="Enter Genre"
              /> <br />
              <input
                value={newBook.description}
                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                type="text"
                placeholder="Enter Description"
              /> <br />
              <input
                value={newBook.year}
                onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                type="text"
                placeholder="Enter Year"
              /> <br />
              <input
                value={newBook.poster}
                onChange={(e) => setNewBook({ ...newBook, poster: e.target.value })}
                type="text"
                placeholder="Enter Poster"
              /> <br />
              <button type='submit'>Add Book</button>
            </form>
          </div>
        )}
        {isEditBookFormOpen && (
          <div className="add-book-form">
            <form onSubmit={handleEditBookSubmit}>
              <input
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                type="text"
                placeholder="Enter Title"
              /> <br />
              <input
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                type="text"
                placeholder="Enter Author"
              /> <br />
              <input
                value={newBook.genre}
                onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                type="text"
                placeholder="Enter Genre"
              /> <br />
              <input
                value={newBook.description}
                onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
                type="text"
                placeholder="Enter Description"
              /> <br />
              <input
                value={newBook.year}
                onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                type="text"
                placeholder="Enter Year"
              /> <br />
              <input
                value={newBook.poster}
                onChange={(e) => setNewBook({ ...newBook, poster: e.target.value })}
                type="text"
                placeholder="Enter Poster"
              /> <br />
              <button type='submit'>Update Book</button>
            </form>
          </div>
        )}
        {!isAddBookFormOpen && !isEditBookFormOpen && (
          <div>
            <h2>Book List</h2>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={books}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                checkboxSelection
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
