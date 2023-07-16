import { memo, useState } from "react";

const BooksList = memo(({ loading, books, setCurrentId, isLoggedIn }) => {

 const readHandler = (id) => {
  setCurrentId(id)
 };


 return (
  <div>
   <h2>Books List</h2>

   {loading ? (
    <div className="spinner-border" role="status">
     <span className="visually-hidden">Loading...</span>
    </div>
   ) : (
    <ul className="list-group">
     {books.map((book) => (
      <li
       key={book?.id}
       className="list-group-item d-flex  justify-content-between align-items-center">
       <div>
        <h4>{book?.title}</h4>
        <span>price {book?.price}</span>{" "}
       </div>
       <div className="btn-group" role="group">
        <button disabled={!isLoggedIn}
         type="button"
         className="btn btn-primary"
         onClick={() => {
          readHandler(book.id);
         }}>
         Read
        </button>
        <button disabled={!isLoggedIn} type="button" className="btn btn-danger">
         Delete
        </button>
       </div>
      </li>
     ))}
    </ul>
   )}
  </div>
 );
})

export default BooksList;
