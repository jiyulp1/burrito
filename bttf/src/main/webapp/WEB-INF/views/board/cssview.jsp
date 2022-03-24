<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko" class="no-js" style="height : 100vh;">
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
                                	<p class="margin-b-50 text-center" > <fmt:formatDate value="${cssview.post_regdate}" pattern="yyyy-MM-dd HH:mm:ss" />
                                </div>
                                <div>
                                    <pre class="form-control" placeholder="내용을 입력해 주세요." style="height : 650px; resize: none; background-color: #fff;" disabled>${cssview.post_contents }</pre>
                                </div> 
	                        	<div class="mb-5">
									<c:if test="${member.user_nickname eq cssview.user_nickname}">
		 		                    	<a href="/board/cssedit?post_id=${cssview.post_id }" class="btn btn-primary mt-4" id="list" type="submit">글수정</a>                          
				                		<a href="/board/cssdelete?post_id=${cssview.post_id }" class="btn btn-danger mt-4" id="list" type="submit">글삭제</a>
									</c:if> 
	                        		<a href="/board/csslist" class="btn btn-default mt-4" id="edit" type="submit">글 목록</a>
									<c:if test="${not empty member}">
										<a href="#" class="btn btn-default mt-4">북마크</a>
										<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#boardreport" data-whatever="@getbootstrap" style="float: right;">게시글 신고</button>
										<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#memberreport" data-whatever="@getbootstrap" style="float: right;" >작성자 신고</button>
