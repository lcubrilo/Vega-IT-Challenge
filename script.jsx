var p = document.getElementById('parent');
var c = document.getElementById('child');

p.onclick = function onParentClick(){
    console.log('Parent is clicked')
  }
c.onclick = function onChildClick(event){
    event.stopPropagation();
    console.log('Child is clicked')
  }