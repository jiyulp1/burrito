<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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

    <!--========== SLIDER ==========-->
    
    <!--========== SLIDER ==========-->

    <!--========== PAGE LAYOUT ==========-->
    <!-- Service -->
    <div class="bg-color-sky-light" data-auto-height="true">
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
                                <a class="link" href="/member/mypage_edit?user_index=${member.user_index }">수정하기</a>
                            </div>
                            <a href="/member/mypage_edit?user_index=${member.user_index }" class="content-wrapper-link" ></a>
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
                                <p class="margin-b-5">${mypostcnt} 개</p>
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
                                <p class="margin-b-5">${myreplycnt} 개</p>
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
                <table id="foo-table" class="table table-striped" data-order='[[ 1, "desc" ]]'>
                    <thead>
	                    <tr>
							<th>게시판</th>
	                        <th>제목</th>
	                        <th>추천수</th>
	                        <th>작성자</th>
	                        <th>작성일자</th>
							<th>내 게시물관리</th>
	                    </tr>
                    </thead>
                    <tbody>
		    			<c:choose>
	                    	<c:when test="${empty bookmark }">
	                    		<tr>
	                    		<td colspan="6" class="text-center">등록된 북마크가 없습니다.</td>
	                    		</tr>
	                    	</c:when>
	                    	<c:when test="${bookmark != null and fn:length(bookmark) > 0 }">
			                    <c:forEach var="bookmark" items="${bookmark}">
			                    	<tr>
										<td>css 테스트</td>
			                    		<td><a href="/board/cssview?post_id=${bookmark.post_id}">${bookmark.post_subject}</a></td>
			                    		<td>${bookmark.post_rec}</td>
			                    		<td>${bookmark.user_nickname}</td>
			                    		<td><fmt:formatDate value="${bookmark.post_regdate}" pattern="yyyy-MM-dd" /></td>
			                    		<td><a class="btn btn-danger" href="#">삭제</a></td>
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
                <table id="foo-table1" class="table table-striped" >
                    <thead>
	                    <tr>
							<th>게시판</th>
	                        <th>제목</th>
	                        <th>추천수</th>
	                        <th>작성자</th>
	                        <th>작성일자</th>
							<th>내 게시물관리</th>
	                    </tr>
                    </thead>
                    <tbody>
		    			<c:choose>
	                    	<c:when test="${empty mypostlist }">
	                    		<tr>
	                    			<td colspan="6" class="text-center">작성한 글이 없습니다.</td>
	                    		</tr>
	                    	</c:when>
	                    	<c:when test="${mypostlist != null and fn:length(mypostlist) > 0 }">
			                    <c:forEach var="mypostlist" items="${mypostlist}">
			                    	<tr>
			                    		<td>${mypostlist.board_category_name }</td>
			                    		<td><a href="/board/${mypostlist.board_category_name }view?post_id=${mypostlist.post_id}">${mypostlist.post_subject}</a></td>
			                    		<td>${mypostlist.post_rec}</td>
			                    		<td>${mypostlist.user_nickname}</td>
			                    		<td><fmt:formatDate value="${mypostlist.post_regdate}" pattern="yyyy-MM-dd" /></td>
			                    		<td><a href="/board/${mypostlist.board_category_name }delete?post_id=${mypostlist.post_id }&mypage=right" class="btn btn-danger" type="submit">삭제</a></td>
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
	<script src="../../../resources/js/foo1.js"></script>
	<script src="../../../resources/js/foo.js"></script>
	<!-- F12 ,right click block-->
	<!-- <script src="js/Prevention.js"></script> -->
     <!-- datatables -->
    <script type="text/javascript" src="../../../resources/vendor/DataTables/datatables.js"></script>
	<script type="text/javascript" src="../../../resources/vendor/DataTables/DataTables-1.11.5/js/dataTables.bootstrap.js"></script>
</body>
<!-- END BODY -->

</html>
