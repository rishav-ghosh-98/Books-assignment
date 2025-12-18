import useFetch from "../useFetch"
const BooksByAuthor = ({ author }) => {
    const {data,loading,error} = useFetch(`https://backend-assignment1-alpha.vercel.app/books/author/${author}`)
    console.log(data)
    const books = data?.book || []
    return (
        <div>
            <h2>Books by {author}</h2>
            <ul>
               {books?.map((bk) => (<li>{bk.title}</li>))}
            </ul>
        </div>
    )
}
export default BooksByAuthor