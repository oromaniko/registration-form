import './App.css';
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className='wrapper'>
      <div className='page'>
        <Header />
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
