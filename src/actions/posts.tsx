import axios from "axios"

export const fetchPosts = ():any => async (disoatch: any, getState: any) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    disoatch({ type: "FETCH_POSTS", payload: response.data })
}