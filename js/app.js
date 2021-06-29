
"use strict";

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm', '8pm'];


   let parentElement = document.getElementById("parent")
   let tableElement = document.createElement('table');
   parentElement.appendChild(tableElement);


  
function SalomnCookies(LocationName, minCust, mixCust ,	AvgCookieSale) {
  this.LocationName= LocationName;
  this.minCust = minCust;
  this.mixCust  = mixCust ;
  this.AvgCookieSale = AvgCookieSale;
  this.customerPerHoure=[];
  this.cookiesPerHoure=[];
  this.total=0;

}

let Seattle = new SalomnCookies('Seattle',  23, 65, 	6.3)
console.log(Seattle);

let Tokyo = new SalomnCookies('Tokyo',  3, 24, 1.2)
console.log(Seattle);

let Dubai = new SalomnCookies('Dubai',	11, 38, 3.7)
console.log(Dubai);


let Paris = new SalomnCookies('Paris',	20, 38, 2.3)
console.log(Paris);


let Lima = new SalomnCookies('Lima',	20, 38, 2.3)
console.log(Lima);

SalomnCookies.prototype.clcCustomerPerHouer= function(){
  for(let i=0 ; i<workingHours.length ;i++){
  let AvergeCustomer = random( this.minCust,  this.mixCust);
 this.customerPerHoure.push(AvergeCustomer);
  }
 }
 SalomnCookies.prototype.clcCookiesPerHoure = function(){
      for ( let i = 0; i < workingHours.length; i++){
         let AvgCookies  = this.customerPerHoure[i] * this.AvgCookieSale
         this.total=this.total+AvgCookies
          this.cookiesPerHoure.push(Math.floor(AvgCookies))
        
      }
  
  }

  Seattle.clcCustomerPerHouer();
   console.log(Tokyo.clcCustomerPerHouer());
   console.log(Dubai.clcCustomerPerHouer());
   console.log(Paris.clcCustomerPerHouer());
   console.log(Lima.clcCustomerPerHouer());


   console.log(Seattle.clcCookiesPerHoure());
   console.log(Tokyo.clcCookiesPerHoure());
   console.log(Dubai.clcCookiesPerHoure());
   console.log(Paris.clcCookiesPerHoure());
   console.log(Lima.clcCookiesPerHoure());




   SalomnCookies.prototype.render = function() {
    
    let dataRow = document.createElement('tr');
    tableElement.appendChild(dataRow);
    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent =this.LocationName;

    for( let i=0 ; i<workingHours.length ; i++) {
      let th2 = document.createElement('td');
      dataRow.appendChild(th2);
      th2.textContent= this.cookiesPerHoure[i];

    }
    let th3 = document.createElement('td');
    dataRow.appendChild(th3);
    th3.textContent= Math.floor(this.total);

   }

   let tableHeader=function(){
    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);
     let th1 = document.createElement('th');
   headerRow.appendChild(th1);
   th1.textContent="branch name";
   for( let i=0 ; i<workingHours.length ; i++) {
    let th2 = document.createElement('th');
    headerRow.appendChild(th2);
    th2.textContent=workingHours[i];

  }
} 
   tableHeader();
   Seattle.render();
   Tokyo.render();
   Dubai.render();
   Paris.render();
   Lima.render();


  //  lab7 is done
  // dina


   



   
