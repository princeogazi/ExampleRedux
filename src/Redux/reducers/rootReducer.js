import { ADD_ARTICLE } from "../constants/steady";

const initialState = {
    posts: [{id: 1,
            title: "My first post",
            content: "The Full Stack Developer class is interesting"}] 
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                posts: [...state.posts, action.payload]
            }
        default:
            return state
    }
}

