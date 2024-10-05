import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";
import Messanger from "./components/Home/Messanger";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Messanger /> },
    { path: "/login", element: <Signin /> },
    { path: "/register", element: <Signup /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
