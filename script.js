const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "4607c176f3mshc449e6b350b89bap185511jsn99e5ca4a0a53",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    },
};

const getdata = async () => {
    const response = await fetch("https://free-news.p.rapidapi.com/v1/search?q=bitcoin&lang=en&page=1&page_size=25", options);
    const data = await response.json();
    return data;
};

getdata()
    .then((data) => {
        const mainContainer = document.querySelector(".grid-container");
        for (let i = 10; i < 17; i++) {
            let gridItem = document.createElement("div");
            gridItem.classList.add("gridItems");

            console.log(data);
            const { articles } = data;
            const { title } = articles[i];
            const { summary } = articles[i];
            const { media } = articles[i];
            const { topic } = articles[i];
            const { rank } = articles[i];
            const { published_date } = articles[i];

            let img = document.createElement("img");
            img.src = `${media}`;

            let heading = document.createElement("h3");
            heading.innerText = `${title.substr(0, 20)}...`;

            let features = document.createElement("div");
            features.classList.add("features");

            let info = document.createElement("p");
            info.innerText = `${summary.substr(0, 70)}...`;

            let articleFooter = document.createElement("p");

            let date = document.createElement("span");
            date.innerText = `${published_date.substr(0, 10)}`;

            let rankInfo = document.createElement("span");
            rankInfo.innerText = `${rank}|`;

            let topicInfo = document.createElement("span");
            topicInfo.innerText = `${topic}`;

            articleFooter.append(date, rankInfo, topicInfo);
            features.append(heading, info);
            gridItem.append(img, features, articleFooter);
            mainContainer.append(gridItem);
        }
    })
    .catch((err) => {
        console.log("error", err);
    });

(function () {
    const linkButton = document.createElement('a');
    linkButton.innerText = "Sogody";
    linkButton.setAttribute('href', 'https://sogody.com');
    const newsTitle = document.querySelector('.news-title');
    newsTitle.append(linkButton);

})();


const link = document.getElementsByTagName('a')[0];
link.addEventListener('click', ()=>{
    link.innerText = "loading ...";
});
