import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '437713b7c7msh0e7143024293bfdp1dd425jsn6f0d45732e26' ,
    },
  });
    
  return data;
}