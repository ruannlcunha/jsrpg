import { createHashRouter } from "react-router-dom";
import { BatalhaScreen, RootScreen } from "../ui/screens";
import { FimDeBatalha } from "../ui/components";

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
