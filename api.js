let mainbox = document.getElementById('mainbox');
let search = document.getElementById('search');
let newlist = document.getElementById('news-list');

mainbox.addEventListener('submit', noothing);
function noothing(event){
    event.preventDefault();

    if(search.value === ''){
        alert('hey are you blind?')
    }else{
        alert('found');
    }
    
    let apikey = '346f003c38a0462a8da222e87f7d1755';
    let url = `https://newsapi.org/v2/everything?q=${search.value}&apiKey=${apikey}`
    
    fetch(url).then((res) => {
         res.json().then((data) => {
            console.log(data);
            data.articles.forEach( articles => {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.setAttribute('href',articles.url);
                a.textContent = articles.title;
                li.appendChild(a);
                newlist.appendChild(li);
            })
            document.getElementById('attop').textContent = `results found : ${data.totalResults}`;
        });
    });
};
