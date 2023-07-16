import { memo } from "react";
const BookInfo = memo(({ currentReadBook }) => {
 return (
   <>
     <h2>{currentReadBook.title}</h2>
     <div className='alert alert-secondary' role='alert'>
       {currentReadBook ? <><p>{currentReadBook.description}</p> <span style={{fontWeight:"bold"}}>price : { currentReadBook.price}</span></> :  "There is no book selected yet. Please select!"}
     
     </div>
     {/* <div>
       <p className='fw-bold'>Title:</p>
       <p className='fw-light'>Description:</p>
       <p className='fst-italic'>Price:</p>
     </div> */}
   </>
 );
});

export default BookInfo;