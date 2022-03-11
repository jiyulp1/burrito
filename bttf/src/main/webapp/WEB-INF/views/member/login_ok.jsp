<%@page import="kr.co.bttf.domain.MemberVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> 
 <%@ page trimDirectiveWhitespaces="true"%> 
<% 
 	// 사용자 입력값
 	String user_email = request.getParameter("user_email");
 	String user_pw = request.getParameter("user_pw");
	
 	MemberVO member = new MemberVO();
 	// 7. userId를 set 해준다.
 	member.setUser_email(user_email);
 	// 8. userPw를 set 해준다.
 	member.setUser_pw(user_pw);
	
	/** 로그인 처리 -> 세션 생성 */
 	// 9. member 객체를 세션명이 login_info인 세션을 생성해준다.
 	session.setAttribute("session_id", member);

%>
	<!-- login.jsp로 돌아가기 --> 
 	<script type="text/javascript"> location.href="login.jsp"; </script>

