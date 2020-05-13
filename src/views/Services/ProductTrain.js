import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import WorkSection from "views/LandingPage/Sections/WorkSection";

const useStyles = makeStyles(styles);

export default function Consulting(props) {
  const classes = useStyles();
  const { ...rest } = props;    
  return (
    <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/product.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                      <br />
                      <br />
                      <br />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Products & Trading</h3>
                    <br />
                    <br />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Providing quality products to customers is not our singular aim. Providing quality products to our customers at a more reasonable price is what we really strive at.{" "}
              </p>
              <p>
              This would mean extensive time spent towards identifying appropriate products which meet our quality norms, and customer feedback. {" "}
              </p>
              <p>
              With our research team constantly engaged in identifying newer products, we are happy to introduce new products which are not just cheaper, but are more value for money and in some cases better than products available in the industry.
              </p>
              <p>
              Some products we engage with are listed below:-

We strongly believe in enabling business and creating social entrepreneurs.

Towards this effect, we help in creating sustainable partnerships in our ecosystem
<ul type='a'>
<li> Rural to Urban Products</li>
<li> Urban to Rural Products</li>
</ul>
</p>
<p>
In our Phase I stage, we are keen to focus on FMCG / Consumer goods products, which are of high demand for our customers.
</p>
<WorkSection />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
