async function setup(){
    let jsonFetch = await fetch("top10db.json");
    //use fetch to grab the data from file
    let languageData = await jsonFetch.json(); //.json() call back
    //.json() to make the data easier to use and understand


    console.log(languageData);

    let labels = [];
    let jsPopRating = [];

    
    //grab dates in data
    for (let entry of languageData){
        console.log("Date: " + entry.Date);
        labels.push(entry.Date);

        //grab javascript popularity data:
        jsPopRating.push(entry.Firebird);
    }


    const data = {
    labels: labels,
    datasets: [{
        label: 'Firebird Dataset',
        data: jsPopRating,
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        },
    };

    //this is what is rendering the chart
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

} 

setup();