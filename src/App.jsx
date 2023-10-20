import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./assets/styles/global.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSlides } from "./services/fetchData";
import { Login } from "./pages/Auth/Login";
import { Registration } from "./pages/Auth/Registration";
export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchSlides());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
