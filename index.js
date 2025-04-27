// updated version
// this part is added as it's a form so i think submitting the form reloads the page as a default setting..
const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
});
// important..
let showResult = () =>{
    const inches = document.querySelector('#value');
    const result = document.querySelector('p');
    const distance = parseFloat(inches.value);
    let convertedResult = (distance / 39.37).toFixed(1);
    result.innerHTML = `${distance} inches equals ${convertedResult} metres.`;
}




//i think it could be done in easier way but it's working for now at least..
// دي كانت القديمة من التاسك الاول
// (function(){
//     const inches = document.querySelector('#value');
//     const result = document.querySelector('p');
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(event){
//         event.preventDefault();
//         const distance = parseFloat(inches.value);
//         if(distance){
//             let convertedResult = (distance / 39.37).toFixed(2);            
//             result.innerHTML = `${distance} inches equals ${convertedResult} metres.`;
//         }else {
//             result.innerHTML = "Please insert a number !!";
//         }
//     });
// })();

