let chartPersonnes = null;

document.querySelector("[data-type='nombre de personnes']")
  .addEventListener("click", function () {
  
  if (chartPersonnes !== null) {
      chartPersonnes.destroy();
      chartPersonnes = null;
      return;
}
    let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

    let entrantes = [10, 25, 60, 55, 30, 15, 65];
    let sortantes = [5, 10, 20, 40, 60, 50, 65];

    
    chartPersonnes = new Chart(document.getElementById("graphPersonnes"), {
      type: "line",
      data: {
        labels: jours,
        datasets: [
          {
            label: "Personnes Entrantes",
            data: entrantes,
            borderWidth: 3
          },
          {
            label: "Personnes Sortantes",
            data: sortantes,
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Flux de personnes dans le canyon"
          }
        }
      }
    });

});

document.querySelector("[data-type='niveau de l'humidité']")
  .addEventListener("click", function () {
  
  if (chartPersonnes !== null) {
      chartPersonnes.destroy();
      chartPersonnes = null;
      return;
      }
      
      
      
      
      
      
      
      
      });
