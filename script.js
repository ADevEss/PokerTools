
// Variables : 


const bouton = document.querySelector(".btn");

function calculeCote(event) {
     event.preventDefault();

    let taille = parseFloat(document.getElementById("potAmount").value);
    let mise =  parseFloat(document.getElementById("betAmount").value);
    const cote = mise / (taille + mise );
    const percent = cote * 100
    
     document.getElementById("result").textContent = `Les cotes sont : ${percent.toFixed(2)}%`;
        

}

bouton.addEventListener("click",calculeCote);

