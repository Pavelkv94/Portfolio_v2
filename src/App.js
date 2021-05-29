import logo from './logo.svg';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />

    </div>
  );
}

export default App;
