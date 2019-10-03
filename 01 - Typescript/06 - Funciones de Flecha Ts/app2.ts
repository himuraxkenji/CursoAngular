
let nombre = "Pedro";
let hulk = {
    nombre: "Bruce",
    smash(){
        /*setTimeout(function(){
        console.log(this.nombre + "smash!!");
            
        }, 1500);*/
        setTimeout(()=> console.log(this.nombre + "smash!!"), 1500 )
    }
}


hulk.smash(); 