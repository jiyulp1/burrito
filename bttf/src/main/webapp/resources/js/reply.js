/**
 * 
 */

var ReplyService = (function() {
	
	function getList(param, callback, error){
		var post_id = param.post_id;
		var page = param.page || 1;
		 
		$.getJSON("/reply/pages/"+ post_id + "/" + page + ".json",
		function (data){
			if(callback){
				callback(data);
			}
		}).fail(function(xhr, status, err){
			if(error){
				error();
			}
		});
	
		return{
			getList : getList
		};
		
	}

})();
