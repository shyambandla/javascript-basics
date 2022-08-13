
const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    console.log('form submitted',email,password);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
});





