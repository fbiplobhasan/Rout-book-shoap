import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDB";

const BookDetail = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    const {bookId: currentBookId,image} = book;
    
    const handleMarkAsRead = (id) => {

        addToStoredReadList(id);

    }

    return (
        <div>
            <h2>Book details{bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-accent btn-outline mr-4">Mark as Read</button>
            <button className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetail;