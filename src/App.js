import './App.css';
import Header from "./components/Header";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className='wrapper'>
      <div className='page'>
        <Header />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
