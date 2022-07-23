let arr=[
    {
        img:"https://statics.olx.in/external/base/img/loginEntryPointPost.webp",
        p:"Help us become one of the safest places to buy and sell"
    },
    {
    img:"https://statics.olx.in/external/base/img/loginEntryPointFavorite.webp",
    p:"Close deals from the comfort of your home"
    },
    {
        img:"https://statics.olx.in/external/base/img/loginEntryPointChat.webp",
        p:"Keep all your comforts in one place"
    }
];

let leftbtn=document.querySelector("#left");
let rightbtn=document.querySelector("#right");
let crauser=document.querySelector("#crauser");
let imagestate=0;
rightbtn.addEventListener("click",function()
{
    imagestate++;
    crauser.img=arr[imagestate].img;
}

)