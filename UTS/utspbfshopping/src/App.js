import logo from "./logo.svg";
import "./bootstrap.min.css";
import BlogPost from "./container/BlogPost/BlogPost";
import BlogPost1 from "./container1/BlogPost/BlogPost";
import "./style.css";
import Biodata from "./Biodata";
import React from "react";
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

function App() {
  return (
    <div>
      <All />
    </div>
  );
}

function All() {
  const script = document.createElement("script");
  script.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  script.src =
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  script.src =
    "https://github.com/twbs/bootstrap/blob/main/dist/js/bootstrap.min.js.map";
  script.src =
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
              className="photo"
            />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/topics">List Produk</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/keranjang">List Keranjang</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/about">About</Link>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <ProtectedPage />
          </Route>
          <Route path="/keranjang">
            <Topics1 />
          </Route>
          <Route path="/about">
            <Biodata />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Topics() {
  return (
    <Router>
      <div>
        <Switch>
          <BlogPost />
        </Switch>
      </div>
    </Router>
  );
}

function Topics1() {
  return (
    <Router>
      <div>
        <Switch>
          <BlogPost1 />
        </Switch>
      </div>
    </Router>
  );
}

const View1 = () => {
  return (
    <div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://rog.asus.com/media/1464624756388.jpg"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Asus ROG</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <p>
                  <a
                    href="artikel.html"
                    class="btn btn-light btn-block"
                    role="button"
                  >
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://s3.ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2018/08/21134246/Acer-Ferarri-1100-696x392.jpg"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Acer Ferrari 1100</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <p>
                  <a
                    href="artikel.html"
                    class="btn btn-light btn-block"
                    role="button"
                  >
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const View2 = () => {
  return (
    <div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/cKUHdJtQqc.jpg"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Razer - Lancehead Wireless Laser Gaming Mouse - Black</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                {/* <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/q05Sp5UNSI.jpg"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Logitech - G903 Wireless Gaming Mouse - Black</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                {/* <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const View3 = () => {
  return (
    <div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://i2.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-2-1024x576.jpg?resize=618%2C348"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Mionix Zibal 60</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <p>
                  <a
                    href="artikel.html"
                    class="btn btn-light btn-block"
                    role="button"
                  >
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://i0.wp.com/hanamera.com/wp-content/uploads/2016/04/keyboard-gaming-termahal-7.jpg?resize=540%2C298"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Optimus Maximus</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <p>
                  <a
                    href="artikel.html"
                    class="btn btn-light btn-block"
                    role="button"
                  >
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const script = document.createElement("script");
  script.src =
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
  script.src =
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js";
  script.src =
    "https://github.com/twbs/bootstrap/blob/main/dist/js/bootstrap.min.js.map";
  script.src =
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  return (
    <div>
      <div class="jumbotron text-center dark">
        <h1>Welcome to iron Shop</h1>
        <p>
          Beli Seterika - Seterika Terlengkap Berbagai Jenis Bebas Ongkir ✈️
          Ekstra Cashback OVO✓ | Belanja Online Aman dan Nyaman Hanya di
          Seterika Shop.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2021/3/3/6a04e81b-72db-4874-bef5-2c79ce2952a3.jpg.webp?ect=4g"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>SETRIKA PHILIPS HD1172 / HD 1172 BEST SELLER!</h3>
                <p>
                  Philips HD-1172 Dry Iron merupakan setrika anti lengket yang
                  licin dan ringan Barang Dijamin Original 100% Philips Garansi
                  1 Tahun ● DiColokan terdapat FUSE sehingga jika ada terjadi
                  naik trun listrik produk akan jepret difuse dan gak bakal ke
                  barang sehingga barang lebih tahan lama# SUDAH FREE OVERSTEKER
                  Setrika ini memiliki plat yang terbuat dari bahan berteknologi
                  terbaru yaitu ceralon, kualitas tidak diragukan dan sudah
                  terbukti selama bertahun-tahun. Setrika ini dilengkapi dengan
                  pengatur suhu, lampu dan otomatis. Spesifikasi: • Setrika •
                  Konsumsi daya 1000 Watt • Tegangan 220 Volt/50-60 Hz •
                  Material Stainless • Material plat Ceralon • Panjang kabel 2
                  meter
                </p>
                {/* <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://images.tokopedia.net/img/cache/100-square/hDjmkQ/2020/11/25/e13c32b3-e620-483b-8f25-6efe5f6dba21.jpg.webp?ect=4g"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>Setrika ELECTROLUX EDI 2004 / EDI2004</h3>
                <p>
                  Spesifikasi Model EDI2004 : - Jenis pelat Non-stick soleplate
                  - Jenis lampu Pilot - Berat bersih (Kg) 0.862 - Berat kotor
                  (Kg) 0.752 - Tipologi Kering - Panjang kabel listrik (m) 1.8 -
                  Warna produk Blue - Dimensi Product : Tinggi produk 160 mm
                  Tinggi produk 170 mm Kedalaman produk 180 mm - Garansi Resmi
                  PT.ELECTROLUX INDONESIA 1Tahun
                </p>
                {/* <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p> */}
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="thumbnail">
              <a>
                <img
                  src="https://images.tokopedia.net/img/cache/100-square/attachment/2021/3/31/65580410/65580410_ccd51374-3d7e-464b-9b1a-ce9690e04a78.jpg.webp?ect=4g"
                  alt="Avatar"
                  className="barang"
                />
              </a>
              <div class="caption">
                <h3>
                  Maspion EX-1010 Blacberry Setrika Listrik Iron Gosokan Baju
                  Murah
                </h3>
                <p>
                  Setrika MASPION EX-1010 Blackberry Gosokan Setrika Listrik
                  EX-1010 : - Garansi 3 tahun untuk Elemen & 1 tahun suku cadang
                  - Tegangan : 220 V - 50 Hz - Daya : 350W - Dimensi : 230 X 107
                  X 115 mm - Sole Plate dengan Lapisan Non-Stick, sehingga tidak
                  lengket pada kain, - Dilengkapi Senur Suplai yang fleksibel. -
                  Pengaturan temperatur yang mudah dan dilengkapi double
                  protector. - Lampu sinyal, berfungsi sebagai tanda bahwa
                  setrika sedang bekerja. Maspion EX-1010 Setrika Listrik -
                  merupakan setrika yang dilengkapi dengan proteksi ganda yaitu
                  thermostat & thermofuse sehingga pengaturan panas pada setrika
                  dapat dilakukan dengan mudah dan aman. Setrika listrik ini
                  memiliki alas yang anti lengket sehingga bisa lebih leluasa
                  dalam menyetrika. Panasnya pun merata sehingga pakaian pun
                  akan lebih rapi
                </p>
                {/* <p><a href="artikel.html" class="btn btn-light btn-block" role="button">Selengkapnya</a></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
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

function ProtectedPage() {
  return <Topics />;
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
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default App;
