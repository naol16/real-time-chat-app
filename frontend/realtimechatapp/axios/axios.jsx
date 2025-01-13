import axios from "axios";
const axiosurl=axios.create({
    baseURL:"http://localhost:9000/"
})
export default axiosurl