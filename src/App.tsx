import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ToastMessageHandler } from "@/components/common/ToastMessageHandler";
import { PublicRoute } from "@/components/routes/PublicRoute";

import { ChainsPage } from "@/pages/ChainsPage";
import { DefisPage } from "@/pages/DefisPage";
import { DefiVersionsPage } from "@/pages/DefiVersionsPage";
import { DefiPoolsPage } from "@/pages/DefiPoolsPage";
import { TokensPage } from "@/pages/TokensPage";
import { SandwichAttacksPage } from "@/pages/SandwichAttack";

const routes = [
  { path: "/", element: <HomePage /> },
  {
    path: "/chains",
    element: <ChainsPage />,
  },
  {
    path: "/defis",
    element: <DefisPage />,
  },
  {
    path: "/defi-versions",
    element: <DefiVersionsPage />,
  },
  {
    path: "/defi-pools",
    element: <DefiPoolsPage />,
  },
  {
    path: "/tokens",
    element: <TokensPage />,
  },
  {
    path: "/sandwich-attacks",
    element: <SandwichAttacksPage />,
  },
];

function App() {
  return (
    <>
      <ToastMessageHandler />
      <Routes>
        {routes.map((route) => {
          // isPrivate is a boolean that indicates if the route is private or not
          const element = <PublicRoute>{route.element}</PublicRoute>;
          return <Route key={route.path} path={route.path} element={element} />;
        })}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
