import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// // 페이지 컴포넌트 lazy 로딩
const Intro = lazy(() => import("@/pages/Intro"));
// const Menu = lazy(() => import("@/pages/Menu"));
// const GameSelect = lazy(() => import("@/pages/GameSelect"));
// const Nickname = lazy(() => import("@/pages/Nickname"));
// const Game = lazy(() => import("@/pages/Game"));
// const Ranking = lazy(() => import("@/pages/Ranking"));

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}

export default Router;
