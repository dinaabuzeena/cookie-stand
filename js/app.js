"use strict";

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm', '8pm'];


let Seattle= {
  minCust:23, 
  MaxCust : 65,
  AvgCookieSale : 6.3,
  cookiesPerHoure1:[],

  getCustomer: function(){
   let AvgCustomer = random( this.minCust,  this.MaxCust);
    return AvgCustomer ;
  },

    getCookies: function(){
        for ( let i = 0; i < hours.length; i++){
           let AvgCookies  = this.getCustomer() * this.AvgCookieSale
            this.cookiesPerHoure.push(Math.floor(AvgCookies))
        }
    },
}

Seattle.getCookies();
console.log(Seattle.cookiesPerHoure)

let parent = document.getElementById('parent');
let header2 = document.createElement('h2');
parent.appendChild(header2);
header2.textContent = Seattle.cookiesPerHoure;






let Tokyo = {
  minCust:3, 
  mixCust : 42,
  AvgCookieSale : 1.2,
  cookiesPerHoure2:[],

  getCustomer: function(){
   let AvgCustomer = random( this.minCust,  this.MaxCust);
    return AvgCustomer ;
  },

    getCookies: function(){
        for ( let i = 0; i < hours.length; i++){
           let AvgCookies  = this.getCustomer() * this.AvgCookieSale
            this.cookiesPerHoure.push(Math.floor(AvgCookies))
        }
    },
}

Tokyo.getCookies();
console.log(Tokyo.cookiesPerHoure)










let Dubai = {
    minCust:11, 
    mixCust : 38,
   AvgCookieSale : 3.7,
   cookiesPerHoure3:[],

getCustomer: function(){
 let AvgCustomer = random( this.minCust,  this.MaxCust);
  return AvgCustomer ;
},

  getCookies: function(){
      for ( let i = 0; i < hours.length; i++){
         let AvgCookies  = this.getCustomer() * this.AvgCookieSale
          this.cookiesPerHoure.push(Math.floor(AvgCookies))
      }
  },
}

Dubai.getCookies();
console.log(Dubai.cookiesPerHoure)


   

  
  
  

  let Paris = {
    minCust:20, 
    mixCust : 38,  
    AvgCookieSale : 2.3,
   cookiesPerHoure4:[],

getCustomer: function(){
 let AvgCustomer = random( this.minCust,  this.MaxCust);
  return AvgCustomer ;
},

  getCookies: function(){
      for ( let i = 0; i < hours.length; i++){
         let AvgCookies  = this.getCustomer() * this.AvgCookieSale
          this.cookiesPerHoure.push(Math.floor(AvgCookies))
      }
  },
}

Paris.getCookies();
console.log(Paris.cookiesPerHoure)






  let Lima = {
    minCust:2, 
    mixCust : 16,
    AvgCookieSale : 4.6,
  cookiesPerHoure5:[],

getCustomer: function(){
 let AvgCustomer = random( this.minCust,  this.MaxCust);
  return AvgCustomer ;
},

  getCookies: function(){
      for ( let i = 0; i < hours.length; i++){
         let AvgCookies  = this.getCustomer() * this.AvgCookieSale
          this.cookiesPerHoure.push(Math.floor(AvgCookies))
      }
  },
}

Lima .getCookies();
console.log(Lima .cookiesPerHoure)






  