import { createHashRouter } from "react-router-dom";
import { BatalhaScreen, RootScreen } from "../ui/screens";

export const router = createHashRouter([
  {
    path: `/`,
    element: <RootScreen />,
    children: [
      {
        path: `/`,
        element: <BatalhaScreen />,
      },
    ],
  },
]);
