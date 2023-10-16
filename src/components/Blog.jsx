import { isValidElement, useState } from "react"

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
            <h2>Post your blog!</h2>
            <div className="blogForm">
                <input onChange={titleInput} type="text" placeholder="Name the title of your blog" />
                <input onChange={nameInput} type="text" placeholder="Enter your name" />
                <input onChange={imageInput} type="text" placeholder="URL of the img" />
                <textarea onChange={contentInput} placeholder="Enter the content of your blog:"></textarea>
                <button onClick={submitBlog}>Submit</button>
            </div>

            <div className="previewContainer">
                <h3>Blog preview</h3>
                <p>{blogTitle}</p>
                <p>{name}</p>
                <p>{content}</p>
            </div>
        </div>

        {blogs.map((blog) => {
            return (
                <div key={blog.id}>
                    <p>{blog.blogTitle}</p>
                    <p>Posted on: {(posted.getMonth() + 1) + "/" + posted.getDate() + " " + posted.getHours() + ":" + posted.getMinutes()}</p>
                    <p>{blog.name}</p>
                    <img src={blog.image} height={100}/>
                    <p>{blog.content}</p>
                    <button onClick={(e) => {const deleteBlogs = blogs.filter((deleteSingleBlog) => {return deleteSingleBlog.id !== blog.id;}); setBlogs(deleteBlogs);}}>Delete</button>
                </div>
            )
        })}
        </>
    )
}