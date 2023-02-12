document.getElementById('btn-submit').addEventListener('click',function(){

   const emailField = document.getElementById('user-email');
   const email =emailField.value;
  // console.log(email);

   const passField = document.getElementById('user-password');
   const password =passField.value;
   //console.log(password);
    if(email === 'suyel@suyel.com' && password === '1234'){
        window.location.href='bank.html';
    }
    else alert("Incorrect email/password!!");

    })