import useFetch from "../useFetch"
import { useState } from "react"
const Books = () => {
     const [successMsg, setSuccessMsg] = useState("");
    const { data,loading,error } = useFetch("https://backend-assignment1-alpha.vercel.app/books")
        console.log(data)
        const handleDelete = async(bookId) => {
            try{
                const response = await fetch(`https://backend-assignment1-alpha.vercel.app/books/delete/${bookId}`,{
                    method: "DELETE"
                }); if (!response.ok) {
        throw new Error("Failed to delete the book");
      }
      setSuccessMsg("Book deleted successfully");
      window.location.reload()
            }catch{
                console.error(error);
            }
        }
        return(
            <div>
                <h2>All Books</h2>
                <ul>
                    {data?.map((book) => (<li>{book.title}
                        <button type="button" onClick={() => handleDelete(book._id)}>Delete</button>
                    </li>))}
                </ul>
            </div>
        )
    }

export default Books