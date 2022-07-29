let cuentas = [
    {index:0, tarjeta: '1234567890', password:'contrasana', saldo: 200 }
   ,{index:1, tarjeta: '0987654321', password:'password', saldo: 290 }
   ,{index:2, tarjeta: '5556667778', password:'123abc', saldo: 670 }
 ];
let formulario = document.getElementById('formulario');

//Login
formulario.addEventListener('submit',(evento)=>{
    let tarjeta = document.getElementById('tarjeta').value;
    let password = document.getElementById('password').value;
    evento.preventDefault();
    cuentas.every(cuenta => {
        if(cuenta.tarjeta === tarjeta && cuenta.password === password){
            sessionStorage.setItem('index', cuenta.index)
            console.log(sessionStorage.getItem('index'))
            window.location.href ='Operaciones.html'
        }
    });
});

