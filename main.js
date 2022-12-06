var i=0
var arr=[]
$("#time").append(new Date())
function getthevalue(){
  obj={}
  var value = document.getElementById("toadd").value;
  if(unique(arr,value)){
    obj.id=i
    obj.task=value
    arr.push(obj)
    var $li=$("<li>"+i+")"+value+"</li>")
    $("ul").append($li)
    $li.attr('id', i);
    $('li').click(function(event){
    console.log(event)
    alert("this task in done"+" "+event.delegateTarget.innerHTML)
    }) 
    i++


  }
  else{
    alert('this task is already ')
  }
}
function removee(){
  var test = confirm("Are you sure to execute this action?")
  if(test){
  var ndelet=document.getElementById("deletee").value;
   arr.splice(ndelet,1)
   $('li').remove()
  for(var i=0;i<arr.length;i++){
    $("ul").append("<li>"+i+")"+(arr[i].task)+"</li>")
  }
}
else{
  return ""
}
}
function unique(array,string){
  for(var i=0;i<array.length;i++){
          if(array[i].task===string ){
              return false
          }
      
  }return true
}
function modif(){
  var  obj={}
  var nmodify=document.getElementById("modifye").value
  var themodifyed=document.getElementById("themodifayir").value
  arr.splice(nmodify,1)
  obj.id=nmodify
  obj.task=themodifyed
  arr.push(obj)
  $('li').remove()
  for(var i=0;i<arr.length;i++){
    $("ul").append("<li>"+i+")"+arr[i].task+"</li>")
  }
}



