
$(document).ready(function(){
$('#get').click(function(){
	$.ajax({
	url:'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc',
	method:'GET',
	dataType  : 'json',
	success: function(data){
		console.log(data);
		                 
                         var table = '<table>';
                         
                               $(data.items).each(function (index, object) {                                   
                                    table += ('<tr>');
                                    table += ('<td>' + object.name + '</td>');
                                    table += ('<td>' + object.id + '</td>');
                                    table += ('<td>' + object.url+ '</td>');
                                    table += ('</tr>');
                                    
                              });
                         table += '</table>';
                        $("#demo").html(table);

}

});
	








});



});
















