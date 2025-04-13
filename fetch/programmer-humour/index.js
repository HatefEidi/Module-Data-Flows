const endpoint =`https://xkcd.now.sh/?comic=latest`;

const fectchComic = async () => {
  const response = await fetch(endpoint);
   const result=await response.json();
   displayComic(result);
};

window.onload = fectchComic;

const displayComic = (comic) => {
    const comicElement = document.getElementById('comic');
    comicElement.innerHTML = ''; 
  
    const titleElement = document.createElement('h1');
    titleElement.innerText = comic.title;
  
    const imgElement = document.createElement('img');
    imgElement.src = comic.img;
    imgElement.alt = comic.alt;
  
    comicElement.appendChild(titleElement);
    comicElement.appendChild(imgElement);
};