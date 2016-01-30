
$(document).ready(function(){
	$('#face').live('tap',function(){
	url= $(this).attr("rel");
	loadUrl(url);
});
function loadUrl (url){
	navigator.app.loadUrl(url,{openExternal:true});
}
})

