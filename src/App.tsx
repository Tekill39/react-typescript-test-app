
import {BrowserRouter, Route, NavLink, Routes} from 'react-router-dom'; 
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UsersItemPage from './components/UsersItemPage';
import TodosItemPage from './components/TodosItemPage';


function App() {
 
  return (
    <BrowserRouter>     
      <div>
        <div style={{margin:10}}> 
          <NavLink style={{marginRight:10}} to='/users'>Список пользователей</NavLink>
          <NavLink to='/todos'>Список дел</NavLink>        
        </div>       
       <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UsersItemPage />} />
        <Route path="/todos/:id" element={<TodosItemPage />} />
       </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;
