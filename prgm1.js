window.onload=function(){
    var a1=document.getElementById("a");
    var b1=document.getElementById("p");
    
    var req=new XMLHttpRequest();
    
    a1.addEventListener("click",function(){
     req.addEventListener('readystatechange',function(){
        b1.innerHTML=this.responseText;
     });
     req.open("GET","summary1.txt",true);
     req.send();
    });
   
    
    
    
    var a2=document.getElementById("b");
    var b2=document.getElementById("q");
    
    var reqq=new XMLHttpRequest();
    
    a2.addEventListener("click",function(){
     b2.addEventListener('readystatechange',function(){
        content2.innerHTML=this.responseText;
     });
     reqq.open("GET","summary2.txt",true);
     reqq.send();
    });
    
    
    
    var a3=document.getElementById("c");
    var b3=document.getElementById("r");
    
    var reqqq=new XMLHttpRequest();
    
    a3.addEventListener("click",function(){
     b3.addEventListener('readystatechange',function(){
        content3.innerHTML=this.responseText;
     });
     reqqq.open("GET","summary3.txt",true);
     reqqq.send();
    });
    
};