import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { AuthRouter } from "../routers/AuthRouter";


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<JournalScreen />} />
          <Route path="auth" element={<AuthRouter />} >
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
