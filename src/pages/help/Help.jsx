import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@material-ui/core";

const Help = () => {

    return <Typography paddingLeft={8} paddingTop={25}>
        <Typography varient="h1">

            <div>
                <h2>How can we help?</h2>
                <Box m={1} p={1}>

                    <p>
                        Account & Security <br />
                        Managing billing, plan changes, user roles and security.
                    </p>
                    <Button variant="contained" color="primary">
                        GET STARTED
                    </Button>
                </Box>
                <Box m={1} p={1}>

                    <p>
                        <br />
                        Contact Management <br />
                        Adding, managing, customizing and reporting on your Contacts.

                    </p>
                    <Button variant="contained" color="primary">
                        GET STARTED
                    </Button>
                </Box>
                <Box m={1} p={1}>

                    <p>
                        <br />
                        Calendar & Tasks <br />
                        Calendar and how to create, organize and report on Tasks.


                    </p>
                    <Button variant="contained" color="primary">
                        GET STARTED
                    </Button>
                </Box>
            </div>
        </Typography>
    </Typography>
};

export default Help;