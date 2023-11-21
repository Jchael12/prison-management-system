import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Form from "../components/Form";
import Results from "../components/Results";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
  //backend
]);

export default Router;
