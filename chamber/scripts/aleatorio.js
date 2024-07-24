 // Función para cargar el archivo JSON
 function cargarEmpresas() {
     fetch('data/members.json')
         .then(response => response.json())
         .then(data => mostrarEmpresas(data))
         .catch(error => console.error('Error al cargar el archivo JSON:', error));
 }

 // Función para mostrar las empresas en los divs correspondientes
 function mostrarEmpresas(empresas) {
     // Filtrar las empresas con membresía "Gold Membership" o "Silver Membership"
     const empresasFiltradas = empresas.filter(empresa => {
         return empresa.membership === "Gold Membership" || empresa.membership === "Silver Membership";
     });

     // Seleccionar aleatoriamente 3 empresas
     const empresasAleatorias = [];
     while (empresasAleatorias.length < 3 && empresasFiltradas.length > 0) {
         const index = Math.floor(Math.random() * empresasFiltradas.length);
         empresasAleatorias.push(empresasFiltradas.splice(index, 1)[0]);
     }

     // Insertar los datos de las empresas en los divs correspondientes
     empresasAleatorias.forEach((empresa, index) => {
         const divClass = `card0${index + 4}`; // Para obtener la clase correspondiente (card04, card05, card06)
         const div = document.querySelector(`.${divClass}`);
         const datosEmpresa = document.createElement('div');
         datosEmpresa.innerHTML = `
            <h3>${empresa.name}📌</h3>
            <p>Address: ${empresa.address}</p>
            <p>WebSite: ${empresa.website}</p>
            <p>Membership: ${empresa.membership}</p>
        `;
         div.appendChild(datosEmpresa);
     });
 }

 // Llamar a la función para cargar las empresas al cargar la página
 window.onload = cargarEmpresas;