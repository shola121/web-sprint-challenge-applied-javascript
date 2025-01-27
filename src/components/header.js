

const Header = (title, date, temp) => {

  const newsHeader = document.createElement('div')
  const newsDate = document.createElement('span')
  const newsTitle = document.createElement('h1')
  const newsTemp = document.createElement('span')

  // create hirarchy
  newsHeader.appendChild(newsDate);
  newsHeader.appendChild(newsTitle);
  newsHeader.appendChild(newsTemp);

  // add text
  newsDate.textContent=date;
  newsTitle.textContent=title;
  newsTemp.textContent=temp;
  // create class
  newsHeader.classList.add('header')
  newsDate.classList.add('date')
  newsTemp.classList.add('temp')

  return newsHeader;
  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  
}
 
const headerAppender = (selector) => {
          // get element property by css selector class name
          const element= document.querySelector(selector);
          // call Header function with parameters
          const header_data =  Header("This is the title","11/02/2022","This is temp variable content")
          // append child into selector element
          element.appendChild(header_data)
          console.log(element);
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
