import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" replace />,
    },
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
