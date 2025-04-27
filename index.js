(function(){
    const inches = document.querySelector('#value');
    const result = document.querySelector('p');
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        const distance = parseFloat(inches.value);
        if(distance){
            let convertedResult = (distance / 39.37).toFixed(2);            
            result.innerHTML = `${distance} inches equals ${convertedResult} metres.`;
        }else {
            result.innerHTML = "Please insert a number !!";
        }
    });
})();

