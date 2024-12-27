let s1=document.getElementById("sq1")
s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
})
s1.addEventListener("dblclick",function(){
    r1=Math.floor(Math.random()*256);
    r2=Math.floor(Math.random()*256);
    r3=Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>1</h1>`;
    s1.style.backgroundColor="white";
})



let s2=document.getElementById("sq2");
let clr="red";
s2.addEventListener("mouseenter",function(){
    s2.style.backgroundColor = clr;
    if(clr=="red"){
        clr="green";
    }
    else if(clr=="green"){
        clr="blue";
    }
    else{
        clr="red";

    }

    
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white";
})



let s3=document.getElementById("sq3")
s3.addEventListener("mouseenter",function(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    s3.style.backgroundColor=`rgb(${a},${b},${c})`;
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white";
})




let s4=document.getElementById("sq4")
s4.addEventListener("click",function(){
    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    s1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    s2.style.backgroundColor=`rgb(${r2},${r3},${r1})`;
    s3.style.backgroundColor=`rgb(${r3},${r2},${r1})`;
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white";
    s2.style.backgroundColor="white";
    s3.style.backgroundColor="white";
})

let mein=document.getElementById("main");
let crsr=document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    console.log(dets.x,dets.y);
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})


