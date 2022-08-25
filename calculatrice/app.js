const buttons = document.querySelectorAll('.btn');
//console.log(buttons);

const result = document.getElementById('result');
//console.log(result);


buttons.forEach((button) => {
    button.addEventListener("click", (e) =>{
        //console.log(e.target.id);
        //le += permet la concatenation donc il ajoute
        result.textContent += e.target.id;
    });

});
//les button et les checkbox on a pas besoin de les déclarer s'ils ont in id
equal.addEventListener("click", () =>{
    //méthode eval permet de calculer ce qui est à l'interieur
    result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () =>{
    result.textContent = "";
});