import BookInfo from "./BooInfo";
import BooksList from "./BookList";
import "./book.css";

import { getBooks } from "../../store/bookReducer";
import {  useDispatch, useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";

const BookContainer = () => {
 const { books, loading, error } = useSelector((state) => state.books);
   const dispatch = useDispatch();
 const [currentId, setCurrentId] = useState(null);
 const [currentReadBook, setCurrentReadBook] = useState({});

 const {isLoggedIn}=useSelector((state)=>state.auth)

   
 useEffect(() => {
    dispatch(getBooks());
 }, []);

 useEffect(() => {
  const chosenBook = books.filter((book) => book.id === currentId);
  setCurrentReadBook({ ...chosenBook[0] });
 }, [currentId]);

 console.log(currentReadBook)
 return (
  <>
   <hr className="my-5" />
   <div className="row">
    <div className="col">
     <BooksList isLoggedIn={isLoggedIn}
      setCurrentId={setCurrentId}
      loading={loading}
      books={books}
      error={error}
     />
    </div>
    <div className="col side-line">
     <BookInfo currentReadBook={currentReadBook} />
    </div>
   </div>
  </>
 );
};

export default BookContainer;
