import "./App.css";
import Addform from "./components/AddForm";
import BookContainer from "./components/Book/BookContainer";

import Container from "./components/Container";
import Header from "./components/header";

function App() {
 return (
  <>
   <Header />
   <Container>
    <Addform />

    <BookContainer />
   </Container>
  </>
 );
}

export default App;
