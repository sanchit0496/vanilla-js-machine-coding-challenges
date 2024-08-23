const postHolder = document.getElementById('post-holder')


const fetchResults = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await data.json()
    return result.splice(0, 10) 
  } catch (error) {
    console.log(error)
    return []
  }
};

(async () => {
  let apiResponse = await fetchResults();
  console.log('apiResponse', apiResponse);

  for(let i = 0; i < apiResponse.length; i++) {
    const element = apiResponse[i];
    
    const post = document.createElement('div')
    post.classList.add('post')

    const postTitle = document.createElement('div')
    postTitle.classList.add('postTitle')

    const postDesc = document.createElement('div')
    postDesc.classList.add('postDesc')

    postTitle.textContent = element.title
    postDesc.textContent = element.body

    post.appendChild(postTitle)
    post.appendChild(postDesc)
    postHolder.appendChild(post)    
  }

})()
