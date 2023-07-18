import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../store/bookReducer";

const BooksList = memo(({ loading, books, setCurrentId, isLoggedIn }) => {

 const dispatch=useDispatch()

 const readHandler = (id) => {
  setCurrentId(id)
 };

  const deleteHandler = (book) => {
    dispatch(deleteBook(book))
      .unwrap()
      .then(data => console.log(data))
    .catch((err)=>{console.log(err)})
     

}


  const showData = loading ? (
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
            <button disabled={!isLoggedIn} onClick={() => deleteHandler(book)} type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
  
 return (
  <div>
     <h2>Books List</h2>


     
  

     {!books.length > 0 ? <div>there is no books to show</div> : showData}


  
  </div>
 );
})

export default BooksList;
