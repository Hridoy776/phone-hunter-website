

// load phone api
const searchText =()=>{
    
   const searchPhones = document.getElementById('search-input').value;
   
   loadPhones(searchPhones);
   
   document.getElementById('search-input').value ='';
};

const loadPhones = searchText => {
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhones(data.data))
}

// display phones searching by names

function displayPhones(phones) {
    const divContainer = document.getElementById('div-container');
    divContainer.textContent = '';
    if(phones.length!=0){
        phones?.slice(0,20).forEach(phone => {
            const container = document.createElement('div');
            container.innerHTML = `
            <div class="col rounded-5 border-secondary">
               <div class="card h-75">
                 <img src="${phone.image}" class="card-img-top w-100" alt="...">
                 <div class="card-body">
                   <h4 class="card-title">${phone.phone_name}</h4>
                   <h5 class="card-title">${phone.brand}</h5>
                   <button onclick="loadDetails('${phone.slug}')" class="btn btn-primary">Details</button>
                 </div>
               </div>
             </div>
            `;
            divContainer.appendChild(container);
        });
    }
    else{
        alert('hello')
    }
}

// load details

const loadDetails =slug=>{
    const url =` https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data.data))
    
}
// dispay details
const displayDetails =details =>{
    console.log(details)
    const detailsContainer =document.getElementById('details');
    detailsContainer.textContent ='';
    detailsContainer.innerHTML =`
    <div class=" w-50 rounded">
         <img src="${details.image}" class=" img-fluid" alt="...">
         <div class="card-body">
           <h4 class="card-title">${details.name}</h4>
           <h5 class="card-title">${details.releaseDate ? details.releaseDate:'release date not found' }</h5>
           <p class="card-text"><strong>Chipset:</strong>${details.mainFeatures.chipSet},<strong>Display:</strong>${details.mainFeatures.displaySize},<strong>Memory:</strong>${details.mainFeatures.memory}</p>
           <p class="card-text"><strong>Sensors:</strong>${details.mainFeatures.sensors[0]},${details.mainFeatures.sensors[1]},${details.mainFeatures.sensors[2]},${details.mainFeatures.sensors[3]},${details.mainFeatures.sensors[4]},${details.mainFeatures.sensors[5]}</p>
           <p class="card-text"><strong>Others:</strong>${details?.others?.Bluetooth ? details?.others?.Bluetooth:'not found'},${details?.others?.GPS ? details?.others?.GPS:''}.${details?.others?.NFC ? details?.others?.NFC:''},${details?.others?.Radio ? details?.others?.Radio:''},${details?.others?.USB ? details?.others?.USB:''},${details?.others?.WLAN ? details?.others?.WLAN:''}</p>
         </div>
    </div>
    `;
}


