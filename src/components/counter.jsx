import { isValidElement, useState } from "react"
import Comments from "./Comments"


export default function LikesDislikes() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [commentsToggleBtn, setCommentsToggleBtn] = useState("commentsContainerDisabled")
    const [commentsBtn, setCommentsBtn] = useState("Show Comments")

    const dislikeBtn = () => {
        setDislikes(dislikes + 1);
    }

    const likeBtn = () => {
        setLikes(likes + 1);
    }

    const showCommentsBtn = () => {
        if(commentsToggleBtn === "commentsContainer") {
            setCommentsToggleBtn("commentsContainerDisabled")
        } else {
            setCommentsToggleBtn("commentsContainer")
        }

        if(commentsBtn === "Show Comments") {
            setCommentsBtn("Hide Comments")
        } else {
            setCommentsBtn("Show Comments")
        }
    }

    return (
        <>
            <button onClick={likeBtn}>Like</button>{likes}
            <button onClick={dislikeBtn}>Dislike</button>{dislikes}
            <button onClick={showCommentsBtn}>{commentsBtn}</button>

            <div className={commentsToggleBtn}>
                <Comments />
            </div>
        </>

    )
}