import BookInfo from "./BooInfo";
import BooksList from "./BookList";
import "./book.css";

import { getBooks } from "../../store/bookReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const BookContainer = () => {
 const dispatch = useDispatch();
 const {books, loading, error} = useSelector((state) => state.books);

 useEffect(() => {
  dispatch(getBooks());
 }, []);


 return (
  
  <>

     <hr className="my-5" />
     <div className="row">
      <div className="col">
       <BooksList loading={loading} books={books} error={error} />
      </div>
      <div className="col side-line">
       <BookInfo />
      </div>
     </div>
    </> 
 );
};

export default BookContainer;
