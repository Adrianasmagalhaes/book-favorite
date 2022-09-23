import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BookNav from "./components/BookNav";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <h1> Book Favorites</h1>

     <BookNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<BookList />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
