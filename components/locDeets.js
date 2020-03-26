class LocDeets{
  constructor(deetsElement){
    this.deetsElement = deetsElement;
    this.renderDeets = this.renderDeets.bind(this);
    this.handlePlaceDeets = this.handlePlaceDeets.bind(this);
    this.renderLocPhoto = this.renderLocPhoto.bind(this);
    this.getPlaceDeets = null;
  }

  handlePlaceDeets(getPlaceDeets){
    this.getPlaceDeets = getPlaceDeets;
  }

  renderDeets(results, latitude, longitude){
    this.deetsElement.innerHTML = "";
    console.log(results.status);

    var latRow = document.createElement("tr");
    var latHead = document.createElement("th");
    var latData = document.createElement("td");
    latHead.textContent = "Latitude";
    latData.textContent = latitude;
    latRow.appendChild(latHead);
    latRow.appendChild(latData);

    var longRow = document.createElement("tr");
    var longHead = document.createElement("th");
    var longData = document.createElement("td");
    longHead.textContent = "Longitude";
    longData.textContent = longitude;
    longRow.appendChild(longHead);
    longRow.appendChild(longData);

    var locRow = document.createElement("tr");
    var locHead = document.createElement("th");
    var locData = document.createElement("td");
    locHead.textContent = "Location Description";

    if(results.status === "OK"){
      locData.textContent = results.results[0].formatted_address;
      this.getPlaceDeets(results.results[0].place_id);
    } else {
      locData.textContent = "Remote Location or Ocean, No Google Data Available";
    }

    locRow.appendChild(locHead);
    locRow.appendChild(locData);

    this.deetsElement.appendChild(latRow);
    this.deetsElement.appendChild(longRow);
    this.deetsElement.appendChild(locRow);
  }

  renderLocPhoto(photoUrl){
    var photoRow = document.createElement("tr");
    var photoHead = document.createElement("th");
    var photoCell = document.createElement("td");
    var photo = document.createElement("img");

    photoHead.textContent = "Location Photo";
    photo.src = photoUrl;

    photoCell.appendChild(photo);
    photoRow.appendChild(photoHead);
    photoRow.appendChild(photoCell);

    this.deetsElement.appendChild(photoRow);
  }


}
