import './App.css';
import Fares from './components/Fares';
import Form from './components/Form'
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Fares />
      <Form />
    </div>
  );
}

export default App;
