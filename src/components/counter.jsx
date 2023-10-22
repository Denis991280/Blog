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
            <span className="likes"><i onClick={likeBtn} className="fa-regular fa-thumbs-up fa-lg"></i></span>{likes}
            <span className="dislikes"><i onClick={dislikeBtn} className="fa-regular fa-thumbs-down fa-lg"></i></span>{dislikes}
            <span className="comments"><i onClick={showCommentsBtn} className="fa-solid fa-comments fa-lg"></i></span><span onClick={showCommentsBtn} className="commentsLink">{commentsBtn}</span>
            

            <div className={commentsToggleBtn}>
                <Comments />
            </div>

        </>

    )
}