import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const Dashboard = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <Typography variant="h3" gutterBottom align="center" color="primary">
                Esavers Dashboard
            </Typography>

            <Grid container spacing={4}>
                {/* Voice Analysis Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Voice Analysis
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Analyze voice patterns to detect stress or mood changes.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Start Analysis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Texting Speed Analysis Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Texting Speed Analysis
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Understand behavior through texting speed patterns.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Start Analysis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Facial and Body Language Analysis Section */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Facial & Body Language Analysis
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Use AI to detect expressions and movements for analysis.
                            </Typography>
                            <Button variant="contained" color="primary">
                                Start Analysis
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Wearable Integration Section */}
                <Grid item xs={12}>
                    <Card sx={{ height: '100%', boxShadow: 3 }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Wearable Integration
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                View sleep data, average BPM, and GPS location information.
                            </Typography>
                            <Button variant="contained" color="primary">
                                View Data
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
