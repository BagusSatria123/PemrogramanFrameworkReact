import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/home">
              Kopi
            </a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/home" class="nav-item nav-link">
                  Home
                </Link>
                <Link to="/barang" class="nav-item nav-link">
                  Barang
                </Link>
                <Link to="/bio" class="nav-item nav-link">
                  Bio
                </Link>
                <Switch class="nav-item nav-link">
                  <AuthButton />
                </Switch>
              </div>
            </div>
          </div>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <PublicPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/barang">
            <ProtectedPage />
          </PrivateRoute>
          {/* <Route path="/lihat">
            <Lihat />
          </Route> */}
          <PrivateRoute path="/bio">
            <AboutPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <a class="nav-item nav-link">
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
        class="btn btn-danger"
      >
        Sign out
      </button>
    </a>
  ) : (
    <a class="nav-item nav-link disabled">You are not logged in.</a>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return (
    <div>
      <div class="jumbotron">
        <center>
          <h2>Coffee</h2>
          <p>Aman Gak bikin kembung</p>
          <br />
          <br />
          <p>
            {/* <a class="btn btn-primary btn-lg" href="#" role="button">
              Mulai Belanja !
            </a> */}
          </p>
        </center>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src="https://ucarecdn.com/05f649bf-b70b-4cf8-90f7-2588ce404a08/"
              class="card-img-top"
            />
            <div class="caption">
              <h3 class="card-title">Bubukk</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                <a href="/home" class="btn btn-primary" role="button">
                  Lihat
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <div class="col">
          <div class="card">
            <img
              src="https://cdn1-production-images-kly.akamaized.net/YTS9RSf_anobLUPlqDvWix8oFuA=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2407071/original/025557100_1542095096-meals-3167100_1920_pixabay_focusonpc.JPG"
              class="card-img-top"
            />
            <div class="caption">
              <h3 class="card-title">papan</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                <a href="/home" class="btn btn-primary" role="button">
                  Lihat
                </a>
              </p>
            </div>
          </div>
        </div> */}
        <div class="col">
          <div class="card">
            <img
              src="https://ucarecdn.com/a9ed82c6-14f1-462e-849e-3b007c2aae87/"
              class="card-img-top"
            />
            <div class="caption">
              <h3 class="card-title">coffee</h3>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <p>
                <a href="/barang" class="btn btn-primary" role="button">
                  Lihat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function AboutPage() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Biodata</h2>
      <ul>
        <li>
          <Link to={`${url}/Bagus Satria Putra`}>Nama</Link>
        </li>
        <li>
          <Link to={`${url}/1841720146`}>NIM</Link>
        </li>
        <li>
          <Link to={`${url}/TI-3F, 08`}>Kelas, NoAbsen</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <Route />
        </Route>
        <Route path={`${path}/:bioId`}>
          <Bio />
        </Route>
      </Switch>
    </div>
  );
}

function Bio() {
  let { bioId } = useParams();

  return (
    <div>
      <h3>{bioId}</h3>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must Login to view this page at {from.pathname}</p>
      <button onClick={login}>Login</button>
    </div>
  );
}
