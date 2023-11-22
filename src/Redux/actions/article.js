import { ADD_ARTICLE } from "../constants/steady";

export const addPost = (newPost) => {
    return (
        {
            type: ADD_ARTICLE,
            payload: newPost
        }
    )
}