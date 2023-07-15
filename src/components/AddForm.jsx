import { useDispatch } from "react-redux";
import { insertBook } from "../store/bookReducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Addform = () => {
 const dispatch = useDispatch();
  const [bookItem, setBookItem] = useState({
    title: "",
    description: "",
    price:0
  
 });

 const formHandler = (e) => {
  e.preventDefault();
  let id = uuidv4();

   if (bookItem) {
     
    const bookData={
      id,
      title: bookItem.title,
      price: bookItem.price,
      description: bookItem.description,
     }
     dispatch(insertBook(bookData));

     setBookItem({
       title: "",
       price:"",
       description: ""
       
  });
     }
  };
  
  console.log(bookItem)

 return (
  <div className="row">
   <div className="col-6 offset-3 mt-3">
    <h2>Insert Book</h2>
    <form onSubmit={formHandler}>
     <div className="form-group">
      <label htmlFor="title">Title</label>
      <input
       type="text"
       className="form-control"
       id="title"
       name="title"
       value={bookItem.title}
       onChange={(e) => {
        
        setBookItem({...bookItem, [e.target.name]: e.target.value});
       }}
      />
     </div>
     <div className="form-group">
      <label htmlFor="price">Price</label>
      <input
       name="price"
       type="number"
       className="form-control"
       id="price"
       value={bookItem.price}
       onChange={(e) => {
        
        setBookItem({...bookItem, [e.target.name]: e.target.value});

       }}
      />
     </div>
     <div className="form-group">
      <label htmlFor="Description">Description</label>
      <textarea
       name="description"
       value={bookItem.description}
       onChange={(e) => {
        
        setBookItem({...bookItem, [e.target.name]: e.target.value});
       }}
       className="form-control"
       id="Description"
       rows="3"
       required></textarea>
     </div>
     <button type="submit" className="btn btn-primary">
      Submit
     </button>
    </form>
   </div>
  </div>
 );
};

export default Addform;
