import { createBrowserRouter } from "react-router-dom";
import SinglePage from "../layout/SinglePage";
import FullPage from "../authenticated/FullPage";

export const protectedRoute = createBrowserRouter([

    // all authenticated or private route 
    {
        path: "/auth/",
        element: <SinglePage />,

        children: [
            {
                path: "dashboard",
                element: <FullPage />
            }



        ]
    }
])