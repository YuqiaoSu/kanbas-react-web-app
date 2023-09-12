import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

        <ul>
          <li><a href="../kanbas-react-web-app/public/kanbas/profile/index.html">Account</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="../kanbas-react-web-app/public/kanbas/home.html">Courses</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Inbox</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Studio</a></li>
          <li><a href="#">Commons</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </header>
    </div>
  );
}

export default App;
