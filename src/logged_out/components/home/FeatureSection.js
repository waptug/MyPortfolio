import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";

import CodeIcon from "@material-ui/icons/Code";
import BuildIcon from "@material-ui/icons/Build";
import ComputerIcon from "@material-ui/icons/Computer";
import BarChartIcon from "@material-ui/icons/BarChart";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
//import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CloudIcon from "@material-ui/icons/Cloud";
import MeassageIcon from "@material-ui/icons/Message";
import CancelIcon from "@material-ui/icons/Cancel";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocalMovies from "@material-ui/icons/LocalMovies";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";


const iconSize = 30;//Controls the size of the icon image in px.

/* Feature Card Fields: headline, subheadline,datespan,text
* Array assigned to features 
* @ToDo  Replace this with a db filled array from MongoDB
* @toDo  Create a master Card class that can be passed a field set based on a card type
*/

const features = [
  {
    color: "#6200EA",
    headline: "Drupal",
    subheadline: "Drupal CMS Development",
    datespan: "",
    text:
      "Acquia Certified Site Builder 2023. Site creation using the leading open source enterprise content management system. Site design and development, hosting and domain name registrations service.",
    icon: <LocalOfferIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: ""
  },{ 
    color: "#00C853",
    headline: "WordPress",
    subheadline: "WordPress CMS Development",
    datespan: "",
    text:
      "Site creation using the leading open source content management system. Site design and development, hosting and domain name registrations service.",
    icon: <LocalMovies style={{ fontSize: iconSize }} />,
    mdDelay: "100",
    smDelay: "100"
  },
  {
    color: "#0091EA",
    headline: "Joomla",
    subheadline: "Joomla CMS Development",
    text:
      "Site creation using the 2nd. leading open source content management system. Site design and development, hosting and domain name registrations service.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  
  {
    color: "#00B8D4",
    headline: "A.I. Prompt Generation",
    subheadline: "Get the most out of your A.I. Chatbots.",
    text:
      "Prompt generation for your A.I. Chatbots. ",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B855",
    headline: "A.I. Prompt Generation Training",
    subheadline: "Book me to speak at your event on 'Learn How to Get the most out of your A.I. Chatbots.'",
    text:
      "Group or individual training sessions. Live or Zoom sessions. Step by step training on how to get the most out of your A.I. Chatbots. Learn where to start finding the right A.I. Chatbot for your business.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00F855",
    headline: "A.I. Chat Bot Enginering",
    subheadline: "Create your own A.I. Chatbots.",
    text:
      "A.I. Chatbot creation and deployment. Integration leading A.I. Chatbot platforms with your CMS to provide site specific A.I. Chatbots.",
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Hugo",
    subheadline: "Hugo Static Site CMS Development",
    text:
      "Site creation using the leading open source static website framework content management system. Site design and development, hosting and domain name registrations service.",
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "ReactJS",
    subheadline: "ReactJS Portfolio SAAS Development",
    text:
      "Portfolio creation using the leading open source javascript library. Site design and development, hosting and domain name registrations service.",
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "Lead Generation",
    subheadline: "Lead Generation Landing Page Development",
    text:
      "Lead gereration and landing page system development using leading open source tools. Integration with leading email mailing list management systems.",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
  {
    color: "#304FFE",
    headline: "Learning Management Systems",
    subheadline: "Learning Management System Development",
    text:
      "Creation of learning management systems using text, audio and video based training.",
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#C51162",
    headline: "Data Analytics",
    subheadline: "Site Traffic Analytics",
    text:
      "Set up and configuration of a branded web site traffic analytics tracking system using the self-hosted Matomo Server",
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#00B8D4",
    headline: "RDBMS Management",
    subheadline: "MySQL Relational Database Management",
    text:
      "Management services for your MySQL, MS SQL, or Postgres database system.",
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "System Administration",
    subheadline: "File system management via cmd, bash and powershell",
    text:
      "Creation of system administration scripting services for process automation using MS Dos Batch, Powershell or BASH scripts.",
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "Technical Writing",
    subheadline: "Technical content writing.",
    text:
      "System documentation and technical manual creation for your process or application.",
    icon: <BubbleChart style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#00B8D4",
    headline: "Social Media Branding",
    subheadline: "Social Media Brand Management",
    text:
      "Ad development and placement on FaceBook, YouTube and LinkedIn",
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
          Featuers
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
