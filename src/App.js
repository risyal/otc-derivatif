import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import { LandingPage } from "./component/landing.page";
import { ProtectedRoute } from "./component/protected";
import './App.less';
import ViewEngine from './component/ViewEngine';

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={LandingPage} />
      <ProtectedRoute exact path="/app"> */}
      <ViewEngine />
      {/* </ProtectedRoute> */}
    </BrowserRouter>
  );
}
export default App;
ReactDOM.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);