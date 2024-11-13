/* FUNCION EVALUA ACCION A GENERAR PDF Y REGISTRAR DENUNCIA */


/* funcion oculta partir de l formulario de denuncia dependiendo de si el denunciante es la victima*/
function evaluarSeleccion() { 
    let seleccion = document.getElementById("victima").value;
    let Divoculto = document.getElementById("ocultar");
    console.log(seleccion);
    /* 
    if (seleccion === "S") {
        Divoculto.style.display = "none";
    } else if (seleccion === "N") {
        Divoculto.style.display = "block";
    }   else{
        Divoculto.style.display = "block";
    }*/
   /* no oculsta solo reeemplaxa la informacion ingredsada */
   if (seleccion === "S") {
     /* copia los campos ingredsados el resto del formulario */
     document.getElementById("victima_nombre").value =  document.getElementById("denunciante_nombre").value;
     document.getElementById("victima_fecha_nacimiento").value =  document.getElementById("denunciante_fecha_nacimiento").value;
     document.getElementById("victima_edad_aprox").value =  document.getElementById("denunciante_edad").value;
     let = edadactual=document.getElementById("victima_edad_aprox").value;
     if (edadactual > 18) {
        document.getElementById("victima_mayor").value ='S';
     } else{
        document.getElementById("victima_mayor").value ='N';
     }
     document.getElementById("victima_domicilio").value =  document.getElementById("denunciante_domicilio").value;
     document.getElementById("victima_telefono").value =  document.getElementById("denunciante_telefono").value;
    } else{
        document.getElementById("victima_nombre").value = '';
        document.getElementById("victima_fecha_nacimiento").value = '';
        document.getElementById("victima_edad_aprox").value = '';
        document.getElementById("victima_mayor").value ='';
        document.getElementById("victima_domicilio").value = '';
        document.getElementById("victima_telefono").value =  '';;
       }      
    }
    



/* calcula la edad desde calendario  denunciante*/
function calculaEdad() {
    var fechaNacimiento = new Date(document.getElementById("denunciante_fecha_nacimiento").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (fechaNacimiento > hoy){
        Swal.fire({
            title: 'Error!',
            text: 'No ´puede seleccionar fecha nacimiento masyor a la fecha de hoy',
            icon: 'error',
            confirmButtonText: 'Ok'
          })

    }
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById("denunciante_edad").value = edad;
}

/* calcula edad victima en caso que el deninciante no sea la victima*/
function calculaEdadv() {
    var fechaNacimiento = new Date(document.getElementById("victima_fecha_nacimiento").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById("victima_edad_aprox").value = edad;
}


/* configuracion de endpoints*/

document.addEventListener('DOMContentLoaded', () =>{
    async function handleRegister (e){
        e.preventDefault();

        const id_user = document.getElementById('id_user').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;

        try{
            const res = await fetch('http://localhost:3000/api/auth/registrar',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({id_user,username, email, telefono})
            });

            const data = await res.json()
            if(res.status === 200){
                Swal.fire({
                    title: 'Registro Exitoso',
                    text: 'Su informacion fue guardada.. Un funcionario lo contactara',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                //alert ('Registro Exitoso')
            }else{
                console.log (`Error al registrar ${data.msg}`);
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos ingresados  ya estan registrados',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            }
        }catch(error){
            console.error(error)
            //alert('Error de registro de usuario')
            Swal.fire({
                title: 'Error!',
                text: 'Se presenta inconvenientes con el servidor intente mas tarde',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
 
    }   
    
    document.getElementById('registerForm').addEventListener('submit',handleRegister)
        
})
/* creacion de denuncia*/
document.addEventListener('DOMContentLoaded', () =>{
    async function handleRegisterd (e){
        e.preventDefault();
       // alert('en registro denuncia');
        const denunciante_nombre = document.getElementById('denunciante_nombre').value;
        const denunciante_cc = document.getElementById('denunciante_cc').value;
        const denunciante_edad = document.getElementById('denunciante_edad').value;
        const mail = document.getElementById('mail').value;
    
        const denunciante_fecha_nacimiento = document.getElementById('denunciante_fecha_nacimiento').value;
        const denunciante_estado_civil = document.getElementById('denunciante_estado_civil').value;
        const victima = document.getElementById('victima').value;
        const denunciante_domicilio = document.getElementById('denunciante_domicilio').value;
        const denunciante_telefono = document.getElementById('denunciante_telefono').value;
        const denunciante_relacion = document.getElementById('denunciante_relacion').value;
        const ubicacion_victima = document.getElementById('ubicacion_victima').value;
        const relato_hecho = document.getElementById('relato_hecho').value;
        const victima_nombre = document.getElementById('victima_nombre').value;
        const victima_mayor = document.getElementById('victima_mayor').value;
        const victima_edad_aprox = document.getElementById('victima_edad_aprox').value;
        const victima_fecha_nacimiento = document.getElementById('victima_fecha_nacimiento').value;
        const victima_domicilio = document.getElementById('victima_domicilio').value;
        const relacion_agresor = document.getElementById('relacion_agresor').value;
        const victima_telefono = document.getElementById('victima_telefono').value;
        const victima_agresor = document.getElementById('victima_agresor').value;
        const lugares_victima = document.getElementById('lugares_victima').value;
        const agresor_nombre = document.getElementById('agresor_nombre').value;
        const agresor_domicilio = document.getElementById('agresor_domicilio').value;
        const agresor_relacion = document.getElementById('agresor_relacion').value;
        const agresor_telefono = document.getElementById('agresor_telefono').value;
        const agresor_victima_si = document.getElementById('agresor_victima_si').value;
        const lugares_agresor = document.getElementById('lugares_agresor').value;

        try{
            const res = await fetch('http://localhost:3000/api/auth/denunciar',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({denunciante_nombre,denunciante_cc,denunciante_edad,mail,denunciante_fecha_nacimiento,
                denunciante_estado_civil,victima,denunciante_domicilio,denunciante_telefono,denunciante_relacion,
                ubicacion_victima,relato_hecho,victima_nombre,victima_mayor,victima_edad_aprox,victima_fecha_nacimiento,
                victima_domicilio,relacion_agresor,victima_telefono,victima_agresor,lugares_victima,agresor_nombre,  
                agresor_domicilio,agresor_relacion,agresor_telefono,agresor_victima_si,lugares_agresor
                })
            });

            const data = await res.json()
            if(res.status === 200){
                Swal.fire({
                    title: 'Registro Exitoso',
                    text: 'Su Denuncia fue Registrada.. Un funcionario le contactara',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                //alert ('Registro Exitoso')
            }else{
                console.log (`Error al registrar ${data.msg}`);
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos ingresados  ya estan registrados',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                  })
            }
        }catch(error){
            console.error(error)
            //alert('Error de registro de usuario')
            Swal.fire({
                title: 'Error!',
                text: 'Se presenta inconvenientes con el servidor intente mas tarde',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }}   
    
    document.getElementById('regdenuncia').addEventListener('submit',handleRegisterd)
})

