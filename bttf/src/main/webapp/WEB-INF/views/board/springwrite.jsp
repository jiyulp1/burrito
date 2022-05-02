<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
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
<script src="../../../resources/js/confirm.js" type="text/javascript"></script>
<style>
.ck-blurred .ck .ck-content .ck-editor__editable .ck-rounded-corners .ck-editor__editable_inline h1
	{
	display: none;
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
			<h1 class="pt-4">
				<i class="fas fa-file-alt title_subject_icon"></i> 게시글 작성
			</h1>
			<div class="row row-space-1 margin-b-2">
				<div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
					<div class="wow fadeInLeft" data-wow-duration=".3"
						data-wow-delay=".3s">
						<div class="my_box" data-height="height">
						
							<!-- Start write Form -->
							<form name = "springwrite" method="post">
								<input type="hidden" name="user_index" value="${member.user_index }">
								<div class="col-auto">
									<label for="subject">제목</label>
									<input id="subject" name="post_subject" class="form-control margin-b-50" type="text" placeholder="제목" required>
									<textarea id="editor" name="post_contents" class="form-control" placeholder="내용을 입력해 주세요." style=" resize: none;"></textarea>
								</div>
									<%-- 로그인X--%>
									<c:if test="${member == null }">
<!-- 										<a href="login.jsp" class="btn btn-info mt-4" id="writefail">작성완료</a> -->
<!-- 										<a href="login.jsp" class="btn btn-default mt-4" id="edit">수정하기</a> -->
									</c:if>
									<%-- 로그인O--%>
									<c:if test="${member != null }">
										<button type="submit" class="btn btn-info mt-4" id="writesuccess">작성완료</button>
									</c:if>
										<a class="btn btn-primary mt-4" id="list" onclick="confirm_backlist()">목록</a>
							</form>
							<!-- End write Form -->
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--========== END PAGE LAYOUT ==========-->

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
	<script src="../../../resources/vendor/jquery.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/vendor/jquery-migrate.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/vendor/bootstrap/js/bootstrap.min.js"
		type="text/javascript"></script>

	<!-- PAGE LEVEL PLUGINS -->
	<script src="../../../resources/vendor/jquery.easing.js"
		type="text/javascript"></script>
	<script src="../../../resources/vendor/jquery.back-to-top.js"
		type="text/javascript"></script>
	<!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> -->
	<script src="../../../resources/vendor/jquery.wow.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/vendor/swiper/js/swiper.jquery.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/vendor/masonry/jquery.masonry.pkgd.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/vendor/masonry/imagesloaded.pkgd.min.js"
		type="text/javascript"></script>

	<!-- PAGE LEVEL SCRIPTS -->
	<script src="../../../resources/js/layout.min.js" type="text/javascript"></script>
	<script src="../../../resources/js/components/wow.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/js/components/swiper.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/js/components/masonry.min.js"
		type="text/javascript"></script>
	<script src="../../../resources/js/action.js"></script>
	<!--<script src="vendor/ckeditor5-build-classic/translations/ko.js"></script>-->

	<script src="${contextPath}../../../resources/vendor/ckeditor5-31.1.0-e38clgxocdpt/build/ckeditor.js"></script>

	<script>
        ClassicEditor
            .create( document.querySelector( '#editor' ),{
                languge:{ui : 'ko', content:'ko' }
            } )
            .catch( error => {
                console.error( error );
            } );
        
        
    </script>
    
    
    <!-- CUSTOM SCRIPTS -->
</body>
<!-- END BODY -->

</html>