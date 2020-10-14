import React, { Fragment } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import slugify from '../Scripts/slugify';

const Trail = (props) => { 
    return (
        <Fragment>
            <br></br>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.trailName}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Location: {props.location}</ListGroupItem>
                    <ListGroupItem>Length: {props.length} miles</ListGroupItem>
                    <ListGroupItem>Difficulty: {props.difficulty}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={ `/trails/${slugify(props.trailName)}` }>Take me here!</Card.Link>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default Trail; 