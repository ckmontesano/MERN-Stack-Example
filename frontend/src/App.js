
import './App.css';

// components
import NavBar from './components/NavBar';
import CreateUser from "./components/CreateUser";
import UserSearch from './components/UserSearch';

function App() {

  return (
    <div className="App">
      <div className="main-container">
        <NavBar />
        <div className="content-container flex-center">
          <CreateUser />
          <UserSearch />
        </div>
        <div className="footer">
          End of Page
        </div>
      </div>
    </div>
  );
}

export default App;
