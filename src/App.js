import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* Outlet component connects the app to the router */}
      <Outlet/>
    </div>
  );
}

export default App;
