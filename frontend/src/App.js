import "./App.css";
import CardContainer from "./components/authorized/CardContainer";
import Header from "./components/authorized/Header";
import Footer from "./components/authorized/Footer";
import UnauthorizedPage from "./components/unauthorized/UnauthorizedPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <br />
      <CardContainer />
      <br />
      <Footer />
      <UnauthorizedPage />
    </div>
  );
};

export default App;
