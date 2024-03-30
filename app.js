let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let os = document.getElementById('os');
let email = document.getElementById('email');
let telefono = document.getElementById('telefono');
let medico = document.getElementById('medico')
let horario = document.getElementById('horario')
    
    
console.log(horario.value)    


var enviar = document.getElementById('enviar');

let mensaje;

let envio = (seleccion)=>{
    
    
    mensaje=`https://api.whatsapp.com/send?phone=542944651381&text=Quiero%20un%20turno%20con%20el%20%20Medico%20${medico.value}+%0AEn%20el%20horario%20+${horario.value}%0A+Mis%20datos%20personales%20son:%0A+Nombre:%20${nombre.value}%0A+Apellido:%20+${apellido.value}%0A+Obra%20Social:%20+${os.value}%0A+Email:%20+${email.value}%0A+Telefono:%20+${telefono.value}`;
    enviar.href= mensaje

}

