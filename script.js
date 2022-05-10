(async function () {

    const response = await fetch('animals.json');
    const animals = await response.json();
        
    const legs = {
        'pigs': 4,
        'chickens': 2,
        'cows': 4
    }
    
    const result = animals.pigs * legs.pigs + animals.chickens * legs.chickens + animals.cows * legs.cows;
    
    document.getElementById('animals').innerText = result;

    console.log(result);
})();
