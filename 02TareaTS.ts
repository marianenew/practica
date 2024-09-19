(() => {
  // Definir los campos permitidos para ordenar
  const allowedSortByFields = ["name", "lastname", "edad", "createAt", "updateAt"];

  // Función para ordenar por defecto
  const defaultSort = { createAt: -1 };

  // Función para validar el orden (asc o desc)
  function isValidOrder(order: string): boolean {
    return order === "asc" || order === "desc";
  }

  // Función principal que recibe el string de ordenamiento
  function getSortObject(sortBy?: string): Record<string, number> {
    // Si no se pasa un valor de sortBy, retornar el orden por defecto
    if (!sortBy) return defaultSort;

    // Separar el campo y el orden a partir del string
    const [field, order] = sortBy.split("-");

    // Verificar si el campo está permitido y si el orden es válido
    if (!allowedSortByFields.includes(field) || !isValidOrder(order)) {
      return defaultSort; // Retornar el objeto por defecto si el campo u orden es inválido
    }

    // Devolver un objeto con el campo y el orden: 1 para ascendente y -1 para descendente
    return { [field]: order === "asc" ? 1 : -1 };
  }

  // Probar la función con diferentes entradas
  console.log(getSortObject("name-asc")); // {name: 1}
  console.log(getSortObject("lastname-desc")); // {lastname: -1}
  console.log(getSortObject("edad-asc")); // {edad: 1}
  console.log(getSortObject("updateAt-desc")); // {updateAt: -1}

  // Probar con entradas inválidas
  console.log(getSortObject("email-asc")); // {createAt: -1} (campo no permitido)
  console.log(getSortObject("name-upward")); // {createAt: -1} (orden no válido)
  console.log(getSortObject()); // {createAt: -1} (sin sortBy)
})();
