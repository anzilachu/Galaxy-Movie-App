import React,{useRef} from 'react';
import { CssBaseline } from '@mui/material';
import { Route,Switch } from 'react-router-dom';
import { Actors,MovieInformation,Movies,NavBar,Profile} from './';
import useStyles from  './styles';
import useAlan from './Alan';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();
 
   useAlan();

  return (
    <div className={classes.root}>
    <CssBaseline />
    <NavBar />
        <main className={classes.content}>
        <div className={classes.toolbar}/>
          <Switch>
            <Route exact path="/movie/:id">
              <h1><MovieInformation/></h1>
            </Route>
            <Route exact path="/actors/:id">
              <h1><Actors/></h1>
            </Route>
            <Route exact path={["/",'/approved']}>
              <h1><Movies/></h1>
            </Route>
            <Route exact path="/profile/:id">
              <h1><Profile/></h1>
            </Route>
          </Switch>
        </main>
        <div ref = {alanBtnContainer} />
    </div>
  )
};

export default App