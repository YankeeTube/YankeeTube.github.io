//Static
title_list = ["blockexplorer","miningpool","unusedcssremove","automatedpricetoi.c.o","vulnerabilitychecktool","websitecheckvulnerabilities","kakaotalkrestoretool","coupangsellerautomation","blogautopostaftercrawl","autoincreaseviewstoc.g.v"];
var cnt= 0;
var timer;
var imgadr;
var headArray;
var paraArray;
var now;
// 반복
$(document).ready(function(){
    setInterval(parserTitle,1000);
});

function parserTitle(){
    var title = $(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase();

    var now_index = title_list.indexOf($(".viewer-title-bar > div > p").text().replace(/ /gi, "").toLowerCase());
    console.log(title);
    
    if (now_index == 0){
        imgadr= ['./img/project/blockexplorer/home.jpg','./img/project/blockexplorer/blocks.jpg','./img/project/blockexplorer/status.jpg','./img/project/blockexplorer/api.jpg'];
        headArray= ['HOME','BLOCKS', 'STATUS', 'JSON API'];
        paraArray= ['Bitcore Insight Block Explorer Main Page.',
            'Current Cryptocurrency view all Blocks', 
            'Current Cryptocurrency view information Status',
            'Insight-api'];
        changeSummarize(now_index);
        
    }
    else if (now_index == 1){        
        imgadr= ['./img/project/miningpool/login.jpg','./img/project/miningpool/home.jpg','./img/project/miningpool/dashboard.jpg','./img/project/miningpool/api.jpg'];
        headArray= ['LOGIN','HOME', 'DASHBOARD', 'JSON API'];
        paraArray= ['PPLNS Mining Pool Login Page.',
            'PPLNS Mining Pool Home(index)', 
            'PPLNS Mining Pool and Miner Status',
            'PPLNS Global Status'];
        changeSummarize(now_index);
    }
    else if (now_index == 2){
        imgadr= ['./img/project/cssremover/start.png','./img/project/cssremover/important.png','./img/project/cssremover/sizecompare.png','./img/project/cssremover/result.png'];
        headArray= ['SIMPLE SCRIPT','IMPORTANT', 'SIZE COMP', 'WHITE SPACE'];
        paraArray= ['Unused CSS Remover',
            '@media query !important;', 
            'Reduce capacity',
            'Remove all white Space'];
        changeSummarize(now_index);
    }
    else if (now_index == 3){
        imgadr=['./img/project/image-not-found.jpg']
        headArray = ['Not Found!']
        paraArray = ['Image File does not found...']
        changeSummarize(now_index);
    }
    else if (now_index == 4){
        imgadr= ['./img/project/checkwin/start.png','./img/project/checkwin/function.png','./img/project/checkwin/excel.png','./img/project/checkwin/html.jpg'];
        headArray= ['SIMPLE SCRIPT','VUNLER CHECK FUNC', 'RESULT ON EXCEL', 'RESULT ON HTML'];
        paraArray= ['Windows Vulnerability Check Tools',
            'Part of the function of the major information communication infrastructure vulnerability items', 
            'If you use ssd, your will get have a report in 5 seconds!',
            'No Excel? We also make html!'];
        changeSummarize(now_index);
    }
    else if (now_index == 5){
        imgadr= ['./img/project/sitevulner/checklist.png','./img/project/sitevulner/fish.png','./img/project/sitevulner/fish2.png','./img/project/sitevulner/result.png'];
        headArray= ['CHECK LIST','SESSION SAVE SCRIPT', 'SESSION HIJACKING', 'VUNLER RESULT'];
        paraArray= ['Web Site vunlerability Check list.',
            'Session Storage Scripts Using php!', 
            'Session hijacking on using js!',
            'part of the result'];
        changeSummarize(now_index);
    }
    else{
        imgadr=['./img/project/image-not-found.jpg']
        headArray = ['Not Found!']
        paraArray = ['Image File does not found...']
    }
}
function changeSummarize(now){
    $(".summarize").each(function(index){
        if (index != now){
            $(this).css({"display":"none"});
        }
        else{
            $(this).css({"display":"flex"});
            mw = $(this).children("p:nth-child(1)").outerWidth(true);
        }
    });
    $(".summarize2").each(function(index,item){
        if( index != now) {
            $(item).css({"display":"none"});
        }
        else{
            $(item).css({"display":"flex"});
            if ($(item).children('p').length < 3){
                $(item).children("p:nth-child(2)").css({"flex":"2.2"});
            }
        }
    });
}

// Slider
function sliderTimer()
{
  timer= setInterval(slider, 2500);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  //or append?
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
  
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  document.getElementById('sliderPara').innerHTML= paraArray[cnt];
    
  sliderTimer();
}
