import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { LandingPage as Login } from "./component/landing.page";
/* import { ProtectedRoute } from "./component/protected"; */
import './App.less';
import ViewEngine from './component/ViewEngine';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/">
          <ViewEngine />
        </Route>
      </Switch>
      {/* <Route exact path="/" component={LandingPage} />
      <ProtectedRoute exact path="/app"> */}
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