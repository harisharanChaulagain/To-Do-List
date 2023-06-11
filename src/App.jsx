import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import New from "./components/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/query" element={<New />} />
        </Routes>
      </Router>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

export default App;
