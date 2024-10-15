
// Create a listener
// throttle_rate sets update interval in ms
var mpu6050_data = {};

var mpu6050_listener = new ROSLIB.Topic({
    ros: ros,
    name: '/mpu6050',
    messageType: 'mpu6050_ros_driver/msg/Mpu6050',
    throttle_rate: 1000
});

var ths_data = {};
var ths_listener = new ROSLIB.Topic({
    ros: ros,
    name: '/ths',
    messageType: 'ths_modbus/msg/Th',
    throttle_rate: 1000
});

// When we receive a message on /chatter, print in same placeholder
mpu6050_listener.subscribe(function (message) {
    // copy ROS data to var with global scope
    mpu6050_data = message;
    document.getElementById("ins-ax").innerHTML = message.ax.toFixed(3);
    document.getElementById("ins-ay").innerHTML = message.ay.toFixed(3);
    document.getElementById("ins-az").innerHTML = message.az.toFixed(3);
    //document.getElementById("ins-gx").innerHTML = message.gx.toFixed(3);
    //document.getElementById("ins-gy").innerHTML = message.gy.toFixed(3);
    //document.getElementById("ins-gz").innerHTML = message.gz.toFixed(3);
    document.getElementById("ins-temp").innerHTML = message.temp.toFixed(3);
    //console.log(message);

});
ths_listener.subscribe(function (message) {
    // copy ROS data to var with global scope
    ths_data = message;
    document.getElementById("ths-temp").innerHTML = message.temperature.toFixed(1);
    document.getElementById("ths-hum").innerHTML = message.humidity.toFixed(1);
    //console.log(ths_data);

});


