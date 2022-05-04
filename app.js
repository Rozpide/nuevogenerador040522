let generadordeExcusas = () => {
    let personaje = ["Batman", "Spiderman", "Superman", "Hulk"];
    let verbo = [" aplasto", " rompio", " ensucio", " perdio"];
    let algo = [" el coche", " el trabajo", " el portatil", " mi ropa"];
    let lugar = [
      " en la calle",
      " en mi casa ",
      " en el super",
      " en la estación"
    ];
    let personajeelegido = Math.floor(Math.random() * personaje.length);
    let verboelegido = Math.floor(Math.random() * verbo.length);
    let algoelegido = Math.floor(Math.random() * algo.length);
    let lugarelegido = Math.floor(Math.random() * lugar.length);
  
    return (
      personaje[personajeelegido] +
      " " +
      verbo[verboelegido] +
      " " +
      algo[algoelegido] +
      " " +
      lugar[lugarelegido]
    );
  };
  
  window.onload = () => {
    console.log("Hello Rigo from the console!");
    document.querySelector(".btn").addEventListener("click", () => {
      document.querySelector(".the-excuse").innerHTML = generadordeExcusas();
    });
  };
  