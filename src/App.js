import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import EmployeeList from './components/EmployeeList/EmployeeList';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>

    },
    {
      path: '/employeelist',
      element: <EmployeeList></EmployeeList>
    }
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
