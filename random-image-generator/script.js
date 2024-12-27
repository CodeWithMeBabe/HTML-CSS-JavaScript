let main = document.querySelector("#main");
let arr=["https://th.bing.com/th/id/OIP.lAzx1q3qg0vhbW-ss1KrpQHaJc?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.U03q0XBnXScOVeSt1WGufgHaG8?w=211&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7","https://th.bing.com/th/id/OIP.kf3rbDAdmf-urpG-Z05n-gHaH8?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.o66koXUzih847xXOzVJ_awHaFj?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.EgmCeGdW_SasjsL5ACO4agHaHe?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.OJXjQZ-hft32b72WzaoWvAHaIN?rs=1&pid=ImgDetMain","https://th.bing.com/th/id/OIP.6I5eH6nRRbarvBMp_vmC2QHaFh?rs=1&pid=ImgDetMain"]
var s="";
for(let i=1;i<=65;i++){
    let ran=Math.floor(Math.random()*arr.length);
    
    s+= `<div class="card">
            <img src=${arr[ran]}>
        </div>`;
}
main.innerHTML=s;








