<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>게시물 수정</title>
</head>
<body>
	<div id="nav">
		<%@ include file="../include/nav.jsp"%>
	</div>
	<form method="post">
		<lable>제목</lable>
		<input type="text" name="title" value="${view.title}"/ ><br />

		<lable>작성자</lable>
		<input type="text" name="writer" value="${view.writer}" /><br />

		<lable>내용</lable>
		<textarea cols="50" row="5" name="content">${view.content}</textarea>
		<br />


		<button type="submit">완료</button>
	</form>
</body>
</html>