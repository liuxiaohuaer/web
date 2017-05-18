// JavaScript Document



  var ban=document.getElementById("boder_yx")
  
  var dao=document.getElementsByClassName("banner_jt")
     
	ban.onmouseover=function()
	
{
	dao.item(0).style.display="block";
	clearTimeout(idz);
	
	  
	
}
   ban.onmouseout=function()
{
	
	dao.item(0).style.display="none"
	
	idz=window.setTimeout("lunbo("+now+")",2000);//第一次执行
}
   
   
   
   //获取banner_中的所有li标记

var lo=document.getElementsByClassName("banner_img").item(0).getElementsByTagName("li");

var jdwz=document.getElementsByClassName("banner_jd").item(0).getElementsByTagName("li");

var now=0;//默认的第一张图片的索引号
   
var next;//下一张图片
   
   function show(val)
{    now=val;
	for(var i=0;i<3;i++)
	
	{
		
		if(val==i)
		{
			
		jdwz.item(i).style.backgroundColor="red";//选中的变红
		
		lo.item(i).style.display="block"//图片显示
		
		}
		
		
		else
		{
			
	    jdwz.item(i).style.backgroundColor="";//
		
		lo.item(i).style.display="none"//图片隐藏
		
		
		}
		
    }
}


//自动轮播

var lo=document.getElementsByClassName("banner_lo").item(0).getElementsByTagName("li");
var jdwz=document.getElementsByClassName("banner_jd").item(0).getElementsByTagName("li");

var now=0;//默认的第一张图片的索引号
   
var next;//下一张图片
   
var idz;
   function lunbo()
   
 {
	 next=now+1;
	 
	 if(now==2)
	 
	 { 
	     next=0;
	 
	 }
	 
	 lo.item(now).style.display="none"
	 
	 lo.item(next).style.display="block"
	 
	 
	 
	 
	 jdwz.item(now).style.backgroundColor=""
	 
	 jdwz.item(next).style.backgroundColor="red"
	 
	 
	 
	 
	 now++;
	 
	
	
	
	if(now==3)
	
	{now=0
	
	}
	
	idz=window.setTimeout("lunbo("+now+")",2000); 
	 
}
   
   

 idz=window.setTimeout("lunbo("+now+")",2000)


   
   
   
   
   
   
   