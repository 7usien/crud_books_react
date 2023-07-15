import { useSelector } from "react-redux";

const Header = () => {

 const { error}=useSelector((state)=>state.books)

 return (
  <>
   
   {error && (
   <div class="alert alert-danger" role="alert">
  {error}
</div>
    )}
  <nav className="navbar navbar-dark bg-dark px-5 py-3">
   <span className="navbar-brand mb-0 h1">My Books</span>

   <button className="btn btn-outline-primary" type="submit">
    Log In
   </button>
   </nav>
   </>
 );
};

export default Header;
