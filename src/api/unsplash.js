import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d3a2718c97b0c488d5de0390ed214c945128c80b2f56b5b50656f03cb6635c75'
  }
});