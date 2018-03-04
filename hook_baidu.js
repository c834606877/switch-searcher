// document.body.style.border = "5px solid green";


var input_text = document.getElementById("kw");
var href_text  = "https://www.google.com/search?q=";
href_text += encodeURIComponent(input_text.getAttribute("value"));


var btn1 = document.createElement('input');
btn1.setAttribute("value", "Go Google");
btn1.setAttribute("type", "button");
btn1.setAttribute("class", "bg s_btn");
btn1.setAttribute("href", href_text);
btn1.addEventListener("click", function( event ) {
	window.location = href_text;
});

var btn = document.getElementById("su");
btn.parentNode.appendChild(btn1);