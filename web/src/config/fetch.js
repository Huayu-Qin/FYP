import axios from 'axios'

const baseUrl = 'http://localhost:8080/mongo'
export default async (url = '', data = {}, type = 'GET') => {
  type = type.toUpperCase();
  url = baseUrl + url;

  let xhr
  if (type == 'GET') {
    xhr = await axios.get(url, {params: data})
  } else if (type == 'POST') {
    xhr = await axios.post(url, {...data})
  } else if (type == 'DELETE') {
    xhr = await axios.delete(url, {data: data})
  }

  return xhr.data
}
