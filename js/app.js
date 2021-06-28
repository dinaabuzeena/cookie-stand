"use strict";

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm', '8pm'];


let Seattle= {
  locationName:"seattle",
  minCust:23, 
  MaxCust : 65,
  AvgCookieSale : 6.3,
  customerPerHoure:[],
  cookiesPerHoure:[],


  clcCustomerPerHouer: function(){
    for(let i=0 ; i<workingHours.length ;i++)
  let AvergeCustomer = random( this.minCust,  this.MaxCust);
   this.customerPerHoure.push(AvergeCustomer);
  }
     clcCookiesPerHoure : function(){
        for ( let i = 0; i < workinghours.length; i++){
           let AvgCookies  = this.CustomerPerHouer[i] * this.AvgCookieSale
            this.cookiesPerHoure.push(Math.floor(AvgCookies))
        }
    },

    reder:function(){
      let parent =document.getElementById("result");
      letshopName=document.createElement("h3");
      parent.appendChild("shopName");
      shopName.textContent=this.locationName


      let unorderList= document.createElement("ul");
      parent.appendChild("unorderList");


      for(let i=0 ; i<workingHours.length ; i++);
      let listItem= document.createElement("li");
      unorderList.appendChild("listItem");
      listItem.textContent`${workingHours[i]}:${cookiesPerHoure[i]} cookies`}

    }


Seattle.CustomerPerHouer();
Seattle.cookiesPerHoure();







let Tokyo = {
  locationName:"Tokyoe",
  minCust:3, 
  mixCust : 42,
  AvgCookieSale : 1.2,
  customerPerHoure:[],
  cookiesPerHoure:[],


  clcCustomerPerHouer: function(){
    for(let i=0 ; i<workingHours.length ;i++)
  let AvergeCustomer = random( this.minCust,  this.MaxCust);
   this.customerPerHoure.push(AvergeCustomer);
  }
   clcCookiesPerHoure : function(){
        for ( let i = 0; i < workinghours.length; i++){
           let AvgCookies  = this.CustomerPerHouer[i] * this.AvgCookieSale
            this.cookiesPerHoure.push(Math.floor(AvgCookies))
        }
    },

    reder:function(){
      let parent =document.getElementById("result");
      letshopName=document.createElement("h3");
      parent.appendChild("shopName");
      shopName.textContent=this.locationName


      let unorderList= document.createElement("ul");
      parent.appendChild("unorderList");


      for(let i=0 ; i<workingHours.length ; i++);
      let listItem= document.createElement("li");
      unorderList.appendChild("listItem");
      listItem.textContent`${workingHours[i]}:${cookiesPerHoure[i]} cookies`}

    }


    Tokyo.CustomerPerHouer();
    Tokyo.cookiesPerHoure();










   let Dubai = {
   locationName:"Tokyoe",
    minCust:11, 
    mixCust : 38,
   AvgCookieSale : 3.7,
   customerPerHoure:[],
   cookiesPerHoure:[],


 clcCustomerPerHouer: function(){
    for(let i=0 ; i<workingHours.length ;i++)
  let AvergeCustomer = random( this.minCust,  this.MaxCust);
   this.customerPerHoure.push(AvergeCustomer);
  }
     clcCookiesPerHoure : function(){
        for ( let i = 0; i < workinghours.length; i++){
           let AvgCookies  = this.CustomerPerHouer[i] * this.AvgCookieSale
            this.cookiesPerHoure.push(Math.floor(AvgCookies))
        }
    },

    reder:function(){
      let parent =document.getElementById("result");
      letshopName=document.createElement("h3");
      parent.appendChild("shopName");
      shopName.textContent=this.locationName


      let unorderList= document.createElement("ul");
      parent.appendChild("unorderList");


      for(let i=0 ; i<workingHours.length ; i++);
      let listItem= document.createElement("li");
      unorderList.appendChild("listItem");
      listItem.textContent`${workingHours[i]}:${cookiesPerHoure[i]} cookies`}

    }


    Dubai.CustomerPerHouer();
    Dubai.cookiesPerHoure();
   

  
  
  

  let Paris = {
    locationName:"Paris",
    minCust:20, 
    mixCust : 38,  
    AvgCookieSale : 2.3,
    customerPerHoure:[],
    cookiesPerHoure:[],
 
 
   clcCustomerPerHouer: function(){
     for(let i=0 ; i<workingHours.length ;i++)
    let AvergeCustomer = random( this.minCust,  this.MaxCust);
    this.customerPerHoure.push(AvergeCustomer);
    }
    clcCookiesPerHoure : function(){
         for ( let i = 0; i < workinghours.length; i++){
            let AvgCookies  = this.CustomerPerHouer[i] * this.AvgCookieSale
             this.cookiesPerHoure.push(Math.floor(AvgCookies))
         }
     },
 
     reder:function(){
       let parent =document.getElementById("result");
       letshopName=document.createElement("h3");
       parent.appendChild("shopName");
       shopName.textContent=this.locationName
 
 
       let unorderList= document.createElement("ul");
       parent.appendChild("unorderList");
 
 
       for(let i=0 ; i<workingHours.length ; i++);
       let listItem= document.createElement("li");
       unorderList.appendChild("listItem");
       listItem.textContent`${workingHours[i]}:${cookiesPerHoure[i]} cookies`}
 
     }
 
 
     Paris.CustomerPerHouer();
     Paris.cookiesPerHoure();




  let Lima = {
    locationName:"Lima",
    minCust:2, 
    mixCust : 16,
    AvgCookieSale : 4.6,
    customerPerHoure:[],
    cookiesPerHoure:[],
 
 
   clcCustomerPerHouer: function(){
     for(let i=0 ; i<workingHours.length ;i++)
    let AvergeCustomer = random( this.minCust,  this.MaxCust);
    this.customerPerHoure.push(AvergeCustomer);
    }
    clcCookiesPerHoure : function(){
         for ( let i = 0; i < workinghours.length; i++){
            let AvgCookies  = this.CustomerPerHouer[i] * this.AvgCookieSale
             this.cookiesPerHoure.push(Math.floor(AvgCookies))
         }
     },
 
     reder:function(){
       let parent =document.getElementById("result");
       letshopName=document.createElement("h3");
       parent.appendChild("shopName");
       shopName.textContent=this.locationName
 
 
       let unorderList= document.createElement("ul");
       parent.appendChild("unorderList");
 
 
       for(let i=0 ; i<workingHours.length ; i++);
       let listItem= document.createElement("li");
       unorderList.appendChild("listItem");
       listItem.textContent`${workingHours[i]}:${cookiesPerHoure[i]} cookies`}
 
     }
 
 
     Limas.CustomerPerHouer();
     Lima.cookiesPerHoure();



  