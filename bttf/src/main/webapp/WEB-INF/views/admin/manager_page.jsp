<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
    <link rel="shortcut icon" href="/resource/img/favicon/favicon-32x32.png" />

    <!-- custom -->
    <link rel="stylesheet" href="../../../resources/css/custom.css">

    <!-- c3 chart -->
    <link href="../../../resources/vendor/c3-0.7.20/c3.css" rel="stylesheet">
</head>
<!-- END HEAD -->

<!-- BODY -->

<body>

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
        <div class="content-lg container">
            <h1 class="pt-4">
                <i class="fas fa-user-circle title_subject_icon"></i>
				관리자 페이지
            </h1>
            <div role="tabpanel">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs tab-text-nav" role="tablist" >
                    <li role="presentation" class="active col-md-4 tab_non"  style="padding: 0 !important;">
                        <a class="text-center" href="#management" aria-controls="management" role="tab" data-toggle="tab">
                           회원관리
                        </a>
                    </li>
                    <li role="presentation" class="col-md-4 tab_non"  style="padding: 0 !important;">
                        <a class="text-center" href="#postmanagement" aria-controls="postmanagement" role="tab" data-toggle="tab"> 
                           게시글 관리
                        </a>
                    </li>
                </ul>
                <!-- End Nav tabs -->
                <!-- tab panel -->
                <div class="tab-content">
                    <!-- member management tab-->
                    <div role="tabpanel" class="tab-pane active" id="management">
                        <div role="tabpanel " style="margin-top: 70px;">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs tab-text-nav" role="tablist" >
                                <li role="presentation" class="active col-md-4 tab_non"  style="padding: 0 !important;">
                                    <a class="text-center" href="#allmembers" aria-controls="allmembers" role="tab" data-toggle="tab">
                                        전체 회원 관리
                                    </a>
                                </li>
                                <li role="presentation" class="col-md-4 tab_non"  style="padding: 0 !important;">
                                    <a class="text-center" href="#blockedmember" aria-controls="blockedmember" role="tab" data-toggle="tab"> 
                                        신고된 회원 관리
                                    </a>
                                </li>
                            </ul>
                            <!-- End Nav tabs -->
                            <!-- tab panel -->
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
                                                    <th>회원이름</th>
                                                    <th>휴대폰번호</th>
                                                    <th>가입일자</th>
                                                    <th>계정관리</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <c:choose>
                                                    <c:when test="${memberall != null and fn:length(memberall) > 0 }">
                                                        <c:forEach var="UserAll" items="${memberall}">
                                                            <tr>
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
                                                                    <input type="button" class="btn btn-danger" value="차단하기">
                                                                </td>
                                                            </tr>
                                                        </c:forEach>
                                                    </c:when>
                                                    <c:otherwise>
                                                        <tr>
                                                            <td colspan="5" class="text-center">가입한 회원이 없습니다.</td>
                                                        </tr>
                                                    </c:otherwise>
                                                </c:choose>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- End memberlist -->
                                </div>
                            </div>
                            <!-- allmembers tab end-->

                            <!--blockedmember layout -->
			                <div class="content-lg container">
			                    <h2>
			                        <i class="fas fa-user-alt-slash title_subject_icon"></i>차단된 회원
			                    </h2>
			                    <div class="table-responsive">
			                        <table id="foo-table" class="table table-striped">
			                            <thead>
			                                <tr>
			                                    <th>회원이름</th>
			                                    <th>휴대폰번호</th>
			                                    <th>가입일자</th>
			                                    <th>계정관리</th>
			                                </tr>
			                            </thead>
			                            <tbody>
			                               <c:choose>
			                                <c:when test="${memberblock != null and fn:length(memberblock) > 0 }">
			                                    <c:forEach var="userBlockedList" items="${memberblock}">
			                                        <tr>
			                                            <td>
			                                                <p>
			                                                    ${userBlockedList.user_name }
			                                                </p>
			                                            </td>
			                                            <td>
			                                                <p>
			                                                    ${userBlockedList.user_phone }
			                                                </p>
			                                            </td>
			                                            <td>
			                                                <p>
			                                                    ${userBlockedList.user_regdate }
			                                                </p>
			                                            </td>
			                                            <td>
			                                                <input type="button" class="btn btn-info" value="신고해제">
			                                            </td>
			                                        </tr>
			                                    </c:forEach>
			                                </c:when>
			                                <c:otherwise>
			                                    <tr>
			                                        <td colspan="5" class="text-center">신고된 회원이 없습니다.</td>
			                                    </tr>
			                                </c:otherwise>
			                            </c:choose>
			                            </tbody>
			                        </table>
			                    </div>
			                </div>
			                <!--end blockedmember layout -->


                    <!--postmanagement tab -->
                    <div role="tabpanel" class="tab-pane" id="postmanagement">
                        <div role="tabpanel " style="margin-top: 70px;">
                            <!-- Nav tabs -->
                            <ul class="nav nav-tabs tab-text-nav" role="tablist" >
                                <li role="presentation" class="active col-md-4 tab_non"  style="padding: 0 !important;">
                                    <a class="text-center" href="#allboard" aria-controls="allboard" role="tab" data-toggle="tab">
                                        ì ì²´ ê²ìê¸
                                    </a>
                                </li>
                                <li role="presentation" class="col-md-4 tab_non"  style="padding: 0 !important;">
                                    <a class="text-center" href="#notice" aria-controls="notice" role="tab" data-toggle="tab"> 
                                        ê³µì§ì¬í­ ë±ë¡
                                    </a>
                                </li>
                                <li role="presentation" class="col-md-4 tab_non"  style="padding: 0 !important;">
                                    <a class="text-center" href="#blockedboard" aria-controls="blockedboard" role="tab" data-toggle="tab"> 
                                        ì ê³ ë ê²ìê¸
                                    </a>
                                </li>
                            </ul>
                            <!-- End Nav tabs -->
                            <!-- tab panel -->
                            <div class="tab-content">
                                <!-- allboard tab-->
                                <div role="tabpanel" class="tab-pane active" id="allboard">
                                    <div class="content-lg container">
                                        <!-- memberlist table -->
                                        <h2>
                                            <i class="fas fa-list title_subject_icon"></i>
                                            ì ì²´ ê²ìë¬¼
                                        </h2>
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                	<tr>
	                                                    <th>ì ëª©</th>
	                                                    <th>ì¶ì²ì</th>
	                                                    <th>ìì±ì</th>
	                                                    <th>ìì±ì¼ì</th>
                                                	</tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>asdasd</td>
                                                        <td>111</td>
                                                        <td>view1</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>asddfgdgf</td>
                                                        <td>222</td>
                                                        <td>view2</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>333</td>
                                                        <td>view3</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>444</td>
                                                        <td>view4</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>555</td>
                                                        <td>view5</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>666</td>
                                                        <td>view6</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>777</td>
                                                        <td>view7</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>888</td>
                                                        <td>view8</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>999</td>
                                                        <td>view9</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>101010</td>
                                                        <td>view10</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- End notice -->
                                    </div>
                                </div>
                                <!-- allboard tab end-->

							    <!-- notice -->
							    <div class="bg-color-sky-light fixed_container">
							        <div class="content-lg container" style="margin-top : 50px;">
							            <!-- notice -->
							            <h2>공지사항</h2>
							            <form>
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
									                    	<c:when test = "${announcements != null and fn:length(announcements) > 0 }">
									                    		<c:forEach var="announcmentList" items="${announcements}">
											                        <tr>
											                            <td>${announcmentList.post_id }</td>
											                            <td>
											                            <a href="/admin/ann_view.mg?post_id=${announcmentList.post_id }">${announcmentList.post_subject }</a>
											                            </td>
											                            <td>${announcmentList.writer }</td>
											                            <td>${announcmentList.post_vcount }</td>
											                            <td>${announcmentList.post_regdate }</td>
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
								           	 <a href="/admin/annwrite" class="btn btn-primary" type="submit">공지사항 작성</a>
								            </c:if>
							            </form>
							            
							        </div>
							    </div>
							    <!-- End notice -->

                                <!-- blockedboard tab-->
                                <div role="tabpanel" class="tab-pane active" id="blockedboard">
                                    <div class="content-lg container">
                                        <!-- memberlist table -->
                                        <h2>
                                            <i class="fas fa-window-close title_subject_icon"></i>
                                            ì ê³ ë ê²ìê¸
                                        </h2>
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                	<tr>
	                                                    <th>ì ëª©</th>
	                                                    <th>ì¶ì²ì</th>
	                                                    <th>ìì±ì</th>
	                                                    <th>ìì±ì¼ì</th>
	                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>asdasd</td>
                                                        <td>111</td>
                                                        <td>view1</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>asddfgdgf</td>
                                                        <td>222</td>
                                                        <td>view2</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>333</td>
                                                        <td>view3</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>444</td>
                                                        <td>view4</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                    <tr>
                                                        <td>xcvccxvxcv</td>
                                                        <td>555</td>
                                                        <td>view5</td>
                                                        <td>2021-12-08</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <!-- End notice -->
                                    </div>
                                </div>
                                <!-- blockedboard tab end-->

                            </div>
                            <!-- End tab panel -->
                        </div>
                    </div>
                    <!--postmanagement tab end -->
                </div>
                <!-- End tab panel -->
            </div>
            <!--// end row -->
        </div>
    </div>
    
    <!-- End Service -->

    <!--========== FOOTER ==========-->
    <footer class="footer">

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