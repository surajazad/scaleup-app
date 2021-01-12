import './App.css';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';


function App() {

  const cardValues = {
    headerName : "Test Header",
    content : " Test Content",
    cta: "Enquire Now"
  }
  return (
    <div className="App">
      <Header />
      <Card value={cardValues}/>
    </div>
  );
}

export default App;
