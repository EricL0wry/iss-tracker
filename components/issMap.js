class IssMap{
  constructor(mapElement, refreshButton){
    this.mapElement = mapElement;
    this.refreshButton = refreshButton;
    this.latitude = null;
    this.longitude = null;
    this.iss = null;
    this.map = null;
    this.createMap = this.createMap.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.refreshMap = null;
  }

  createMap(latitude, longitude) {
    var icon = {
      url: "./assets/space-station (1).png",
      scaledSize: new google.maps.Size(70, 70),
      anchor: new google.maps.Point(35, 35)
    }

    this.latitude = latitude;
    this.longitude = longitude;

    this.iss = new google.maps.LatLng(this.latitude, this.longitude);

    this.map = new google.maps.Map(this.mapElement, {
      zoom: 4,
      center: this.iss,
      styles: darkMap
    });

    this.issMarker = new google.maps.Marker({
      position: this.iss,
      map: this.map,
      icon: icon
    });
  }

  onRefresh(refreshMap){
    this.refreshMap = refreshMap;
    this.refreshButton.addEventListener("click", this.refreshMap);
  }
}
