import React, { useEffect, useState } from 'react';
import axios from 'axios';
import uuid4 from 'uuid4';
import './Book.css';
import { useParams } from 'react-router-dom';

const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [src, setBookSource] = useState("");
    const [comments, setComments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/books/${id}/`)
            .then((res) => {
                setBook(res.data);
                setBookSource(res.data.source);
            })
            .catch((error) => {
                console.error('Error - Can not get Book:', error);
            });

        axios.get('http://localhost:3001/comments')
            .then((res) => {
                const filteredComments = res.data.filter(comment => comment.bookId === id);
                setComments(filteredComments);
            }).catch((error) => {
                console.error('Error - Can not get Comments:', error);
            });
    }, [id]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = src;
        link.setAttribute('download', book.title);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleAddComment = async () => {
        const currentDate = new Date();

        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        const formattedDay = String(day).padStart(2, '0');
        const formattedMonth = String(month).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');

        const formattedDate = `${formattedDay}/${formattedMonth}/${year} ${hours}:${formattedMinutes}`;

        const comment = {
            bookId: id,
            commId: uuid4(),
            text: newComment,
            date: formattedDate
        };

        await axios.post(`http://localhost:3001/comments`, comment)
            .then((res) => setComments([...comments, res.data]))
            .catch((error) => console.error('Error adding comment:', error));
        setShowModal(false);
        setNewComment("");
    };


    return (
        <>
            <div className="book">
                <div className="book__details">
                    <div className="book__image">
                        <img src={book.poster} alt="Book Cover" />
                    </div>
                    <div className="book__info">
                        <h2>{book.title}</h2>
                        <br />
                        <p>Description: {book.description}</p>
                        <br />
                        <p>Genre: {book.genre}</p>
                        <br />
                        <p>Author: {book.author} Year: {book.year}</p>
                    </div>
                </div>
                <button className="book__downloadButton" onClick={handleDownload}>Download</button>
                <div className="book__comments">
                    <h3>Book Comments</h3>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment.commId}>
                                <p>{comment.text}</p>
                                <p>{comment.date}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="book__addCommentButton" onClick={() => setShowModal(true)}>Add Comment</div>
                </div>
                {showModal && (
                    <div className="modal">
                        <div className="modal__content">
                            <div className="modal__header">
                                <h3>Add Comment</h3>
                                <button className="modal__closeButton" onClick={() => setShowModal(false)}>X</button>
                            </div>
                            <div className="modal__body">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Enter your comment here"
                                />
                                <button className="modal__addButton" onClick={handleAddComment}>Add</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Book;
