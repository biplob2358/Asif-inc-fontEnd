import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import EmployeeList from './components/EmployeeList/EmployeeList';
import { Toaster } from 'react-hot-toast';
import EditEmployee from './components/EditEmployee/EditEmployee';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>

    },
    {
      path: '/employeelist',
      element: <EmployeeList></EmployeeList>
    },
    {
      path: '/edit/:id',
      element: <EditEmployee></EditEmployee>,
      loader: ({ params }) => fetch(`http://localhost:5000/allemployee/${params.id}`)
    }
  ])
  return (
    <div >
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
