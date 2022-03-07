<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
<!-- 	<script type="text/javascript" src="../../resource/js/board.js"></script> -->
	<script type="text/javascript">
		jQuery(function($){
		   $("#foo-table").DataTable({
		      "bInfo": false,
		      "bSort" : false,
		      "bPaginate" : true
		   });
		   
		});		
	</script>

</head>
<!-- END HEAD -->
	
<!-- BODY -->

<body class="page-on-scroll fixed_container">
	<c:set var="announcmentList" value = "${requestScope.announcmentList }"/>
	<c:set var="totalCnt" value = "${requestScope.totalCnt }"/>
	
    <!--========== HEADER ==========-->
    <header class="header navbar-fixed-top">
        <!-- Navbar -->
		<%@ include file="../include/header_control.jsp" %>

        <!-- Navbar -->
    </header>
    <!--========== END HEADER ==========-->

    <!-- notice -->
    <div class="bg-color-sky-light fixed_container">
        <div class="content-lg container" style="margin-top : 50px;">
<%--         ${boardJSON } --%>
            <!-- notice -->
            <h2>공지사항</h2>
            <form>
<!-- 	            <div class="search_box"> -->
<!-- 	                <select class="selectpicker"> -->
<!-- 	                    <option value="all">전체</option> -->
<!-- 	                	<option value="subject">제목</option>  -->
<!-- 	                    <option value="author">작성자</option> -->
<!-- 	                </select> -->
<!-- 	                <form novalidate required class="form-inline"> -->
<!-- 	                    <input class="search_input" type="text" name="search"> -->
<!-- 	                    <input class="btn btn-primary" type="button" value="검색"> -->
<!-- 	                </form> -->
<!-- 	            </div> -->
	            <div class="table-responsive">
	                <table id="foo-table" class="table table-striped" data-order='[[ 1, "desc" ]]'>
	                    <thead>
	                    	<tr>
		                        <th>번호</th>
		                        <th>제목</th>
		                        <th>작성자</th>
		                        <th>조회수</th>
		                        <th>날짜</th>
	                    	</tr>
	                    </thead>
	                    <tbody>
		                    <c:choose>
		                    	<c:when test = "${announcmentList != null and fn:length(announcmentList) > 0 }">
		                    		<c:forEach var="announcmentList" items="${announcmentList}">
				                        <tr>
				                            <td>${announcmentList.post_id }</td>
				                            <td>
				                            <a href="${pageContext.request.contextPath }/pages/ann_view.mg?post_id=${announcmentList.post_id }">${announcmentList.post_subject }</a>
				                            </td>
				                            <td>${announcmentList.writer }</td>
				                            <td>${announcmentList.post_vcount }</td>
				                            <td>${announcmentList.post_regdate }</td>
				                        </tr>
		                        	</c:forEach>
		                        </c:when>
		                        <c:otherwise>
		                        	<tr>
		                        		<td colspan="5" class="text-center">등록된 게시물이 없습니다 </td>
		                        	</tr>
		                        </c:otherwise>
		                    </c:choose>
	                    </tbody>
	                </table>
	            </div>
	            <!-- End notice -->
	            <c:if test="${sessionScope.session_id != null && sessionScope.session_id.user_id == 'admin'}">
	           	 <a href="${pageContext.request.contextPath }/app/pages/ann_write.jsp"class="btn btn-primary" type="submit">글쓰기</a>
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


    
</body>
<!-- END BODY -->

</html>
