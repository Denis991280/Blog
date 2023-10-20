import { useState } from "react"

export default function Comments() {
    const [comments, setComments] = useState([])
    const [commentTitle, setCommentTitle] = useState("Anonymous");
    const [commentContent, setCommentContent] = useState("");

    const submitComment = () => {
        const createComment = {id: new Date().getTime(), commentTitle, commentContent}

        setComments([...comments, createComment])
    }

    const commentTitleInput = (e) => {
        if(commentTitle !== "") {
            setCommentTitle(e.target.value)
        } else {
            setCommentTitle("Anonymous")
        }
    }

    const commentContentInput = (e) => {
        setCommentContent(e.target.value)
    }


    return(
        <>
        <div className="commentInputContainer">
            <label className="commentName">Name: <input onChange={commentTitleInput}type="text" placeholder="Leave blank for anonymous" /></label> 
            <textarea className="test" onChange={commentContentInput} placeholder="Type your comment here"></textarea>
            {/* <button onClick={() => {submitComment(); commentTitleInput()}}>Comment</button> */}
            <button class="button-33" role="button" onMouseEnter={() => {commentTitleInput()}} onClick={() => {submitComment()}}>Comment</button>
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