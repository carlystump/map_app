 var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: coords,
          zoom: 10,
          scrollwheel: false
          
        });
        
       
    
        var marker = new google.maps.Marker({
          position: coords,
          map: map,
          animation: google.maps.Animation.BOUNCE
          
         	
        });
        
        
        var contentString = city + ', ' + state;
        
        
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        google.maps.event.addListener(marker, 'click', function() {
           infowindow.open(map,marker);
        });
      
        
        
        }
        
     