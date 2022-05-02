/**
 * oracleReplyList
 */

$(document).ready(function(){
	
	oracleReplyList("1");
	//oracleReplyList("2");
	$("#btnReply").click(function(){
		var reply_contents = $("#reply_contents").val();
		var post_id="${oracleview.post_id}"
		var param="reply_contents="+reply_contents+"&post_id="+post_id;
		$.ajax({
			type: "post",
			url: "${path}/reply/oracleReplyWrite",
			data: param,
			success: function(){
				alert("댓글이 등록되었습니다.");
				oracleReplyList("1");
				//oracleReplyList("2");
			}
		});
	});
});


		function oracleReplyList(num){
			$.ajax({
				type: "get",
				url: "${path}/reply/oracleReplyList?post_id=${oracleview.post_id}$curPage="+num,
				success: function(result){
				
	//			$("#oracleReplyWrite").append("<a class=''btn btn-info''>dkdkdkdkd</a>");
				$("#oracleReplyWrite").html(result);
				
		}
		
		
	
		
	});
}

