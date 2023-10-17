import { useState } from "react"

export default function Comments() {
    const [comments, setComments] = useState([])
    const [commentTitle, setCommentTitle] = useState("");
    const [commentContent, setCommentContent] = useState("");
    // const [commentsButton, setCommentsButton] = useState("");

    const submitComment = () => {
        const createComment = {id: new Date().getTime(), commentTitle, commentContent}

        setComments([...comments, createComment])
    }

    const commentTitleInput = (e) => {
        setCommentTitle(e.target.value)
    }

    const commentContentInput = (e) => {
        setCommentContent(e.target.value)
    }


    return(
        <>
            <input onChange={commentTitleInput}type="text" placeholder="Comment title" />
            <textarea onChange={commentContentInput}></textarea>
            <button onClick={submitComment}>Comment</button>

            {comments.map((element) => {
            return (
                <div className="singleComment" key={element.id}>
                    <p>{element.commentTitle}</p>
                    <p>{element.commentContent}</p>
                </div>
            )
        })}
        </>
    )
}