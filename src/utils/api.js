import { post, get, put, deletes, login, upload } from "./axios";
export default {
    demo: {
        demo: data => {
            return post(`/api/index`, data)
        }
    }
}