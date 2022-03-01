

// load phone api
const searchText =()=>{
    
   let searchPhones = document.getElementById('search-input').value
   loadPhones(searchPhones);
   searchPhones = " ";
}

const loadPhones = searchText => {
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}

// display phones searching by names

const displayPhones = phones =>{
    phones.forEach(phone => {
        // console.log(phone)
        const divContainer =document.getElementById('div-container')
        const container = document.createElement('div');
        container.innerHTML = `
        <div class="col">
                  <div class="card h-75 ">
                    <img src="${phone.image}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">${phone.phone_name}</h4>
                      <h5 class="card-title">${phone.brand}</h5>
                      <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary">Details</button>
                    </div>
                  </div>
                </div>
        `
        divContainer.appendChild(container);
    });
    
}

// load details

const loadDetails =slug=>{
    const url =` https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
}
const displayDetails =details =>{
    console.log(details)
    const detailsContainer =document.getElementById('details')
    detailsContainer.innerHTML =`
    <div class=" w-50 ">
                    <img src="${details.image}" class=" w-75" alt="...">
                    <div class="card-body">
                      <h4 class="card-title">${details.name}</h4>
                      <h5 class="card-title">${details.releaseDate}</h5>
                      <p class="card-text"><strong>Chipset:</strong>${details.mainFeatures.chipSet},<strong>Display:</strong>${details.mainFeatures.displaySize},<strong>Memory:</strong>${details.mainFeatures.memory}</p>
                      <p class="card-text"><strong>Sensors:</strong>${details.mainFeatures.sensors[0]},${details.mainFeatures.sensors[1]},${details.mainFeatures.sensors[2]},${details.mainFeatures.sensors[3]},${details.mainFeatures.sensors[4]},${details.mainFeatures.sensors[5]},</p>
                    </div>
                  </div>
    `
}


