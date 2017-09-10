function palindrom(str) 
{
	var re = /[^A-Za-z0-9]/g;
	var str = str.toLowerCase().replace(re, '');
	var len = str.length;
	for (var i = 0; i < len/2; i++) 
	{
	   if (str[i] !== str[len - 1 - i]) 
	   {
	       return false;
	   }
	}
	 return true;
}




function run(){
  val = document.getElementById("val").value;
  document.getElementById("results").innerHTML=val+": "+ palindrom(val)
  }

