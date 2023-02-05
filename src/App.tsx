import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as utils from "utils";
import * as constants from "constants/";
import * as variables from "variables/";
import "./App.scss";
import axios from "axios";
import Guide from "pages/guide/";
import Home from "pages/home/";

axios.defaults.baseURL = variables.urls.TDXServer;
utils.apis.initializeAxiosAuthorizationHeader();

const browserRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <div>list</div>,
  },
];

if (window.location.hostname === constants.urls.LOCALHOST) {
  browserRouter.push({
    path: "/guide",
    element: <Guide />,
  });
} // 建立單獨 component 使用

const router = createBrowserRouter(browserRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
