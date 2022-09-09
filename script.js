const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4607c176f3mshc449e6b350b89bap185511jsn99e5ca4a0a53',
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    }
};

const getdata = async()=>{
    const response = await fetch('https://free-news.p.rapidapi.com/v1/search?q=bitcoin&lang=en&page=1&page_size=25', options)
    const data = await response.json();
    return data;
}

getdata().then(data =>{
    const flexContainer = document.querySelector(".grid-container");
    for (let i = 5; i < 11; i++) {

        let flexItem = document.createElement("div");
        flexItem.classList.add("flexItems");


        console.log(data);
        const {articles } = data;
        const { author } = articles[i]
        const { title } = articles[i]
        const  { media } = articles[i]
        const { published_date } = articles[i]

        let img = document.createElement('img');
        img.src = `${media}`

        let h2 = document.createElement("h2");
        h2.innerText = `${title}`



        let features = document.createElement("div");
        features.classList.add("features");


        let info = document.createElement("p");
        info.innerText = `${author}`;

        let date = document.createElement("p");
        date.innerText = `${published_date}`;

        features.append(info,date);
        flexItem.append(img, h2,features);

        // flexItem.append(img,h2,info,date);
        flexContainer.append(flexItem);
    }}

).catch(err =>{
    console.log('error',err);
});
