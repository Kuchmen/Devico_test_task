(async function () {

    // const response = await fetch('our-honey-products.json');
    // const animals = await response.json();

    const animals = {
        'pigs': 6,
        'chickens': 12,
        'cows': 21
        };
    
    const legs = {
        'pigs': 4,
        'chickens': 2,
        'cows': 4
    }
    
    const result = animals.pigs * legs.pigs + animals.chickens * legs.chickens + animals.cows * legs.cows;
    
    document.getElementById('animals').innerText = result;

    console.log(result);

})();