const axios = require('axios');

let requestStatus; //responseError, apiIsDown, validResponse

//https://petstore.swagger.io/v2/pet - valid api to try
//http://localhost/9000 - api is down url
axios
    .get("https://petstore.swagger.io/v2/pet/findByStatus?status=pending")
    .then((result) => {
        requestStatus = "validResponse"
    })
    .catch(e => {
        if (e.code === "ECONNREFUSED" || e.code === "ENOTFOUND") {
            requestStatus = "apiIsDown";
        } else {
            requestStatus = "responseError";
        }
    }).then(() => {
        console.log(`The request status is ${requestStatus}`);
        //here seb can based on the result to increment the counter
    });