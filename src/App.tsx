import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ToastMessageHandler } from "@/components/common/ToastMessageHandler";
import { PublicRoute } from "@/components/routes/PublicRoute";

import { ChainsPage } from "@/pages/ChainsPage";
import { DefisPage } from "@/pages/DefisPage";

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
