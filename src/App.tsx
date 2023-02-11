import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import * as utils from "utils";
import * as constants from "constants/";
import * as variables from "variables/";
import "./App.scss";
import axios from "axios";
import Guide from "pages/guide/";
import Home from "pages/home/";
import List from "pages/list";

axios.defaults.baseURL = variables.urls.TDXServer;
utils.apis.initializeAxiosAuthorizationHeader();

const browserRouter = [
  {
    path: "/",
    element: (
      // <AnimatePresence mode="wait">
      <motion.div
      // key="modal"
      // initial={{
      //   // opacity: 0,
      //   x: -200,
      // }}
      // animate={{
      //   // opacity: 1,
      //    x: 0
      //  }}
      // exit={{
      //   // opacity: 0,
      //   x: "100vw",
      // }}
      // transition={{ duration: 0.5 }}
      >
        <Home />
      </motion.div>
      // </AnimatePresence>
    ),
  },
  {
    path: "/list",
    element: (
      // <AnimatePresence mode="wait">
      <motion.div
      // key="list"
      // initial={{
      //   //  opacity: 0,
      //   x: "-100vw",
      // }}
      // animate={{
      //   //  opacity: 1,
      //   x: 0,
      // }}
      // transition={{ duration: 0.5 }}
      // exit={{
      //   opacity: 0,
      //   x: 200,
      // }}
      >
        <List />
      </motion.div>
      // </AnimatePresence>
    ),
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
