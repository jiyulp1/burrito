/**
 * oracleReplyList
 */

$(document).ready(function(){
	
	oracleReplyList("1");
	//oracleReplyList("2");
	$("#btnReply").click(function(){
		console.log("test0");
		var reply_contents = $("#reply_contents").val();
		var post_id="${oracleview.post_id}"
		var param="reply_contents="+reply_contents+"&post_id="+post_id;
		var url= "/board/oracleview?post_id="+post_id;
		$.ajax({
			type: "post",
			url: url,
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
			console.log("tlqkf");
			$.ajax({
				type: "post",
				url: "/board/oracleview?post_id=${oracleview.post_id}$curPage="+num,
				success: function(result){
				console.log(result);
	//			$("#oracleReplyWrite").append("<a class=''btn btn-info''>dkdkdkdkd</a>");
				$("#oracleReplyWrite").html(result);
				
				
		}
		
		
	
		
	});
}

