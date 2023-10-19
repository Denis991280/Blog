import { useState } from "react"

export default function Comments() {
    const [comments, setComments] = useState([])
    const [commentTitle, setCommentTitle] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const submitComment = () => {
        const createComment = {id: new Date().getTime(), commentTitle, commentContent}

        setComments([...comments, createComment])
    }

    const commentTitleInput = (e) => {
        if(commentTitle === "") {
            setCommentTitle("Anonymous")
        } else {
            setCommentTitle(e.target.value)
        }
    }

    const commentContentInput = (e) => {
        setCommentContent(e.target.value)
    }


    return(
        <>
        <div className="commentInputContainer">
            <input onChange={commentTitleInput}type="text" placeholder="Enter your name or leave blank for anonymous" />
            <textarea className="test" onChange={commentContentInput} placeholder="Type your comment here"></textarea>
            <button onClick={() => {submitComment(); commentTitleInput()}}>Comment</button>
        </div>


            {comments.map((element) => {
            return (
                <div className="singleComment" key={element.id}>
                    <h5 className="postedBy">{element.commentTitle}:</h5>
                    <p className="commentContentSingle">{element.commentContent}</p>
                </div>
            )
        })}
        </>
    )
}