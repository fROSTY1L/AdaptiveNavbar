import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyles from './styles/Global.styles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
