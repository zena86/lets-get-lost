 function reInitDragula()
{
    var drake = dragula([document.querySelector('.target.border'), document.querySelector('#right')]);
    
    drake.on("drop", function (el, target, source, sibling)
    {
        $(".target").removeClass("border");    
        let container = $(".daily-plan");
        container.append("<div class='target border'></div>"); 
        reInitDragula();
    }); 
 }

$(document).ready(function() {
    
    $(".hederBurger").click(function(event) {
        $(".hederBurger, .headerMenu, .header-userpic, body").toggleClass("active");
        $("body").toggleClass("lock");
    });
  // Последняя строка - для запрета скрола при открытом меню  
    
    $(".header-userpic").click(function(event) {
        $(".header-userpic__box, .header-userpic").toggleClass("active-user");
    });
    
    //Календарь
    
    $.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm/dd/yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
    };   
    
  $('.date__select').datepicker({
    // Можно выбрать только даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date(),
    dateFormat: "dd/mm/yyyy",
    language: 'en'
});

    //Установить дату по умолчанию
    
   $('#myDate1').datepicker().data('datepicker').selectDate(new Date());
//   $('#myDate2').datepicker().data('datepicker').selectDate(new Date());


    //Dragula    

    reInitDragula();
    
    //Pagination
    
    showPage(0,false);
    
    $("#recomented-btn").click(function(event){
        showPage(0,true);
        $("#all-btn a").removeClass("active");
        $("#recomented-btn a").addClass("active");
    });
    $("#all-btn").click(function(event){
        showPage(0,false);
        $("#all-btn a").addClass("active");
        $("#recomented-btn a").removeClass("active");
    });
});




let attraction = "images/order-icon1.gif";
let mountain = "images/order-icon2.gif";
let beach = "images/order-icon3.gif";


let dataOfferList = [];

dataOfferList[0] = {
    id: 0,
    photo: "images/bg-order-1.jpg",
    icon: attraction,
    type: "attraction",
    title: "Batu1",
    text1: " test1 all place is a city located in East Java Province of Indonesia. It is situated about 20 km to the northwest of Malang. Formerly, it was a part of Malang Regency; but in 2001, Batu became an independent city.",
    text2: "A population of 190,000 people, it lies on the southern slopes of Gunung Welirang. Its population largely consists of Javanese.",
    recomended: false,
    more: "http://facebook.com"
    };

dataOfferList[1] = {
    id: 1,
    photo: "images/bg-order-2.jpg",
    icon:  mountain,
    type: "mountain",
    title: "Bromo",
    text1: "<strong>Mount Bromo</strong> is an active volcano and part of the Tengger massif, in East Java, Indonesia. At 2,329 metres (7,641 ft) it is not the highest peak of the massif, but is the most well known",
    text2: "A population of 190,000 people, it lies on the southern slopes of Gunung Welirang. Its population largely consists of Javanese.",
    recomended: false,
    more: "http://facebook.com"
    };

dataOfferList[2] = {
    id: 2,
    photo: "images/bg-order-3.jpg",
    icon:  beach,
    type: "beach",
    title: "Lorem",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: false,
    more: "http://facebook.com"
    };
