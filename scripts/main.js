// let mhHeading=document.querySelector('h1');
// mhHeading.textContent='Hello world!111';
// var my_image=document.querySelector('img');
// my_image.setAttribute('src','https://media.giphy.com/media/3o6ozhxFlr4Ung40RG/giphy.gif');
// alert('hello!');


// let dolphinGoodbye='son long and thanks for all the fish';
// let iAmLive=true;
// let test=6<3;
// let myNameArray=["小明",'小华','小狗']
// let myNumberArray=[1,52,31];
// let persion={name:'张三',age:30,sex:'男'};
// persion.age=31;
// let myNumber="30";
// typeof myNumber;
// myNumber=30;
// typeof myNumber;

// function multiply(num1,num2){
//     let resut=num1*num2;
//     return resut;
// }
// // 点击整个html
// document.querySelector('html').onclick =function(){
//     alert('别戳我');
// }

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox2.jpg') {
        myImage.setAttribute('src', 'images/firefox-icon.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字');
    if(myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent='Mozilla 酷毙了,'+myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent='Mozilla 酷毙了,'+storedName;
}
myButton.onclick=function(){
    setUserName();
}

