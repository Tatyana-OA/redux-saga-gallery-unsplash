const KEY = '?client_id=Z8nMv-De16-UHSEcpD7JJgP6xIHmmAqwl8Jr0TovnbQ'
const URL = 'https://api.unsplash.com/photos/'

//should return a promise so saga can be suspended untill it returns
const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=10&page=${page}`)
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors)
    }
    return data;
}

export default fetchImages;