dataOfferList[3] = {
    id: 3,
    photo: "images/mountain1.jpg",
    icon:  attraction,
    type: "attraction",
    title: "Batu2",
    text1: " test2 recommended place Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[4] = {
    id: 4,
    photo: "images/beach1.jpg",
    icon:  beach,
    type: "beach",
    title: "Bromo",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[5] = {
    id: 5,
    photo: "images/attraction1.jpg",
    icon: attraction,
    type: "attraction",
    title: "Lorem",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[6] = {
    id: 6,
    photo: "images/attraction2.jpg",
    icon: attraction,
    type: "attraction",
    title: "Batu",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[7] = {
    id: 7,
    photo: "images/mountain2.jpg",
    icon:  mountain,
    type: "mountain",
    title: "Bromo",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[8] = {
    id: 8,
    photo: "images/beach2.jpg",
    icon:  beach,
    type: "beach",
    title: "Lorem",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[9] = {
    id: 9,
    photo: "images/attraction3.jpg",
    icon: attraction,
    type: "attraction",
    title: "Batu",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[10] = {
    id: 10,
    photo: "images/mountain3.jpg",
    icon:  mountain,
    type: "mountain",
    title: "Bromo",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };

dataOfferList[11] = {
    id: 11,
    photo: "images/beach3.jpg",
    icon:  beach,
    type: "beach",
    title: "Lorem",
    text1: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores nostrum, nulla repudiandae aliquid autem, vel id esse dicta mollitia, nam dolor similique ipsum dolore.",
    text2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur aspernatur asperiores aut beatae iure maiores.",
    recomended: true,
    more: "http://facebook.com"
    };


function showPage(page,isUseFiltr)
{
    let offerHtml = getPageHtml(page,isUseFiltr);
    $(".offer-page").html(offerHtml);
    
    let paginationHtml = getPaginationHtml(page, isUseFiltr);
    $(".pagination").html(paginationHtml);
}


function getPageHtml(page,isUseFiltr){
    let pageHtml="";
    let filtrPage=dataOfferList;
    if(isUseFiltr)
    {
        filtrPage = filtrPage.filter(function(offer)
        {
            return offer.recomended === true;
        });
    }

    pageHtml+="<div class='offer' style='background-image: url(" + filtrPage[page*3].photo + ")'>";
    pageHtml+="<div class='offer__link offer__link_big'>";
    pageHtml+="<a href='" + filtrPage[page*3].more + "'><span class='more'>see&nbsp;more&nbsp;</span> <svg class='arrow' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'viewBox='0 0 447.243 447.243' style='enable-background:new 0 0 447.243 447.243;' xml:space='preserve'><g><g><path d='M437.883,201.174c-0.008-0.008-0.017-0.017-0.025-0.025l-160-160c-12.552-12.441-32.813-12.351-45.254,0.201 c-0.983,0.992-1.9,2.047-2.746,3.159c-8.971,13.381-7.013,31.276,4.64,42.4l88.32,88.64c4.695,4.7,10.093,8.641,16,11.68 l9.76,5.12h-314.4c-16.099-0.677-30.349,10.332-33.76,26.08c-2.829,17.445,9.019,33.881,26.465,36.71 c1.83,0.297,3.682,0.434,5.535,0.41h315.52l-6.88,3.2c-6.713,3.135-12.83,7.412-18.08,12.64l-88.48,88.48 c-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754l160-160 C450.361,233.939,450.372,213.678,437.883,201.174z'/></g></g></svg></a>";
    pageHtml+="</div>";
    pageHtml+="<div class='offer__info offer__info_big'>";
    pageHtml+="<div class='offer__icon'>";
    pageHtml+="<img src='" + filtrPage[page*3].icon + "' alt=''>";
    pageHtml+="</div>";
    pageHtml+="<h3 class='offer__title'>" + filtrPage[page*3].title + "</h3>";
    pageHtml+="<div class='offer__text'>";
    pageHtml+="<p>" + filtrPage[page*3].text1 + "</p>";
    pageHtml+="<p>" + filtrPage[page*3].text2 + "</p>";
    pageHtml+="</div>";
    pageHtml+="</div>";
    pageHtml+="</div>";
    pageHtml+="<div class='offer__row2'>";
    pageHtml+="<div class='offer' style='background-image: url(" + filtrPage[page*3+1].photo + ")'>";
    pageHtml+="<div class='offer__link offer__link_medium'>";
    pageHtml+="<a href='" + filtrPage[page*3+1].more + "'><span class='more'>see&nbsp;more&nbsp;</span> <svg class='arrow' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'viewBox='0 0 447.243 447.243' style='enable-background:new 0 0 447.243 447.243;' xml:space='preserve'><g><g><path d='M437.883,201.174c-0.008-0.008-0.017-0.017-0.025-0.025l-160-160c-12.552-12.441-32.813-12.351-45.254,0.201 c-0.983,0.992-1.9,2.047-2.746,3.159c-8.971,13.381-7.013,31.276,4.64,42.4l88.32,88.64c4.695,4.7,10.093,8.641,16,11.68 l9.76,5.12h-314.4c-16.099-0.677-30.349,10.332-33.76,26.08c-2.829,17.445,9.019,33.881,26.465,36.71 c1.83,0.297,3.682,0.434,5.535,0.41h315.52l-6.88,3.2c-6.713,3.135-12.83,7.412-18.08,12.64l-88.48,88.48 c-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754l160-160 C450.361,233.939,450.372,213.678,437.883,201.174z'/></g></g></svg></a>";
    pageHtml+="</div>";
    pageHtml+="<div class='offer__info offer__info_medium'>";
    pageHtml+="<div class='offer__icon'>";
    pageHtml+="<img src='" + filtrPage[page*3+1].icon + "' alt=''>";
    pageHtml+="</div>";
    pageHtml+="<h3 class='offer__title'>" + filtrPage[page*3+1].title + "</h3>";
    pageHtml+="<p class='offer__text'>" + filtrPage[page*3+1].text1 + "</p>";
    pageHtml+="<p class='offer__text'>" + filtrPage[page*3+1].text2 + "</p>";
    pageHtml+="</div>";
    pageHtml+="</div>";
    pageHtml+="<div class='offer offer_small' style='background-image:url(" + filtrPage[page*3+2].photo + ")'>";
    pageHtml+="<div class='offer__link offer__link_small'>";
    pageHtml+="<a href='" + filtrPage[page*3+2].more + "'><span class='more'>see&nbsp;more&nbsp;</span> <svg class='arrow' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'viewBox='0 0 447.243 447.243' style='enable-background:new 0 0 447.243 447.243;' xml:space='preserve'><g><g><path d='M437.883,201.174c-0.008-0.008-0.017-0.017-0.025-0.025l-160-160c-12.552-12.441-32.813-12.351-45.254,0.201 c-0.983,0.992-1.9,2.047-2.746,3.159c-8.971,13.381-7.013,31.276,4.64,42.4l88.32,88.64c4.695,4.7,10.093,8.641,16,11.68 l9.76,5.12h-314.4c-16.099-0.677-30.349,10.332-33.76,26.08c-2.829,17.445,9.019,33.881,26.465,36.71 c1.83,0.297,3.682,0.434,5.535,0.41h315.52l-6.88,3.2c-6.713,3.135-12.83,7.412-18.08,12.64l-88.48,88.48 c-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754l160-160 C450.361,233.939,450.372,213.678,437.883,201.174z'/></g></g></svg></a>";
    pageHtml+="</div>";
    
    pageHtml+="<div class='offer__info offer__info_small'>";
    pageHtml+="<div class='offer__icon offer__icon_small'>";
    pageHtml+="<img src='" + filtrPage[page*3+2].icon + "' alt=''>";
    pageHtml+="</div>";
    pageHtml+="<h3 class='offer__title'>" + filtrPage[page*3+2].title + "</h3>";
    pageHtml+="<p class='offer__text'>" + filtrPage[page*3+2].text1 + "</p>";
    pageHtml+="<p class='offer__text'>" + filtrPage[page*3+2].text2 + "</p>";
    pageHtml+="</div>";
    pageHtml+="</div>";
    pageHtml+="</div>";
    
    return pageHtml; 
}

function getPaginationHtml(page,isUseFiltr) 
{
    let filtrPage=dataOfferList;
    if(isUseFiltr){
        filtrPage= filtrPage.filter(function(offer) {
  return offer.recomended===true;
        });
    }
    let maxNoteNumber = filtrPage.length;
    let maxPageNumber = Math.min(maxNoteNumber/3, page+5);
    let minPageNumber = Math.max(0,page-5);
    
    let paginationHtml = "";
    if(page>0) {
        paginationHtml+="<li><a href='javascript:showPage(0,"+isUseFiltr+")'><i class='fa fa-angle-double-left' aria-hidden='true'></i></a></li>"; 
        paginationHtml+="<li><a href='javascript:showPage("+(page-1)+","+isUseFiltr+")'><i class='fa fa-angle-left' aria-hidden='true'></i></a></li>";
          
    }
  
    
    for(i=minPageNumber; i<maxPageNumber; i++) 
    {  
        if(i==page) {
            paginationHtml+="<li class='active' ><a>" + (i+1) + "</a></li>";
        }
        else {
            paginationHtml+="<li><a href='javascript:showPage(" + i + "," + isUseFiltr+ ");'>" + (i+1) + "</a></li>";
        }    
    }
    
    if(page<(maxPageNumber-1)){
        paginationHtml+="<li><a href='javascript:showPage("+(page+1)+","+isUseFiltr+")'><i class='fa fa-angle-right' aria-hidden='true'></i></a></li>";

        paginationHtml+="<li><a href='javascript:showPage("+(maxPageNumber-1)+","+isUseFiltr+")'><i class='fa fa-angle-double-right' aria-hidden='true'></a></li>";       
    }
    

    
    return paginationHtml;
}
