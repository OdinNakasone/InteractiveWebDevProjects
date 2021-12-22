

let url = "http://localhost:3000/api";

fetch(url)
.then(response => response.json())
.then(data =>{
    console.log(data)
    let oneMovie = data["What is your favorite movie gerne"]["Horror"]
    let twoMovie = data["What is your favorite movie gerne"]["Comedy"]
    let threeMovie = data["What is your favorite movie gerne"]["Thriller"]
    let fourMovie = data["What is your favorite movie gerne"]["Action"]

    let ctx = document.getElementById('myMovie').getContext("2d");
     let movieChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Horror', 'Comedy', 'Thriller', "Action"],
            datasets: [{
                label: "What is your favorite movie gerne",
                data: [oneMovie, twoMovie, threeMovie, fourMovie],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
      });
      let oneMood = data["What is your normal mood"]["Cheerful"]
      let twoMood = data["What is your normal mood"]["Gloomy"]
      let threeMood = data["What is your normal mood"]["Apathetic"]
      let fourMood = data["What is your normal mood"]["Envious"]
  
      let ctx2 = document.getElementById('myMood').getContext("2d");
       new Chart(ctx2, {
          type: 'bar',
          data: {
              labels: ['Cheerful', 'Gloomy', 'Apathetic', "Envious"],
              datasets: [{
                  label: "What is your normal mood",
                  data: [oneMood, twoMood, threeMood, fourMood],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
        });
        let oneAnimal = data["What is your favorite animal"]["Water Bear"]
        let twoAnimal = data["What is your favorite animal"]["Immortal Jellyfish"]
        let threeAnimal= data["What is your favorite animal"]["Sawfish"]
        let fourAnimal = data["What is your favorite animal"]["Axolotl"]
    
        let ctx3 = document.getElementById('myAnimal').getContext("2d");
         new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['Water Bear', 'Immortal Jellyfish', 'Sawfish', "Axolotl"],
                datasets: [{
                    label: "What is your favorite animal",
                    data: [oneAnimal, twoAnimal, threeAnimal, fourAnimal],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
          });
});
