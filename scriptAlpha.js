
function disp(elt, val, prefix = "", suffix = "")
{
	//quick macro to format a number with units.
	document.getElementById(elt).innerText = prefix + val.toLocaleString() + suffix;
}

function update_rgb_target()
{
	
	document.getElementsByTagName('BODY')[0].style["backgroundColor"] =
	"rgb("+
	parseInt(document.getElementById('r_01').value) + "," +
	parseInt(document.getElementById('g_01').value) + "," +
	parseInt(document.getElementById('b_01').value) + ")";
	
	
	document.getElementById('step-02')	.style["backgroundColor"] =
	"rgb("+
	parseInt(document.getElementById('r_02').value) + "," +
	parseInt(document.getElementById('g_02').value) + "," +
	parseInt(document.getElementById('b_02').value) + "," +
	parseFloat(document.getElementById('a_02').value/100) + ")";
	
}


let spies = ['r_01', 'g_01', 'b_01','r_02', 'g_02', 'b_02', 'a_02'];


for (const spy of spies){
	document.getElementById(spy).addEventListener('input', function(){disp( (spy + "_val"),parseInt(document.getElementById(spy).value));update_rgb_target();});
}

for (const spy of spies){
	disp( (spy + "_val"),parseInt(document.getElementById(spy).value))
}


update_rgb_target();
