// import css from "./App.module.css";
// import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { refreshUser } from "../../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import TopBar from "../TopBar/TopBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
