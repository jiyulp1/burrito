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
	<link href="/src/main/webapp/resources/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
	<link href="/src/main/webapp/resources/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" />

	<!-- font-Glyphicon -->
	<!-- <link rel="stylesheet" href="vendor/fontawesome-free-5.15.4-web/fontawesome-free-5.15.4-web/css/fontawesome.css"> -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">

	<!-- PAGE LEVEL PLUGIN STYLES -->
	<link href="/src/main/webapp/resources/css/animate.css" rel="stylesheet">
	<link href="/src/main/webapp/resources/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css" />

	<!-- THEME STYLES -->
	<link href="/src/main/webapp/resources/css/layout.css" rel="stylesheet" type="text/css" />

	<!-- Favicon -->
	<link rel="shortcut icon" href="/src/main/webapp/resources/img/favicon/favicon-32x32.png" />

	<!-- custom -->
	<link rel="stylesheet" href="/src/main/webapp/resources/css/custom.css">

	<!-- c3 chart -->
	<link href="/src/main/webapp/resources/vendor/c3-0.7.20/c3.css" rel="stylesheet">
	<!-- <script type="text/javascript" src="../../resource/js/board.js"></script> -->
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
    <c:set var="userAllList" value="${requestScope.userAllList }" />
    <c:set var="getUserCnt" value="${requestScope.getUserCnt }" />

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
                <i class="fas fa-user-circle title_subject_icon"></i>
             	   관리자 - 전체 회원 목록
            </h1>
            <div role="tabpanel">

                <div class="tab-content">
                    <!-- member management tab-->
                    <div role="tabpanel " style="margin-top: 70px;">
                        <!-- Nav tabs -->

                        <!-- End Nav tabs -->
                        <!-- tab panel -->
                        <div class="tab-content">
                            <!-- allmembers tab-->
                            <div role="tabpanel" class="tab-pane active" id="allmembers">
                                <div class="content-lg container">
                                    <!-- memberlist table -->
                                    <h2>
                                        <i class="fas fa-user-cog title_subject_icon"></i>
                                      	  회원목록
                                    </h2>
                                    <div class="table-responsive">
                                        <table id="foo-table" class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>회원이름</th>
                                                    <th>휴대폰번호</th>
                                                    <th>가입일자</th>
                                                    <th>계정관리</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <c:choose>
                                                    <c:when
                                                        test="${userAllList != null and fn:length(userAllList) > 0 }">
                                                        <c:forEach var="UserAll" items="${userAllList}">
                                                            <tr>
                                                                <td>
                                                                    <p>
                                                                        ${UserAll.user_id }
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        ${UserAll.user_name }
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        ${UserAll.user_phone }
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <p>
                                                                        ${UserAll.user_regdate }
                                                                    </p>
                                                                </td>
                                                                <td>
                                                                    <input type="button"
                                                                        class="btn btn-danger" value="차단하기">
                                                                </td>
                                                            </tr>
                                                        </c:forEach>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <tr>
                                                            <td colspan="5" class="text-center">등록된 회원이 없습니다.</td>
                                                        </tr>
                                                    </c:otherwise>
                                                </c:choose>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- End notice -->
									<!-- paging -->
                                    <nav aria-label="Page navigation" class="text-center" style="display:none;">
	                                    <ul class="pagination">
	                                        <c:if test="${nowPage > 1 }">
	                                            <li class="page-item">
	                                                <a class="page-link" href="${pageContext.request.contextPath }/pages/MemberAll.mg?page=${nowPage - 1 }">&lt;</a>
	                                            </li>
	                                        </c:if>
	                                        <c:forEach var="i" begin="${startPage}" end="${endPage }">
	                                            <c:choose>
	                                                <c:when test="${i == nowPage }">
	                                                    <li class="page-item">
	                                                        <a class="page-link">${i } </a>
	                                                    </li>
	                                                </c:when>
	                                                <c:otherwise>
	                                                    <li class="page-item">
	                                                        <a class="page-link" href="${pageContext.request.contextPath }/pages/MemberAll.mg?page=${i }">${i}</a>
	                                                    </li>
	                                                </c:otherwise>
	                                            </c:choose>
	                                        </c:forEach>
	                                        <c:if test="${nowPage<totalPage }">
	                                            <li class="page-item">
	                                                <a class="page-link"
	                                                    href="${pageContext.request.contextPath }/pages/MemberAll.mg?page=${nowPage + 1 }">&gt;</a>
	                                            </li>
	                                        </c:if>
	                                    </ul>
                                    </nav>
									<!-- end of paging -->
                                </div>
                            </div>
                            <!-- allmembers tab end-->

                        </div>
                        <!-- End tab panel -->
                    </div>
                    <!-- member management tab end-->

                </div>
                <!-- End tab panel -->
            </div>

            <!--// end row -->
        </div>
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
	<script src="/src/main/webapp/resources/vendor/jquery.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/vendor/jquery-migrate.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

	<!-- PAGE LEVEL PLUGINS -->
	<script src="/src/main/webapp/resources/vendor/jquery.easing.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/vendor/jquery.back-to-top.js" type="text/javascript"></script>
	<!--  <script src="vendor/jquery.smooth-scroll.js" type="text/javascript"></script> -->
	<script src="/src/main/webapp/resources/vendor/jquery.wow.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

	<!-- PAGE LEVEL SCRIPTS -->
	<script src="/src/main/webapp/resources/js/layout.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/js/components/wow.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/js/components/swiper.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/js/components/masonry.min.js" type="text/javascript"></script>
	<script src="/src/main/webapp/resources/js/action.js"></script>
	<!-- F12 ,right click block-->
	<!-- <script src="js/Prevention.js"></script> -->

	<!-- Load d3.js and c3.js -->
	<script src="/src/main/webapp/resources/vendor/c3-0.7.20/c3.js"></script>
	<script src="/src/main/webapp/resources/vendor/c3-0.7.20/docs/js/d3-5.8.2.min.js" charset="utf-8"></script>



</body>
<!-- END BODY -->

</html>