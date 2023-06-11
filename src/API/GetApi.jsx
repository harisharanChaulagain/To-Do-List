import axios from "axios";

export const fetchCompleted = async () => {
    const res = await axios.get("http://localhost:8000/completedtasks");
   return res.data
}