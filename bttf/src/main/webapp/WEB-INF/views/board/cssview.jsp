<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko" class="no-js bg_color" style="height : 100vh;">
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>Home4 - Homebrew Community</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />

    <!-- GLOBAL MANDATORY STYLES -->
    <link href="http://fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet" type="text/css">
    <link href="../../../resources/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="../../../resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

    <!-- font-Glyphicon -->
    <!-- <link rel="stylesheet" href="vendor/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/fontawesome.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="../../../resources/css/animate.css" rel="stylesheet">
    <link href="../../../resources/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />

    <!-- THEME STYLES -->
    <link href="../../../resources/css/layout.css" rel="stylesheet" type="text/css" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="/resources/img/favicon/favicon-32x32.png" />

    <!-- custom -->
    <link rel="stylesheet" href="../../../resources/css/custom.css">

    <!-- c3 chart -->
    <link href="../../../resources/vendor/c3-0.7.20/c3.css" rel="stylesheet">
    
	<!--reply style -->
    <link href="../../../resources/css/comment.css">
    
    <style type="text/css">
       .remove{
          display : none;
       }
    </style>
</head>
<!-- END HEAD -->
<!-- BODY -->
<body class="page-on-scroll ">
    <!--========== HEADER ==========-->
    <header class="header navbar-fixed-top">
        <!-- Navbar -->
		<%@ include file="../include/header_control.jsp" %>
        
        <!-- Navbar -->
    </header>
    <!--========== END HEADER ==========-->

    <!--========== SLIDER ==========-->

    <!--========== SLIDER ==========-->

    <!--========== PAGE LAYOUT ==========-->
    <!-- Service -->
    <div class="bg-color-sky-light" data-auto-height="true">
        <div class="content-lg container" style="margin-top : 50px;">
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box" data-height="height">
                            <form method="post">
                                <div class="col-md-6">
									<input type="hidden" name="post_id" value="${cssview.post_id }">
                                    <p style="color: black; font-size: 2rem; font-weight:bold;">글 제목 : ${cssview.post_subject }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" >조회수 ${cssview.post_vcount }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > 작성자 ${cssview.user_nickname }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > <fmt:formatDate value="${cssview.post_regdate}" pattern="yyyy-MM-dd HH:mm" /></p>
                                </div>
                                <div>
                                    <pre class="form-control" placeholder="내용을 입력해 주세요." style="height : 650px; resize: none; background-color: #fff;" disabled>${cssview.post_contents }</pre>
                                </div> 
	                        	<div class="mb-5">
									<c:if test="${member.user_nickname eq cssview.user_nickname}">
		 		                    	<a href="/board/cssedit?post_id=${cssview.post_id }" class="btn btn-primary mt-4" id="list" type="submit">글수정</a>                          
				                		<a href="/board/cssdelete?post_id=${cssview.post_id }" class="btn btn-danger mt-4" id="list" type="submit">글삭제</a>
				                		<p style=" transform: translate(0%,62%); color: #000 !important; ">댓글 개수 : </p>
									</c:if> 
	                        		<a href="/board/csslist" class="btn btn-default mt-4" id="edit" type="submit">글 목록</a>
									<c:if test="${member.user_nickname != cssview.user_nickname && member != null && cssview.user_nickname != 'admin'}">
										<a href="/board/bookmark" class="btn btn-default mt-4">북마크</a>
										<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#memberreport" data-whatever="@getbootstrap" style="float: right;" >작성자 신고</button>
									</c:if>
<!-- 	                        		<p style="transform: translate(0%,62%); color: #000 !important;">댓글 개수 : </p> -->
                              	 </div>
                            </form>
							
           					<!-- 댓글 작성 -->
           					<div class="card" id="result ">
	                            <div class="card-body">
	                                <!-- Comment form-->
	                                <form name="replyForm" method="post" class="mb-4 d-flex">
	                                	<textarea id="replytext" class="form-control mr-5" rows="2" placeholder="댓글을 작성하세요"></textarea>
	                                	<a href="/reply/cssReplyWrite" id="btnReply" class="btn btn-primary" style="height:44px; line-height:32px;">작성하기</a>
	                                </form>
	                                <!-- Comment with nested comments-->
	                                <div class="d-flex mb-4 mt-10">
	                                    <!-- Parent comment-->
	                                    <div class="flex-shrink-0 mr-4">
