

var addLine = document.getElementById('addLineBtn');
var index = 0;
addLine.addEventListener('click', function(){
	var div = document.createElement('div');
	div.innerHTML = document.getElementById('widget-box').innerHTML;
	div.id = index++;
	document.getElementById('collapse-group').appendChild(div);
})