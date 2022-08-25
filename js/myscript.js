function saveService(){
    var serviceName = document.getElementById('serviceName').value;
    var supplier = document.getElementById('supplier').value;
    var purchasePrice = document.getElementById('purchasePrice').value;
    var sellingPrice = document.getElementById('sellingPrice').value;
    var serviceType = document.querySelector("input[type='radio'][name=serviceType]:checked").value;
    var service = {
        serviceName: serviceName,
        supplier: supplier, 
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        serviceType: serviceType
    }
    
    console.log(service);
    
    // calculating profit
    if (service.serviceType == 'true') {
        var profit = (service.purchasePrice * 12 ) - service.sellingPrice;
    } else {
        var profit = service.sellingPrice - service.purchasePrice;
    }
    document.getElementById('profit').value = profit;
}