<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
       
       
       .bg_white_pd{
       		background-color : white;
       		padding-bottom : 200px;
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
                <div class="col-sm-12 sm-margin-b-2 bg_white_pd wow fadeInLeft" style="margin-bottom: 20px;">
                
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box" data-height="height">
                            <form method="post">
                                <div class="col-md-6">
									<input type="hidden" name="post_id" value="${springview.post_id }">
                                    <p style="color: black; font-size: 2rem; font-weight:bold;">글 제목 : ${springview.post_subject }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" >조회수 ${springview.post_vcount }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > 작성자 ${springview.user_nickname }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > <fmt:formatDate value="${springview.post_regdate}" pattern="yyyy-MM-dd HH:mm" /></p>
                                </div>
                                <div>
                                    <pre class="form-control" placeholder="내용을 입력해 주세요." style="height : 650px; resize: none; background-color: #fff;" disabled>${springview.post_contents }</pre>
                                </div> 
	                        	<div class="mb-5">
									<c:if test="${member.user_nickname eq springview.user_nickname}">
		 		                    	<a href="/board/springmodify?post_id=${springview.post_id }" class="btn btn-primary mt-4" id="list" type="submit">글수정</a>                          
				                		<a href="/board/springdelete?post_id=${springview.post_id }&mypage=" class="btn btn-danger mt-4" id="list" type="submit">글삭제</a>
									</c:if> 
	                        		<a href="/board/springlist" class="btn btn-default mt-4" id="edit" type="submit">글 목록</a>
									<c:if test="${member.user_nickname != springview.user_nickname && member != null && springview.user_nickname != 'admin'}">
										<a href="#" class="btn btn-default mt-4">북마크</a>
										<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#memberreport" data-whatever="@getbootstrap" style="float: right;" >작성자 신고</button>
									</c:if>
                              	 </div>
                            </form>
							
           					<!-- 댓글 작성 -->
							<form action="/reply/spring_reply_write " name="replyForm" method="post">
								<input type="hidden" id = "post_id" name="post_id" value="${springview.post_id }">
								<div class="col-auto" style="display: flex;">
								<c:if test="${member != null }">
                           			<input id="reply_contents" name="reply_contents" class="form-control mt-5" style="width: 95%;" type="text" placeholder="댓글을 입력해 주세요.">
                           			<a href="javascript:document.replyForm.submit()" class="btn btn-default mt-5" style="height: 50px; margin-left: 20px; line-height:36px; ">댓글 등록</a>
								</c:if>
								<c:if test="${member == null }">
                         			<textarea name="reply_contents" class="form-control mt-5" style="width: 95%;" type="text"> 로그인 후 댓글을 작성할 수 있습니다. </textarea>
                         		</c:if>
                         		</div>
								<!-- 댓글 리스트 -->
								<div>	
									<c:choose>
										<c:when test="${springreplylist != null and fn:length(springreplylist) > 0 }">
											<c:forEach var="reply" items="${springreplylist }">
												<div class="reply_box mt-5 col-md-12 col-sm-12">
													<!-- 정상적인 접근 경로 -->
														<div align="center" width="200px" >
															<p id="re_author" name="user_nickname" class="text-left reply_subject" style="display:hidden;">${reply.user_nickname } | <fmt:formatDate value="${reply.reply_regdate}" pattern="yyyy-MM-dd HH:mm:ss" /></p>
														</div>
														<c:if test="${member != null }" >
														<div class="col-md-12 col-sm-12 row">
															<textarea id="reply${reply.reply_id }" class="reply_con_box" name="reply${reply.reply_id }" readonly>${reply.reply_contents }</textarea>
															<div class="row mt-5" style="padding-left:10px;">
																<c:if test="${member.user_nickname eq reply.user_nickname}">
																<a class="btn btn-danger mt-4" href="javascript:updateReply( ${reply.reply_id} );">등록하기</a>
<%-- 																<a class="btn btn-info  mt-4" href="javascript:updateReadonlyReply( ${reply.reply_id} );" id="editsubmitfail" onchange="">수정하기</a> --%>
																<a class="btn btn-info  mt-4" href="javascript:updateReadonlyReply( ${reply.reply_id} );" id="editsubmitfail">수정하기</a>
																<a class="btn btn-danger mt-4" href="/reply/spring_reply_delete?reply_id=${reply.reply_id }&post_id=${reply.post_id}" id="list" type="submit">삭제</a>
															</c:if>
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
<script>	
	// [댓글 수정하기] function
	cnost updateFn = function(){
		function updateReadonlyReply( reply_id ){
			document.getElementById( 'reply' + reply_id ).readOnly = false;

		}
		
	}
 	
// 	// [댓글 수정] function
// 	function updateReply( reply_id ){
// 			document.replyForm.action = "/reply/spring_reply_modify?reply_id="+reply_id;
// 			document.replyForm.submit();
// 			// 수정하기 버튼 block, 수정완료(펑션) none
// 		}
// 	}

	
</script>
</body>
<!-- END BODY -->
</html>