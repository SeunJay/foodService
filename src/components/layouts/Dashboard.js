import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import List from "@material-ui/core/List";
import { Typography } from "@material-ui/core";
//import {Link} from "react-router-dom"
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../Auth";
import app from "../../firebase";
//import { mainListItems, secondaryListItems } from "./listItems";
//import Chart from "./Chart";
//import Deposits from "./Deposits";
//import Orders from "./Orders";

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Built with love by the "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {" team."}
//     </Typography>
//   );
// }

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  menuList: {
    textAlign: "center"
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
            style={{ textAlign: "left", textTransform: "unset" }}
          >
            Admin Dashboard
          </Typography>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginLeft: "100px"
            }}
          >
            <li style={{ listStyle: "none", marginTop: "20px", width: "100%" }}>
              Admin email
            </li>
            <li style={{ listStyle: "none", marginTop: "20px", width: "100%" }}>
              <button onClick={() => app.auth().signOut()}>Logout</button>
            </li>
          </ul>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon style={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "#e67e22" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon style={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary="Orders" style={{ color: "#e67e22" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon style={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" style={{ color: "#e67e22" }} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon style={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary="Reports" style={{ color: "#e67e22" }} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <LayersIcon style={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText primary="Integrations" style={{ color: "#e67e22" }} />
          </ListItem>
        </div>
        {/* <List>{secondaryListItems}</List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>{/* <Chart /> */}</Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>{/* <Deposits /> */}</Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>{/* <Orders /> */}</Paper>
            </Grid>
          </Grid>
        </Container>
        {/* <MadeWithLove /> */}
      </main>
    </div>
  );
}
