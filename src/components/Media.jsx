import React from "react";
import Grid from "@material-ui/core/Grid";
import Thumbnail from "./Thumbnail";
import roadToBethlehem from "../img/road-to-bethlehem.png";
import oblivion from "../img/oblivion.png";
import thisIsMe from "../img/this-is-me.png";
import starryNight from "../img/starry-night.png";
import Zoom from "@material-ui/core/Zoom";

function Media(props) {
  return (
    <div className="main">
      <div className="main-container">
        <h1 className="main-title">media</h1>
      </div>
      <Grid container>
        <Zoom in={true} timeout={500}>
          <Grid item xs={12} sm={6} lg={3}>
            <Thumbnail
              link="/roadtobethlehem"
              image={roadToBethlehem}
              title="road to bethlehem"
            />
          </Grid>
        </Zoom>
        <Zoom in={true} timeout={750}>
          <Grid item xs={12} sm={6} lg={3}>
            <Thumbnail
              link="/oblivion"
              image={oblivion}
              title="piazzolla: oblivion"
            />
          </Grid>
          </Zoom>
          <Zoom in={true} timeout={1000}>
          <Grid item xs={12} sm={6} lg={3}>
            <Thumbnail
              link="/thisisme"
              image={thisIsMe}
              title='this is me from "the greatest showman"'
            />
          </Grid>
          </Zoom>
          <Zoom in={true} timeout={1250}>
          <Grid item xs={12} sm={6} lg={3}>
            <Thumbnail
              link="/starrynight"
              image={starryNight}
              title="it was on a starry night"
            />
          </Grid>
          </Zoom>
      </Grid>
    </div>
  );
}

export default Media;