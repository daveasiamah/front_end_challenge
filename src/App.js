import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import MainContainer from "./components/Main/MainContainer";

function App() {
  return (
    <div>
      <MainContainer>
        <Header />
        <Main />
        <Footer />
      </MainContainer>
    </div>
  );
}

export default App;
