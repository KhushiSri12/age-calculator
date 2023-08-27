/*const res=document.getElementById("result");
function calculate(){
    let para=document.createElement("p");
    let age=calender();
    para.innerHTML="You are "+age+ " years old";
    res.appendChild(para);
}
function calender(){
    return 38;
}*/

let userInput=document.getElementById("date");
userInput.max=new Date().toISOString().split("T")[0];
let res=document.getElementById("result");

function calculate(){
    let birthDate=new Date(userInput.value);
    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getYear();

    let today=new Date();

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getYear();

    let d3,m3,y3;

    y3=y2-y1;
    if(m2>=m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3=12+m2-m1;
    }
    if(d2>=d1){
        d3=d2-d1
    }
    else{
        m3--;
        d3=getdaysinmonth(y1,m1)+d2-d1;
    }
    if(m3<0){
        m3=11;
        y3--;
    }
    res.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}

function getdaysinmonth(year,month){
    return new Date(year,month,0).getDate();
}