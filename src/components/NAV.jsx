import "./NAV.css";
import { Parallax } from "react-parallax";
import Woman from "./Woman.jpg";
import City from "./City.jpg";
import fly from "./fly.jpg";
import Home from "./Home";
import { Paper } from "@mui/material";
import Desc from "./Desc";
import Footer from "./Footer";
import ChatBot from "./ChatBot";

function NAV() {
  return (
    <div>
      <Home className="Navi"></Home>
    <div>
    <div className="NAV">
      <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <div>
            <Paper className="Pep"><p className="text-content">Your one stop renting Sollution .<br/>
            All your renting needs in one stop..!</p></Paper>
          </div>
        </div>
      </Parallax>

      <Parallax strength={300}  bgImage={City}>
        <div className="content">
          <div>
          <Paper className="Pep1"><p className="text-content1">Your one stop renting Sollution .<br/>
            All your renting needs in one stop..!</p></Paper>
          </div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={fly}>
      <div className="content">
            <Paper className="Pep"><p className="text-content">Your one stop renting Sollution .<br/>
            All your renting needs in one stop..!</p></Paper>
      </div>
      </Parallax>
    </div>
    
      <Desc></Desc>
      <Footer></Footer>
      </div>
      </div>
  );
}

export default NAV;