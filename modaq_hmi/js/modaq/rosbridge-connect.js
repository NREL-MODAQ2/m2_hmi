
  const ros = new ROSLIB.Ros({ url: "ws://10.10.59.113:9090" });
  //const ros = new ROSLIB.Ros({ url: "ws://localhost:9090" });
  ros.on("connection", () => { document.getElementById("status").innerHTML = "<span class='traffic_light true'>TRUE</span>"; });
  ros.on("error", (error) => { document.getElementById("status").innerHTML = `errored out (${error})`; });
  ros.on("close", () => { document.getElementById("status").innerHTML = "<span class='traffic_light false'>FALSE</span>"; });

