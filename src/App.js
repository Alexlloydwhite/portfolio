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
  CardActions
} from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
// Local Import
import './App.css';
import Resume from './Alex White Resume .pdf';
import LandingImage from './LandingImage.jpg';
// React Import
import {useRef} from 'react';
// Styles
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${LandingImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 900,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    marginTop: theme.spacing(38),
  },
  toolbar: theme.mixins.toolbar,
  welcome: {
    flexGrow: 1,
  },
  appBar: {
    boxShadow: 'none',
    background: 'transparent',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  links: {
    marginRight: theme.spacing(1),
    cursor: 'pointer',
    color: 'white'
  },
  root: {
    display: 'flex',
    backgroundColor: 'rgba(0,0,0,.1)',
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(2)
  },
  footer: {
    backgroundColor: '#24292e',
    padding: theme.spacing(2),
  }
}))
export default function App() {
  const classes = useStyles();
  const about = useRef(null);
  const portfolio = useRef(null);
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
              id="rw" 
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
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${LandingImage})` }} >
          <div className={classes.overlay}>
            <Grid container>
              <Grid item xs={12}>
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
                  <div style={{ textAlign: 'center' }}>
                    <Tooltip
                      title="LinkedIn"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <Fab 
                        color="grey" 
                        style={{ marginRight: 10 }}
                        href="https://www.linkedin.com/in/alex-white-92aa88200/"
                      >
                        <LinkedInIcon />
                      </Fab>
                    </Tooltip>
                    <Tooltip
                      title="Github"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <Fab 
                        href="https://github.com/Alexlloydwhite" 
                        color="grey" 
                        style={{ marginRight: 10 }}
                      >
                        <GitHubIcon />
                      </Fab>
                    </Tooltip>
                    <Tooltip
                      title="Resume"
                      arrow
                      TransitionComponent={Zoom}
                    >
                      <Fab 
                        color="grey"
                        onClick={() => window.open(Resume)} 
                      >
                        <PictureAsPdfIcon />
                      </Fab>
                    </Tooltip>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </section>
      <div  ref={about}></div>
      <section className={classes.root}>
        <Container className={classes.container}>
          <div className={classes.title}>
            <Typography
              variant="h4"
              align="center"
              id="rw"
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
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
            <Divider variant="middle" />
          </div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                  className={classes.avatar}
                />
                <Typography variant="h5" align="center">
                  Front End
                </Typography>
                <Typography variant="h6" align="center" id="rw">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Avatar
                  src="https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
                  className={classes.avatar}
                />
                <Typography variant="h5" align="center">
                  Back End
                </Typography>
                <Typography variant="h6" align="center" id="rw">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Avatar
                  src="https://www.pinclipart.com/picdir/big/550-5502228_handshake-vector-shake-hands-vector-png-clipart.png"
                  className={classes.avatar}
                />
                <Typography variant="h5" align="center">
                  Full Stack
                </Typography>
                <Typography variant="h6" align="center" id="rw">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              variant="h4"
              align="center"
              id="rw"
              style={{ marginBottom: 30 }}
            >
              Portfolio
            </Typography>
          </div>
          <Grid container spacing={5} style={{ marginBottom: 50 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  src=""
                />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    CellarDex
                  </Typography>
                  <Typography id="rw" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Alexlloydwhite/cellardex"
                  >
                    Github Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/77769682/118414532-be465100-b66a-11eb-9711-c2407968c5a8.png"
                />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Movie List
                  </Typography>
                  <Typography id="rw" variant="h6">
                    This project solidified my understanding of redux-saga and reducers. Additionally I was able to greatly increase my knowledge of the React library.
                    I began the project with a database of movies. I displayed each movie poster on the DOM with an onClick to display details about the movie. I used params to allow the details page information to persist thru refreshing the browser. From here users are able to click an edit button, I used react-router-dom to direct the user to an edit page to edit details about the movie and post the updates to SQL. On the homepage, I created a search bar that allows users to search for a movie and see the results of the search in real time. There is conditional rendering and local state for search toggle. I built a form page whereby users are able to post new movies to the database, this required SQL joins as the movies and genres are kept in different tables.
                    My favorite part of this application is that has the ability to scale while retaining all base functionality.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Alexlloydwhite/react-movie-sagas"
                  >
                    Github Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/77769682/116876870-c326f180-abe2-11eb-86e6-3b37fce8c452.png"
                />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Photo Gallery
                  </Typography>
                  <Typography id="rw" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Alexlloydwhite/react-photo-gallery"
                  >
                    Github Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  src=""
                />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    Feedback Loop
                  </Typography>
                  <Typography id="rw" variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Alexlloydwhite/redux-feedback-loop"
                  >
                    Github Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  src="https://user-images.githubusercontent.com/77769682/116482096-12b79700-a84a-11eb-81c6-b9ff56cdbe2d.png"
                />
                <CardContent>
                  <Typography id="rw" variant="h4" gutterBottom>
                    To Do List
                  </Typography>
                  <Typography id="rw" variant="h6">
                    This app allows you to create and manage a to-do list of tasks. You can add, delete, edit, and toggle tasks as complete! This was my final project using jQuery and first project using full stack development. I went into this project with a plan and image of what i wanted the final product to look like, this made it pretty easy to break the project down into small steps and complete all of the features over multiple days. I had goals of challenging my knowledge of CSS and figuring out how to create an edit feature.

                    The biggest challenge i faced was the edit feature!! I got it to work but had to refactor several times to simplify the code.
                  </Typography>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                  <Button
                    startIcon={<GitHubIcon />}
                    href="https://github.com/Alexlloydwhite/sql-todo-list"
                  >
                    Github Repo
                  </Button>
                  <Button href="https://arcane-reaches-75890.herokuapp.com/">
                    Deployed App
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <footer className={classes.footer}>
        <Typography 
          align="center" 
          style={{ color: 'white' }}
          id="rw"
        >
          Alex White | Alexlloydwhite@gmail.com
        </Typography>
      </footer>
    </div >
  );
}