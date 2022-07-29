let cuentas = [
    { tarjeta: '1234567890', password:'contrasana', saldo: 200 }
   ,{ tarjeta: '0987654321', password:'password', saldo: 290 }
   ,{ tarjeta: '5556667778', password:'123abc', saldo: 670 }
 ];

const LIMITESALDO = 'No se puede tener mas de 990 pesos o menos de 10 pesos en una cuenta';
let index = sessionStorage.getItem('index');

  //Regla de negocio
const limiteSaldo = (index)=>{
    let cuenta = cuentas[index];

    if(cuenta.saldo > 990 || cuenta.saldo < 10)
        return false;
    else
        return true;
}

//consulta el saldo actual de un usuario
const consultarSaldo = (index)=>{
    let cuenta = cuentas[index]
    let saldo = document.getElementById('consultaSaldo')
    saldo.value = saldo.value + cuenta.saldo
}


//permite agregar dinero a la cuenta de un usuario
const ingresarSaldo =(index, monto)=>{
    let cuenta = cuentas[index];
    let saldoActual = cuenta.saldo;
    let saldoAnterior = cuenta.saldo;

    cuenta.saldo = saldoActual + monto
    if(limiteSaldo(index)){
        console.log(cuenta.saldo);
    }
    else{
        console.log(LIMITESALDO);
        cuenta.saldo = saldoAnterior;
    }
}

//permite retirar dinero de la cuenta de un usuario
const retirarSaldo =(index, monto)=>{
    let cuenta = cuentas[index];
    let saldoActual = cuenta.saldo;
    let saldoAnterior = cuenta.saldo;

    cuenta.saldo = saldoActual - monto
    if(limiteSaldo(index)){
        console.log(cuenta.saldo);
    }
    else{
        console.log(LIMITESALDO);
        cuenta.saldo = saldoAnterior;
    }
}

consultarSaldo(index);