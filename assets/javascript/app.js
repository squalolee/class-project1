// alert("Test");

// SET UP VARIABLES
var adzId = "673aae0c";
var adzKey = "d305d78426efb2b49e37fda6396a7790";

//Search Parameters
var queryJob = "";
var jobLocation = "";

//queryURL
var queryURL = "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=" + adzId + "&app_key=" + adzKey;

// FUNCTIONS
function runQuery(response, queryURL){
    $.ajax({url: queryURL, method: "GET", Accept: "application/json"})
        .done(function(jobData) {
            console.log(queryURL);
            console.log(jobData);
        })
}
runQuery("", queryURL);
// PROCESS