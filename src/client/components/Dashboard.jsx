import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const Dashboard = ({ secretData }) => (
    <div className="grid-container">
        <Grid container spacing={24}>
            <Grid item xs={12} sm={4}>
                <Paper className="container">
                    <Typography variant="title" component="h3">
                        Classes
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Paper className="container">
                    <Typography variant="title" component="h3">
                        Dashboard
                    </Typography>
                    {secretData && <p style={{ fontSize: '16px', color: 'green' }}>{secretData}</p>}
                </Paper>
            </Grid>
        </Grid>
    </div>
);

Dashboard.propTypes = {
    secretData: PropTypes.string.isRequired
};

export default Dashboard;