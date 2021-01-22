import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import WhoBenefits from './Components/WhoBenefits/WhoBenefits';

function App() {

  const cardValues = {
    headerName : "Test Header",
    content : " Test Content",
    cta: "Enquire Now"
  }
  return (
    <div className="App">
      <Header />
      <WhoBenefits />
    </div>
  );
}

export default App;
