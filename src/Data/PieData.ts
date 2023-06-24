
const totalProjects: number = 11

const getRatioPercentage = (occurances: number) => {
    return ((occurances/totalProjects)*100).toFixed(2)
}

export const frontEndData = {

    labels: ['React', 'Vite', 'Axios', 'SASS', 'CSS', 'HTML'],

    datasets: [
      {
        label: 'frontend technologies ratio',
        data: [getRatioPercentage(5), getRatioPercentage(3),  getRatioPercentage(4),  getRatioPercentage(5),  getRatioPercentage(5),  getRatioPercentage(3)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


export const backendData = {

    labels: ['NodeJs', 'Express', 'MySQL', 'Django', 'Knex'],

    datasets: [
      {
        label: 'Backend Tehcnologies ratio',
        data: [getRatioPercentage(3), getRatioPercentage(3),  getRatioPercentage(3),  getRatioPercentage(2),  getRatioPercentage(2)],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',

        ],
        borderWidth: 1,
      },
    ],
  };


  export const languageData = {

    labels: ['Typescript', 'Javascript', 'Python', 'Java'],
    datasets: [
      {
        label: 'Language ratio',
        data: [getRatioPercentage(3), getRatioPercentage(3),  getRatioPercentage(2),  getRatioPercentage(1)],
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
        borderWidth: 1,
      },
    ],
  };