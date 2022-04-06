<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
    <style>
   
        html {
           height: 100%;
        }
        
        body {
            width:100%;
            height:100%;
            margin: 0;
             padding-top: 200px;
             padding-bottom: 40px;
             font-family: "Nanum Gothic", arial, helvetica, sans-serif;
             background-repeat: no-repeat;
        }
        
         .card {
             margin: 0 auto; /* Added */
             float: none; /* Added */
           
        }
     
         #btn-Yes{
             background-color: #17bed2;
             border: none;
         }
        
        .form-signin .form-control {
             position: relative;
             height: auto;
             -webkit-box-sizing: border-box;
             -moz-box-sizing: border-box;
                 box-sizing: border-box;
             padding: 10px;
             font-size: 16px;
        }
         .card-title{
             margin-left: 30px;
             margin-bottom: 30px;
         }
         .links{
             text-align: center;
             margin-bottom: 10px;
         }
     
         a{ 
            color: #17bed2; text-decoration: none; 
         }
         .text2{
            color : blue;
         }
    </style>
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
    <div class="container-fluid">
        <div class="row">
            <div class="card align-middle col-md-3 login_card" >
                <div class="card-title" style="margin-top:30px;">         
                    <h2 class="card-title" style="color:#f58b34;"><img src="../../../resources/img/home_logo.png"/></h2>
                </div>     
                <div class="card-body">
                    <form class="form-signin" method="POST">
                        <input type="email" name="user_email" id="user_email" class="form-control" placeholder="이메일" required><br>
                        <input type="tel" name="user_phone" id="user_phone" class="form-control" oninput="autoHyphen(this)" maxlength="13" placeholder="핸드폰번호" required><br>
                        <input id="btn-Yes" class="btn btn-lg btn-primary btn-block" type="submit" value="비밀번호찾기" >
                    </form>
                </div>
                <div class="links" style="padding: 10px 20px;">
                    <a href="/member/findid">이메일 찾기</a> | <a onclick="history.go(-1);">로그인</a> | <a href="/member/signup">회원가입</a>
                </div>
            </div>
        </div>
    </div> 
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
	<!-- autohyphen -->
    <script src="../../../resources/js/autoHyphen.js"></script>
</body>
<!-- END BODY -->


</html>