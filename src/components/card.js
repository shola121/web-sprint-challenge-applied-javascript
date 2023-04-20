import axios from "axios"
const Card = (article) => {
  
    const { headline, authorPhoto, authorName } = article;
  
    const card = document.createElement('div');
    card.classList.add('card');
  
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = headline;
    card.appendChild(headlineDiv);
  
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
  
    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('img-container');
  
    const img = document.createElement('img');
    img.src = authorPhoto;
    imgContainerDiv.appendChild(img);
  
    authorDiv.appendChild(imgContainerDiv);
  
    const authorNameSpan = document.createElement('span');
    authorNameSpan.textContent = `By ${authorName}`;
    authorDiv.appendChild(authorNameSpan);
  
    card.appendChild(authorDiv);
  
    card.addEventListener('click', () => {
      console.log(headline);
    });
  
    return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

//const cardAppender = (selector) => {
  const cardAppender = async (selector) => {
    const container = document.querySelector(selector);

    //const response = await fetch('http://localhost:5001/api/articles');
    //const articles = await response.json();
    
  axios.get(`http://localhost:5001/api/articles`)
  .then((resp) => {
  const js = resp.data.articles.javascript
  const bt = resp.data.articles.bootstrap
  const jq = resp.data.articles.jquery
  const nodee = resp.data.articles.node
  const techh = resp.data.articles.technology
  js.forEach(article => {
    container.append(Card(article))
  })
  bt.forEach(article => {
    container.append(Card(article))
  })
  jq.forEach(article => {
    container.append(Card(article))
  })
  nodee.forEach(article => {
    container.append(Card(article))
  })
  techh.forEach(article => {
    container.append(Card(article))
  })


})
    //const javascript = articles.javascript
    //articles.forEach(article => {
      //articles[0][article].forEach(element => {
      //const card = Card(articles);
     // container.append(card);
     // });
 //   });

    
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
