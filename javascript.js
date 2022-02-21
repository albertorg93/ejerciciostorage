/* localStorage.setItem("name", ); // op1
localStorage.surname = "Rodriguez"; // op2
 */


let formulario = document.querySelector("form[name='formulario'");


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("holaaadklscm");
       let fname = event.target.fname.value;
       let femail = event.target.femail.value;
       let fimage = event.target.fimage.value;
       let ftext = event.target.ftext.value;

      console.log(fname);
      console.log(femail);
      console.log(fimage);
      console.log(ftext);
      localStorage.setItem("name", fname); // op1
      localStorage.setItem("email", femail); // op1
      localStorage.setItem("image", fimage); // op1
      localStorage.setItem("text", ftext); // op1

    let firstName = localStorage.getItem("name");
    let firstEmail = localStorage.getItem("email");
    let firstImage = localStorage.getItem("image");
    let firstText = localStorage.getItem("text");

})
 