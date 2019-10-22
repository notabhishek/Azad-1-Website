var str = window.location.href;
var pageno = str[str.length - 1];

if(pageno >= "1" && pageno <= "6")
{
	function removeclass()
	{
		  var items = document.getElementsByClassName("tab-pane");
		  for (var i=0; i < items.length; i++) {
		    items[i].classList.remove("show");
		    items[i].classList.remove("active");
		  }

		  items = document.getElementsByClassName("nav-link");
			for (var i=0; i < items.length; i++) {
		    items[i].classList.remove("active");
		  }	  
	}

	removeclass();

	var tab = "tab-" + pageno;

	document.getElementById(tab).classList.add("show");
	document.getElementById(tab).classList.add("active");
	document.getElementById("nav-" + tab).classList.add("active");
}

function sethref1()
{
    var str = window.location.href;
    var pageno = str[str.length - 1];

    if(pageno == "l" || pageno == "#")
    {
        window.location.href += "#1";
    }

    if(pageno >= "1" && pageno <="6")
    {
        window.location.href = str.substring(0, str.length - 2) + "#1";
    }
    
}
function sethref2()
{
    var str = window.location.href;
    var pageno = str[str.length - 1];

    if(pageno == "l" || pageno == "#")
    {
        window.location.href += "#2";
    }
    if(pageno >= "1" && pageno <="6")
    {
        window.location.href = str.substring(0, str.length - 2) + "#2";
    }
}
function sethref3()
{
    var str = window.location.href;
    var pageno = str[str.length - 1];

    if(pageno == "l" || pageno == "#")
    {
        window.location.href += "#3";
            
    }
    if(pageno >= "1" && pageno <="6")
    {
        window.location.href = str.substring(0, str.length - 2) + "#3";
    }
    
}
function sethref4()
{
    var str = window.location.href;
    var pageno = str[str.length - 1];

    if(pageno == "l" || pageno == "#")
    {
        window.location.href += "#4";
            
    }
    if(pageno >= "1" && pageno <="6")
    {
        window.location.href = str.substring(0, str.length - 2) + "#4";
    }
    
}
function sethref5()
{
    var str = window.location.href;
    var pageno = str[str.length - 1];

    if(pageno == "l" || pageno == "#")
    {
        window.location.href += "#5";
            
    }
    if(pageno >= "1" && pageno <="6")
    {
        window.location.href = str.substring(0, str.length - 2) + "#5";
    }
    
}
function sethref6()
{
    var str = window.location.href;
    var pageno = str[str.length - 1];

    if(pageno == "l" || pageno == "#")
    {
        window.location.href += "#6";
            
    }
    if(pageno >= "1" && pageno <="6")
    {
        window.location.href = str.substring(0, str.length - 2) + "#6";
    }
    
}
