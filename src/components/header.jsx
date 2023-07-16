import { useDispatch, useSelector } from "react-redux";
import { isLogInOut } from "../store/authReducer";
const Header = () => {

  const { error } = useSelector((state) => state.books)
  const {isLoggedIn}=useSelector(state=>state.auth)

  const dispatch = useDispatch();
 return (
  <>
   
   {error && (
   <div class="alert alert-danger" role="alert">
  {error}
</div>
    )}
  <nav className="navbar navbar-dark bg-dark px-5 py-3">
   <span className="navbar-brand mb-0 h1">My Books</span>

       <button onClick={()=>{dispatch(isLogInOut())}} className="btn btn-outline-primary" type="submit" >
         {isLoggedIn ? "logout" : "login"}
    
   </button>
   </nav>
   </>
 );
};

export default Header;
