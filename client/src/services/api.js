import axios from 'axios';

export const uploadFile = async (data) => {
  try {
    let res = await axios.post('http://localhost:8000/upload', data);
    return res.data;
  } catch (error) {
    console.log('Error while calling upload API ', error.message);
  }
}