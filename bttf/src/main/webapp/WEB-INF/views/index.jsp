<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

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
   	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link href="../../resources/vendor/simple-line-icons/simple-line-icons.min.css" type="text/css" />
    <link href="../../resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />
<!--     <link href="../WebContent/resource/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" /> -->

    <!-- font-Glyphicon -->
    <!-- <link rel="stylesheet" href="vendor/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/fontawesome.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="../../resources/css/animate.css" rel="stylesheet">
    
    <link href="../../resources/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />
    
    <!-- THEME STYLES -->
    <link href="../../resources/css/layout.css" rel="stylesheet" type="text/css" />
    
    <!-- Favicon -->
    <link rel="shortcut icon" href="../../resources/img/favicon/favicon-16x16.png" />
    
    <!-- custom -->
    <link rel="stylesheet" href="../../resources/css/custom.css">
</head>
<!-- END HEAD -->

<!-- BODY -->
<body class="page-on-scroll fixed_container">

    <!--========== HEADER ==========-->
    <header class="header navbar-fixed-top">
        <!-- Navbar -->
                <%@ include file="../views/include/header_control.jsp" %>  
        
        <!-- Navbar -->
    </header>
    <!--========== END HEADER ==========-->

    <!--========== SLIDER ==========-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img class="img-responsive" src="../../resources/img/1920x1080/main_visual_ju.png" alt="Slider Image">
                <div class="container">
                    <div class="carousel-centered">
                        <div class="margin-b-40">
                            <h1 class="carousel-title">개발자의 모든것</h1>
                            <p class="carousel-title"> Home Brew</p>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    <!--========== SLIDER ==========-->

    <!--========== PAGE LAYOUT ==========-->
    <!-- Service -->
    <div class="bg-color-sky-light" data-auto-height="true">
    	<div class="content-lg container" style="margin-top : 50px;">
        	<div class="row row-space-1 margin-b-2">
            	<div class="col-sm-4 sm-margin-b-2">
                	<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="service" data-height="height">
                            <div class="service-element">
                                <i class="service-icon fab fa-html5"></i>
                            </div>
                            <div class="service-info">
                                <h3>HTML5</h3>
                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiatdolor</p>
                                <a class="link" href="/board/htmllist">Read More</a>
                            </div>
                            <a href="/board/htmllist" class="content-wrapper-link"></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="service" data-height="height">
                            <div class="service-element">
                                <i class="service-icon fab fa-css3-alt"></i>
                            </div>
                            <div class="service-info">
                                <h3>CSS3</h3>
                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                <a class="link" href="/board/csslist">Read More</a>
                            </div>
                            <a href="/board/csslist" class="content-wrapper-link"></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".2s">
                        <div class="service" data-height="height">
                            <div class="service-element">
                                <i class="service-icon fab fa-js"></i>
                            </div>
                            <div class="service-info">
                                <h3>JAVASCRIPT</h3>
                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                <a class="link" href="/board/jslist">Read More</a>
                            </div>
                            <a href="/board/jslist" class="content-wrapper-link"></a>
                        </div>
                    </div>
                </div>
                <!--// end row -->
                <div class="row row-space-1">
	                <div class="col-sm-4 sm-margin-b-2">
	                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".4s">
	                        <div class="service" data-height="height">
	                            <div class="service-element">
	                                <i class="service-icon fab fa-java"></i>
	                            </div>
	                            <div class="service-info">
	                                <h3>JAVA</h3>
	                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
	                                <a class="link" href="#">Read More</a>
	                            </div>
	                            <a href="/board/javalist" class="content-wrapper-link"></a>
	                        </div>
	                    </div>
	                </div>
	                <div class="col-sm-4 sm-margin-b-2">
	                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".5s">
	                        <div class="service" data-height="height">
	                            <div class="service-element">
	                                <i class="service-icon service-icon fab fa-java"></i>
	                            </div>
	                            <div class="service-info">
	                                <h3>JSP</h3>
	                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
	                                <a class="link" href="/board/jsplist">Read More</a>
	                            </div>
	                            <a href="/board/jsplist" class="content-wrapper-link"></a>
	                        </div>
	                    </div>
	                </div>
	                <div class="col-sm-4 sm-margin-b-2">
	                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".5s">
	                        <div class="service" data-height="height">
	                            <div class="service-element">
	                                <i class="service-icon fas fa-database"></i>
	                            </div>
	                            <div class="service-info">
	                                <h3>ORACLE</h3>
	                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
	                                <a class="link" href="/board/oraclelist">Read More</a>
	                            </div>
	                            <a href="/board/oraclelist" class="content-wrapper-link"></a>
	                        </div>
	                    </div>
	                </div>
	                <div class="col-sm-4">
	                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".6s">
	                        <div class="service" data-height="height">
	                            <div class="service-element">
	                                <i class="service-icon fas fa-leaf"></i>
	                            </div>
	                            <div class="service-info">
	                                <h3>SPRING</h3>
	                                <p class="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
	                                <a class="link" href="/board/springlist">Read More</a>
	                            </div>
	                            <a href="/board/springlist" class="content-wrapper-link"></a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <!--// end row -->
	        </div>
	    </div>
    </div>
   
    <div class="content-lg container">
        <div class="row margin-b-40">
            <div class="col-sm-6">
                <h2>Homebrew Crew</h2>
                <p>Homebrew 커뮤니티를 만든 크루원을 소개합니다</p>
            </div>
        </div>
        <!--// end row -->

        <div class="row">
            <!-- Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/01.jpg" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>박지율</a> <span class="text-uppercase margin-l-20">리더</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->

            <!-- Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/content_sub2.png" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>이초록</a> <span class="text-uppercase margin-l-20">부 리더</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->

            <!-- Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/03.jpg" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>조선익</a> <span class="text-uppercase margin-l-20">크루원</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->
        </div>
        <!--// end row -->
        <div class="row">
            <!-- Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/01.jpg" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>주수진</a> <span class="text-uppercase margin-l-20">크루원</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->

            <!-- Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/02.jpg" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>정진형</a> <span class="text-uppercase margin-l-20">크루원</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/03.jpg" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>김선경</a> <span class="text-uppercase margin-l-20">크루원</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->
            <!-- Latest Products -->
            <div class="col-sm-4 sm-margin-b-50 mt-4">
                <div class="margin-b-20">
                    <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                        <img class="img-responsive" src="../../resources/img/970x647/02.jpg" alt="Latest Products Image">
                    </div>
                </div>
                <h4><a>이다인</a> <span class="text-uppercase margin-l-20">크루원</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut
                    consequat siad esqudiat dolor</p>
            </div>
            <!-- End Latest Products -->
        </div>
        <!--// end row -->
    </div>
    <!--========== END PAGE LAYOUT ==========-->
	<div class="bg-color-sky-light fixed_container" data-auto-height="true">
    	<div class="content-lg container" style="margin-top : 50px;">
        	<div class="row row-space-1 margin-b-2">
            	<!-- notice -->
            <h2>공지사항</h2>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
	                    <tr>
	                        <th>번호</th>
	                        <th>제목</th>
	                        <th>작성자</th>
	                        <th>조회수</th>
	                        <th>작성일자</th>
	                    </tr>
                    </thead>
                    <tbody>
                       <c:choose>
							<c:when test = "${announcements != null and fn:length(announcements) > 0 }">
		                    	<c:forEach var="announcmentList" items="${announcements}">
				                	<tr>
				                    	<td>${announcmentList.post_id }</td>
				                        <td>
				                       		<a href="/admin/annview?post_id=${announcmentList.post_id }">${announcmentList.post_subject }</a>
				                        </td>
				                        <td>${announcmentList.user_nickname }</td>
				                        <td>${announcmentList.post_vcount }</td>
				                        <td><fmt:formatDate value="${announcmentList.post_regdate}" pattern="yyyy-MM-dd" /></td>
				                    </tr>
		                        </c:forEach>
		                    </c:when>
		                    <c:otherwise>
		                    	<tr>
		                        	<td colspan="5" class="text-center">등록된 공지사항이 없습니다 </td>
		                       	</tr>
		                    </c:otherwise>
		               </c:choose>
                    </tbody>
                </table>
            </div>
            <!-- End notice -->
               
	        </div>
	    </div>
    </div>
    <!--========== FOOTER ==========-->
    <footer class="footer fixed_footer">

        <!-- Copyright -->
                <%@ include file="../views/include/footer_control.jsp" %>  

        <!-- End Copyright -->
    </footer>
    <!--========== END FOOTER ==========-->

    <!-- Back To Top -->
    <a href="javascript:void(0);" class="js-back-to-top back-to-top">Top</a>
    
    <!-- JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
    <!-- CORE PLUGINS -->
    
    <script src="../../resources/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="../../resources/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="../../resources/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    
    
    <!-- PAGE LEVEL PLUGINS -->
    <script src="../../resources/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="../../resources/vendor/jquery.back-to-top.js" type="text/javascript"></script> 
    
    
    <!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> --> 
    <script src="../../resources/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="../../resources/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
    <script src="../../resources/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
    <script src="../../resources/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>


    <!-- PAGE LEVEL SCRIPTS -->
    <script src="../../resources/js/layout.js" type="text/javascript"></script>
    <script src="../../resources/js/components/wow.min.js" type="text/javascript"></script>
    <script src="../../resources/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="../../resources/js/components/masonry.min.js" type="text/javascript"></script>
    <script src="../../resources/js/action.js"></script>
    
    <script type="text/javascript" src="../../resources/js/chatting_action.js"></script>
</body>
<!-- END BODY -->

</html>