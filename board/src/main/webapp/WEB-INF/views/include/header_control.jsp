<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<nav class="navbar" id="nav-menu-container" role="navigation" style="background : ">
    <div class="container header_container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="menu-container">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="toggle-icon"></span>
            </button>

            <!-- Logo -->
            <div class="logo">
                <a class="logo-wrap" href="${pageContext.request.contextPath }/index.jsp">
                    <img class="logo-img logo-img-main" src="../../resource/img/home_logo.png" alt="Homebrew">
                    <img class="logo-img logo-img-active" src="../../resource/img/home_logo.png" alt="Homebrew">
                </a>
            </div>
            <!-- End Logo -->
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse nav-collapse">
            <div class="menu-container">
                <ul class="navbar-nav navbar-nav-right nav">
                    <li class="nav-item">
                    	<a class="nav-item-child nav-item-hover active" href="${pageContext.request.contextPath }/index.jsp">
                    		Home
                    	</a>
                    </li>
                    <li class="nav-item dropdown">
                        <!-- <a class="nav-item-child nav-item-hover dropdown-toggle menu-has-children" data-toggle="dropdown" href="#">Dev Community</a> -->
                        <a class="nav-item-child nav-item-hover dropdown-toggle drop1 " data-toggle="dropdown" href="#">Languages</a>
                        <ul class="dropdown-menu">
                            <li>
                                <!-- <a class="nav-item-child-sub" href=""></a> -->
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/app/pages/html.jsp">
                                    HTML5
                                </a>

                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/pages/csslist.do?page=1">
                                    CSS3
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/app/pages/javascript.jsp">
                                    JavaScript
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/app/pages/jsp.jsp">
                                    JSP
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/app/pages/java.jsp">
                                    JAVA
                                </a>
                                
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/app/pages/oracle.jsp">
                                    ORACLE
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="${pageContext.request.contextPath }/app/pages/spring.jsp">
                                    SPRING
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-item-child nav-item-hover" href="${pageContext.request.contextPath }/app/pages/termsOfUse.jsp">Rules</a></li>
                    <li class="nav-item"><a class="nav-item-child nav-item-hover" href="${pageContext.request.contextPath }/app/pages/announcements.jsp">Notice</a></li>
					<li class="nav-item">
						<c:if test="${sessionScope.session_id == null }" >
							<li class="nav-item ">
								<a class="nav-item-child nav-item-hover" href="${pageContext.request.contextPath }/app/pages/login.jsp">MyPage</a></li>
						</c:if>
						<c:if test="${sessionScope.session_id != null }" >
							<a class="nav-item-child nav-item-hover" href="${pageContext.request.contextPath }/pages/MypageList.us">MyPage</a>
						</c:if>
					</li>
					<li class="nav-item ">
						<c:if test="${sessionScope.session_id == null }" >
							<li class="nav-item ">
								<a class="nav-item-child nav-item-hover" href="${pageContext.request.contextPath }/app/pages/login.jsp">
									<i class="service-icon fas fa-sign-in-alt"></i> Login
								</a>
							</li>
						</c:if>
					</li> 
					<c:if test="${sessionScope.session_id != null }" >
						<p class="nav-item-child nav-item-hover" style="display:flex; float : left;">${user_id}님 반갑습니다!
							<a class="nav-item-child" style="padding-top:0 !important; padding-left:10px !important; " href="/app/pages/logout.jsp"> Logout </a>
						</p>
					</c:if>
					<li class="nav-item dropdown_man">
						<c:if test="${sessionScope.session_id !=null && sessionScope.session_id.user_id == 'admin'  }" >
							<a class="nav-item-child nav-item-hover dropdown-toggle drop1 " data-toggle="dropdown" href="#">Admin</a>
	                        <ul class="manager_dropdown">
	                            <li>
	                                <!-- <a class="nav-item-child-sub" href=""></a> -->
	                                <a class="nav-item-child-sub_man" href="${pageContext.request.contextPath }/pages/MemberAll.mg?page=1">
	                                    	회원관리 - 전체회원
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="${pageContext.request.contextPath }/pages/MemberReported.mg?page=1">
	                                   		 회원관리 - 신고된 회원
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="${pageContext.request.contextPath }/pages/AllBoard.mg?page=1">
											게시글관리 - 전체게시글
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="${pageContext.request.contextPath }/pages/BoardReported.mg?page=1">
	                                    	게시글관리 - 신고된 게시글
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="${pageContext.request.contextPath }/pages/Announcements.mg?page=1">
	                                    	게시글관리 - 공지사항
	                                </a>
	                            </li>
	                		</ul>
						</c:if>                        
                    </li>
                </ul>
            </div>
        </div>
        <!-- End Navbar Collapse -->
    </div>
</nav>
