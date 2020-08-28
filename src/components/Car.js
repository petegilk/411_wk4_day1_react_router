import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'
import './Car.css'


const Car = (props) => {
    let id = props.match.params.id -1;
    let thisCar = cars[id]
    console.log(thisCar);
    return (
        <div>
            <Container maxWidth="sm">
                <Paper variant="outlined">
                    <h1>{thisCar.Name.toUpperCase()}</h1>
                    {Object.keys(thisCar).map((key, index) => {
                        return (
                            <Chip label={`${key}: ${thisCar[key]}`} variant="outlined"></Chip>
                        )
                    })}
                </Paper>
            </Container>
        </div>
    )
}

export default Car