<!-- 	                                    	<img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /> -->
	                                    </div>
	                                    <div class="ms-3" style="width : 100%;">
	                                        <div class="fw-bold">
			                                    <h3>Commenter Name</h3>
	                                        	<div style=" clear: both; float: right; position: relative; top: 0; left: 4px;">
		                                        	<a href="/reply/cssReplyModify" id="btnUpdate" class="btn btn-info btn-sm">수정</a>
		                                        	<a href="/reply/cssReplyDelete" class="btn btn-danger btn-sm">삭제</a>
	                                        	</div>
	                                        </div>
	                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
	                                       
	                                        <!-- Child comment 1-->
	                                        <div class="d-flex mt-4">
	                                            <div class="flex-shrink-0 mr-4 col-sm-offset-1">
<!-- 	                                            	<img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /> -->
	                                            </div>
	                                            <div class="ms-3" style="width : 100%;">
	                                                <div class="fw-bold">
			                                        	<h3>Commenter Name</h3>
	                                                	<div style=" clear: both; float: right; position: relative; top: 0; left: 4px;">
				                                        	<a href="/reply/cssReplyModify" class="btn btn-info btn-sm">수정</a>
				                                        	<a href="/reply/cssReplyDelete" class="btn btn-danger btn-sm">삭제</a>
			                                        	</div>
	                                                </div>
	                                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
	                                            </div>
	                                        </div>
	                                        
	                                        <!-- Child comment 2-->
	                                        <div class="d-flex mt-4 ">
	                                            <div class="flex-shrink-0 mr-4 col-sm-offset-1">
<!-- 	                                            	<img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /> -->
	                                            </div>
	                                            <div class="ms-3" style="width : 100%;">
	                                                <div class="fw-bold">
			                                        	<h3>Commenter Name</h3>
		                                                <div style=" clear: both; float: right; position: relative; top: 0; left: 4px;">
				                                        	<a href="/reply/cssReplyModify" class="btn btn-info btn-sm">수정</a>
				                                        	<a href="/reply/cssReplyDelete" class="btn btn-danger btn-sm">삭제</a>
			                                        	</div>
	                                                </div>
               											When you put money directly to a problem, it makes a good headline.
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                                <!-- Single comment-->
	                                <div class="d-flex">
	                                    <div class="flex-shrink-0 mr-4">
