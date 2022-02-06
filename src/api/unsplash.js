import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID WBbBPwaltXRvXNma3_6PZLoJ4x6g1F_e-sdQAyo8bgE'
 }
})