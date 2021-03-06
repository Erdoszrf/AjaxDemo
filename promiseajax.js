window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ = window.jQuery

window.Promise = function(fn){
  return {
    then: function(){}
  }
}

window.jQuery.ajax = function({url, method, body, header}){
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest()
    request.open(method, url) 
    for(let key in header) {
      let value = header[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300 ||request.status === 302){
          resolve.call(undefined, request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}

myButton.addEventListener('click', (e)=>{
  let promise = window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    header: {
      'content-type':'application/x-www-form-urlencoded',
      'frank': '18'
    }
  })

  promise.then(
    (text)=>{console.log(text)},
    (request)=>{console.log(request)}
  )

})