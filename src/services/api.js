import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export async function getImages(q = '', page = 1) {
  const { data } = await axios.get('/api/', {
    params: {
      key: '40885590-2ea7b34c06b5aa745c6ad6380',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q,
      page,
    },
  });
  return data;
}
