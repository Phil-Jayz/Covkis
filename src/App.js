import { Route, Switch, Link } from "react-router-dom";
import Nav from "./components/nav";
import Map from "./components/maps";
import Weather from "./components/currentLocation";

function App() {

  return (
    <>

      <div style={{ height: "100vh" }}>
        <Nav />

        <Switch>
          <Route exact path="/" component={Map} />
          <Route exact path="/home/" component={Map} />
          <Route exact path="/meteo/" component={Weather} />
        </Switch>

        {/* <Footer /> */}
        <Link to="/#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>
      </div>
    </>
  );
}

export default App;
