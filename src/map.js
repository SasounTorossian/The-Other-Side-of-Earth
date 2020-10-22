const MapModule = (() => {
    window.initMap = () => {

        // Create map object with correct zoom, center and restrictions 
        let map1 = new google.maps.Map(document.getElementById("map1"), 
            {
                zoom: 1.3,
                center: new google.maps.LatLng(0,0),
                restriction: {
                    latLngBounds: {
                        north: 85,
                        south: -85,
                        west: -180,
                        east: 180
                    }
                }
            }
        )

        // Create map object with correct zoom, center and restrictions 
        let map2 = new google.maps.Map(document.getElementById("map2"), 
            {
                zoom: 1.3,
                center: new google.maps.LatLng(0,0),
                restriction: {
                    latLngBounds: {
                        north: 85,
                        south: -85,
                        west: -180,
                        east: 180
                    }
                }
            }
        )

        // Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input")
        const searchBox = new google.maps.places.SearchBox(input)
        // Bias the SearchBox results towards current map's viewport.
        map1.controls[google.maps.ControlPosition.TOP_LEFT].push(input)
        
        // On search box being filled, get place and add marker at location.
        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces()
            if (places.length == 0) return
            places.forEach((place) => addMarker(place.geometry.location))
          })
        
        let marker1 // Marker for map 1
        let marker2 // Marker for map 2

        // On click on map 1, place marker
        map1.addListener("click", (e) => addMarker(e.latLng))
        
        /** Adds marker where user clicked or searched,
         * then calculates antipode (other side of earth) 
         * position for map 2
         */
        const addMarker = (latLng) => {
            let lat = -latLng.toJSON().lat // Invert latitude
            let lng = latLng.toJSON().lng + 180 // invert longitude
            let antiLatLng = new google.maps.LatLng({lat , lng})

            if(marker1) marker1.setPosition(latLng)
            else marker1 = new google.maps.Marker({position: latLng, map: map1})
            map1.panTo(latLng)

            if(marker2) marker2.setPosition(antiLatLng)
            else marker2 = new google.maps.Marker({position: antiLatLng, map: map2})
            map2.panTo(antiLatLng)
            map2.setZoom(map1.getZoom())
        }
    }
    
    
    /**Removes all traced of google api from html in order to prevent
    * multiple loads of the api, which could cause issues later on.
    */
    const removeGoogleMapScript = () => {
        let keywords = ['maps.googleapis']
        
        //Remove google from BOM (window object)
        window.google = undefined
        
        //Remove google map scripts from DOM
        let scripts = document.head.getElementsByTagName("script")
        for (let i = scripts.length - 1; i >= 0; i--) {
            let scriptSource = scripts[i].getAttribute('src')
            if (scriptSource != null) {
                if (keywords.filter(item => scriptSource.includes(item)).length) {
                    scripts[i].remove()
                }
            }
        }
    }
    
    /**Create google api url using api key.
    * Set source of script to url, and defer until html is loaded.
    */
    const addGoogleMapScript = () => {
        const key = "AIzaSyBgXyqkZVXE515nBZW12GKBFkf4vEa4-xg" // API key
        const callback = "initMap" // Initial function to call
        const library = "places" // Places library for search box
        const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=${callback}&libraries=${library}`
        const script = document.createElement('script');
        script.src = url
        script.defer = true
        document.head.appendChild(script)
    }

    return {
        removeGoogleMapScript,
        addGoogleMapScript
    }
})()

export {
    MapModule
}