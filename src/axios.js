import axios from 'axios';
//** base url to make requests to the moves */ 
export default axios.create({
  baseURL: `https://api.themoviedb.org/3`
});

