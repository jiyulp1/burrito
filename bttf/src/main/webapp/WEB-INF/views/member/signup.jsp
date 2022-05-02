<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>

<html lang="ko" class="no-js bg_color">
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
    
	<!-- sweetalert -->
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	
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
    <div class="bg-color-sky-light " data-auto-height="true">
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
                            <form action="/member/signup" method="post" name="joinForm" id="joinForm">
<!--                                 <div class="col-auto"> -->
<!--                                     <label>아이디</label> -->
<!--                                     <div style="display: flex;"> -->
<!-- 	                                    <label for="user_id" style="width : 91%; margin-left: 7px;"> -->
<!-- 		                                    <input name="user_id" id="user_id" class="form-control margin-b-50" type="text" placeholder="아이디">    -->
<!-- 	                                    </label> -->
<!-- 	                                    <input id="alert_pop" class="btn btn-primary" style="height: 50px;" type="button" value="중복확인" onclick="checkId(joinForm.user_id.value)"> -->
<!--                                     </div> -->
<!--                                 </div> -->
                                <div class="col-auto margin-b-50" >
                                    <label for="user_email">이메일</label>
                                    <div style="display:flex;">
	                                    <input  id="user_email" name="user_email" class="form-control mr-5" style="width:86%;" type="text" placeholder="이메일">
	                                    <button class="emailcheck btn btn-info" type="button" id="emailcheck" onclick="fn_emailcheck();" value="N">중복확인</button>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <label for="user_pw">비밀번호</label>
                                    <input  id="user_pw" name="user_pw" class="form-control margin-b-50" type="password" placeholder="8자 이상 15자 이하의 특수문자와 영문과 숫자로 입력하세요">
                                </div>
                                <div class="col-auto">
                                    <label for="user_pw_re">비밀번호확인</label>
                                    <input  id="user_pw_re" name="user_pw_re" class="form-control margin-b-50" type="password" placeholder="비밀번호를 다시 입력해주세요">
                                </div>
                                <div class="col-auto">
                                    <label for="user_name">이름</label>
                                    <input  id="user_name" name="user_name" class="form-control margin-b-50" type="text" placeholder="이름">
                                </div>
                                <div class="col-auto margin-b-50">
                                    <label for="user_nickname">닉네임</label>
                                	<div style="display:flex;">
                                    	<input  id="user_nickname" name="user_nickname" class="form-control mr-5" style="width:86%;" type="text" placeholder="닉네임">
                                    	<button class="nickcheck btn btn-info" type="button" id="nickcheck" onclick="fn_nickcheck();" value="N">중복확인</button>
                                	</div>
                                </div>
                                <div class="col-auto">
                                    <label for="user_phone">휴대폰번호</label>
                                    <input  id="user_phone" name="user_phone" class="form-control margin-b-50" type="text" oninput="autoHyphen(this)" maxlength="13" placeholder="휴대폰번호">
                                </div>
                                <div class="col-auto">
                                    <label class="form-label" for="main_language">관심언어</label>
                                    <select class="form-control" name="main_language" id="pref">
                                        <option value="default">관심언어를 선택해주세요.</option>
                                        <option value="java">JAVA</option>
                                        <option value="jsp">JSP</option>
                                        <option value="spring">SPRING</option>
                                        <option value="oracle">ORACLE</option>
                                        <option value="javascript">JAVASCRIPT</option>
                                        <option value="css">CSS3</option>
                                        <option value="html">HTML5</option>
                                    </select>
                                </div>
<!--                                 <a id="joinin" class="btn btn-primary" style="height: 50px; margin-top: 10px; line-height: 36px; "href = "java::void(0)" onclick="sendit()"> 회원가입하기</a> -->
                                <input id="joinin" class="btn btn-primary" style="height: 50px; margin-top: 20px; line-height: 36px;" type="submit" onclick="sendit()" value="회원가입하기">
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
	<!-- F12 ,right click block-->
	<!-- <script src="js/Prevention.js"></script> -->

	<!-- Load d3.js and c3.js -->
	<script src="../../../resources/vendor/c3-0.7.20/c3.js"></script>
	<script src="../../../resources/vendor/c3-0.7.20/docs/js/d3-5.8.2.min.js" charset="utf-8"></script>
    
	<!--F12 / 우클릭방지 -->
	<!--<script src="/resource/js/Prevention.js"></script> -->
    
	<!--validation -->
    <script src="../../../resources/js/user.js"></script>
	<!--중복확인-->
    <script src="../../../resources/js/check.js"></script>
    <!-- autohyphen -->
    <script src="../../../resources/js/autoHyphen.js"></script>
    <!--sweetalert -->
   <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
   
</body>
<!-- END BODY -->
</html>