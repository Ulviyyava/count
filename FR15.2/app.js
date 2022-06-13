function decrease(){
  var count = document.getElementById('count').innerHTML;
  count--;
  document.getElementById('count').innerHTML = count;
  if(count < 0){
    document.getElementById('count').style.color = 'green'
  }
}
function reset(){
  var count = document.getElementById('count').innerHTML;
  count =0;
  document.getElementById('count').innerHTML = count;
  if(count ==0){
    document.getElementById('count').style.color = 'red'
  }
}
function increase()
{
    let count = document.getElementById('count').innerHTML;
  count ++;
  document.getElementById('count').innerHTML = count;
  if(count > 0){
  document.getElementById('count').style.color = 'blue'
}
}
