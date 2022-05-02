<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<!DOCTYPE html>
<html lang="ko" class="no-js bg_color" >

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

    <link href="/board../../../resources/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="/board../../../resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

    <!-- font-Glyphicon -->
    <!-- <link rel="stylesheet" href="vendor/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/fontawesome.css"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

    <!-- PAGE LEVEL PLUGIN STYLES -->
    <link href="/board../../../resources/css/animate.css" rel="stylesheet">
    <link href="/board../../../resources/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />

    <!-- THEME STYLES -->
    <link href="/board../../../resources/css/layout.css" rel="stylesheet" type="text/css" />

    <!-- Favicon -->
    <link rel="shortcut icon" href="/board../../../resources/img/favicon/favicon-32x32.png" />

    <!-- custom -->
    <link rel="stylesheet" href="/board../../../resources/css/custom.css">
    
    <!-- datatable  -->
	<link href="../../../resources/vendor/DataTables/datatables.css" >
  
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
    
    <!-- notice -->
    <div class="bg-color-sky-light fixed_container" style="min-height: 100vh;">
        <div class="content-lg container" style="margin-top : 50px;">
            <h2>JAVASCRIPT QnA</h2>
            <form>
	            <div class="table-responsive">
	                <table id="foo-table" class="table table-striped" data-page-length='40' data-order='[[ 1, "desc" ]]'>
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
			                    <c:when test = "${jslist != null and fn:length(jslist) > 0 }">
			                    		<c:forEach var="board" items="${jslist}">
					                        <tr>
					                            <td>${board.post_id }</td>
					                            <td>
					                            <a href="/board/javascriptView?post_id=${board.post_id }">${board.post_subject }</a>
					                            </td>
					                            <td>${board.user_nickname }</td>
					                            <td>${board.post_vcount }</td>
					                            <td><fmt:formatDate value="${board.post_regdate}" pattern="yyyy-MM-dd" /></td>
					                        </tr>
			                        	</c:forEach>
			                        </c:when>
		                        <c:otherwise>
		                        	<tr>
		                        		<td colspan="5" class="text-center">등록된 게시물이 없습니다. </td>
		                        	</tr>
		                        </c:otherwise>
		                    </c:choose>
	                    </tbody>
	                </table>
	            </div>
            <!-- End notice -->
			<c:if test="${member != null }">
           		<a href="/board/jswrite"class="btn btn-primary" type="submit">글쓰기</a>
            </c:if>
 		</div>
	 </div>
 
 
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
    <script src="/board../../../resources/vendor/jquery.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/vendor/jquery-migrate.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL PLUGINS -->
    <script src="/board../../../resources/vendor/jquery.easing.js" type="text/javascript"></script>
    <script src="/board../../../resources/vendor/jquery.back-to-top.js" type="text/javascript"></script>
    <!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> -->
    <script src="/board../../../resources/vendor/jquery.wow.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

    <!-- PAGE LEVEL SCRIPTS -->
    <script src="/board../../../resources/js/layout.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/js/components/wow.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/js/components/masonry.min.js" type="text/javascript"></script>
    <script src="/board../../../resources/js/action.js"></script>
    
    <!-- datatables -->
	<script type="text/javascript" src="../../../../resources/vendor/DataTables/datatables.js"></script>
	<script type="text/javascript" src="../../../../resources/vendor/DataTables/DataTables-1.11.5/js/dataTables.bootstrap.js"></script>
	
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