import './App.css';
import { AddBook } from './components/addbook/addbook';
import { HomePage } from './components/homepage/homepage';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { BookRecord } from './components/bookrecord/bookrecord';
import { Edit } from './components/edit/edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Login />}/>
          <Route path={'/register'} element={<Register />}/>
          <Route path={'/home'} element={<HomePage />}/>
          <Route path={'/addbook'} element={<AddBook />}/>
          <Route path={'/viewbook'} element={<BookRecord/>}/>
          <Route path={'/edit'} element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
