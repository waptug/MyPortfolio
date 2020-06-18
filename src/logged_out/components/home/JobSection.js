import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";

import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocalMovies from "@material-ui/icons/LocalMovies";


import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";


const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Current Job",
    subheadline: "GeekZoneHosting.Com, LLC",
    datespan: "January 1,1989-Present",
    text:
      "I am currently a Full Stack Web Site Developer for GeekZoneHosting.Com,LLC. where I lead technical projects to impliment new services for the clients of GeekZoneHosting.Com, LLC.",
    icon: <LocalMovies style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "Side Projects",
    subheadline: "Washington Association of RaspberryPiJam Sessions",
    datespan: "January 1, 2010-Present",
    text:
      "I am building a web site at WARPJams.Com to facilitate the orgnanisation of RaspberryPi Jam Sessions at <a href='https://warpjams.com'>WarpJams.Com</a>",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "Community Projects",
    subheadline: "Washington Association of RaspberryPi Jam Sessions",
    datespan: "January 1, 2020-Present",
    text:
      "I produce RaspberryPi Experience Labs for School STEM Expo Trade Shows. I setup labs with RaspberryPi Computer work stations and show people how they work and let them experiment with them.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "InfoSys, Ltd",
    subheadline: "Technical Lead",
    datespan: "March 25, 2019 - June 11, 2020",
    text:
      "As a Technical Lead for Infosys, Ltd. I lead technical web development projects to impliment new services for the clients of Infosys.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "Mediterranian Kitchen",
    subheadline: "medterraniankitchens.net",
    datespan: "March 2015 - Present",
    text: "Lead web site developer",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Eco-Logica Magazine",
    subheadline: "ecologicamagazine.com",
    datespan: "June 2018 - Present",

    text:
      "I am the web site developer",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
  {
    color: "#304FFE",
    headline: "7/8 Music Studio",
    subheadline: "78musicstudio.com",
    datespan: "Jan 2020-Present",
    text:
      "I am the web site developer.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#C51162",
    headline: "Boomer Plus, LLC",
    subheadline: "myboomerplus.org",
    datespan: "Jan 2019-Present",
    text:
      "I am the web site developer and manage the hosting and domain name registrations.",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#00B8D4",
    headline: "MTBN.Net",
    subheadline: "Website Developer",
    datespan: "January 2000-Present",
    text:
      "I developed the website and hosting solutions for this project",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "On-Line-Interactivity.Com",
    subheadline: "Web developer",
    datespane: "January 1998-Present",
    text:
      "I am the web site developer for this project",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "Total Handman Services",
    subheadline: "TotalHandManServicesllc.com",
    datespan: "April 2020-Present",

    text:
      "I am the web site developer for this project.",
    icon: <BubbleChart style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "WapTug.Com",
    subheadline: "Web Site Developer",
    datespan: "May 2020-Present",
    text:
      "I am the web site developer for this project.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "WapTug.Org",
    subheadline: "Web Site Developer",
    datespan: "May 2020-Present",
    text:
      "I am the web site developer for this project.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  }
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h2" align="center" className="lg-mg-bottom">
          Job History
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  subheadline={element.subheadline}
                  datespan={element.datespan}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
