import { isValidElement, useState } from "react"
import LikesDislikes from "./counter";
import Comments from "./Comments";

export default function Blog() {
    const posted = new Date();
    const [blogTitle, setBlogTitle] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([])


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

    const submitBlog = () => {
        const createBlog = {id: new Date().getTime(), blogTitle, name, image, content}

        setBlogs([...blogs, createBlog])
    }



    return (
        <>
        <div className="formContainer">
            <div className="blogForm">
                <h2>Post your blog!</h2>
                <label>Title: <input onChange={titleInput} type="text" placeholder="Name the title of your blog" /></label>
                <label>Author: <input onChange={nameInput} type="text" placeholder="Enter your name" /></label>
                <label>Image URL: <input onChange={imageInput} type="text" placeholder="URL of the img" /></label>
                <textarea onChange={contentInput} placeholder="Enter the content of your blog:"></textarea>
                <button onClick={submitBlog}>Post</button>
            </div>

            <div className="previewContainer">
                <h2>Blog preview</h2>
                <p>{blogTitle}</p>
                <p>{name}</p>
                <textarea>{content}</textarea>
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
                        <p>{element.name}</p>
                        <p>Posted on: {posted.getDate() + "." + (posted.getMonth()+1) + ". at " + posted.getHours() + ":" + posted.getMinutes()}</p>
                    </div>

                    <div className="titleContainer">
                        <p>{element.blogTitle}</p>
                    </div>

                    <div className="buttonsContainer">
                        <button onClick={() => {const deleteBlogs = blogs.filter((deleteSingleBlog) => {return deleteSingleBlog.id !== element.id;}); setBlogs(deleteBlogs);}}>Delete</button>
                        <LikesDislikes />
                    </div>


                </div>

                <div className="contentContainer">
                    <p>{element.content}</p>
                </div>

                <Comments />
                </>
            )
        })}
        </div>
        </>
    )
}