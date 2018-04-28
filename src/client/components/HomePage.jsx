import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';


const HomePage = () => (
    <Card className="form">
        <CardContent>
            <Typography gutterBottom variant="title" component="h1">
                Scola
            </Typography>
            <Typography component="p">
                An organizational too for students, teachers, and schools.
            </Typography>
        </CardContent>
    </Card>
);

export default HomePage;