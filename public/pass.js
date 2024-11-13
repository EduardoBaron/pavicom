function mostrar(){
    let entradapassword=document.getElementById('password');
    let muestrapassword=document.getElementById('btn-mostrar')

    if(entradapassword.type === 'password'){
        entradapassword.setAttribute('type','text')
        muestrapassword.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
      entradapassword.setAttribute('type','password')
      muestrapassword.classList.replace('bi-eye-slash-fill','bi-eye-fill')

    }
  }
  
  // login
  function mostrarlog(){
    let entradapassword=document.getElementById('loginPassword');
    let muestrapassword=document.getElementById('btn-mostrarlog')

    if(entradapassword.type === 'password'){
        entradapassword.setAttribute('type','text')
        muestrapassword.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
      entradapassword.setAttribute('type','password')
      muestrapassword.classList.replace('bi-eye-slash-fill','bi-eye-fill')

    }
  }

  
  