window.jquery = function(nodeSelector){

}
window.$ = window.jquery
jquery.ajax = function({url,method,body,header,success,fail}){
  let request = new XMLHttpRequest
  request.open(method,url)
  for(let key in header){
    let value = header[key]
    request.setRequestHeader(key,value)
  }
  request.onreadystatechange = function(){
    if(request.readyState === 4){
      if(request.status >=200 && request.status <300 || request.status === 302){
        success.call(undefined,request.responseText)
      }else{
        fail.call(undefined,request)
      }
    }
  }
  request.send(body)
}

btn.addEventListener('click',function(){
  $.ajax({
    url:'/xxx',
    method:'post',
    header:{
      'content-type':'application/x-www-form-urlencoded',
      'name':'jirengu'
    },
    success:function(x){
      console.log(x)
    },
    fail:function(x){
      console.log(x)
    }
  })
})