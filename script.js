// Obtener todos los elementos con clase 'green_even' o 'green'
const trElements = document.querySelectorAll('.green_even, .green');

// Iterar a través de cada elemento 'tr'
trElements.forEach((tr) => {
  // Obtener el elemento 'div' con clase 'caselog' dentro de este 'tr'
  const caselogDiv = tr.querySelector('.caselog');
  if (caselogDiv) {
    // Obtener todos los elementos 'div' dentro de este 'caselogDiv'
    const divElements = caselogDiv.querySelectorAll('div');

    // Iterar a través de cada elemento 'div'
    divElements.forEach((div) => {
      // Verificar si este 'div' contiene el mensaje que queremos mostrar
      if (div.textContent.startsWith('[SISTEMA: Ejecutada transición \'Resolver\']')) {
        // Eliminar la subcadena no deseada del mensaje original
        const mensaje = div.textContent.replace(/.*como\s+(Desestimada|Implementada(\s+Parcialmente|\s+Solucion\s+Temporal)?|No\s+implementada):\s*/, '');

        // Crear un nuevo elemento 'div' y establecer el contenido del mensaje modificado
        const newDiv = document.createElement('div');
        newDiv.textContent = mensaje.trim();

        // Establecer el 'caselogDiv' como el nuevo 'div' creado
        caselogDiv.innerHTML = newDiv.outerHTML;
      }
    });
  }
});
