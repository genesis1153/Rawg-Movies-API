import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f4f17470fec64ae3914a1b817c5a9c48",
    },
});
