		var board_category_id = document.getElementById("board_category_id").value;
		
		var urls = '';
		
	switch(board_category_id){
		case '1':
			urls = 'html';
			break;
		case '2':
			urls = 'css';
			break;
		case '3':
			urls = 'javascript';
			break;
		case '4':
			urls = 'jsp';
			break;
		case '5':
			urls = 'java';
			break;
		case '6':
			urls = 'oracle';
			break;
		case '7':
			urls = 'spring';
			break;
	
	}
	
	
var replyService = (function(){

	function get(reply_id, board_category_id, callback, error){
		$.get("/reply/" + reply_id + "/" +board_category_id+ ".json", function(result){
			if(callback){
				callback(result);
			}
		}).fail(function(xhr, status, error){
			if(error){
				error();
			}
		});
	}
	
	function add(reply, callback){


		$.ajax({
			type: 'post',
			url : '/reply/new/'+urls,
			data : JSON.stringify(reply),
			contentType : 'application/json; charset=utf-8',
			success: function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error: function(xhr, status, er){
				if(error){
					error(er);
				}
			}
		});
			
	}
	
	function getList(param, callback, error){
		var post_id = param.post_id;
		var page = param.page || 1;
		var board_category_id = param.board_category_id;
		
		$.getJSON("/reply/page/" + board_category_id + "/" + post_id + "/" + page + ".json", 
			function(data){
				if(callback){
					callback(data);
				}
			}).fail(function(xhr, status, err){
				if(error){
					error();
				}
			});
	
	}
	
	
	
	function remove(board_category_id, reply_id, callback, error) {
			$.ajax({
				type : 'delete',
				url: "/reply/"+board_category_id+"/"+reply_id,
				success : function(deleteResult, status, xhr) {
					if(callback){
						callback(deleteResult);
					}
				},
				error : function(xhr, status, er) {
					if(error){
						error(er);
					}
				}
			});
		};
		
		function displayTime(timeValue){
			var today = new Date();
			var gap = today.getTime() - timeValue;
			var dateObj = new Date(timeValue);
			var str = "";
			
			if(gap < (1000*60*60*24)){
				var hh = dateObj.getHours();
				var mi = dateObj.getMinutes();
				var ss = dateObj.getSeconds();
				
				return [(hh > 9 ? '' : '0') + hh, ':', (mi >9 ? '' : '0') + mi,
							':', (ss > 9 ? '' : '0') + ss].join('');
			} else {
				var yy = dateObj.getFullYear();
				var mm = dateObj.getMonth() + 1; //월은 0베이스
				var dd = dateObj.getDate();
				
				return [yy, '/', (mm > 9 ? '' : '0') + mm, '/', (dd > 9 ? '' : '0') + dd].join('');
			}
		};
	
	return {add : add,
			getList : getList,
			remove : remove,
			get : get,
			displayTime : displayTime
			};
})();  