import "./App.css";
import UnauthorizedPage from "./components/UnauthorizedPage";
import AuthorizedPage from "./components/AuthorizedPage";

const App = () => {
  return (
    <div className="App">
      <AuthorizedPage />
    </div>
  );
};

export default App;
