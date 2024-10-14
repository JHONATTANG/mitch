

/// CONTACTO


document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const text = document.getElementById('text').value;

  var url = "https://api.whatsapp.com/send/?phone=573009864141&text=Hola,%20mi%20nombre%20es%20"+name+"%0AMi%20número%20es%20"+phone+"%0AMi%20correo%20es%20"+email+"%0AY%20estoy%20interesado%20en%20recibir%20la%20siguiente%20información:%20"+text+"%20.&type=phone_number&app_absent=0";
           
  document.getElementById('dataForm').reset();
  window.location.replace(url);
});