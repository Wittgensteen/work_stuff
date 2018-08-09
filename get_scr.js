function genScreenshot() {
    html2canvas(document.body, {
      onrendered: function(canvas) {
      $('#capture').html("");
			$('#capture').append(canvas);
      
      if (navigator.userAgent.indexOf("MSIE ") > 0 || 
					navigator.userAgent.match(/Trident.*rv\:11\./)) 
			{
      	var blob = canvas.msToBlob();
        window.navigator.msSaveBlob(blob,'Page.png');
      }
      else {
        $('#capture').attr('href', canvas.toDataURL("image/png"));
        $('#capture').attr('download','Page.png');
        $('#capture')[0].click();
      }
      
      
      }
    });
}
