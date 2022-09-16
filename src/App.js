import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton'
import NaVbar from './components/header';

function App() {

  const klik = () => {
    return alert("anda telah menekan tombol")
  };

  return (
    <div className="App">
      <header className="App-header">
        <NaVbar />
        <img src={logo} className="App-logo" alt="logo" />
        <MyButton tekan={klik} />
      </header>

    </div>
  );
}

export default App;
