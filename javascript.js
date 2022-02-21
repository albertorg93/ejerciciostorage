/* localStorage.setItem("name", ); // op1
localStorage.surname = "Rodriguez"; // op2
 */


let formulario = document.querySelector("form[name='formulario'");


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
   
       let fname = event.target.fname.value;
       let femail = event.target.femail.value;
       let fimage = event.target.fimage.value;
       let ftext = event.target.ftext.value;

      localStorage.setItem("name", fname); // op1
      localStorage.setItem("email", femail); // op1
      localStorage.setItem("image", fimage); // op1
      localStorage.setItem("text", ftext); // op1

    let firstName = localStorage.getItem("name");
    let firstEmail = localStorage.getItem("email");
    let firstImage = localStorage.getItem("image");
    let firstText = localStorage.getItem("text");


      const mostrarDatos = function(){
          let section = document.querySelector("#section");
          section.innerHTML=`<h3>${firstName}</h3>
          <h3>${firstEmail}</h3>
          <h3>${firstImage}</h3>
          <h3>${firstText}</h3>`
      }
         
   mostrarDatos();

    const user = [{
        "name": firstName,
        "email": firstEmail,
        "image": firstImage,
        "text": firstText
    }];

    console.log("holaholahola");

   
    let user1 = localStorage.getItem("usuario");
     console.log(user1);
  /*  let allUsers = localStorage.setItem("usuario",JSON.stringify(user));

    allUsers.push(user);
        console.log(allUsers);
*/



})
 
