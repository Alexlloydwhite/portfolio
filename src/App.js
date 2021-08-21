// MUI
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Tooltip,
  Fab,
  Zoom,
  Divider,
  Container,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
// Local Import
import "./App.css";
import LandingImage from "./images/LandingImage.jpg";
import ReactLogo from "./images/React-logo.png";
import NodeLogo from "./images/node-logo.png";
import Handshake from "./images/handshake.png";
import OurEconomicLives from "./images/OurEconomicLives.png";
import CellarDexScreenShot from "./images/CellarDex-screenshot.png";
import ReactMovieScreenShot from "./images/React-movie-screenshot.png";
import PhotoGalleryScreenShot from "./images/PhotoGallery-screenshot.png";
import TodoListScreenShot from "./images/TodoList-screenshot.png";
import AwsTodoListScreenShot from "./images/Aws-todo-list.png";
// React Import
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
// Styles
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 900,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    marginTop: theme.spacing(38),
  },
  toolbar: theme.mixins.toolbar,
  welcome: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: "none",
    background: "transparent",
    backgroundColor: "rgba(0,0,0,.3)",
  },
  links: {
    marginRight: theme.spacing(1),
    cursor: "pointer",
    color: "white",
  },
  root: {
    display: "flex",
    backgroundColor: "#F3F5F7",
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: "#24292e",
    padding: theme.spacing(2),
  },
}));
export default function App() {
  const classes = useStyles();
  const about = useRef(null);
  const portfolio = useRef(null);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.open = null;
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <div>
        <AppBar elevation={0} className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h5"
              id="rw"
              className={classes.links}
              onClick={() => about.current.scrollIntoView()}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              id="section-header"
              className={classes.links}
              onClick={() => portfolio.current.scrollIntoView()}
            >
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <section>
        {/* LANDING HERO */}
        <Paper className={classes.mainFeaturedPost}>
          <div className={classes.overlay}>
            <Grid container>
              <Grid item xs={12}>
                <Fade cascade delay={300}>
                  <div className={classes.mainFeaturedPostContent}>
                    <Typography
                      variant="h4"
                      align="center"
                      id="rw"
                      style={{ marginBottom: 20 }}
                    >
                      Alex White
                    </Typography>
                    <Typography
                      variant="h5"
                      align="center"
                      id="rw"
                      style={{ marginBottom: 60 }}
                    >
                      Full Stack Software Engineer
                    </Typography>
                    <div style={{ textAlign: "center" }}>
                      <Tooltip
                        title="LinkedIn"
                        arrow
                        TransitionComponent={Zoom}
                      >
                        <Fab
                          style={{ marginRight: 10 }}
                          onClick={() =>
                            openInNewTab(
                              "https://www.linkedin.com/in/alex-white-92aa88200/"
                            )
                          }
                        >
                          <LinkedInIcon />
                        </Fab>
                      </Tooltip>
                      <Tooltip title="Github" arrow TransitionComponent={Zoom}>
                        <Fab
                          onClick={() =>
                            openInNewTab("https://github.com/Alexlloydwhite")
                          }
                          style={{ marginRight: 10 }}
                        >
                          <GitHubIcon />
                        </Fab>
                      </Tooltip>
                    </div>
                  </div>
                </Fade>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </section>
      <div ref={about}></div>
      <section className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.title}>
            <Typography
              variant="h3"
              align="center"
              id="section-header"
              style={{ marginBottom: 30 }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              align="center"
              id="rw"
              style={{ marginBottom: 30 }}
            >
              I’m a recent graduate from Prime Digital Academy. I have strong
              expertise in data structures, Javascript, React, state magenment
              with Redux, relational databases with PostgreSQL, and servers with
              NodeJS and Express.
              <br />
              <br />
              Aside from being a student at Prime, I’ve worked at several
              globally recognized hospitality companies. I’m certainly a junior
              level Software Engineer however my business and communication
              skills are non junior level. I have experience solving complex
              business problems, leading and building diverse teams, designing
              procedures and solutions, and working quickly in fast paced high
              pressure environments. My emotional intelligence, proven record of
              success, and attention to detail are what set me apart from my
              peers.
              <br />
              <br />
              In my free time i enjoy wine tastings, bouldering, cycling,
              cooking, running, and golfing.
            </Typography>
            <Divider variant="middle" />
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Avatar src={ReactLogo} className={classes.avatar} />
                <Typography variant="h5" align="center">
                  Front End
                </Typography>
                <Typography variant="h6" align="center" id="rw">
                  I love making things look really good. My frontend skills
                  include HTML5, CSS3, Material Design principles, Typescript,
                  and Javascript (ES6) with a heavy focus on React (functional
                  components with hooks and state management with Redux).
                  Additionally i've worked with and built projects using jQuery.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Avatar src={NodeLogo} className={classes.avatar} />
                <Typography variant="h5" align="center">
                  Back End
                </Typography>
                <Typography variant="h6" align="center" id="rw">
                  The technologies i've used on the backend include NodeJS,
                  Express, and PostgreSQL with additional exposure to AWS
                  (including S3, Lambda, DyanmoDB, Amplify, CloudWatch, and IAM)
                  and Flask servers with Python. I have experience designing and
                  building RESTFUL APIs as well as working with third party
                  APIs.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Avatar src={Handshake} className={classes.avatar} />
                <Typography variant="h5" align="center">
                  Full Stack
                </Typography>
                <Typography variant="h6" align="center" id="rw">
                  The glue that holds it all together... JSON is my best friend!
                  <br />
                  <br /> Every application in my portfolio is full stack.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <div ref={portfolio}></div>
      <section className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.title}>
            <Typography
              variant="h3"
              align="center"
              id="section-header"
              style={{ marginBottom: 30 }}
            >
              Portfolio
            </Typography>
          </div>
          <Grid container spacing={5} style={{ marginBottom: 50 }}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardMedia component="img" src={CellarDexScreenShot} />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    CellarDex
                  </Typography>
                  <Typography id="rw" variant="h6">
                    CellarDex is a responsive web application, it is designed to
                    be used on either a desktop or mobile phone. This
                    application recommends food and wine pairings and allows
                    users to save pairings and provide personal insights to each
                    recommendation. The first week (10 hours) was spent scoping
                    and creating wire frames, ERD, and schedule. The next 2
                    weeks were entirely devoted to coding, testing, bug fixing,
                    and implementing the numerous features.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/Alexlloydwhite/cellardex"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                  <Button
                    onClick={() =>
                      openInNewTab("https://cellar-dex.herokuapp.com/")
                    }
                  >
                    Deployed App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardMedia component="img" src={AwsTodoListScreenShot} />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Serverless AWS <br /> TypeScript To-do List
                  </Typography>
                  <Typography id="rw" variant="h6">
                    The front end of this application was built with TypeScript,
                    React (functional components with hooks), Redux, Jest,
                    HTML5, and CSS3. While the serverless back end was built
                    with AWS Lambda, AWS S3, AWS DynamoDB, AWS CloudWatch, and
                    Node.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/Alexlloydwhite/aws-react-todo-list"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                  <Button
                    onClick={() =>
                      openInNewTab(
                        "https://main.d2jlzfmw2fqzuz.amplifyapp.com/"
                      )
                    }
                  >
                    Deployed App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardMedia component="img" src={OurEconomicLives} />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Our Economic Lives (Client Project)
                  </Typography>
                  <Typography id="rw" variant="h6">
                    Our Economic Lives is a web application designed and built
                    for a client that offers career services. It aims to help
                    empower career competencies. This application has three
                    distinct user types. Admins create career pyramids (content)
                    via CSV upload. Coaches invite and manage clients. Clients
                    (end users) choose a career pyramid and work through each
                    tier and building block.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/Alexlloydwhite/our-economic-lives"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                  <Button
                    onClick={() =>
                      openInNewTab("https://our-economic-lives.herokuapp.com/")
                    }
                  >
                    Deployed App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardMedia component="img" src={ReactMovieScreenShot} />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Movie List
                  </Typography>
                  <Typography id="rw" variant="h6">
                    This project solidified my understanding of redux-saga and
                    reducers. Additionally I was able to greatly increase my
                    knowledge of the React library. I began the project with a
                    database of movies. I displayed each movie poster on the DOM
                    with an onClick to display details about the movie. I used
                    params to allow the details page information to persist thru
                    refreshing the browser. From here users are able to click an
                    edit button, I used react-router-dom to direct the user to
                    an edit page to edit details about the movie and post the
                    updates to SQL. On the homepage, I created a search bar that
                    allows users to search for a movie and see the results of
                    the search in real time. There is conditional rendering and
                    local state for search toggle. I built a form page whereby
                    users are able to post new movies to the database, this
                    required SQL joins as the movies and genres are kept in
                    different tables. My favorite part of this application is
                    that has the ability to scale while retaining all base
                    functionality.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/Alexlloydwhite/react-movie-sagas"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                  <Button
                    onClick={() =>
                      openInNewTab("https://vast-taiga-46649.herokuapp.com/")
                    }
                  >
                    Deployed App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardMedia component="img" src={PhotoGalleryScreenShot} />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Photo Gallery
                  </Typography>
                  <Typography id="rw" variant="h6">
                    This application is a photo gallery of images from my life
                    in San Francisco. Users are able to add new images, and like
                    or delete images in the gallery. This was my first project
                    built with React. During this project I learned Material
                    design principles with MUI, local state with the React use
                    state hook, and gained valuable knowledge of the React
                    ecosystem.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/Alexlloydwhite/react-photo-gallery"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined">
                <CardMedia component="img" src={TodoListScreenShot} />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    To Do List
                  </Typography>
                  <Typography id="rw" variant="h6">
                    This app allows you to create and manage a to-do list of
                    tasks. You can add, delete, edit, and toggle tasks as
                    complete! This was my final project using jQuery and first
                    project using full stack development. I went into this
                    project with a plan and image of what i wanted the final
                    product to look like, this made it pretty easy to break the
                    project down into small steps and complete all of the
                    features over multiple days. I had goals of challenging my
                    knowledge of CSS and figuring out how to create an edit
                    feature. The biggest challenge i faced was the edit
                    feature!! I got it to work but had to refactor several times
                    to simplify the code.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/Alexlloydwhite/sql-todo-list"
                      )
                    }
                  >
                    Github Repo
                  </Button>
                  <Button
                    onClick={() =>
                      openInNewTab(
                        "https://arcane-reaches-75890.herokuapp.com/"
                      )
                    }
                  >
                    Deployed App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <footer className={classes.footer}>
        <Typography align="center" style={{ color: "white" }} id="rw">
          Alex White |{" "}
          <a
            href="mailto:alexlloydwhite@gmail.com"
            style={{ color: "white" }}
            id="rw"
          >
            Hire me!
          </a>
        </Typography>
      </footer>
    </div>
  );
}
