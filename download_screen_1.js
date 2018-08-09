$(document).ready(function() {
  $("#button-scr").click(function(){
    html2canvas($("#capture"), {
        onrendered: function(canvas) {
            // canvas is the final rendered <canvas> element
            var myImage = canvas.toDataURL("image/png");
            window.open(myImage);
        }
    });
  });
});
