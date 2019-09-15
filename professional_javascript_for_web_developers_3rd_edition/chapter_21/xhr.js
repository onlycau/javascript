let xhr = new XMLHttpRequest()
let start = new Date()
let end = 0
const url = 'http://onlycau.com/api/blog/select_blog?blog_id=18'
let ele = document.getElementsByClassName('btn')[0]

xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
      let div = document.createElement('div')
      div.innerHTML = JSON.stringify(JSON.parse(xhr.responseText),null,'--')
      console.log(div.innerHTML)
      document.body.appendChild(div)
    } else {
      console.log("request was unsuccessful: " + xhr.status)
    }
  }
}

xhr.open('get', url, false)

ele.addEventListener('click',function(){
  xhr.send(null)
})

end = new Date()
console.log(end - start)

function handleResponse(response){ 
  console.log(response)
} 
var script = document.createElement("script"); 
script.src = "https://jsonplaceholder.typicode.com/users?callback=handleResponse"; 
document.body.insertBefore(script, document.body.firstChild); 