import { isValidElement, useState } from "react"

export default function Blog() {
    const [blogTitle, setBlogTitle] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [blogs, setBlogs] = useState([])

    const titleInput = (e) => {
        setBlogTitle(e.target.value)
    }



    const submitBlog = () => {
        const createBlog = {id: new Date().getTime(), title, name, img, content}

        setBlogs =([...blogs, createBlog])
        setBlogTitle(blogTitle)
    }

    return (
        <div className="formContainer">
            <h2>Post your blog!</h2>

            {/* <form className="blogForm"> */}
                <input onChange={titleInput} type="text" placeholder="Name the title of your blog" />
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="URL of the img" />
                <textarea placeholder="Enter the content of your blog:"></textarea>
                <button onClick={submitBlog}>Submit</button>
            {/* </form> */}


        </div>
    )
}