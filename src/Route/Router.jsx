import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Main from '../ParentCom/Main';

 const Router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children: [
       {
         path: "/",
         element: <Home></Home>,
       },
       {
         path: "/signin",
         element: <SignIn/>,
       },
       {
         path: "/signup",
         element: <SignUp/>,
       },
     ],
   },
 ]);

export default Router;

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}