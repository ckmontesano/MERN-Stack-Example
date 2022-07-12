
import './App.css';

// components
import UserSearch from './components/UserSearch';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="navigation-bar">
          <div className="branding">
            People
            <span className="brand">Directory</span>
          </div>
        </div>
        <div className="content-container">
          <UserSearch />
        </div>
      </div>
    </div>
  );
}

export default App;
