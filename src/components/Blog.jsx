import { isValidElement, useState } from "react"
import LikesDislikes from "./counter";

export default function Blog() {
    const [blogTitle, setBlogTitle] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([])
    const [date, setDate] = useState("")


    const titleInput = (e) => {
        setBlogTitle(e.target.value)
    }

    const nameInput = (e) => {
        setName(e.target.value)
    }

    const imageInput = (e) => {
        if(e.target.value === "") {
            setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png")
        } else {
            setImage(e.target.value)
        }

    }

    const contentInput = (e) => {
        setContent(e.target.value)
    }

    const submitDate = () => {
        setDate(new Date().getDate() + "." + (new Date().getMonth()) + " " + new Date().getFullYear() + ". at " + new Date().getHours() + ":" + new Date().getMinutes())
    }

    const submitBlog = () => {
        const createBlog = {id: new Date().getTime(), blogTitle, name, image, content, date}

        setBlogs([...blogs, createBlog])

        setBlogTitle("")
        setName("")
        setImage("")
        setContent("")
    }
    return (
        <>
        <div className="formContainer">

            <div className="blogForm">
                <h2>Whats on your mind?</h2>
                <div>
                    <label>Title: <input onChange={titleInput} type="text" placeholder="Name the title of your blog" value={blogTitle}/></label>
                </div>

                <div>
                    <label className="labels">Author: <input onChange={nameInput} type="text" placeholder="Enter your name" value={name}/></label>
                </div>
                <div>
                    <label className="labels">Image URL: <input onMouseEnter={imageInput} type="text" placeholder="URL of your image" /></label>
                </div>
                
                <textarea className="test" onChange={contentInput} placeholder="Enter the content of your blog:" value={content}></textarea>
                <button class="button-33" role="button" onMouseEnter={() => {submitDate()}} onClick={() => {submitBlog()}}>Post</button>

            </div>
        </div>

        <div className="postContainer">
        {blogs.map((element) => {
            return (
                <>
                <div className="blogElement" key={element.id}>
                    <div className="imgContainer">
                        <img src={element.image} height={100}/>
                    </div>

                    <div className="author-date">
                        <p><span className="postedBy">Blog posted by:</span> {element.name}</p>
                        <p><span className="postedBy2">Posted on:</span>{element.date}</p>
                    </div>

                    <div className="titleContainer">
                        <h2><span className="title">Title: </span>{element.blogTitle}</h2>
                    </div>
                    
                    <div className="contentContainer">
                        <p>{element.content}</p>
                    </div>

                    <div className="buttonsContainer">
                        <LikesDislikes />

                    </div>

                    <span className="deleteIcon"><i class="fa-solid fa-trash fa-lg" onClick={() => {const deleteBlogs = blogs.filter((deleteSingleBlog) => {return deleteSingleBlog.id !== element.id;}); setBlogs(deleteBlogs);}}></i></span>
                    
                </div>
                
                </>
                
            )
        })}
        </div>
        </>
    )
}
