import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//props -> movie


const MovieCard = (props) => {
    const { movie } = props
    console.log("MovieCard Component:-", movie);
    let ImageURL = movie.show.image;
    if(ImageURL!=null && ImageURL.hasOwnProperty("original")){
        ImageURL = ImageURL.original;
    }else ImageURL="";
    const navigate = useNavigate()

    function handleClick() {
        // redirect to the MoviesBookingPage component
        //  and pass the movie
        let movieId = movie.show.id
        navigate(`/bookmovie/${movieId}`, { state: { movie } })
    }


    return (
        <>
            <Card style={{ width: '18rem', borderRadius:"40px"}}>
                <Card.Img style={{borderRadius:"40px"}} variant="top" src={ImageURL ? ImageURL :"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} />
                <Card.Body>
                    <Card.Title>{movie.show.name}</Card.Title>
                    <Card.Text>
                        Language: {movie.show.language}
                        <br />
                        Status: {movie.show.status}
                        <br />
                        Premiered On: {movie.show.premiered}
                        <br />
                        Visit: {movie.show.officialSite}
                    </Card.Text>
                    <Button variant="dark"
                        onClick={handleClick}
                    >Show More</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default MovieCard;