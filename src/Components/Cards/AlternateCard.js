import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import test from './test.png';
 

const styles = {
  
  outerCard:{
    height: "450px",
    width: "375px",
    
  }
};

const AlternateCard =function(props){
  const { classes } = props;
return(
  <div className={classes.outerCard}>
<img src={test} width="250px%" height="250px" />
<p style={{color:"grey",fontSize:"15px",paddingLeft:"29px"}}>Select Task to add Remainder</p>
</div>
);
}

export default withStyles(styles)(AlternateCard);
