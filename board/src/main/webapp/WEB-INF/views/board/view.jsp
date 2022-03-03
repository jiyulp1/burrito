<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 조회</title>
</head>
<body>
	<div id="nav">
		<%@ include file="../include/nav.jsp"%>
	</div>
	<form method="post">
		<lable>제목</lable>
		${view.title} <br />

		<lable>작성자</lable>
		${view.writer} <br />

		<lable>내용</lable>
		${view.content }<br />


		<div>
			<a href="/board/modify?bno=${view.bno}">게시물 수정</a>
		</div>
		<div>
			<a href="/board/delete?bno=${view.bno}">게시물 삭제</a>
		</div>
	</form>
</body>
</html>