function totalFine( fare ) {
    if(typeof fare !== 'number' || fare <= 0){
        return 'Invalid';
    }
    fare = fare + fare*20/100 +30;
    return fare;
}

const totalCost = totalFine("Gorib tai ticket katinai");
console.log(totalCost);

