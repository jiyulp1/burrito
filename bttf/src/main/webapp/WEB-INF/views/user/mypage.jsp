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
    
    <link rel="stylesheet" href="https://cdn.datatables.net/t/bs-3.3.6/jqc-1.12.0,dt-1.10.11/datatables.min.css"/> 
    <script src="https://cdn.datatables.net/t/bs-3.3.6/jqc-1.12.0,dt-1.10.11/datatables.js"></script>
    <script type="text/javascript" src="../../resource/js/board.js"></script>

    <!-- c3 chart -->
    <link href="../../resource/vendor/c3-0.7.20/c3.css" rel="stylesheet">
</head>
<!-- END HEAD -->

<!-- BODY -->

<body class="page-on-scroll fixed_container">
    <c:set var="bookmarkList" value="${requestScope.bookmarkList}"/>
    <c:set var="mypostList" value="${requestScope.mypostList}"/>
    <c:set var="mypostcount" value="${requestScope.getMyPostCount}"/>
    <c:set var="myreplycount" value="${requestScope.getMyReplyCount}"/>
    <c:set var="myrecomendcount" value="${requestScope.getMyRecomendCount}"/>
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
                	마이페이지
            </h1>
            <div class="row row-space-1 margin-b-2">
                <div class="col-sm-12 sm-margin-b-2" style="margin-bottom: 20px;">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page" data-height="height">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-id-card"></i>
                            </div>
                            <div class="my_box_my_page_info">
                                <h3>내 정보 수정</h3>
                                <a class="link" href="${pageContext.request.contextPath }/pages/MemberView.us">수정하기</a>
                            </div>
                            <a href="${pageContext.request.contextPath }/pages/MemberView.us" class="content-wrapper-link" ></a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page" data-height="height">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-edit"></i>
                            </div>
                            <div class="my_box_my_page_info">
                                <h3>작성한 글 수</h3>
                                <p class="margin-b-5">${mypostcount}</p>
                                <!-- <a class="link" href="html5.html">Read More</a> -->
                            </div>
                            <!-- <a href="html5.html" class="content-wrapper-link"></a> -->
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page" data-height="height">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-comment-alt"></i>
                            </div>
                            <div class="my_box_my_page_info">
                                <h3>작성한 댓글 수</h3>
                                <p class="margin-b-5">${myreplycount}</p>
                                <!-- <a class="link" href="html5.html">Read More</a> -->
                            </div>
                            <!-- <a href="html5.html" class="content-wrapper-link"></a> -->
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 sm-margin-b-2">
                    <div class="wow fadeInLeft" data-wow-duration=".3" data-wow-delay=".3s">
                        <div class="my_box_my_page" data-height="height">
                            <div class="my_box_my_page_element">
                                <i class="my_box_my_page_icon fas fa-thumbs-up"></i>
                            </div>
                            <div class="my_box_my_page_info">
                                <h3>받은 추천 수</h3>
                                <p class="margin-b-5">${myrecomendcount}</p>
                                <!-- <a class="link" href="html5.html">Read More</a> -->
                            </div>
                            <!-- <a href="html5.html" class="content-wrapper-link"></a> -->
                        </div>
                    </div>
                </div>
                <!--// end row -->
            </div>
            <!--// end row -->
        </div>
    </div>
