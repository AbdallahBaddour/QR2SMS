var app = angular.module('app.controllers', []);

app.controller("stsCtrl", function ($scope, $cordovaBarcodeScanner, $cordovaSms) {

  document.addEventListener("deviceready", function () {

    var options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: '' // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
        //intent: 'INTENT' // send SMS inside a default SMS app
      }
    };
    $scope.stsSMS = function () {
      //Scan Barcode containing each carrier info
      ionic.Platform.ready(function () {

        $cordovaBarcodeScanner.scan().then(function (imageData) {

          var content = imageData.text;

          //Get All sim info
          window.plugins.sim.getSimInfo(successCallback, errorCallback);

          function successCallback(result) {
            $scope.carriername = result.carrierName; //extract Carrier Name

            var info = [];
            info = content.split("-").map(function (e) {
              return e.split(":");
            });
            var i;
            for (i = 0; i < info.length; i++) {
              var cn = info[i][0];
              if (cn == $scope.carriername) {
                var nb = info[i][1];
                var msg = info[i][2];
                $cordovaSms
                  .send(nb, msg, options)
                  .then(function () {
                    alert('Message Sent');
                    // Success! SMS was sent
                  }, function (error) {
                    alert('Error While Sending');
                    // An error occurred
                  });
              }
            }
          }

          function errorCallback(error) {
            alert("Error");
          }

        }, function (error) {
          //console.log("An error happened -> " + error);
        });
      });

    }
  });

});
