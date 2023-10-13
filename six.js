const productDetails={
    name:'Apple 2020 MacBook Air Laptop',
    price:82000,
    color:"Grey",
    hardDisc:"256 GB"
}

console.log("Below are the Product details." );
for(let keys of Object.keys(productDetails)){
    console.log(`${keys}: ${productDetails[keys]}`);
}