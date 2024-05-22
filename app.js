
//    function requestLocation() {
//             navigator.geolocation.getCurrentPosition(
//                 // Success callback
//                 function(position) {
//                     // If user grants permission, do something with the location
//                     console.log('Latitude:', position.coords.latitude);
//                     console.log('Longitude:', position.coords.longitude);
//                 },
//                 // Error callback
//                 function(error) {
//                   Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Please turn on your location",
                 
//                 });
//                 }
//             );
//         }

//         // On page load, request location permission
//         window.onload = requestLocation;
       




   
       
       
       
 
       
       
       
       
       
       
       
       
      function populateText() {
            var selectBox = document.getElementById("kit");
            var textDiv = document.getElementById("box");

            if (selectBox.value === "Incomplete") {
                textDiv.style.display = "block";
            } else {
                textDiv.style.display = "none";
            }
        }

        populateText()
        
       function populateZones() {
            var regionEl = document.getElementById('region').value;
            var zoneSelect = document.getElementById('zone');

            // Clear previous options
            zoneSelect.innerHTML = '';

            // Populate options based on the selected category
            if (regionEl === 'Upper Mainland 1') {
                var zoneArea1 = ['Zone A', 'Zone B'];
                populateOptions(zoneArea1);


            } else if (regionEl === 'Upper Mainland 2') {
                var zoneArea2 = ['Zone C'];
                populateOptions(zoneArea2);


            }else if(regionEl === 'Lower MainLand'){
                   var zoneArea3 = ['Zone A', 'Zone B'];
                populateOptions(zoneArea3);
            }


            else if(regionEl === 'Island 1'){
                   var zoneArea4 = ['Ikoyi', 'Victoria Island'];
                populateOptions(zoneArea4);
            }

            else if(regionEl === 'Island 2'){
                   var zoneArea5 = ['Lekki', 'Ajah'];
                populateOptions(zoneArea5);
            }

            else if(regionEl === 'North 1'){
                   var zoneArea6 = ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'];
                populateOptions(zoneArea6);
            }

            else if(regionEl === 'North 2'){
                   var zoneArea7 = ['Kano', 'Kaduna'];
                populateOptions(zoneArea7);
            }

            else if(regionEl === 'East 1'){
                   var zoneArea8 = ['Portharcourt Zone A', 'Portharcourt Zone B'];
                populateOptions(zoneArea8);
            }

            else if(regionEl === 'East 2'){
                   var zoneArea9 = ['Asaba'];
                populateOptions(zoneArea9);
            }

            else if(regionEl === 'West'){
                   var zoneArea9 = ['Oyo', 'Osun', 'Ekiti', 'Ondo', 'Ogun', 'Kwara'];
                populateOptions(zoneArea9);
            }
            // Add more conditions for other region if needed
        }

        function populateOptions(options) {
               var zoneSelect = document.getElementById('zone');
            options.forEach(function(option) {
                var optionElem = document.createElement('option');
                optionElem.textContent = option;
                zoneSelect.appendChild(optionElem);
            });
        }
        
        // Populate zones on page load
        populateZones();



    const scriptURL = 'https://script.google.com/macros/s/AKfycbwUWc6df8-oGGVFyyev_eCJgCshb6o3YNfk5sh7PEmII7uyK2tT6DfWn1I45ExpkZUx/exec';
                const form = document.forms['submit-to-google-sheet'];

                form.addEventListener('submit', e => {
                 e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
               .then(response => {
               Swal.fire({
                icon: "success",
                title: "Good job",
                text: "Your data is saved successfully",
                 
                });
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
       
       