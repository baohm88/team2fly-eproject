import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import NewAndFeaturedProductsPage from "./pages/NewAndFeaturedProductsPage";
import MenProductsPage from "./pages/MenProductsPage";
import WomenProductsPage from "./pages/WomenProductsPage";
import KidsProductsPage from "./pages/KidsProductsPage";
import SaleProductsPage from "./pages/SaleProductsPage";
import CustomiseProductsPage from "./pages/CustomiseProductsPage";
import SneakerProductsPage from "./pages/SneakerProductsPage";
import AdminPage from "./pages/AdminPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "featured", element: <NewAndFeaturedProductsPage /> },
        { path: "men", element: <MenProductsPage /> },
        { path: "women", element: <WomenProductsPage /> },
        { path: "kids", element: <KidsProductsPage /> },
        { path: "sale", element: <SaleProductsPage /> },
        { path: "customise", element: <CustomiseProductsPage /> },
        { path: "sneakers", element: <SneakerProductsPage /> },
      ],
    },
    { path: "/admin", element: <AdminPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
