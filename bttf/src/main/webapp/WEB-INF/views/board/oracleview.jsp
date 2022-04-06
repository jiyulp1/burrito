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
									<input type="hidden" name="post_id" value="${oracleview.post_id }">
                                    <p style="color: black; font-size: 2rem; font-weight:bold;">글 제목 : ${oracleview.post_subject }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" >조회수 ${oracleview.post_vcount }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > 작성자 ${oracleview.user_nickname }</p>
                                </div>
                                <div class="col-md-2">
                                	<p class="margin-b-50 text-center" > <fmt:formatDate value="${oracleview.post_regdate}" pattern="yyyy-MM-dd HH:mm" /></p>
                                </div>
                                <div>
                                    <pre class="form-control" placeholder="내용을 입력해 주세요." style="height : 650px; resize: none; background-color: #fff;" disabled>${oracleview.post_contents }</pre>
                                </div> 
	                        	<div class="mb-5">
									<c:if test="${member.user_nickname eq oracleview.user_nickname}">
		 		                    	<a href="/board/oracleedit?post_id=${oracleview.post_id }" class="btn btn-primary mt-4" id="list" type="submit">글수정</a>                          
				                		<a href="/board/oracledelete?post_id=${oracleview.post_id }&mypage=" class="btn btn-danger mt-4" id="list" type="submit">글삭제</a>
									</c:if> 
	                        		<a href="/board/oraclelist" class="btn btn-default mt-4" id="edit" type="submit">글 목록</a>
									<c:if test="${member.user_nickname != oracleview.user_nickname && member != null && oracleview.user_nickname != 'admin'}">
										<a href="#" class="btn btn-default mt-4">북마크</a>
										<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#memberreport" data-whatever="@getbootstrap" style="float: right;" >작성자 신고</button>
									</c:if>
                              	 </div>
                            </form>
           					<!-- 댓글 작성 -->
							<div class="card" id="result ">
	                            <div class="card-body">
	                                <!-- Comment form-->
	                                <form name="replyForm" method="post" class="mb-4 d-flex">
	                                	<textarea id="reply_contents" name="reply_contents" class="form-control mr-5" rows="2" placeholder="댓글을 작성하세요"></textarea>
	                                	<a href="/reply/oracleReplyWrite" id="btnReply" class="btn btn-primary" style="height:44px; line-height:32px;">작성하기</a>
	                                </form>

	                               	<!-- Comment with nested comments-->
	                                
	                                <c:forEach var="row" items="${oraclereplylist}">
	                                <div class="d-flex mb-4 mt-10">
	                                    <!-- Parent comment-->
	                                    <div class="flex-shrink-0 mr-4">
<!-- 	                                    	<img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /> -->
	                                    </div>
		                                    <div class="ms-3" style="width : 100%;">
		                                        <div class="fw-bold">
		                                        	<div class="d-flex">
					                                    <h3>${row.user_nickname}</h3>
					                                    <p style="transform : translate(16% 20%);">
					                                    	<fmt:formatDate value="${row.post_regdate}" pattern="yyyy-MM-dd HH:mm" />
					                                    </p>		                                        	
		                                        	</div>
		                                        	<div style=" clear: both; float: right; position: relative; top: 0; left: 4px;">
			                                        	<a href="/reply/oracleReplyModify" id="btnUpdate" class="btn btn-info btn-sm">수정</a>
			                                        	<a href="/reply/oracleReplyDelete" class="btn btn-danger btn-sm">삭제</a>
		                                        	</div>
		                                        </div>
		                                        <p>${row.reply_contents }</p>
		                                       
		                                        <!-- Child comment 1-->
				                                <c:otherwise>
			                                        <div class="d-flex mt-4">
			                                            <div class="flex-shrink-0 mr-4 col-sm-offset-1">
														<!--<img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /> -->
			                                            </div>
			                                            <div class="ms-3" style="width : 100%;">
			                                                <div class="fw-bold">
					                                        	<h3>${row.user_nickname}</h3>
			                                                	<div style=" clear: both; float: right; position: relative; top: 0; left: 4px;">
						                                        	<a href="/reply/oracleReplyModify" class="btn btn-info btn-sm">수정</a>
						                                        	<a href="/reply/oracleReplyDelete" class="btn btn-danger btn-sm">삭제</a>
					                                        	</div>
			                                                </div>
			                                                <p>${row.reply_contents }</p>
			                                            </div>
			                                        </div>
				                                </c:otherwise>
		                                    </div>
	                                	</div>
	                                </c:forEach>	                               
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
	
	<!-- Drop Down Menu -->
    <script src="../../../resources/js/action.js"></script>
    
	<!--CKEDITOR -->
    <script src="../../../resources/vendor/ckeditor5-build-classic/translations/ko.js"></script>
	<script src="../../../resources/vendor/ckeditor5-build-classic/ckeditor.js"></script>
	
	
	<!-- REPLY AJAX -->
	<script type="text/javascript" src="../../../resources/js/oraclereplylist.js"></script>
	
	
	<!-- ALERT SECTION -->
    <script src="../../../resources/js/confirm.js"></script>
	
	
    <script>
        ClassicEditor
            .create( document.querySelector( '#classic' ))
            .catch( error => {
                console.error( error );
            } );
    </script>
<script>	
	// [댓글 수정하기] function
	cnost updateFn = function(){
		function updateReadonlyReply( reply_id ){
			document.getElementById( 'reply' + reply_id ).readOnly = false;

		}
		
	}
 	
// 	// [댓글 수정] function
// 	function updateReply( reply_id ){
// 			document.replyForm.action = "/reply/oracle_reply_modify?reply_id="+reply_id;
// 			document.replyForm.submit();
// 			// 수정하기 버튼 block, 수정완료(펑션) none
// 		}
// 	}

	
</script>
</body>
<!-- END BODY -->
</html>
