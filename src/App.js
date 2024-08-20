import './styles/App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Buttons from './components/Buttons';
import Title from './components/Title';




function App() {
  return (
    <div className="App">
      <Header name="Banana's" link={["Fale Conosco", "Trabalhe Conosco",""]}/>
    </div>

  );
}

export default App;
