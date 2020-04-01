

var addLine = document.getElementById('addLineBtn');
var index = 0;
addLine.addEventListener('click', function(){
	alert("hi");
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('widget-box').innerHTML;
	div.id = index++;
	document.getElementById('collapse-group').appendChild(div);
})

$(function(){
   $("#addLineBtn").click(function(){
      alert("Hello");
      console.log("Hi");
   });
})