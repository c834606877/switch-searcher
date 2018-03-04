// document.body.style.border = "5px solid red";


var input_text = document.getElementById("lst-ib");
var href_text  = "https://www.baidu.com/s?wd=";
href_text += encodeURIComponent(input_text.getAttribute("value"));

var btn1 = document.createElement('a');
btn1.textContent = "Go Baidu";
btn1.setAttribute("class", "sbico-c");
btn1.setAttribute("href", href_text);


var sf = document.getElementById("sfdiv");
var btn = document.getElementById("_fZl");

sf.insertBefore(btn1, btn);