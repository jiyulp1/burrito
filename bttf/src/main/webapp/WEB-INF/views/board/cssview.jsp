<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page import ="kr.co.bttf.DTO.Board_CSS_DTO" %>
<%@ page import ="kr.co.bttf.DTO.UserDTO" %>


<!DOCTYPE html>
<html lang="ko" class="no-js">
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
    <link href="../../resource/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="../../resource/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

    <!-- font-Glyphicon -->
    <!-- <link rel="stylesheet" href="vendor/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/fontawesome.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="../../resource/css/animate.css" rel="stylesheet">
    <link href="../../resource/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />

    <!-- THEME STYLES -->
    <link href="../../resource/css/layout.css" rel="stylesheet" type="text/css" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="/resource/img/favicon/favicon-32x32.png" />

    <!-- custom -->
    <link rel="stylesheet" href="../../resource/css/custom.css">

    <!-- c3 chart -->
    <link href="../../resource/vendor/c3-0.7.20/c3.css" rel="stylesheet">
    <style type="text/css">
       .remove{
          display : none;
       }
       
    
    </style>
    
    
</head>
<!-- END HEAD -->

<!-- BODY -->
<body class="page-on-scroll fixed_container">
   <c:set var="board" value="${requestScope.board }"/>
   
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
    <% UserDTO boardviewer = (UserDTO)session.getAttribute("session_id");%>
<%--     <c:set var="boardviewer" value="${pageScope.session }" /> --%>
    <div class="bg-color-sky-light fixed_container" data-auto-height="true">
        <div class="content-lg container" style="margin-top : 50px;">
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box" data-height="height">
                            <form action="${pageContext.request.contextPath }/pages/csslist.do" method="post">
                                <div class="col-md-6">
									<input type="hidden" name="post_id" value="${board.post_id }">
                                    <p style="color: black; font-size: 2rem; font-weight:bold;">글 제목 : ${board.post_subject }</p>
<!--                                     <input id="subject" class="form-control margin-b-50" type="text" placeholder="제목" disabled> -->
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" >조회수 ${board.post_vcount }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > 작성자 ${board.writer }</p>
                                </div>
                                <div>
                                    <pre class="form-control" placeholder="내용을 입력해 주세요." style="height : 650px; 
                                    resize: none; background-color: #fff;" disabled>${board.post_contents }</pre>
                                </div> 
	                        <div class="mb-5">
	                        	<a href="${pageContext.request.contextPath }/pages/csslist.do" class="btn btn-default mt-4" id="edit" type="submit">글 목록</a>
								<c:if test="${not empty sessionScope.session_id}">
									<a href="${pageContext.request.contextPath }/pages/BookmarkOK.us?post_id=${board.post_id }" class="btn btn-default mt-4">북마크</a>
					               	<a href="java::void()" class="btn btn-warning mt-4" id="report" type="submit" style="float: right;">신고</a>
								</c:if>
								<c:if test="${sessionScope.session_id.user_id eq board.writer}">
		 		                    <a href="${pageContext.request.contextPath }/pages/cssEditChange.do?post_id=${board.post_id }" class="btn btn-primary mt-4" id="list" type="submit">글 수정</a>                          
				                	<a class="btn btn-danger mt-4" onclick="deletePost(${board.post_id})">글삭제</a>
								</c:if> 
                              	 </div>
                            </form>
                            
           					<!-- 댓글 작성 -->
							<form name="replyForm" action="${pageContext.request.contextPath }/pages/cssReplyWriteOKAction.do" method="post">
								<input type="hidden" name="post_id" value="${board.post_id }">
								<div class="col-auto" style="display: flex;">
                           			<input id="reply_contents" name="reply_contents" class="form-control mt-5" style="width: 95%;" type="text" placeholder="댓글을 작성해보세요">
                           			<a href="javascript:document.replyForm.submit()" class="btn btn-default mt-5" style="height: 50px; margin-left: 20px; line-height:36px; ">댓글등록</a>
                         		</div>
								<!-- 댓글 리스트 -->
								<c:set var="replylist" value="${requestScope.replylist }"/>
								<div>
									<c:choose>
										<c:when test="${replylist != null and fn:length(replylist) > 0 }">
											<c:forEach var="reply" items="${replylist }">
												<div class="reply_box mt-5 col-md-12 col-sm-12">
													<!-- 정상적인 접근 경로 -->
														<div align="center" width="200px" >
															<p id="re_author" name="user_id" class="text-left reply_subject" style="display:hidden;">${reply.replyer }</p>
														</div>
													<c:if test="${sessionScope.session_id != null }" >
														<div class="col-md-12 col-sm-12 row">
															<textarea id="reply${reply.reply_id }" class="reply_con_box" name="reply${reply.reply_id }" readonly>${reply.reply_contents }</textarea>
															<%--<c:if test= ${sessionScope.session_id ==  dto.writer} 자신이 쓴 댓글에 대해서만 수정삭제가 가능하도록 처리해야, 게시글도 마찬가지--%>
															<div class="row mt-5" style="padding-left:10px;">
																<a class="btn btn-primary" href="javascript:updateReply( ${reply.reply_id})" id="editfail">수정완료</a>
																<a class="btn btn-info" href="javascript:updateReadonlyReply( ${reply.reply_id} );" id="editsubmitfail">수정하기</a>
																<a class="btn btn-danger" href="javascript:deleteReply( ${reply.reply_id})" id="deletefail">삭제</a>
															</div>
														</div>
													</c:if>
													<!-- 비정상적인 접근 경로 -->
													<c:if test="${sessionScope.session_id == null }" >
														<div >
															<textarea id="reply${reply.reply_id }" name="reply${reply.reply_id }" class="reply_con_box" style="text-align:left; border:0px; height:fit-content; resize:none;">${reply.reply_contents }</textarea>
<!-- 															<div class="row mt-5"> -->
<%-- 																<a href="${pageContext.request.contextPath }/app/pages/login.jsp" class="btn btn-info mt-4" id="editfail">수정 하기</a> --%>
<%-- 																<a href="${pageContext.request.contextPath }/app/pages/login.jsp" class="btn btn-primary mt-4" id="editsubmitfail">수정 완료</a> --%>
<%-- 																<a href="${pageContext.request.contextPath }/app/pages/login.jsp" class="btn btn-danger mt-4" id="deletefail">삭제</a> --%>
<!-- 															</div> -->
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
    <script src="../../resource/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="../../resource/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="../../resource/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL PLUGINS -->
    <script src="../../resource/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="../../resource/vendor/jquery.back-to-top.js" type="text/javascript"></script>
    <!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> -->
    <script src="../../resource/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="../../resource/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
    <script src="../../resource/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
    <script src="../../resource/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL SCRIPTS -->
    <script src="../../resource/js/layout.min.js" type="text/javascript"></script>
    <script src="../../resource/js/components/wow.min.js" type="text/javascript"></script>
    <script src="../../resource/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="../../resource/js/components/masonry.min.js" type="text/javascript"></script>
    <script src="../../resource/js/action.js"></script>
    <script src="../../resource/vendor/ckeditor5-build-classic/translations/ko.js"></script>
	<script src="../../resource/vendor/ckeditor5-build-classic/ckeditor.js"></script>
    <script>
        ClassicEditor
            .create( document.querySelector( '#classic' ))
            .catch( error => {
                console.error( error );
            } );
    </script>
    <script src="../../resource/js/confirm.js"></script>
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
