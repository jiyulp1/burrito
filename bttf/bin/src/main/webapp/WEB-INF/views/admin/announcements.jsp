<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
<!-- 	<meta http-equiv=refresh content=1; url="admin.jsp"> -->

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

<body class="bg-color-sky-light page-on-scroll fixed_container">
    <!--========== HEADER ==========-->
    <header class="header navbar-fixed-top">
        <!-- Navbar -->
		<%@ include file="../include/header_control.jsp" %>

        <!-- Navbar -->
    </header>
    <!--========== END HEADER ==========-->

    <!-- notice -->
    <div class="bg-color-sky-light fixed_container" style="min-height: 100vh;">
        <div class="content-lg container" style="margin-top : 50px;">
            <!-- notice -->
            <h2>공지사항</h2>
            <form>
	            <div class="table-responsive">
	                <table id="foo-table" class="table table-striped" data-order='[[ 1, "desc" ]]'>
	                    <thead>
	                    	<tr>
		                        <th style="width: 10%;">번호</th>
		                        <th style="width: 50%;">제목</th>
		                        <th style="width: 10%;">작성자</th>
		                        <th style="width: 10%;">조회수</th>
		                        <th style="width: 20%;">날짜</th>
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
	            <c:if test="${member!= null && member.authority_name == 'admin'}">
	           		<a href="/admin/annwrite" class="btn btn-primary" type="submit">글 작성</a>
	            </c:if>
            </form>
            
        </div>
    </div>
    <!-- End notice -->
   
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
