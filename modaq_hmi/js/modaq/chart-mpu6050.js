
// setup block
const data = {
    labels: [],
    datasets: [{
        label: 'Ax',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
        //yAxisID: 'y',
    }, {
        label: 'Ay',
        data: [],
        backgroundColor: 'rgba(0,0,255,0.5)',
        borderColor: 'rgba(0,0,255,1)',
        //yAxisID: 'y1',
    }, {
        label: 'Az',
        data: [],
        backgroundColor: 'rgba(60,180,0,0.5)',
        borderColor: 'rgba(60,180,0,1)',
        //yAxisID: 'y1',
    }
    ]
};

// config block
const dataMap = { Ax: 'ax', Ay: 'ay', Az: 'az', Temp: 'temp' };
const config = {
    type: 'line',
    data,
    options: {
        animation: false,  // disable animations
        interaction: {
            intersect: false
        },
        elements: {
            point: {
                radius: 0 // zero = don't plot the points
            },
            line: {
                borderWidth: 2, // sets the line weight
                tension: 0.1, // adds a little spline/curviness to the line
            },
        },
        scales: {
            x: {
                type: 'realtime',
                realtime: {
                    //delay: 100,
                    duration: 60000, // chart history (60000 = 60 seconds, with 1 Hz data)
                    ttl: undefined,
                    frameRate: 20,
                    onRefresh: chart => {
                        chart.data.datasets.forEach(dataset => {
                            //console.log(dataset)
                            dataset.data.push({
                                x: Date.now(),
                                //y: dataset.label === 'Ax' ? mpu6050_data.ax : dataset.label === 'Ay' ?mpu6050_data.ay : mpu6050_data.az
                                y: mpu6050_data[dataMap[dataset.label]],
                            });
                        });
                    }
                }
            },
            y: {
                suggestedMax: 1,
                suggestedMin: -1
                // ticks: {
                //     stepSize: 0.5
                //}
            },
        }
    }
};

// render init block
const mpu6050_chart = new Chart(
    document.getElementById('mpu6050_chart'),
    config
);

 // setup block
 const data1 = {
    labels: [],
    datasets: [{
        label: 'Temperature',
        data: [],
        backgroundColor: 'rgba(75,192,192,0.5)',
        borderColor: 'rgba(75,192,192,1)',
    },
    ]
};

// config block
const config1 = {
    type: 'line',
    data: data1,
    options: {
        animation: false,  // disable animations
        interaction: {
            intersect: false
        },
        elements: {
            point: {
                radius: 0 // zero = don't plot the points
            },
            line: {
                borderWidth: 2, // sets the line weight
                tension: 0.1, // adds a little spline/curviness to the line
            },
        },
        scales: {
            x: {
                type: 'realtime',
                realtime: {
                    //delay: 100,
                    duration: 60000, // chart history (60000 = 60 seconds, with 1 Hz data)
                    ttl: undefined,
                    frameRate: 20,
                    onRefresh: chart => {
                        chart.data.datasets.forEach(dataset => {
                            //console.log(dataset),
                            dataset.data.push({
                                x: Date.now(),
                                y: mpu6050_data.temp
                                //y: Math.random() * 10
                            });
                        });
                        //console.log(mpu6050_data.temp)
                    }
                }
            },
            y: {
                suggestedMax: 30,
                suggestedMin: 20
                // ticks: {
                //     stepSize: 0.5
                //}
            },
        }
    }
};

// render init block
const mpu6050Temp_chart = new Chart(
    document.getElementById('mpu6050Temp_chart'),
    config1
);
