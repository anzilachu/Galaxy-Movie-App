import React,{useEffect} from 'react'
import myLogo from '../../assets/images/logo.png'
import myLogo1 from '../../assets/images/logo1.png'
import {Divider,List,ListItem,ListItemText,ListSubheader,ListItemIcon,Box,CircularProgress} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import useStyles from './styles'
import {useDispatch , useSelector} from 'react-redux'

import { selectGenreOrCategory } from '../../features/currentGenreOrCategory'
import { useGetGenresQuery } from '../../services/TMDB'
import genreIcons from '../../assets/genres'


const categories = [
    { label : 'Popular' , value : 'popular'},
    { label : 'Top Rated' , value : 'top_rated'},
    { label : 'Upcoming' , value : 'upcoming'},
];

const redLogo = myLogo1;

const blueLogo = myLogo;

const Sidebar = ({setMobileOpen}) => {
    const { genreIdOrCategoryName }= useSelector((state)=>state.currentGenreOrCategory);
    const theme = useTheme();
    const classes=useStyles();
    const {data,isFetching}= useGetGenresQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        setMobileOpen(false);
    },[genreIdOrCategoryName])

  return (
    <>
        <Link to='/' className={classes.imageLink}>
        <img 
            className= {classes.image}
            src={theme.palette.mode === 'light' ? redLogo : blueLogo}
            alt="galaxy logo"
        />
        {/* <img
    className={classes.image}
    src={myLogo}
    alt="My Company Logo"
/> */}
        </Link>
        <Divider/>
        <List>
            <ListSubheader>Categories</ListSubheader>
            {categories.map(({ label,value}) => (
                <Link key={label} className={classes.links} to='/'>
                    <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
                    <ListItemIcon>
                            <img src={genreIcons[label.toLowerCase()]} className={classes.genreImage} height={30} />
                        </ListItemIcon>
                        <ListItemText primary = {label}></ListItemText>
                    </ListItem>
                </Link>
            ))}
        </List>
        <Divider/>
        <List>
            <ListSubheader>Genre</ListSubheader>
            {isFetching ? (
                <Box display="flex" justifyContent="center">
                   <CircularProgress/>
                </Box>
            ): data.genres.map(({ name,id}) => (
                <Link key={name} className={classes.links} to='/'>
                    <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
                       <ListItemIcon>
                            <img src={genreIcons[name.toLowerCase()]} className={classes.genreImage} height={30} />
                        </ListItemIcon>
                        <ListItemText primary = {name}></ListItemText>
                    </ListItem>
                </Link>
            ))}
        </List>
    </>
  )
}

export default Sidebar