const BASE_URL = "https://zagster-service.herokuapp.com"


$(updateView)
$(displayHourlyChart)

let ridesPerHourChart = []

function updateView() {
   $.getJSON(BASE_URL + "/rides/count", updateRideCount )
  /* $.when( $.getJSON(BASE_URL + "/rides/count/per_hour", displayHourlyChart)
   ).then(
       displayHourlyChart
   );*/


}


numberOfRides = data.count
$("h2#rideCount").html(numberOfRides)



function displayHourlyChart(){
    var ctx = document.getElementById("ridesPerHourChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["0", "1", "2", "3", "4", "5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
            datasets: [{
                label: '# of Votes',
                data: [429, 231, 130, 85, 42, 1, 0, 1, 17, 16, 795, 425, 921, 846, 1795, 1789, 2119, 1630, 1942, 1637, 1636, 1054, 843, 710],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    

    
}
