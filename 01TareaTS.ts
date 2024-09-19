// Definir el tipo Persona
type Persona = {
  nombre: string;
  edad: number;
  direccion?: string; // Propiedad opcional
};

// Definir el tipo ResultadoBusqueda
type ResultadoBusqueda = Persona | null | undefined;

// Definir el tipo ResultadoMensaje, que solo permite 'exito', 'fallo' o 'pendiente'
type ResultadoMensaje = 'exito' | 'fallo' | 'pendiente';

// Función para buscar una persona por nombre
function buscarPersonaPorNombre(nombre: string): ResultadoBusqueda {
  const personas: Persona[] = [
    { nombre: "Ana", edad: 30, direccion: "Calle 123" },
    { nombre: "Carlos", edad: 25 },
    { nombre: "Luisa", edad: 35, direccion: "Calle 456" },
  ];

  // Si el nombre proporcionado está vacío, retornar undefined
  if (!nombre) {
    return undefined;
  }

  // Buscar la persona en el arreglo
  const personaEncontrada = personas.find(persona => persona.nombre === nombre);

  // Retornar la persona si se encuentra, o null si no se encuentra
  return personaEncontrada || null;
}

// Función para procesar el resultado basado en el estado
function procesarResultado(estado: ResultadoMensaje): string {
  switch (estado) {
    case "exito":
      return "La operación fue exitosa.";
    case "fallo":
      return "Hubo un error en la operación.";
    case "pendiente":
      return "La operación está pendiente.";
    default:
      return "Estado no reconocido.";
  }
}

// Pruebas
console.log(buscarPersonaPorNombre("Ana")); // { nombre: "Ana", edad: 30, direccion: "Calle 123" }
console.log(buscarPersonaPorNombre("Juan")); // null
console.log(buscarPersonaPorNombre("")); // undefined

console.log(procesarResultado("exito")); // "La operación fue exitosa."
console.log(procesarResultado("fallo")); // "Hubo un error en la operación."
console.log(procesarResultado("pendiente")); // "La operación está pendiente."

// Esto causará un error en tiempo de compilación, ya que "falso" no es un valor permitido
// console.log(procesarResultado("falso"));
