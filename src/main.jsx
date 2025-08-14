import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventDetails from "./pages/eventDetails.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/eventdetails/:eventId", element: <EventDetails /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
