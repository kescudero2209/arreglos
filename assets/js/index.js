const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170,
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130,
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80,
    },
    {
      name: "Casa rodante",
      description:
        "Conviertete en un nómada del mundo sin salir de tu casa",
      src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6,
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200,
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/finalProps:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500,
    },
  ];
  const propiedades = document.querySelector(".propiedades");
let html = "";
let total = propiedadesJSON.length;
console.log(total);
span.innerHTML = total;

console.log(propiedadesJSON);
for (const prop of propiedadesJSON) {
  html += `

<section id="Propiedades">
      <div class="propiedad">
          <div class="img" style="background-image: url(${prop.src})"></div>
          <section>
              <h5>${prop.name}</h5>
              <div class="d-flex justify-content-between">
                  <p>Cuartos: ${prop.rooms}</p>
                  <p>Metros: ${prop.m}</p>
              </div>
              <p class="my-3">${prop.description}</p>
              
              <button class="btn btn-info ">Ver más</button>
          </section>
      </div>       
</section>
`;
}
propiedades.innerHTML = html;

document.querySelector("#btn").addEventListener("click", (e) => {
  
    const rooms = document.querySelector("#valRooms").value;
    const metersFrom = document.querySelector("#valMetersFrom").value;
    const metersTo = document.querySelector("#valMetersTo").value;
    console.log(rooms);
    
    if(rooms == "" && metersFrom == "" && metersTo == ""){
      alert("Favor ingrese valores, los campos se encuentran en blanco");
      return false;
  
    }else if (rooms == "" ) {
      alert("Favor ingrese un número válido de habitaciones a buscar");
      return false;
    }else if(metersFrom == "" || metersTo == ""){
      alert("Favor ingrese un número válido de metros cuadrados a buscar");
      return false;
    }
   
    const finalProp = propiedadesJSON.filter(
      p => p.rooms == rooms && p.m >= metersFrom && p.m <= metersTo
    );
    let cant = finalProp.length;
    span.innerHTML = cant;
  
    clearPropiedades()
    finalProp.forEach((prop)=>{
      console.log("prop each", prop) 
      propiedades.innerHTML += createCards(prop.src, prop.name, prop.rooms, prop.m, prop.description)
    })
  
  })
  const createCards = (src, name, rooms, m, description) => {
    return `
    <section id="Propiedades">
    <div class="propiedad">
        <div class="img" style="background-image: url(${src})"></div>
        <section>
            <h5>${name}</h5>
            <div class="d-flex justify-content-between">
                 <p>Cuartos: ${rooms}</p>
                 <p>Metros: ${m}</p>
            </div>
            <p class="my-3">${description}</p>
  
            <button class="btn btn-info ">Ver más</button>
        </section>
    </div>
        </section>
              `;
  };
  const clearPropiedades = () => (propiedades.innerHTML = "");
  