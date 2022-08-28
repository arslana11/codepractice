//global variable
var services = [];   

function saveService() {
     
    var serviceName = document.getElementById('serviceName').value;
    var supplier = document.getElementById('supplier').value;
    var purchasePrice = document.getElementById('purchasePrice').value;
    var sellingPrice = document.getElementById('sellingPrice').value;
    var serviceType = document.querySelector("input[type='radio'][name=serviceType]:checked").value;

    // calculating profit
    if (serviceType == 'true') {
        var profit = (purchasePrice * 12) - sellingPrice;
    } else {
        var profit = sellingPrice - purchasePrice;
    }
    document.getElementById('profit').value = profit;

    var service = {
        serviceName: serviceName,
        supplier: supplier,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        serviceType: serviceType,
        profit: profit
    }
    services.push(service);

    console.log(services);
}

function printService() {
    var firstService = services[0];
    document.getElementById('txtServiceName').innerHTML = firstService.serviceName;
}


// array operations
var employess = [
    {
        id: 123,
        name: 'rana',
        email: 'rana@gmail.com',
    },
    {
        id: 124,
        name: 'arsal',
        email: 'arsal@gmail.com',
    },
    {
        id: 125,
        name: 'shan',
        email: 'shan@gmail.com',
    },
    {
        id: 126,
        name: 'ali',
        email: 'ali@gmail.com',
    }
];
employess.push(
    {
    id: 127,
    name: 'jane',
    email: 'jane@gmail.com',
    }
)
employess.push(
    {
    id: 127,
    name: 'jane',
    email: 'jane@gmail.com',
    }
)

employess.map(function(item, index) { 
    console.log(item, index)
});

// callback function
// when a thing is completed

var arr = [1,2,3,4,5,6,7,8,9];

function maphandler(item, index) {
    console.log(item, index)
}
arr.map(maphandler)