<!--     <div class="bg-color-sky-light" data-auto-height="true"> -->
<!--         <div class="content-lg container"> -->
<!--             <h2>게시글 차트</h2> -->
<!--             <div class="row row-space-1 margin-b-2"> -->
<!--                 <div id="chart" class="wow fadeInLeft"></div> -->
<!--             </div> -->
<!--         </div> -->
<!--     </div>             -->
    
    <!-- End Service -->

    <!-- Latest Products -->
    
    <!-- End Latest Products -->

    <!-- notice -->
    <div class="bg-color-sky-light">
        <div class="content-lg container">
            <!-- notice -->
            <h2>
                <i class="fas fa-user-tag title_subject_icon"></i>
                	북마크
            </h2>
            <div class="table-responsive">
                <table id="foo-table" class="table table-striped" data-page-length='5' data-order='[[ 1, "desc" ]]'>
                    <thead>
                        <th>제목</th>
                        <th>추천수</th>
                        <th>작성자</th>
                        <th>작성일자</th>
			<th></th>
                    </thead>
                    <tbody>
		    	<c:choose>
                    	<c:when test="${empty mypostList }">
                    		<tr>
                    		<td colspan="5">등록된 북마크가 없습니다.</td>
                    		</tr>
                    	</c:when>
                    	<c:when test="${mypostList != null and fn:length(mypostList) > 0 }">
		                    <c:forEach var="mypostList" items="${mypostList}">
		                    	<tr>
		                    		<td><a href="${pageContext.request.contextPath }/pages/cssBoardView.do?post_id=${mypostList.post_id}">${mypostList.post_subject}</a></td>
		                    		<td>${mypostList.post_rec}</td>
		                    		<td>${mypostList.writer}</td>
		                    		<td>${mypostList.post_regdate}</td>
		                    		<td><a class="btn btn-danger" href="/pages/BookmarkDelete.us?post_id=${mypostList.post_id }">삭제</a></td>
		                    	</tr>
		                    </c:forEach>
                    	</c:when>
                    </c:choose>
                    </tbody>
                </table>
            </div>
            <!-- End notice -->
        </div>
    </div>
    <!-- End notice -->
    
    <div class="content-lg container">
            <!-- notice -->
            <h2>
                <i class="fas fa-user-tag title_subject_icon"></i>
                	내가 작성한 글
            </h2>
            <div class="table-responsive">
                <table id="foo-table" class="table table-striped" data-page-length='5' data-order='[[ 1, "desc" ]]'>
                    <thead>
                        <th>제목</th>
                        <th>추천수</th>
                        <th>작성자</th>
                        <th>작성일자</th>
			<th></th>
                    </thead>
                    <tbody>
		    	<c:choose>
                    	<c:when test="${empty bookmarkList }">
                    		<tr>
                    		<td colspan="5">등록된 내 글이 없습니다.</td>
                    		</tr>
                    	</c:when>
                    	<c:when test="${bookmarkList != null and fn:length(bookmarkList) > 0 }">
		                    <c:forEach var="bookmark" items="${bookmarkList}">
		                    	<tr>
		                    		<td><a href="${pageContext.request.contextPath }/pages/cssBoardView.do?post_id=${bookmark.post_id}">${bookmark.post_subject}</a></td>
		                    		<td>${bookmark.post_rec}</td>
		                    		<td>${bookmark.writer}</td>
		                    		<td>${bookmark.post_regdate}</td>
		                    		<td><a class="btn btn-danger" href="/pages/BookmarkDelete.us?post_id=${bookmark.post_id }">삭제</a></td>
		                    	</tr>
		                    </c:forEach>
                    	</c:when>
                    </c:choose>
                    </tbody>
                </table>
            </div>
            <!-- End notice -->
        </div>
    
    <!-- End Work -->
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
    <script src="../../resource/js/layout.js" type="text/javascript"></script>
    <script src="../../resource/js/components/wow.min.js" type="text/javascript"></script>
    <script src="../../resource/js/components/swiper.min.js" type="text/javascript"></script>
    <script src="../../resource/js/components/masonry.min.js" type="text/javascript"></script>
    <script src="../../resource/js/action.js"></script>

    <!-- Load d3.js and c3.js -->
    <script src="../../resource/vendor/c3-0.7.20/c3.js"></script>
    <script src="../../resource/vendor/c3-0.7.20/docs/js/d3-5.8.2.min.js" charset="utf-8"></script>

	
	
</body>
<!-- END BODY -->

</html>
