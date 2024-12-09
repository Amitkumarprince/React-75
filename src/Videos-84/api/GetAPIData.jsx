export const getMoviesData = async () => {
    try {
        const response = await fetch(
            "http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
        )
        const data = response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}