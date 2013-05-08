

$(function () {
    var png = 'data:image/png;base64,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';

	var download_url = getMedia();
    $('html').append('<style>'+
					'#download {color:#5D92C8; font-size: 13px; text-decoration: none; cursor: pointer; }' +
                    '#download:hover {text-decoration: underline; }'+
					'</style>' );
    $('.heading').children('span:first').before('<a id="download" href="'+download_url+'" ><img id="download_img" width="13" height="13" style="padding-right:3px;" src="'+png+'" />Download</span>');
   // $('.heading').children('span:nth-child(2)').wrap('<div></div>');
   // $('#download').click(getMedia);
	$('#download').hide();
    $('.heading').hover(download_link_Ineffect, download_link_Outeffect);
});
function download_link_Ineffect() {
    $('#download').stop(true, true).show("drop", {}, 500);
}
function download_link_Outeffect() {
    $('#download').hide("drop", {}, 1000);
}
function getMedia() {
	var match_ma3 = /^mp3file=([\w:\/\.]+)&/;
	var match_flv = /furl=([\w:\/\.]+)&/;
	var regex = /^http:\/\/mymedia.yam.com\/m\/([0-9]+)/;
	var url = window.location.href;
	var Yam_Media_url = "http://mymedia.yam.com/api/a/?pID="+url.match(regex)[1];
	var donwload_url;
	console.log('get:' + Yam_Media_url);
	$.ajax({
		url: Yam_Media_url,
		async: false,
		timeout: 3000,
		error: function (data){
			alert('error!');
		},
		success: function(data) {
			if(	match_ma3.test(data)) {
				var url_mp3 = data.match(match_ma3)[1];
				console.log("match mp3:" + url_mp3);
				donwload_url = url_mp3;
				
			}
			else if(match_flv.test(data)) {
				var url_flv = data.match(match_flv)[1];
				console.log("match flv:" + match_flv);
				donwload_url = url_flv;
			}
		}
	});
	//window.open(donwload_url);
	return donwload_url;
	
}