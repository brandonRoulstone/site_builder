import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import TestFile from './Components/TestFile';
import LandingPage from './Components/LandingPage';

function App() {
  // Insert all routes here

  const RouterLayout = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout/>}>
      {/* Provided example */}
      <Route index path='/' element={<LandingPage/>}></Route>
      <Route path='/test' element={<TestFile/>}></Route>
    </Route>

  ));

  return (
    <div className="App">
      <RouterProvider router={RouterLayout} />
    </div>
  );
}

export default App;
