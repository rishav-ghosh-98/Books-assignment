import useFetch from "../useFetch"
const BooksByTitle = ({ title }) => {
    const { data,loading,error } = useFetch(`http://localhost:5000/books/${title}`)
    console.log(data)
    return ( data ?
        <div>
            <h2>{data.book.title}</h2>
            <p>Author:{data.book.author}</p>
            <p>Release Year{data.book.publishedYear}</p>
            <p>Genre: {data.book.genre.join(", ")}</p>
        </div> : loading && <p>loading</p>
    )
}
export default BooksByTitle