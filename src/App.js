import './App.css';
import Search from './components/search/Search';

function App() {
  
  const handleOnSearchChange = (Search) => {
    console.log(Search)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
