import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import $ from "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, fab);

const DATAIMAGES = [
  {
    id: 1,
    thumbnail: "https://placehold.it/150x80?text=IMAGE",
  },
  {
    id: 2,
    thumbnail: "https://placehold.it/150x80?text=IMAGE",
  },
  {
    id: 3,
    thumbnail: "https://placehold.it/150x80?text=IMAGE",
  },
  {
    id: 4,
    thumbnail: "https://placehold.it/150x80?text=IMAGE",
  },
];
class App extends React.Component {
  render() {
    return (
      <div id="myPage">
        <nav
          className="navbar navbar-inverse"
          style={{ marginBottom: "0", borderRadius: "0" }}
        >
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="# ">
                Logo
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="# ">Home</a>
                </li>
                <li>
                  <a href="# ">About</a>
                </li>
                <li>
                  <a href="# ">Gallery</a>
                </li>
                <li>
                  <a href="# ">Contact</a>
                </li>
              </ul>
              <form className="navbar-form navbar-right" role="search">
                <div className="form-group input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search.."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a
                    href="# "
                    data-toggle="popover"
                    onClick={() => $('[data-toggle="popover"]').popover()}
                    title="Announcements & News"
                    data-content="Receive news or job alerts"
                    data-placement="bottom"
                  >
                    <FontAwesomeIcon icon={["fas", "bell"]} />
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <span className="glyphicon glyphicon-user"></span> My
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron">
          <div className="container text-center">
            <h1>My Portfolio</h1>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  size="50"
                  placeholder="Email Address"
                  required
                />
                <div className="input-group-btn">
                  <button type="button" className="btn btn-danger">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="page-title text-center">Content</h2>
            </div>
          </div>
          {/* Chia 2 cột */}
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris...
              </p>
            </div>
          </div>
          {/* Chia 3 cột */}
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="panel panel-primary">
                <div className="panel-heading">BLACK FRIDAY DEAL</div>
                <div className="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    className="img-responsive"
                    style={{ width: "100%" }}
                    alt=" "
                  />
                </div>
                <div className="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="panel panel-danger">
                <div className="panel-heading">BLACK FRIDAY DEAL</div>
                <div className="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    className="img-responsive"
                    style={{ width: "100%" }}
                    alt=" "
                  />
                </div>
                <div className="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="panel panel-success">
                <div className="panel-heading">BLACK FRIDAY DEAL</div>
                <div className="panel-body">
                  <img
                    src="https://placehold.it/150x80?text=IMAGE"
                    className="img-responsive"
                    style={{ width: "100%" }}
                    alt=" "
                  />
                </div>
                <div className="panel-footer">
                  Buy 50 mobiles and get a gift card
                </div>
              </div>
            </div>
          </div>
          {/* Chia 4 cột */}
          <div className="row">
            {DATAIMAGES.map((item) => (
              <div
                className="col-xs-12 col-sm-3 col-md-3 col-lg-3"
                key={item.id}
                style={{ marginTop: "10px" }}
              >
                <img
                  src={item.thumbnail}
                  className="img-responsive"
                  style={{ width: "100%" }}
                  alt=" "
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a href="# ">
                <span className="glyphicon glyphicon-globe logo"></span>
              </a>
            </div>
            <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
              <h2>Our Values</h2>
              <br />
              <h4>
                <strong>MISSION:</strong> Our mission lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </h4>
              <br />
              <p>
                <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid text-center">
          <h2 className="text-center">SERVICES</h2>
          <h4 className="text-center">What we offer</h4>
          <br />
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a href="# ">
                <span className="glyphicon glyphicon-off logo-small"></span>
              </a>
              <h4>POWER</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a href="# ">
                <span className="glyphicon glyphicon-heart logo-small"></span>
              </a>
              <h4>Love</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <a href="# ">
                <span className="glyphicon glyphicon-lock logo-small"></span>
              </a>
              <h4>JOB DONE</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w3-image w3-greyscale-min"
          style={{ width: "100%" }}
          alt=" "
        />
        <footer className="container-fluid text-center">
          <a href="#myPage" title="To Top">
            <span className="glyphicon glyphicon-chevron-up"></span>
          </a>
          <p>Footer Text</p>
        </footer>
      </div>
    );
  }
}

export default App;
