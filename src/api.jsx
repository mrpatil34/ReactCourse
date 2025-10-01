import axios from "axios";

const searchImages = async (term) =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization : 'Client-ID feRRV8UP4h1mHlAwSZQzEPJjJWQ3Of4O-hX1FASmMHM'
        },
        params:{
            query:term,
        },
    });

    console.log(response);

    return response.data.results;
};

export default searchImages;