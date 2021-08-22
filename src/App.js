import Tab from './components/Tabbar'
import CookBook from './pages/CookBook/index'
import './assets/css/reset.css'

function App() {
  return (
    <div className="App">
      <CookBook/>
      <Tab />
    </div>
  );
}

export default App;
