function myFunction(y) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  var y = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  y.addListener(myFunction) // Attach listener function on state changes