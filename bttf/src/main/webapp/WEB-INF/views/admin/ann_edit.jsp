<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
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
    <style>
.ck-blurred .ck .ck-content .ck-editor__editable .ck-rounded-corners .ck-editor__editable_inline h1
	{
	display: none;
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
    <div class="bg-color-sky-light fixed_container" data-auto-height="true">
        <div class="content-lg container" style="margin-top : 50px;">
            <h1 class="pt-4">
                <i class="fas fa-file-alt title_subject_icon"></i>
               		 공지사항 수정하기
            </h1>
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box" data-height="height">
                            <!-- Start write Form -->
							<form name = "annedit" action="${pageContext.request.contextPath }/pages/annUpdate.do" method="post">
								<input type="hidden" name="post_id" value="${board.post_id }">
								<div class="col-auto">
									<label for="subject">제목</label>
									<input id="subject" name="post_subject" class="form-control margin-b-50" type="text" placeholder="제목" value="${board.post_subject }">
									<textarea id="editor" name="post_contents" class="form-control" placeholder="내용을 입력해 주세요." style="height: 650px; resize: none;">${board.post_contents }</textarea>
                                </div> 
                            <a href="javascript:document.annedit.submit()" class="btn btn-info mt-4" id="writesuccess">작성완료</a>
                        	<a href="${pageContext.request.contextPath }/pages/Announcements.mg" class="btn btn-default mt-4" id="edit" type="submit">공지사항 목록</a>
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
    <!--<script src="vendor/ckeditor5-build-classic/translations/ko.js"></script>-->
	<script src="../../resource/vendor/ckeditor5-31.1.0-xp96wtdshww/src/ckeditor.js"></script>
	<script src="${contextPath}../../resource/vendor/ckeditor5-31.1.0-e38clgxocdpt/build/ckeditor.js"></script>
	<script src="${contextPath}../../resource/js/editor.js"></script>
</body>
<!-- END BODY -->

</html>