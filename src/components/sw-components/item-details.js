import React from "react"
import withSwapi from "../hoc";
import { ItemDetails, Record } from "../item-details";

const StarshipDetails = withSwapi(
    (props) => <ItemDetails {...props} />,
    (swapi) => ({
        getData: swapi.getStarship,
        getImg: swapi.getStarshipImage
    })
)

const PeopleDetails = withSwapi(
    (props) => (
        <ItemDetails {...props}>
            <Record label='Gender' fieldName='gender' />
            <Record label='Eye color' fieldName='eyeColor' />
            <Record label='Birth year' fieldName='birthYear' />
        </ItemDetails>
    ),


    (swapi) => ({
        getData: swapi.getPerson,
        getImg: swapi.getPersonImage
    })
)

const PlanetDetails = withSwapi(
    (props) => <ItemDetails {...props} />,
    (swapi) => ({
        getData: swapi.getPlanet,
        getImg: swapi.getPlanetImage
    })
)
export { PeopleDetails, StarshipDetails, PlanetDetails }