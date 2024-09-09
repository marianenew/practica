let persona={
    nombre:"Luis",
    edad:23,
    profesion:"Ingeniero",
};

function actualizarInformacion (persona, nuevaEdad,nuevaProfesion){
 let personaDos=persona={
   ...persona
 };
 console.log(personaDos);
   personaDos.edad=nuevaEdad;
   personaDos.profesion=nuevaProfesion;
   return personaDos;

   
  }

  let infoActualizada=actualizarInformacion(persona,30,"Arquitecto");
  console.log("Info",infoActualizada);

