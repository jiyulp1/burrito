	
	function fn_emailcheck(){
	var email = document.joinForm.user_email;
		$.ajax({
			url : "/member/emailcheck",
			type : "post",
			dataType : "json",
			data : {"user_email" : $("#user_email").val()},
			success : function(data){
				if(data == 1){
					alert("중복된 이메일입니다.");
				}else if(data == 0 && email.value != ''){
					$("#emailcheck").attr("value", "Y");
					alert("사용가능한 이메일입니다.");
				}else if(email.value == ''){
					alert("이메일를 입력해주세요");
				}
			}
		})
	}
		
	function fn_nickcheck(){
	var nickname = document.joinForm.user_nickname;
		$.ajax({
			url : "/member/nickcheck",
			type : "post",
			dataType : "json",
			data : {"user_nickname" : $("#user_nickname").val()},
			success : function(data){
				if(data == 1){
					alert("중복된 닉네임입니다.");
				}else if(data == 0 && nickname.value != ''){
					$("#nickcheck").attr("value", "Y");
					alert("사용가능한 닉네임입니다.");
				}else if(nickname.value == ''){
					alert("닉네임을 입력해주세요");
				}
			}
		})
	}