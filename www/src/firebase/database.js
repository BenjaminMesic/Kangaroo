function realtimeUpdates(){

  return database.collection("players").doc(userID)
    .onSnapshot(function(doc){
      // console.log("Current data: ", doc && doc.data());
      // console.log(doc.data().kangoos)

      // Update values
      geopointPlayer    = doc.data().geopointPlayer
      geopointKangaroo  = doc.data().geopointKangaroo
      timestampPlayer   = doc.data().timestampPlayer
      timestampKangaroo = doc.data().timestampKangaroo
      timestampBounty   = doc.data().timestampBounty
      kangoos           = doc.data().kangoos 

      if ( geopointPlayer != null && geopointKangaroo != null){

        // Update markers
        var latlngKangaroo = new google.maps.LatLng(
          geopointKangaroo.latitude, geopointKangaroo.longitude);
        markerKangaroo.setPosition(latlngKangaroo);

        var latlngPlayer = new google.maps.LatLng(
          geopointPlayer.latitude, geopointPlayer.longitude);
        markerPlayer.setPosition(latlngPlayer);
      }

      // Update html
      $("#kangoos").html(kangoos)
    
    }, function(e) {
      console.log(e.message)
      myApp.alert(e.message, 'Kangaroo')
  });
};

function updateGeoLocation(){

  navigator.geolocation.getCurrentPosition(onSuccess, onError);

  function onSuccess(position) {
    
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    // Check if kangaroo client null
    if (geopointKangaroo == null){

      // Make sure that kangaroo is really not defined at firestore
      var docRef = database.collection("players").doc(userID);
      var geopointKangarooTemp = null;

      docRef.get().then(function(doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            geopointKangarooTemp = doc.data().geopointKangaroo;
          } else {
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });

      // If not update all
      if (geopointKangarooTemp == null){
        data = {
          geopointPlayer    : new firebase.firestore.GeoPoint(latitude, longitude),
          timestampPlayer   : timestamp,
          geopointKangaroo  : new firebase.firestore.GeoPoint(latitude, longitude),
          timestampKangaroo : timestamp
        }        
      }

    }else{
      // Player update only
      data = {
        geopointPlayer    : new firebase.firestore.GeoPoint(latitude, longitude),
        timestampPlayer   : timestamp,
      }
    };

    // Add a new document in collection "players"
    database.collection("players").doc(userID).set(data,{merge:true}).then(function() {
        console.log("Document successfully updated!");
    }).catch(function(error) {
        console.error("Error updating document: ", error);
    });
  };

  // onError Callback receives a PositionError object
  function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
  };
};

function kangarooLocation(){

  updateGeoLocation();

  map.setCenter(markerKangaroo.getPosition());

};

function yourLocation(){

  updateGeoLocation();

  map.setCenter(markerPlayer.getPosition())

};

// function getPlayers(db){

//   db.collection("players").get().then(function(querySnapshot) {
//       querySnapshot.forEach(function(doc) {
//           console.log(doc.id, " => ", doc.data());
//       });
//   });

// }

// Button handler
// $("#getPlayers").click(function(){
//   getPlayers(database);
// });