<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

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
    <link href="/resource/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="/resource/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

    <!-- font-Glyphicon -->
    <!-- <link rel="stylesheet" href="vendor/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/fontawesome.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="/resource/css/animate.css" rel="stylesheet">
    <link href="/resource/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />

    <!-- THEME STYLES -->
    <link href="/resource/css/layout.css" rel="stylesheet" type="text/css" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="/resource/img/favicon/favicon-32x32.png" />

    <!-- custom -->
    <link rel="stylesheet" href="/resource/css/custom.css">

    <!-- c3 chart -->
    <link href="/resource/vendor/c3-0.7.20/c3.css" rel="stylesheet">
    
	<!-- sweetalert -->
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	
</head>
<!-- END HEAD -->

<!-- BODY -->

<body class="page-on-scroll fixed_container">
	<c:if test = "${not empty param.flag }">
		<c:if test = "${not param.flag }">
			<script> alert("회원가입 실패")</script>
		</c:if>
	</c:if>
<%-- 	<c:if test = "${not empty param.idcheck }"> --%>
<%-- 		<c:if test = "${not param.idcheck }"> --%>
<!-- 			<script> alert("사용 가능한 아이디입니다.")</script> -->
<%-- 		</c:if> --%>
<%-- 	</c:if> --%>
<%-- 	<c:if test = "${not empty param.idcheck }"> --%>
<%-- 		<c:if test = "${ param.idcheck }"> --%>
<!-- 			<script> alert("이미 사용중인 아이디입니다.")</script> -->
<%-- 		</c:if> --%>
<%-- 	</c:if> --%>
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
                <i class="fas fa-users title_subject_icon"></i>
                	회원가입
            </h1>
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box" data-height="height">
                            <div class="my_box_element">
                                <i class="my_box_icon fas fa-id-card"></i>
                            </div>
                            <form action="${PageContext.request.contextPath}/pages/MemberJoin.us" method="post" name="joinForm">
                                <div class="col-auto">
                                    <label>아이디</label>
                                    <div style="display: flex;">
	                                    <label for="user_id" style="width : 91%; margin-left: 7px;">
		                                    <input name="user_id" id="user_id" class="form-control margin-b-50" type="text" placeholder="아이디">   
	                                    </label>
	                                    <input id="alert_pop" class="btn btn-primary" style="height: 50px;" type="button" value="중복확인" onclick="checkId(joinForm.user_id.value)">
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <label for="user_pw">비밀번호</label>
                                    <input  id="user_pw" name="user_pw" class="form-control margin-b-50" type="password" placeholder="8자 이상 15자 이하의 영문과 숫자를 입력하세요">
                                </div>
                                <div class="col-auto">
                                    <label for="user_pw_re">비밀번호확인</label>
                                    <input  id="user_pw_re" name="user_pw_re"class="form-control margin-b-50" type="password" placeholder="비밀번호를 다시 입력해주세요">
                                </div>
                                <div class="col-auto">
                                    <label for="user_name">이름</label>
                                    <input  id="user_name" name="user_name" class="form-control margin-b-50" type="text" placeholder="이름">
                                </div>
                                <div class="col-auto">
                                    <label for="user_phone">전화번호</label>
                                    <input  id="user_phone" name="user_phone" class="form-control margin-b-50" type="text" placeholder="전화번호">
                                </div>
                                <div class="col-auto">
                                    <label for="user_email">이메일</label>
                                    <input  id="user_email" name="user_email" class="form-control margin-b-50" type="text" placeholder="이메일">
                                </div>
                                <div class="col-auto">
                                    <label class="form-label" for="main_language">관심언어</label>
                                    <select class="form-control" name="main_language" id="pref">
                                        <option value="JAVA">관심언어를 선택해주세요.</option>
                                        <option value="JAVA">JAVA</option>
                                        <option value="JSP">JSP</option>
                                        <option value="SPRING">SPRING</option>
                                        <option value="ORACLE">ORACLE</option>
                                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                                        <option value="CSS3">CSS3</option>
                                        <option value="HTML5">HTML5</option>
                                    </select>
                                </div>
                                <a id="joinin" class="btn btn-primary" style="height: 50px; margin-top: 10px; line-height: 36px; "href = "java::void(0)" onclick="sendit()"> 회원가입하기</a>
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
    <script src="/resource/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="/resource/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="/resource/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL PLUGINS -->
    <script src="/resource/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="/resource/vendor/jquery.back-to-top.js" type="text/javascript"></script>
    <!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> -->
    <script src="/resource/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="/resource/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
    <script src="/resource/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
    <script src="/resource/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL SCRIPTS -->
    <script src="/resource/js/layout.min.js" type="text/javascript"></script>
    <script src="/resource/js/components/wow.min.js" type="text/javascript"></script>
    <script src="/resource/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="/resource/js/components/masonry.min.js" type="text/javascript"></script>
    <script src="/resource/js/action.js"></script>
    
	<!--F12 / 우클릭방지 -->
	<!--<script src="/resource/js/Prevention.js"></script> -->
    
	<!--validation -->
    <script src="/resource/js/user.js"></script>
	<!--checkid-->
    <script src="/resource/js/checkId.js"  type="text/javascript"></script>
    <!--sweetalert -->
   <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
   
   
</body>
<!-- END BODY -->

</html>