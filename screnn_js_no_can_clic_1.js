function genScreenshot() {
    html2canvas(document.getElementById('capture'), { letterRendering: 1, allowTaint : true, onrendered : function(canvas) {
      $('#capture').html("");      
      if (navigator.userAgent.indexOf("MSIE ") > 0 || 
					navigator.userAgent.match(/Trident.*rv\:11\./)) 
			{
      	var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob,'Test file.png');
      }
      else {
        $('#test').attr('href', canvas.toDataURL("image/png"));
        $('#test').attr('download','Test file.png');
      }
      
      
      }
    });
}
