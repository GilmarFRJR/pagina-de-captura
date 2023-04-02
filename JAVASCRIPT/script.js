// timer começo------------------------------------------------------------------------------------------------------------------

let timeLeft = 6 * 24 * 60 * 60; 

const daysElement = $("#dias");
const hoursElement = $("#horas");
const minutesElement = $("#minutos");
const secondsElement = $("#segundos");


function updateTimer() {

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  
  daysElement.text(days);
  hoursElement.text(hours.toString().padStart(2, "0"));
  minutesElement.text(minutes.toString().padStart(2, "0"));
  secondsElement.text(seconds.toString().padStart(2, "0"));


  if (timeLeft === 0) {
    clearInterval(timer);
  }

 
  timeLeft--;
}


const timer = setInterval(updateTimer, 1000);

// timer fim------------------------------------------------------------------------------------------------------------------


// habilidades começo---------------------------------------------------------------------------------------------------------

function animacao() {
  setTimeout(function() {
    $('#textoMudando').text('Depois do evento gratuito:');
    $('.progresso1').css('width', '40%').css('background-color', 'rgb(255, 153, 0)');
    $('.progresso2').css('width', '30%').css('background-color', 'rgb(255, 153, 0)');
    $('.progresso3').css('width', '30%').css('background-color', 'rgb(255, 153, 0)');
    $('.progresso4').css('width', '50%').css('background-color', 'rgb(255, 153, 0)');
    $('.progresso5').css('width', '36%').css('background-color', 'rgb(255, 153, 0)');
    $('.progresso6').css('width', '53%').css('background-color', 'rgb(255, 153, 0)');
    setTimeout(function() {
      $('#textoMudando').text('Depois de fazer nosso curso pago:');
      $('.progresso1').css('width', '85%').css('background-color', 'greenyellow');
      $('.progresso2').css('width', '95%').css('background-color', 'greenyellow');
      $('.progresso3').css('width', '70%').css('background-color', 'greenyellow');
      $('.progresso4').css('width', '85%').css('background-color', 'greenyellow');
      $('.progresso5').css('width', '75%').css('background-color', 'greenyellow');
      $('.progresso6').css('width', '80%').css('background-color', 'greenyellow');
      setTimeout(function() {
        $('#textoMudando').text('Antes de nos conhecer:');
        $('.progresso1').css('width', '15%').css('background-color', 'red');
        $('.progresso2').css('width', '7%').css('background-color', 'red');
        $('.progresso3').css('width', '10%').css('background-color', 'red');
        $('.progresso4').css('width', '4%').css('background-color', 'red');
        $('.progresso5').css('width', '15%').css('background-color', 'red');
        $('.progresso6').css('width', '22%').css('background-color', 'red');
        animacao();
      }, 2500);
    }, 2500);
  }, 2500);
}

$(document).ready(function() {
  animacao();
});



// habilidades fim---------------------------------------------------------------------------------------------------------


// formulário começo---------------------------------------------------------------------------------------------------------

$(document).ready(function() {
  var inscricaoFeita = localStorage.getItem('inscricaoFeita');
  if (inscricaoFeita) {
    $('#envioFeitoComSucesso').css('display', 'flex');
  }})




$('#enviarFormulario').on('click', function(){

  let conteudoInput1 = $('#inputTx1').val().trim()
  let conteudoInput2 = $('#inputTx2').val().trim()
  let conteudoInput3 = $('#inputTx3').val().trim()
 
  let opcaoInput = $('#inputCheck input[type="radio"').is(':checked')

  if(conteudoInput1 !== '' && conteudoInput2 !== '' && conteudoInput3 !== '' && opcaoInput){
    $('#envioFeitoComSucesso').fadeIn('slow').css('display', 'flex')

    localStorage.setItem('inscricaoFeita', 'sucesso')

  } else{
    alert('Um ou mais campos do formulário está vazio ou desmarcado')
    return
  }

})

// formulário fim---------------------------------------------------------------------------------------------------------