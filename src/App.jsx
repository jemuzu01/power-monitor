import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "./layout/layout";


const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Administration = lazy(() => import("./pages/Administration/Administration"));
const Italian = lazy(() => import("./pages/Italian/Italian"));
const ElectricalTech = lazy(() => import("./pages/ElectricalTech/ElectricalTech"));
const Automotive = lazy(() => import("./pages/Automotive/Automotive"));
const Manufacturing = lazy(() => import("./pages/Manufacturing/Manufacturing"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="administration" element={<Administration />} />
            <Route path="italian" element={<Italian />} />
            <Route path="electrical" element={<ElectricalTech />} />
            <Route path="automotive" element={<Automotive />} />
            <Route path="manufacturing" element={<Manufacturing />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
