import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Dashboard from './Components/DashBoard';
import LandingPage from './Components/LandingPage';
import FriendsComp from './Components/FriendsComp';

function App() {

  const RouterLayout = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>
      <Route index path='/' element={<LandingPage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/friends' element={<FriendsComp/>}></Route>
    </Route>

  ));

  return (
    <div className="App">
      <RouterProvider router={RouterLayout} />
    </div>
  );
}

export default App;