<!-- 	                                    	<img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /> -->
	                                    </div>
	                                    <div class="ms-3" style="width : 100%;">
	                                        <div class="fw-bold">
	                                        	<h3>Commenter Name</h3>
	                                        	<div style=" clear: both; float: right; position: relative; top: 0; left: 4px;">
		                                        	<a href="#" class="btn btn-info btn-sm">수정</a>
		                                        	<a href="#" class="btn btn-danger btn-sm">삭제</a>
	                                        	</div>
	                                        </div>   
	                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
                        </div>
                    </div>
                </div>
                <!--// end row -->
            </div>
            <!--// end row -->
        </div>
    </div>				
	<div class="modal fade" id="memberreport" tabindex="-1" role="dialog" aria-labelledby="memberreport" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<form name="Check" action="/board/cssreport" id="reportForm" method ="get" >
					<input type="text" style="display:none;" name="reportee_index" id="reportee_index" value="${cssview.user_index }">
					<input type="text" style="display:none;" name="reporter_index" id="reporter_index" value="${member.user_index }">
					<input type="text" style="display:none;" name="board_category_id" id="board_category_id" value="${cssview.board_category_id }">
					<input type="text" style="display:none;" name="post_id" id="post_id" value="${cssview.post_id }">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="reportModalLabel">회원 신고</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="1" id="report1" onclick=CountChecked(this) value="1">
							  <label class="form-check-label" for="report1">욕설 등 부적절한 게시글, 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="2" id="report2" onclick=CountChecked(this) value="2">
							  <label class="form-check-label" for="report2">갈등 조장, 불쾌감 조성 및 허위사실 유포성 게시글, 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="3" id="report3" onclick=CountChecked(this) value="3" >
							  <label class="form-check-label" for="report3">악성코드/스파이웨어 유포성 게시글, 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="4" id="report4" onclick=CountChecked(this) value="4" >
							  <label class="form-check-label" for="report4">도배성 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="5" id="report5" onclick=CountChecked(this) value="5" >
							  <label class="form-check-label" for="report5">부적절한 홍보 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="6" id="report6" onclick=CountChecked(this) value="6" >
							  <label class="form-check-label" for="report6">명예훼손/사생활 침해 및 저작권 침해 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="7" id="report7" onclick=CountChecked(this) value="7" >
							  <label class="form-check-label" for="report7">음란성 또는 청소년에게 부적합한 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="8" id="report8" onclick=CountChecked(this) value="8" >
							  <label class="form-check-label" for="report8">운영자 사칭 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="9" id="report9" onclick=CountChecked(this) value="9" >
							  <label class="form-check-label" for="report9">개인정보 유포 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input reportVal" name="checkbox" type="checkbox" data-report="10" id="report10" onclick=CountChecked(this) value="10" >
							  <label class="form-check-label" for="report10">금전거래 유도 및 도박 조장 게시글, 댓글 또는 채팅</label>
							</div>	
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">신고 취소</button>
						<input type="submit" class="btn btn-danger" id="report" value="신고하기">
					</div>
				</form>
			</div>
		</div>
	</div>
    <!-- End join Form -->
    <!--========== END PAGE LAYOUT ==========-->

    <!--========== FOOTER ==========-->
    <footer class="footer fixed_footer">

        <!-- Copyright -->
		<%@ include file="../include/footer_control.jsp" %>
        <!-- End Copyright -->
    </footer>
    <!--========== END FOOTER ==========-->

    <!-- Back To Top -->
    <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>

    <!-- JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
    <!-- CORE PLUGINS -->
    <script src="../../../resources/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL PLUGINS -->
    <script src="../../../resources/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/jquery.back-to-top.js" type="text/javascript"></script>
    <!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> -->
    <script src="../../../resources/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
    <script src="../../../resources/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL SCRIPTS -->
    <script src="../../../resources/js/layout.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/components/wow.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/components/masonry.min.js" type="text/javascript"></script>
    <script src="../../../resources/js/action.js"></script>
    <script src="../../../resources/vendor/ckeditor5-build-classic/translations/ko.js"></script>
	<script src="../../../resources/vendor/ckeditor5-build-classic/ckeditor.js"></script>
    <script>
        ClassicEditor
            .create( document.querySelector( '#classic' ))
            .catch( error => {
                console.error( error );
            } );
    </script>
    <script src="../../../resources/js/confirm.js"></script>
</body>
<!-- END BODY -->
<script>
// 	//[글 수정하기] function
// 	function updateReadonlyBoard( post_id ){
// 	   document.getElementById( post_id ).readOnly = false;
// 	}
	

	// [글 삭제] function
	function deletePost(post_id){
		if (true){
			document.replyForm.action = "${pageContext.request.contextPath}/pages/cssDelete.do?post_id="+post_id;
			document.replyForm.submit();
		}
	}
	
	// [댓글 수정하기] function
	function updateReadonlyReply( reply_id ){
		document.getElementById( 'reply' + reply_id ).readOnly = false;
		
// 		document.getElementById( 'editfail' ).style.display = 'block'; 
// 		document.getElementById( 'editsubmitfail' ).style.display = 'none'; 
		// 수정하기 버튼 none, 수정완료(펑션) block
	}
	
	// [댓글 수정] function
	function updateReply( reply_id ){
		if (true){
			document.replyForm.action = "${pageContext.request.contextPath}/pages/cssUpdateReply.do?reply_id="+reply_id;
			document.replyForm.submit();
			// 수정하기 버튼 block, 수정완료(펑션) none
		}
	}
	
	// [댓글삭제] function
	function deleteReply( reply_id ){
		if (true){
			document.replyForm.action = "${pageContext.request.contextPath}/pages/cssDeleteReply.do?reply_id="+reply_id;
			document.replyForm.submit();
		}
	}
	
</script>

<script type="text/javascript">


// 설정 시작
var maxChecked = 1;
var totalChecked = 0;
// 설정 끝
function CountChecked(field) {
if (field.checked)
totalChecked += 1;
else
totalChecked -= 1; 
if (totalChecked > maxChecked) {
alert ("신고사유를 1가지만 선택하세요.");
field.checked = false;
totalChecked -= 1;
} 
}
function ResetCount(){
totalChecked = 0;
}
</script>
<script type="text/javascript">
  (function(d, s) {
      var j, e = d.getElementsByTagName(s)[0];

      if (typeof LivereTower === 'function') { return; }

      j = d.createElement(s);
      j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
      j.async = true;

      0
      e.parentNode.insertBefore(j, e);
  })(document, 'script');
</script>

</html>
