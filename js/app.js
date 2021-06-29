
"use strict";

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', 
'5pm', '6pm', '7pm'];


   let parentElement = document.getElementById("parent")
   let tableElement = document.createElement('table');
   parentElement.appendChild(tableElement);
   let arrayShop =[];


  
function SalomnCookies(LocationName, minCust, mixCust ,	AvgCookieSale) {
  this.LocationName= LocationName;
  this.minCust = minCust;
  this.mixCust  = mixCust ;
  this.AvgCookieSale = AvgCookieSale;
  this.customerPerHoure=[];
  this.cookiesPerHoure=[];
  this.total=0;
  arrayShop.push(this);

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
   Tokyo.clcCustomerPerHouer();
   Dubai.clcCustomerPerHouer();
   Paris.clcCustomerPerHouer();
   Lima.clcCustomerPerHouer();


   Seattle.clcCookiesPerHoure();
   Tokyo.clcCookiesPerHoure();
   Dubai.clcCookiesPerHoure();
   Paris.clcCookiesPerHoure();
   Lima.clcCookiesPerHoure();




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
  let tdHeader=document.createElement('th');
  headerRow.appendChild(tdHeader);
  tdHeader.textContent='Daily Location Total';
} 
   tableHeader();
   Seattle.render();
   Tokyo.render();
   Dubai.render();
   Paris.render();
   Lima.render();


function totalOfTotal(){
  let row= document.createElement('tr');
  tableElement.appendChild(row);
  let fistTd = document.createElement('td');
  row.appendChild(fistTd);
  fistTd.textContent='total';
  let totFinal =0;
  for(let i=0 ; i<workingHours.length ; i++){
    let tot=0;
    
    for(let j=0 ; j<arrayShop.length ;j++){
     let result1 =arrayShop[j].cookiesPerHoure[i];
      tot+=result1;
      }
    let tdTot=document.createElement('td');
    row.appendChild(tdTot);
    tdTot.textContent=tot;
    totFinal+=tot;
  }
  let tdFinal=document.createElement('td');
    row.appendChild(tdFinal);
    tdFinal.textContent=totFinal;

  }
  totalOfTotal();





   



   