<%-- 					               		<a href="/member/cssboardreported?post_id=${cssview.post_id }&category_id=0" class="btn btn-warning mt-4" id="boardreport" type="submit" style="float: right;">게시글 신고</a> --%>
<%-- 					               		<a href="/member/memberreport?user_nickname=${cssview.user_nickname }" class="btn btn-warning mt-4" id="memberreport" type="submit" style="float: right;">작성자 신고</a> --%>
									</c:if>
                              	 </div>
                            </form>
							
           					<!-- 댓글 작성 -->
							<form name="replyForm" method="post">
								<input type="hidden" name="post_id" value="${cssview.post_id }">
								<div class="col-auto" style="display: flex;">
                           			<input id="reply_contents" name="reply_contents" class="form-control mt-5" style="width: 95%;" type="text" placeholder="댓글을 작성해보세요">
                           			<a href="javascript:document.replyForm.submit()" class="btn btn-default mt-5" style="height: 50px; margin-left: 20px; line-height:36px; ">댓글등록</a>
                         		</div>
								<!-- 댓글 리스트 -->
								<div>
									<c:choose>
										<c:when test="${replylist != null and fn:length(replylist) > 0 }">
											<c:forEach var="reply" items="${replylist }">
												<div class="reply_box mt-5 col-md-12 col-sm-12">
													<!-- 정상적인 접근 경로 -->
														<div align="center" width="200px" >
															<p id="re_author" name="user_id" class="text-left reply_subject" style="display:hidden;">${reply.replyer }</p>
														</div>
													<c:if test="${member != null }" >
														<div class="col-md-12 col-sm-12 row">
															<textarea id="reply${reply.reply_id }" class="reply_con_box" name="reply${reply.reply_id }" readonly>${reply.reply_contents }</textarea>
															<%--<c:if test= ${sessionScope.session_id ==  dto.user_nickname} 자신이 쓴 댓글에 대해서만 수정삭제가 가능하도록 처리해야, 게시글도 마찬가지--%>
															<div class="row mt-5" style="padding-left:10px;">
																<a class="btn btn-primary" href="javascript:updateReply( ${reply.reply_id})" id="editfail">수정완료</a>
																<a class="btn btn-info" href="javascript:updateReadonlyReply( ${reply.reply_id} );" id="editsubmitfail">수정하기</a>
																<a class="btn btn-danger" href="javascript:deleteReply( ${reply.reply_id})" id="deletefail">삭제</a>
															</div>
														</div>
													</c:if>
													<!-- 비정상적인 접근 경로 -->
													<c:if test="${member == null }" >
														<div >
															<textarea id="reply${reply.reply_id }" name="reply${reply.reply_id }" class="reply_con_box" style="text-align:left; border:0px; height:fit-content; resize:none;">${reply.reply_contents }</textarea>
														</div>
													</c:if>
												</div>
											</c:forEach>
										</c:when>
										<c:otherwise>
											<div>
												<div align="center" style="board : none !important;">
													<input  class="form-control mb-3 mt-4"type="text" placeholder="등록된 댓글이 없습니다." readonly>
												</div>
											</div>
										</c:otherwise>
									</c:choose>     
								</div>
								<!-- reply pagination -->
								<nav aria-label="Page navigation" class="text-center">
									<ul class="pagination">
										<c:if test="${nowPage > 1 }">
											<li class="page-item">							
												<a class="page-link" href="${pageContext.request.contextPath }/pages/cssBoardView.do?page=${nowPage - 1 }&post_id=${board.post_id }">&lt;</a>
											</li>
										</c:if>
										<c:forEach var="i" begin="${startPage}" end="${endPage }">
											<c:choose>
												<c:when test="${i == nowPage }">
													<li class="page-item">
														<a class="page-link">${i }	</a>						
													</li>
												</c:when>
												<c:otherwise>
													<li class="page-item">									
														<a class="page-link" href="${pageContext.request.contextPath }/pages/cssBoardView.do?page=${i }&post_id=${board.post_id }">${i }</a>
													</li>
												</c:otherwise>
											</c:choose>
										</c:forEach>	
										<c:if test="${nowPage<totalPage }">
											<li class="page-item">
												<a class="page-link" href="${pageContext.request.contextPath }/pages/cssBoardView.do?page=${nowPage + 1 }&post_id=${board.post_id }">&gt;</a>
											</li>
										</c:if>						
									</ul>
								</nav>
								<!-- end of reply pagination -->						
							</form>                                
                        </div>
                    </div>
                </div>
                <!--// end row -->
            </div>
            <!--// end row -->
        </div>
    </div>				
	<div class="modal fade" id="report" tabindex="-1" role="dialog" aria-labelledby="#boardreport" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="reportModalLabel">게시글 신고</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report1" value="욕설 등 부적절한 게시글, 댓글 또는 채팅">
							  <label class="form-check-label" for="report1">욕설 등 부적절한 게시글, 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report2" value="갈등 조장, 불쾌감 조성 및 허위사실 유포성 게시글 , 댓글 또는 채팅">
							  <label class="form-check-label" for="report2">갈등 조장, 불쾌감 조성 및 허위사실 유포성 게시글 , 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report3" value="악성코드/스파이웨어 유포성 게시글 , 댓글 또는 채팅" >
							  <label class="form-check-label" for="report3">악성코드/스파이웨어 유포성 게시글 , 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report4" value="도배성 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report4">도배성 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report5" value="부적절한 홍보 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report5">부적절한 홍보 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report6" value="명예훼손/사생활 침해 및 저작권 침해 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report6">명예훼손/사생활 침해 및 저작권 침해 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report7" value="음란성 또는 청소년에게 부적합한 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report7">음란성 또는 청소년에게 부적합한 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report8" value="운영자 사칭 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report8">운영자 사칭 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report9" value="개인정보 유포 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report9">개인정보 유포 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report10" value="금전거래 유도 및 도박 조장 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report10">금전거래 유도 및 도박 조장 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report11" value="기타(하단 신고 사유 작성)" >
							  <label class="form-check-label" for="report11">기타(하단 신고 사유 작성)</label>
							</div>	
						</div>
						<div class="form-group">
							<label for="message-text" class="control-label">기타 신고 사유</label>
							<textarea class="form-control" id="message-text"></textarea>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">신고 취소</button>
						<button type="submit" class="btn btn-danger" onclick="">신고하기</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="modal fade" id="report" tabindex="-1" role="dialog" aria-labelledby="#memberreport" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<form>
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
							<h4 class="modal-title" id="reportModalLabel">회원 신고</h4>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report1" value="욕설 등 부적절한 게시글, 댓글 또는 채팅">
							  <label class="form-check-label" for="report1">욕설 등 부적절한 게시글, 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report2" value="갈등 조장, 불쾌감 조성 및 허위사실 유포성 게시글 , 댓글 또는 채팅">
							  <label class="form-check-label" for="report2">갈등 조장, 불쾌감 조성 및 허위사실 유포성 게시글 , 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report3" value="악성코드/스파이웨어 유포성 게시글 , 댓글 또는 채팅" >
							  <label class="form-check-label" for="report3">악성코드/스파이웨어 유포성 게시글 , 댓글 또는 채팅</label>
							</div>
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report4" value="도배성 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report4">도배성 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report5" value="부적절한 홍보 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report5">부적절한 홍보 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report6" value="명예훼손/사생활 침해 및 저작권 침해 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report6">명예훼손/사생활 침해 및 저작권 침해 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report7" value="음란성 또는 청소년에게 부적합한 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report7">음란성 또는 청소년에게 부적합한 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report8" value="운영자 사칭 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report8">운영자 사칭 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report9" value="개인정보 유포 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report9">개인정보 유포 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report10" value="금전거래 유도 및 도박 조장 게시글, 댓글 또는 채팅" >
							  <label class="form-check-label" for="report10">금전거래 유도 및 도박 조장 게시글, 댓글 또는 채팅</label>
							</div>	
							<div class="form-check form-check-inline">
							  <input class="form-check-input" type="checkbox" id="report11" value="기타(하단 신고 사유 작성)" >
							  <label class="form-check-label" for="report11">기타(하단 신고 사유 작성)</label>
							</div>	
						</div>
						<div class="form-group">
							<label for="message-text" class="control-label">기타 신고 사유</label>
							<textarea class="form-control" id="message-text"></textarea>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">신고 취소</button>
						<button type="submit" class="btn btn-danger" onclick="">신고하기</button>
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
</html>
