import openbook from "./openbook.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={openbook} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>coded by Jescinta Thompson</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
