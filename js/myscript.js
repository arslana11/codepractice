function saveService(){
    var serviceName = document.getElementById('serviceName').value;
    var supplier = document.getElementById('supplier').value;
    var purchasePrice = document.getElementById('purchasePrice').value;
    var sellingPrice = document.getElementById('sellingPrice').value;
    var profit = document.getElementById('profit').value;
    var serviceType = document.querySelector("input[type='radio'][name=serviceType]:checked").value;
    var service = {
        serviceName: serviceName,
        supplier: supplier,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        profit: profit,
        serviceType: serviceType
    }
    console.log(service)
}