"use strict";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm',
  '5pm', '6pm', '7pm', '8pm'];


let Seattle = {
  locationName: 'seattle',
  minCust: 23,
  MaxCust: 65,
  AvgCookieSale: 6.3,
  customerPerHoure: [],
  cookiesPerHoure: [],


  clcCustomerPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvergeCustomer = random(this.minCust, this.MaxCust);
      this.customerPerHoure.push(AvergeCustomer);
    }
  },
  clcCookiesPerHoure: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvgCookies = this.customerPerHoure[i] * this.AvgCookieSale
      this.cookiesPerHoure.push(Math.floor(AvgCookies))
    }
  },

  render: function () {
    let parent = document.getElementById('result');
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.locationName


    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);

    let total = 0;

    for (let i = 0; i < workingHours.length; i++) {
      let listItem = document.createElement('li');
      unorderList.appendChild(listItem);
      listItem.textContent = `${workingHours[i]}:${this.cookiesPerHoure[i]} cookies`
      total += this.cookiesPerHoure[i];
    }
    let lastLi = document.createElement('li');
    unorderList.appendChild(lastLi);
    lastLi.textContent = `${total} cookies`;

  }
}

Seattle.clcCustomerPerHour();
Seattle.clcCookiesPerHoure();
Seattle.render();







let Tokyo = {
  locationName: "Tokyo",
  minCust: 3,
  mixCust: 42,
  AvgCookieSale: 1.2,
  customerPerHoure: [],
  cookiesPerHoure: [],


  clcCustomerPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvergeCustomer = random(this.minCust, this.mixCust);
      this.customerPerHoure.push(AvergeCustomer);
    }
    console.log(this.customerPerHoure);
  },
  clcCookiesPerHoure: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvgCookies = this.customerPerHoure[i] * this.AvgCookieSale
      this.cookiesPerHoure.push(Math.floor(AvgCookies))
    }

  },

  render: function () {
    let parent = document.getElementById('result');
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.locationName


    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);

    let total = 0;

    for (let i = 0; i < workingHours.length; i++) {
      let listItem = document.createElement('li');
      unorderList.appendChild(listItem);
      listItem.textContent = `${workingHours[i]}:${this.cookiesPerHoure[i]} cookies`
      total += this.cookiesPerHoure[i];
    }
    let lastLi = document.createElement('li');
    unorderList.appendChild(lastLi);
    lastLi.textContent = `${total} cookies`;


  }
}


Tokyo.clcCustomerPerHour();
Tokyo.clcCookiesPerHoure();
Tokyo.render();










let Dubai = {
  locationName: "Dubai",
  minCust: 11,
  mixCust: 38,
  AvgCookieSale: 3.7,
  customerPerHoure: [],
  cookiesPerHoure: [],


  clcCustomerPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvergeCustomer = random(this.minCust, this.mixCust);
      this.customerPerHoure.push(AvergeCustomer);
    }
  },
  clcCookiesPerHoure: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvgCookies = this.customerPerHoure[i] * this.AvgCookieSale
      this.cookiesPerHoure.push(Math.floor(AvgCookies))
    }
  },

  render: function () {
    let parent = document.getElementById('result');
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.locationName


    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);

    let total = 0;

    for (let i = 0; i < workingHours.length; i++) {
      let listItem = document.createElement('li');
      unorderList.appendChild(listItem);
      listItem.textContent = `${workingHours[i]}:${this.cookiesPerHoure[i]} cookies`
      total += this.cookiesPerHoure[i];
    }
    let lastLi = document.createElement('li');
    unorderList.appendChild(lastLi);
    lastLi.textContent = `${total} cookies`;

  }
}


Dubai.clcCustomerPerHour();
Dubai.clcCookiesPerHoure();
Dubai.render();







let Paris = {
  locationName: "Paris",
  minCust: 20,
  mixCust: 38,
  AvgCookieSale: 2.3,
  customerPerHoure: [],
  cookiesPerHoure: [],


  clcCustomerPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvergeCustomer = random(this.minCust, this.mixCust);
      this.customerPerHoure.push(AvergeCustomer);
    }
  },
  clcCookiesPerHoure: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvgCookies = this.customerPerHoure[i] * this.AvgCookieSale
      this.cookiesPerHoure.push(Math.floor(AvgCookies))
    }
  },

  render: function () {
    let parent = document.getElementById('result');
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.locationName


    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);

    let total = 0;

    for (let i = 0; i < workingHours.length; i++) {
      let listItem = document.createElement('li');
      unorderList.appendChild(listItem);
      listItem.textContent = `${workingHours[i]}:${this.cookiesPerHoure[i]} cookies`
      total += this.cookiesPerHoure[i];
    }
    let lastLi = document.createElement('li');
    unorderList.appendChild(lastLi);
    lastLi.textContent = `${total} cookies`;

  }
}


Paris.clcCustomerPerHour();
Paris.clcCookiesPerHoure();
Paris.render();




let Lima = {
  locationName: "Lima",
  minCust: 2,
  mixCust: 16,
  AvgCookieSale: 4.6,
  customerPerHoure: [],
  cookiesPerHoure: [],


  clcCustomerPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvergeCustomer = random(this.minCust, this.mixCust);
      this.customerPerHoure.push(AvergeCustomer);
    }
  },
  clcCookiesPerHoure: function () {
    for (let i = 0; i < workingHours.length; i++) {
      let AvgCookies = this.customerPerHoure[i] * this.AvgCookieSale
      this.cookiesPerHoure.push(Math.floor(AvgCookies))
    }
  },

  render: function () {
    let parent = document.getElementById('result');
    let shopName = document.createElement('h3');
    parent.appendChild(shopName);
    shopName.textContent = this.locationName


    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);

    let total = 0;

    for (let i = 0; i < workingHours.length; i++) {
      let listItem = document.createElement('li');
      unorderList.appendChild(listItem);
      listItem.textContent = `${workingHours[i]}:${this.cookiesPerHoure[i]} cookies`
      total += this.cookiesPerHoure[i];
    }
    let lastLi = document.createElement('li');
    unorderList.appendChild(lastLi);
    lastLi.textContent = `${total} cookies`;


  }
}

Lima.clcCustomerPerHour();
Lima.clcCookiesPerHoure();
Lima.render();


