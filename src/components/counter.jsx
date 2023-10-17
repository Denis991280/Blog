import { isValidElement, useState } from "react"


export default function LikesDislikes() {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const dislikeBtn = () => {
        setDislikes(dislikes + 1);
    }

    const likeBtn = () => {
        setLikes(likes + 1);
    }

    return (
        <>
            <button onClick={likeBtn}>Dislike{likes}</button>
             <button onClick={dislikeBtn}>Dislike{dislikes}</button>
        </>

    )
}