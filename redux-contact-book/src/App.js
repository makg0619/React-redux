import Contacts from './components/contacts/Contacts';
import Addcontact from './components/contacts/Addcontact'
import EditContact from './components/contacts/EditContact'
import Navbar from './components/elements/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar/>
        <div className='container'>
          <div className='py-3'>
            <Routes>
              <Route path="/" element={<Contacts/>}/>
              <Route path="/contacts/add" element={<Addcontact/>}/>
              <Route path="/contacts/edit/:id" element={<EditContact/>}/>
            </Routes>
          </div>
        </div>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
