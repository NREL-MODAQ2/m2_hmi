  // Create a listener
  // throttle_rate sets update interval in ms
  var listener = new ROSLIB.Topic({
    ros: ros,
    name: '/mpu6050',
    messageType: 'mpu6050_ros_driver/msg/Mpu6050',
    throttle_rate: 1000
  });

  // When we receive a message on /chatter, print in same placeholder
  listener.subscribe(function (message) {
    document.getElementById("ins-ax").innerHTML = message.ax.toFixed(3);
    document.getElementById("ins-ay").innerHTML = message.ay.toFixed(3);
    document.getElementById("ins-az").innerHTML = message.az.toFixed(3);
    document.getElementById("ins-gx").innerHTML = message.gx.toFixed(3);
    document.getElementById("ins-gy").innerHTML = message.gy.toFixed(3);
    document.getElementById("ins-gz").innerHTML = message.gz.toFixed(3);
    document.getElementById("ins-temp").innerHTML = message.temp.toFixed(3);
    //console.log(message.ax);
  });
