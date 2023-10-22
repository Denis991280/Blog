import { isValidElement, useState } from "react"
import LikesDislikes from "./counter";

export default function Blog() {
    const [blogTitle, setBlogTitle] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([])
    const [date, setDate] = useState("")
    const [createBlog, setCreateBlog] = useState("formContainerDisabled")
    const [createBlogBtn, setCreateBlogBtn] = useState("Create new blog +");
    // const [defaultImg, setDefaultImage] = useState("src/assets/images.png");


    const titleInput = (e) => {
        setBlogTitle(e.target.value)
    }

    const nameInput = (e) => {
        setName(e.target.value)
    }

    const imageInput = (e) => {
            setImage(e.target.value)
    }

    const contentInput = (e) => {
        setContent(e.target.value)
    }

    const submitDate = () => {
        let date = new Date()
        setDate(date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + ". at " + date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0'))
    }

    const submitBlog = () => {
        const createBlog = {id: new Date().getTime(), blogTitle, name, image, content, date}

        setBlogs([...blogs, createBlog])

        setBlogTitle("")
        setName("")
        setContent("")
        setImage("")
    }

    const toggleCreateBlog = () => {
        if(createBlog === "formContainer") {
            setCreateBlog("formContainerDisabled")
        } else {
            setCreateBlog("formContainer")
        }

        if(createBlogBtn === "Create new blog +") {
            setCreateBlogBtn("Close")
        } else {
            setCreateBlogBtn("Create new blog +")
        }
    }


    return (
        <>
        <div className="sa">
            <button className="button-34" role="button" onClick={() => toggleCreateBlog()}>{createBlogBtn}</button>
        </div>

        <div className={createBlog}>

            <div className="blogForm">
                <h2>Create new blog!</h2>
                <div>
                    <label>Title: <input onChange={titleInput} type="text" placeholder="Name the title of your blog" value={blogTitle}/></label>
                </div>

                <div>
                    <label className="labels">Author: <input onChange={nameInput} type="text" placeholder="Enter your name" value={name}/></label>
                </div>
                <div>
                    <label className="labels">Image URL: <input onChange={imageInput} type="text" placeholder="URL of your image" value={image}/></label>
                </div>
                
                <textarea className="test" onChange={contentInput} placeholder="Enter the content of your blog:" value={content}></textarea>
                <button className="button-33" role="button" onMouseEnter={() => {submitDate()}} onClick={() => {submitBlog()}}>Post</button>

            </div>
        </div>

        <div className="postContainer">
        {blogs.map((element) => {
            return (
                <>
                <div className="blogElement" key={element.id}>
                    <div className="imgContainer">
                        <img src={element.image} height={100} onError={(e) => {e.target.onerror = null; e.target.src ="src/assets/error.png"; }}/>
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

                    <span className="deleteIcon"><i className="fa-solid fa-trash fa-lg" onClick={() => {const deleteBlogs = blogs.filter((deleteSingleBlog) => {return deleteSingleBlog.id !== element.id;}); setBlogs(deleteBlogs);}}></i></span>
                </div>
                </>
                
            )
        })}
        </div>
        </>
    )
}
