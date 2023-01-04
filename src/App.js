import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Outlet component connects the app to the router */}
      <Outlet/>
    </div>
  );
}

export default App;
