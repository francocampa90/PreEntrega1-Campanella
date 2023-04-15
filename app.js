let nombre;
let nombreUsuario;
let contrasena;
let apellido;


const PESOS = 'p';
const DOLARES = 'd';
const Ethereum = 'e';
const USDT = 'u';
const SALIR = '0';
const simu = "simulacion";


let resultado;
let operacion;
let edad;

let nombreUsuario1;
let contrasena1;
let cliente = "";
let continuar;

let registrarse;
let gracias;
let simulacion;

    console.log("Bienvenidos a Invertir Online")
do{
   
    edad = prompt("Sos mayor de edad?" + '\n' +
    "Ingrese edad");

    if (edad < 18 ) {
        alert("No puede invertir con nosotros por ser menor de edad");
        console.log(" Usted no puede invertir por ser menor de edad");
    } 

}while(edad < 18); {
      
            cliente = prompt("Es cliente de Invertir Online si o no?");
            console.log("cliente :" + cliente);
            console.log(nombreUsuario1);
            console.log(contrasena1);
            
    do{
        if (cliente === "si") {

            nombreUsuario = prompt("Ingrese su nombre de usuario");

            if (nombreUsuario === nombreUsuario1 ) {

                contrasena = prompt("Ingrese su contrasena");

                if (contrasena === contrasena1) {

                    console.log("El usuario ingreso datos en el nombre y la contrasena");
                    console.log(nombreUsuario);
                    console.log(contrasena);

                    operacion = prompt("Que plazo fijo" + '\n' +
                    '"p": Plazo fijo en pesos' + '\n' +
                    '"d": Plazo fijo en dolares' + '\n' +
                    '"e": Plazo fijo en Ethereum' + '\n' +
                    '"u": Plazo fijo en USDT');
        

                    tiempo = prompt("tiempo de inversion" + '\n' +
                    '"30": 30 dias' + '\n' +
                    '"60": 60 dias' + '\n' +
                    '"90": 90 dias' + '\n' +
                    '"120": 90 dias' + '\n' +
                    '"simu": Simulacion de 30, 60, 90 y 120 dias');
                
                    let inversion = Number(prompt("Ingrese la inversion"));
                    continuar = "no";
                    
                    switch (operacion) {
                        case PESOS:
                                if(tiempo === "simu"){
                                    for (let i = 30 ; i <= 120; i+=30){

                                        console.log(' inversion con el tiempo :' + i);
                                        simulacion = i;
                                        console.log('el tiempo es:  ' + simulacion);
                                        console.log("Monto invertido $" + inversion);
                                        console.log("Tiempo de inversion " + simulacion + " dias");
                                        console.log("TNA = 78,00%")
                                        let simulacionFinal1 = 360 / simulacion;
                                        let interesmensual1 = 78.00 / simulacionFinal1 ;
                                        resultado = inversion *interesmensual1;
                                        alert("tiempo invertido = " + simulacion +  " dias" + '\n' +
                                        "resultado inversion = $ " + resultado);
                                    }   
                            } else{
                                if(tiempo != "simu"){
                                    console.log("Monto invertido $" + inversion);
                                    console.log("Tiempo de inversion " + tiempo + " dias");
                                    console.log("TNA = 78,00%");
                                    let tiempoFinal1 = 360 / tiempo;
                                    let interesmensual1 = 78.00 / tiempoFinal1 ;
                                    resultado = inversion *interesmensual1;
                                    alert('El resultado de la operacion es: ' + resultado);
                                    
                                }
                            }
                            break; ///salgo del switch
                        case DOLARES:
                            if(tiempo === "simu"){
                                for (let i = 30 ; i <= 120; i+=30){

                                    console.log(' inversion con el tiempo :' + i);
                                    simulacion = i;
                                    console.log('el tiempo es:  ' + simulacion);
                                    console.log("Monto invertido US$" + inversion);
                                    console.log("Tiempo de inversion " + simulacion + " dias");
                                    console.log("TNA = 2,00%")
                                    let simulacionFinal2 = 360 / simulacion;
                                    let interesmensual2 = 2.00 / simulacionFinal2 ;
                                    resultado = inversion *interesmensual2;
                                    alert("tiempo invertido = " + simulacion +  " dias" + '\n' +
                                    "resultado inversion = US$ " + resultado);
                                }   
                            } else{
                                if(tiempo != "simu"){
                                console.log("Monto invertido US$" + inversion);
                                console.log("Tiempo de inversion " + tiempo + " dias");
                                console.log("TNA = 2%");
                                let tiempoFinal2 = 360 / tiempo;
                                let interesmensual2 = 2.00 / tiempoFinal2 ;
                                resultado = inversion * interesmensual2;
                                alert('El resultado de la operacion es US$: ' + resultado);

                                }
                            }
                            break;
                        case Ethereum:
                            if(tiempo === "simu"){
                                for (let i = 30 ; i <= 120; i+=30){

                                    console.log(" Inversion con el tiempo :" + i);
                                    simulacion = i;
                                    console.log("El tiempo es :  " + simulacion);
                                    console.log("Monto invertido ETH" + inversion);
                                    console.log("Tiempo de inversion " + simulacion + " dias");
                                    console.log("TNA = 3.72%")
                                    let simulacionFinal3 = 360 / simulacion;
                                    let interesmensual3 = 3.72 / simulacionFinal3;
                                    resultado = inversion * interesmensual3;
                                    alert("Tiempo invertido : " + simulacion +  " dias" + '\n' +
                                    "resultado inversion : ETH " + resultado);
                                }   
                            } else{
                                if(tiempo != "simu"){
                                    console.log("Monto invertido ETH " + inversion);
                                    console.log("Tiempo de inversion " + tiempo + " dias");
                                    console.log("TNA = 3,72%");
                                    let tiempoFinal3 = 360 / tiempo;
                                    let interesmensual3 = 3.72 / tiempoFinal3 ;
                                    resultado = inversion *interesmensual3;
                                    alert("El resultado de la operacion es : ETH " + resultado);
                                }
                            }
                            break;
                        case USDT:
                            if(tiempo === "simu"){
                                for (let i = 30 ; i <= 120; i+=30){

                                    console.log(" Inversion con el tiempo :" + i);
                                    simulacion = i;
                                    console.log("El tiempo es :  " + simulacion);
                                    console.log("Monto invertido USDT" + inversion);
                                    console.log("Tiempo de inversion " + simulacion + " dias");
                                    console.log("TNA = 27.49%")
                                    let simulacionFinal4 = 360 / simulacion;
                                    let interesmensual4 = 27.49 / simulacionFinal4 ;
                                    resultado = inversion * interesmensual4;
                                    alert("Tiempo invertido = " + simulacion +  " dias" + '\n' +
                                    "resultado inversion = USDT " + resultado);
                                }   
                            } else{
                                if(tiempo != "simu"){
                                console.log("Monto invertido USDT " + inversion);
                                console.log("Tiempo de inversion " + tiempo + " dias");
                                console.log("TNA = 27.49%");
                                let tiempoFinal4 = 360 / tiempo;
                                let interesmensual4 = 27.49 / tiempoFinal4;
                                resultado = inversion * interesmensual4;
                                alert("El resultado de la operacion es : USDT " + resultado);
                                }
                            }
                            break;
                        default:
                        resultado = NaN ///not a number
                        alert("Ingreso un caracter invalido");
                    }
                    
                    registrarse = "no";
                    gracias = "si";

                } else {
                    console.log("la contraseña es incorrecta");
                    alert("contraseña incorrecta!");
                    continuar = "no";
                }

            } else {
                console.log("El usuario ingreso un nombre vacio");
                alert("No esta registrado");
                console.log(" Usted no es cliente debera registrarse para invertir");
                continuar = prompt("Desea registrarse? si/no");    
            }

        }else{
            continuar = prompt('Desea registrarse? si/no');  
        }
        if (continuar === "si") {
            nombre = prompt("Ingrese su nombre");
            nombreUsuario1 = prompt("Ingrese su nombre de usuario");
            console.log("Nombre de Usuario : " + nombreUsuario1 )
            contrasena1 = prompt("Ingrese su contrasena");
            console.log("Contraseña : " + contrasena1 )

            alert("Perfecto ha generado su usuario y contraseña");
            cliente = "si";
            console.log("ya salio de la configuracion")
            registrarse = "si"

        }

    }while(registrarse === "si"){

        if (gracias === "si") {
            console.log("Gracias por invertir");
            alert("GRACIAS POR INVERTIR CON NOSOTROS");   
        } else{
            console.log("No podra invertir");
            alert("Si no esta registrado no puede invertir, HASTA LA PROXIMA , GRACIAS");   
        }
    }
}
