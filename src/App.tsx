import ThemeProvider from "./styles/themeProvider";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Router from "@/shared/router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback={<div>로딩 중...</div>}>
          <h1>네모의꿈</h1>
          <Router />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
