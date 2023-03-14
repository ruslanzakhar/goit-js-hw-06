const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgEl = document.querySelector(".gallery");
imgEl.style.display = 'flex';
imgEl.style.listStyle = 'none';
imgEl.style.gap = '25px';

const imgListEl = images.map(({url, alt}) =>
`<li><img src = ${url} alt = "${alt}" width ='320'/></li>`).join("");

imgEl.insertAdjacentHTML('afterbegin', imgListEl);





// for( const image of images) {
//   const liEl = document.createElement("li");
//   ulEl.appendChild(liEl);

//   const imageEl = document.createElement('img')
//   imageEl.src = image.url;

//   liEl.appendChild(imageEl)
//   imageEl.setAttribute('alt', image.alt)
  
// }