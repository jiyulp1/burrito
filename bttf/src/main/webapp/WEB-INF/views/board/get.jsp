<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
	replyService.getList({post_id:post_idValue. page : page || 1}), function(list){
		console.log("list : " list);
		
		var str = "";
		if(list == null || list.length == 0){
			replyUL.html("");
			return;
		}
		
		for(var i=0, len = list.length || 0;i < len;i++ ){
			str += "<li class='left clear-fix' data-reply_id='"+list[i].reply_id+"'>";
			str += "<div><div class='header'><strong class='primary-font'>["
					+ list[i].reply_id+"]" + list[i].user_nickname+"</strong>";
			str +=  "<small class='pull-right text-muted'>" + list[i].reply_regdate
					+"</small></div>";
			str +=  "<p>"+list[i].reply_content+"</p></div></li>";
			
		}
		replyUL.html(str);
	}
	
	
	
	
	
	
	
	


</script>
</body>
</html>