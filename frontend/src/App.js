import "./App.css";
import UnauthorizedPage from "./components/UnauthorizedPage";
import AuthorizedPage from "./components/AuthorizedPage";

const App = () => {
  return (
    <div className="App">
      <UnauthorizedPage />
    </div>
  );
};

export default App;
