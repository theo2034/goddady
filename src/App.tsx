import React from "react";
import { Routes, Route } from "react-router-dom";

const Repositories = React.lazy(() => import("./pages/repositories"));
const RepositoryDetails = React.lazy(
  () => import("./pages/repository-details")
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/:id" element={<RepositoryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
