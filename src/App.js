import {
  RouterProvider
} from "react-router-dom";
import './App.css';
import Router from "./Route/Router";

function App() {


  return (
    <RouterProvider router={Router} errorElement={<ErrorBoundary />} />
  );
}

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

export default App;

