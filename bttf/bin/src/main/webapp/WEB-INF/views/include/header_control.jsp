<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import ="kr.co.bttf.domain.MemberVO" %>
<% MemberVO member = (MemberVO)session.getAttribute("member"); %>
<nav class="navbar" id="nav-menu-container" role="navigation" >
    <div class="container header_container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="menu-container">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="toggle-icon"></span>
            </button>

            <!-- Logo -->
            <div class="logo">
                <a class="logo-wrap" href="/">
                    <img class="logo-img logo-img-main" src="../../../resources/img/home_logo.png" alt="Homebrew">
                    <img class="logo-img logo-img-active" src="../../../resources/img/home_logo.png" alt="Homebrew">
                </a>
            </div>
            <!-- End Logo -->
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse nav-collapse">
            <div class="menu-container">
                <ul class="navbar-nav navbar-nav-right nav">
                    <li class="nav-item">
                    	<a class="nav-item-child nav-item-hover active" href="/">
                    		Home
                    	</a>
                    </li>
                    <li class="nav-item dropdown">
                        <!-- <a class="nav-item-child nav-item-hover dropdown-toggle menu-has-children" data-toggle="dropdown" href="#">Dev Community</a> -->
                        <a class="nav-item-child nav-item-hover dropdown-toggle drop1 " data-toggle="dropdown" href="#">Languages</a>
                        <ul class="dropdown-menu">
                            <li>
                                <!-- <a class="nav-item-child-sub" href=""></a> -->
                                <a class="nav-item-child-sub" href="/board/htmllist">
                                    HTML5
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="/board/csslist">
                                    CSS3
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="/board/jslist">
                                    JavaScript
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="/board/jsplist">
                                    JSP
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="/board/javalist">
                                    JAVA
                                </a>
                                
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="/board/oraclelist">
                                    ORACLE
                                </a>
                            </li>
                            <li>
                                <a class="nav-item-child-sub" href="/board/springlist">
                                    SPRING
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-item-child nav-item-hover"  href="/member/termsOfUse">Rules</a></li>
                    <li class="nav-item"><a class="nav-item-child nav-item-hover" href="/admin/announcements">Notice</a></li>
					<li class="nav-item">
						<c:if test="${member != null && member.authority_name != 'admin' }" >
							<a class="nav-item-child nav-item-hover" href="/member/mypage?user_index=${member.user_index }&user_nickname=${member.user_nickname }">MyPage</a>
						</c:if>
					</li>
					<li class="nav-item ">
						<c:if test="${member == null }" >
							<li class="nav-item ">
								<a class="nav-item-child nav-item-hover" href="/member/signin">
									<i class="service-icon fas fa-sign-in-alt"></i> Login
								</a>
							</li>
						</c:if>
					</li> 
					<c:if test="${member != null }" >
						<p class="nav-item-child nav-item-hover" style="display:flex; float : left;">${member.user_name}님 반갑습니다!
							<a class="nav-item-child" style="padding-top:0 !important; padding-left:10px !important; " href="/member/signout"> Logout </a>
						</p>
					</c:if>
					<li class="nav-item dropdown_man2">
						<c:if test="${member !=null && member.authority_name == 'admin'  }" >
							<a class="nav-item-child nav-item-hover dropdown-toggle drop2 " data-toggle="dropdown" href="#">Admin</a>
	                        <ul class="manager_dropdown">
	                            <li>
	                                <!-- <a class="nav-item-child-sub" href=""></a> -->
	                                <a class="nav-item-child-sub_man" href="/admin/memberall">
	                                    	회원관리 - 전체회원
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="/admin/memberblock">
	                                   		 회원관리 - 신고된 회원
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="/admin/boardallhtml">
											게시글관리 - 전체게시글
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="/admin/boardblockhtml">
	                                    	게시글관리 - 신고된 게시글
	                                </a>
	                            </li>
	                            <li>
	                                <a class="nav-item-child-sub_man" href="/admin/announcements">
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
