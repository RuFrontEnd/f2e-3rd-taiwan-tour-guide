import { createBrowserRouter, RouterProvider } from "react-router-dom";
import constants from "constants/";
import "./App.scss";
import Home from "pages/home/";

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

if (window.location.hostname === constants.url.LOCALHOST) {
  browserRouter.push({
    path: "/component",
    element: <div>component</div>,
  });
} // 建立單獨 component 使用

const router = createBrowserRouter(browserRouter);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
