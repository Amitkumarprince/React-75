import { useParams } from "react-router-dom"

export const MovieDetails = () => {
    const params = useParams()
    console.log(params)
    return <h1>Hello Amit {params.movieID} </h1>
}

// 9:00