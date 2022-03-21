import Contacts from './components/contacts/Contacts';
import Navbar from './components/elements/Navbar';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <div className='py-3'>
          <Contacts/>
        </div>
      </div>
    </div>
  );
}

export default App;