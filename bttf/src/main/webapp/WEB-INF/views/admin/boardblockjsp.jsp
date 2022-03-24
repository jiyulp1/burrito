<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
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
	
	<!-- datatable  -->
	<link href="../../../resources/vendor/DataTables/datatables.css" >
	
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
				<i class="fas fa-user-circle title_subject_icon"></i>
				관리자 - 신고된 게시글
			</h1>
			<div class="content-lg container">
				<h2>
                	<i class="fas fa-window-close title_subject_icon"></i>신고된게시글
                </h2>
				<div class="content-lg container">
					<div class="row row-space-1 margin-b-2 col-md-12 col-sm-12" style="display: flex;">
						<div class="col-sm-4 sm-margin-b-2">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon fab fa-html5"></i>
									</div>
									<div class="service-info text-center">
										<h3>HTML5</h3>
									</div>	
									<a href="/admin/boardblockhtml" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4 sm-margin-b-2">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon fab fa-css3-alt"></i>
									</div>
									<div class="service-info text-center">
										<h3>CSS3</h3>
									</div>
									<a href="/admin/boardblockcss" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4 sm-margin-b-2">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".2s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon fab fa-js"></i>
									</div>
									<div class="service-info text-center">
										<h3>JAVASCRIPT</h3>
									</div>
									<a href="/admin/boardblockjs" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4 sm-margin-b-2">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".4s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon fab fa-java"></i>
									</div>
									<div class="service-info text-center" >
										<h3>JAVA</h3>
									</div>
									<a href="/admin/boardblockjava" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4 sm-margin-b-2">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".5s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon service-icon fab fa-java"></i>
									</div>
									<div class="service-info text-center">
										<h3>JSP</h3>
									</div>
									<a href="/admin/boardblockjsp" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4 sm-margin-b-2">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".5s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon fas fa-leaf"></i>
									</div>
									<div class="service-info text-center" >
										<h3>SPRING</h3>
									</div>
									<a href="/admin/boardblockspring" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".6s">
								<div class="service manager_lnb_box" data-height="height">
									<div class="service-element text-center">
										<i class="service-icon fas fa-database"></i>
									</div>
									<div class="service-info text-center">
										<h3>ORACLE</h3>
									</div>
									<a href="/admin/boardblockoracle" class="content-wrapper-link"></a>
								</div>
							</div>
						</div>
					</div>	
				</div>
				<!-- jsp table -->
				<div class="mt-10">
					<h2>
						<i class="fas fa-list title_subject_icon"></i>
						JSP
					</h2>
					<div class="table-responsive">
						<table id="foo-table" class="table table-striped">
							<thead>
								<tr>
									<th>게시글</th>
									<th>제목</th>
									<th>작성자</th>
									<th>작성일자</th>
								</tr>
							</thead>
							<tbody>
								<c:choose>
                   					<c:when test = "${boardblockjsp != null and fn:length(boardblockjsp) > 0 }">
                   						<c:forEach var="jsp" items="${boardblockjsp}">
											<tr>
												<td>${jsp.post_id }</td>
												<td>
													<a href="/board/jspview?post_id=${jsp.post_id}">${jsp.post_subject }</a>
												</td>
												<td>${jsp.user_nickname}</td>
												<td>${jsp.post_regdate }</td>
											</tr>
										</c:forEach>
									</c:when>
									<c:otherwise>
			                        	<tr>
			                        		<td colspan="5" class="text-center">신고된 게시물이 없습니다 </td>
			                        	</tr>
			                        </c:otherwise>
								</c:choose>
							</tbody>
						</table>
					</div>
				</div>
				<!--end jsp table -->
			</div>
		</div>
		<!--// end row -->
	</div>
	<!-- End Service -->

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
	
	<!-- datatables -->
	<script type="text/javascript" src="../../../resources/vendor/DataTables/datatables.js"></script>
	<script type="text/javascript" src="../../../resources/vendor/DataTables/DataTables-1.11.5/js/dataTables.bootstrap.js"></script>
 	<script type="text/javascript"> 
 	$(document).ready(function() {
 	    $('#foo-table').DataTable( {
 	    	bInfo : false,
 	       	bSortable : false,
 	       	bPaginate : true,
 	        displayLength : 10
 	    } );
 	} );	
 </script> 

</body>
<!-- END BODY -->

</html>