//Set datae & time

const dateNow= new Date();
pm.environment.set('currentDate', dateNow.toISOString());

//Generate the random amount value

var num = Math.floor(Math.random()*1000) + 10000;

console.log("Randome amount value is : " +num);

pm.environment.set('amount', num);


//Parse the response off the request & response body
var data = pm.response.json();
var reqBody = JSON.parse(request.data);


//Assert the status code is 200
pm.test("response is ok", function () {
    pm.response.to.have.status(200);
});


//COmpare the two field values from request & response body
pm.test("Compare the actual : " + data.amount.value + " & " + "the expected amount : " + reqBody.amount, function () { 
    pm.expect(reqBody.amount).is.to.equal(data.amount.value); 

    console.log("The actual amount is : " + data.amount.value + " & " + "The expected amount is : " + reqBody.amount);
});

//Random STring generator
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(5));

pm.environment.set("randomString", makeid(5));

//Traverse thru the length of the portfolio's and fetches all the id's
for (var i = 0; i<data.portfolios.length;i++)
{

console.log(data.portfolios[i].id)

pm.environment.set("portfolioId-"+[i], data.portfolios[i].id);

}