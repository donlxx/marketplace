import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {RangeSlider} from "./RangeSlider";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {appConstants} from "../constant";
import {NavLink} from "react-router-dom";
import {clearSearch, getSearchResult} from "../action/product.action";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    title: {
        flexGrow: 1,
    },
}));


export function PersistentDrawerLeft(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleSetYear = (e) => {
        dispatch({
            type: appConstants.searchYear,
            payload: [...e]
        });

    };
    const handleSetHP = (hp) => {
        dispatch({
            type: appConstants.searchHp,
            payload: [...hp]
        });
    };
    const handleSetHeatingSurface = (e) => {
        dispatch({
            type: appConstants.searchHeatingSurface,
            payload: [...e]
        });
    };
    const handleSetPressure = (e) => {
        dispatch({
            type: appConstants.searchPressure,
            payload: [...e]
        });
    };

    const handleSetLength = (e) => {
        dispatch({
            type: appConstants.searchLength,
            payload: [...e]
        });
    };
    const handleSetHight = (e) => {
        dispatch({
            type: appConstants.searchHight,
            payload: [...e]
        });
    };
    const filter=useSelector(state=>state.filter);
    const products=useSelector(state=>state.product.rowData)
    const handleOnSearch = ()=>{
        console.log(filter);
        dispatch(getSearchResult(filter.filter,products));
    }
    const handleOnClear=()=>{
        dispatch(clearSearch());
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent Drawer
                    </Typography>
                    <NavLink to={appConstants.productRoute}>
                        <Typography variant="h6" className={classes.title}>
                            <Button> product</Button>
                        </Typography>
                    </NavLink>
                    <NavLink to={appConstants.testRoute}>
                        <Typography variant="h6" className={classes.title}>
                            <Button> test</Button>
                        </Typography>
                    </NavLink>
                    {/*<NavLink to={appConstants.productDetailRoute}>*/}
                    {/*    <Typography variant="h6" className={classes.title}>*/}
                    {/*        <Button> detail test</Button>*/}
                    {/*    </Typography>*/}
                    {/*</NavLink>*/}


                </Toolbar>


            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography className={classes.heading}>Filter</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <div className={classes.drawerHeader}>
                    <Button size="small" color="primary" style={{margin: "auto"}} onClick={handleOnSearch}>
                        Search
                    </Button>
                    <Button size="small" color="primary" style={{margin: "auto"}} onClick={handleOnClear}>
                        Clear
                    </Button>
                </div>
                <Divider/>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography className={classes.heading}>Model Year</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <RangeSlider min={2000} max={2020} setValue={handleSetYear}/>
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>


                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Technical Specifications</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>House Power</p>
                            <RangeSlider min={50} max={1000} setValue={handleSetHP}/>
                            <p>Heating Surface(FT^2)</p>
                            <RangeSlider min={1000} max={5000} setValue={handleSetHeatingSurface}/>
                            <p>Design pressure</p>
                            <RangeSlider min={200} max={400} setValue={handleSetPressure}/>
                            <p>Length Overall(IN)</p>
                            <RangeSlider min={100} max={400} setValue={handleSetLength}/>
                            <p>Hight Overall(IN)</p>
                            <RangeSlider min={70} max={150} setValue={handleSetHight}/>
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}> Brand </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            on hold
                            {/*<RangeSlider min={2000} max={2020}/>*/}
                            {/*<TextField id="standard-basic" label="Model year" />*/}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Typography paragraph>

                </Typography>
                <Typography paragraph>

                </Typography>
                {props.children}
            </main>
        </div>
    );
}


const Header = (props) => {
    return PersistentDrawerLeft(props);

};
export default Header;
