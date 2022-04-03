package kr.co.bttf.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletResponse;

public class ScriptUtils {

	public static void init(HttpServletResponse response) {
		response.setContentType("text/html; charset=euc-kr");
		response.setCharacterEncoding("euc-kr");
	}

	public static void alert(HttpServletResponse response, String alertText) throws IOException {
		init(response);
		PrintWriter out = response.getWriter();
		out.println("<script>alert('" + alertText + "');</script> ");
		out.flush();
	}

	public static void alertAndMovePage(HttpServletResponse response, String alertText, String nextPage)
			throws IOException {
		init(response);
		PrintWriter out = response.getWriter();
		out.println("<script>alert('" + alertText + "'); location.href='" + nextPage + "';</script> ");
		out.flush();
	}

	public static void alertAndBackPage(HttpServletResponse response, String alertText) throws IOException {
		init(response);
		PrintWriter out = response.getWriter();
		out.println("<script>alert('" + alertText + "'); history.go(-1);</script>");
		out.flush();
	}
	
	public static void justMovePage(HttpServletResponse response, String nextPage)
			throws IOException {
		init(response);
		PrintWriter out = response.getWriter();
		out.println("<script>location.href='" + nextPage + "';</script> ");
		out.flush();
	}
}
