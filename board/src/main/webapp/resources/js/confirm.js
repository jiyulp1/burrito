// 회원탈퇴 확인 confirm


function confirm_joinout() {
	if (confirm('정말로 탈퇴하시겠습니까?')) {
		location.href='/pages/MemberJoinOut.us';
		
	} else {
		
	}
}

function confirm_backlist(post_id) {
	if (confirm('작성 중인 게시글이 삭제됩니다')) {
		alert(post_id)
		location.href="/pages/cssDelete.do?post_id="+post_id;
		
	} else {
		
	}
}

function alert_boardwrite() {
	let frm = document.csswrite;
	let post_subject = frm.post_subject;
	let post_contents = frm.post_contents
	
	
	if(post_subject.value == "" || post_subject.value == null) {
		alert("제목을 입력해 주세요");
		location.href="/app/pages/csswrite.jsp";
		post_subject.focus();
		return false;
	} 
	
	if(post_contents.value == "" || post_contents.value == null) {
		alert("내용을 입력해 주세요");
		location.href="/app/pages/csswrite.jsp";
		post_contents.focus();
		return false;
	} 
	
	alert("게시글 작성 완료")
	frm.submit();
}
