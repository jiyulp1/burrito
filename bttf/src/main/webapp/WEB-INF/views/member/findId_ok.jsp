<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

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
	<link rel="shortcut icon" href="../../../resources/img/favicon/favicon-32x32.png" />

	<!-- custom -->
	<link rel="stylesheet" href="../../../resources/css/custom.css">

	<!-- c3 chart -->
	<link href="../../../resources/vendor/c3-0.7.20/c3.css" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdn.datatables.net/t/bs-3.3.6/jqc-1.12.0,dt-1.10.11/datatables.min.css"/> 
    <script src="https://cdn.datatables.net/t/bs-3.3.6/jqc-1.12.0,dt-1.10.11/datatables.js"></script>
    <script type="text/javascript" src="../../resource/js/board.js"></script>

    <!-- c3 chart -->
    <link href="../../resource/vendor/c3-0.7.20/c3.css" rel="stylesheet">
</head>
<!-- END HEAD -->

<!-- BODY -->

<body class="page-on-scroll fixed_container">
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
    <div class="bg-color-sky-light fixed_container" data-auto-height="true">
        <div class="content-lg container" style="margin-top : 50px;">
            <h1 class="pt-4">
                <i class="fas fa-user-circle title_subject_icon"></i>
                	이메일 찾기
            </h1>
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page text-center" data-height="height">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-id-card"></i>
                            </div>
                            <div class="my_box_my_page_info">
                            <c:choose>
		                    	<c:when test = "${members != null and fn:length(members) > 0 }">
                               		<h3>이메일 찾기가 완료되었습니다.</h3>
		                    		<c:forEach var="members" items="${members}">
                                		<p>회원님의 이메일은 ${members.user_email }입니다.</p>
                            		</c:forEach>
		                        </c:when>
		                        <c:otherwise>
		                        	<h3>이메일 찾기로 돌아가기</h3>
		                        	<p>입력하신 회원정보로 조회되는 이메일이 없습니다.</p>
		                        	<a href="/member/findid" class="content-wrapper-link"></a>
		                        </c:otherwise>
		                    </c:choose>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page text-center">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-comment-alt"></i>
                            </div>
                            <div class="my_box_my_page_info">
                                <h3>로그인</h3>
                            </div>
                            <a href="/member/signin" class="content-wrapper-link"></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page text-center">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-comment-alt"></i>
                            </div>
                            <div class="my_box_my_page_info">
                                <h3>비밀번호 찾기</h3>
                            </div>
                            <a href="/member/findpw" class="content-wrapper-link"></a>
                        </div>
                    </div>
                </div>
                
                
                
                
                <!--// end row -->
            </div>
            <!--// end row -->
        </div>
    </div>    
    <!-- End Work -->
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
	<!-- F12 ,right click block-->
	<!-- <script src="js/Prevention.js"></script> -->

	<!-- Load d3.js and c3.js -->
	<script src="../../../resources/vendor/c3-0.7.20/c3.js"></script>
	<script src="../../../resources/vendor/c3-0.7.20/docs/js/d3-5.8.2.min.js" charset="utf-8"></script>

	
	
</body>
<!-- END BODY -->

</html>
