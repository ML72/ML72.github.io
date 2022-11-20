window.onload = () => {

  // Load AOS
  AOS.init({
    disable: function () {
      var maxWidth = 600;
      return window.innerWidth <= maxWidth;
    },
    mirror: true
  });

  // Load charts
  let chartData = [
    {
      id: "backend-skills-chart",
      skills: ["Java", "Spring Boot", "Maven", "JUnit", "JavaScript", "Node.js", "Express.js", "REST", "JWT", "MongoDB", "SQL", "PostgreSQL", "Azure Cloud", "Docker", "WSL"],
      proficiency: [10, 7, 8, 7, 9, 10, 9, 7, 6, 8, 4, 6, 7, 5, 5],
      likeability: [8, 8, 9, 7, 9, 8, 8, 7, 9, 10, 6, 7, 7, 8, 8]
    },
    {
      id: "frontend-skills-chart",
      skills: ["React.js", "Vue.js", "jQuery", "EJS", "Bootstrap", "Material UI", "HTML5", "CSS", "Jest", "Cypress", "SEO", "UI/UX Design"],
      proficiency: [9, 8, 9, 10, 9, 8, 9, 6, 6, 5, 8, 8],
      likeability: [10, 9, 6, 7, 8, 10, 8, 8, 7, 10, 5, 8]
    }
  ]

  Chart.defaults.color = "#fff";
  Chart.defaults.backgroundColor = "#fff";

  chartData.forEach(data => {
    const skillsChart = new Chart(
      document.getElementById(data.id),
      {
        type: 'radar',
        data: {
          labels: data.skills,
          datasets: [{
            label: 'Proficiency',
            data: data.proficiency,
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff'
          }, {
            label: 'Likeability',
            data: data.likeability,
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff'
          }]
        },
        options: {
          elements: {
            line: {
              borderWidth: 5
            }
          },
          legend: {
            labels: {
              fontColor: "#fff",
              fontSize: 20
            }
          },
          scales: {
            r: {
              ticks: {
                min: 0,
                max: 10,
                stepSize: 1,
                display: false
              },
              beginAtZero: true
            }
          }
        }
      }
    );
  });
}