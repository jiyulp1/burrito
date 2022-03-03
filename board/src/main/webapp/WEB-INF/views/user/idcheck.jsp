<%@page import="kr.co.bttf.DAO.MemberDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String user_id = request.getParameter("user_id");
	MemberDAO mdao = new MemberDAO();
	if( mdao.checkid(user_id) ){
		// id 중복 아님
		out.print("ok");
	} else {
		// id 중복 일때
		out.print("not-ok");
	}
%>
