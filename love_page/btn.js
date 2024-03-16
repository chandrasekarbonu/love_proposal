let button=document.getElementById("no-button");
let count=1
function change(){
    if (count%2===1){
        button.classList.add("no1");
        count=count+1;
    }
    else if(count%2===0){
        button.classList.remove("no1");
        count=count+1;
    }
};