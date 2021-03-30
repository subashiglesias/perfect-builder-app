import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabList from '@material-ui/lab/TabList';
import {
    createMuiTheme,
    makeStyles,
    ThemeProvider
} from "@material-ui/core/styles";
import Tab from '@material-ui/core/Tab';
import {TabPanel, TabContext} from '@material-ui/lab';
import './AdminAddHomePage.scss'
import ProjectsPage from "../Pages/ProjectsPage";
import ItemsPage from "../Pages/ItemsPage";
import VendorsPage from "../Pages/VendorsPage";
import ContractorsPage from "../Pages/ContractorsPage";
import CustomersPage from "../Pages/CustomersPage";

const AdminAddHomePage = () => {
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = createMuiTheme({
        overrides: {
            MuiAppBar: {
                colorPrimary: {
                    backgroundColor: "#333232"
                }
            }
        }
    });

    const useStyles = makeStyles(theme => ({
        customizeToolbar: {
            maxHeight: "3rem"
        }
    }));
    const classes = useStyles();

    return (
        <div className="home-page">
            <ThemeProvider theme={theme}>
                <TabContext value={value}>
                    <AppBar position="static" className={classes.customizeToolbar}>
                        <TabList onChange={handleChange} aria-label="Group of screens">
                            <Tab label="Items" value="1"/>
                            <Tab label="Vendors" value="2"/>
                            <Tab label="Contractors" value="3"/>
                            <Tab label="Projects" value="4"/>
                            <Tab label="Customers" value="5"/>
                        </TabList>
                    </AppBar>
                    <TabPanel value="1"> <ItemsPage/> </TabPanel>
                    <TabPanel value="2"> <VendorsPage/> </TabPanel>
                    <TabPanel value="3"> <ContractorsPage/> </TabPanel>
                    <TabPanel value="4"> <ProjectsPage/> </TabPanel>
                    <TabPanel value="5"> <CustomersPage/> </TabPanel>
                </TabContext>
            </ThemeProvider>
        </div>)
}

export default AdminAddHomePage;