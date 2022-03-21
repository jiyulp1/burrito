package kr.co.bttf.service;

import java.io.PrintWriter;
import java.util.HashMap;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.mail.HtmlEmail;
import org.springframework.stereotype.Service;

import kr.co.bttf.controller.ScriptUtils;
import kr.co.bttf.dao.MemberDAO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

@Service
public class MemberServiceImpl implements MemberService {

	@Inject
	private MemberDAO dao;

	// 회원 가입
	@Override 
	public void signup(MemberVO vo) throws Exception {
		dao.signup(vo);		
	}
	
	// 로그인
	@Override
	public MemberVO signin(MemberVO vo) throws Exception {
		return dao.signin(vo);
	}
	// 로그인 성공 실패 여부
	@Override
	public boolean signin(HttpServletRequest req) throws Exception {
		HashMap<String, String> map = new HashMap<String, String>();
		boolean loginSuccess = false;
		String user_email = req.getParameter("user_email");
		String user_pw = req.getParameter("user_pw");
		map.put("user_email",user_email);
		map.put("user_pw",user_pw);
		MemberVO login = dao.signin(map);
		if(login!=null) {
			HttpSession session = req.getSession();
			session.setAttribute("login", login);
			loginSuccess = true;
		}
		return loginSuccess;
	}
	
	// 로그아웃
	@Override
	public void signout(HttpSession session) throws Exception {
		session.invalidate();  // 세션 정보를 제거
	}
	
	//신고접수(글)
	@Override
	public void cssboardreported(CssBoardVO vo) throws Exception{
		dao.cssboardreported(vo);
		
	}

	//신고접수(유저)
	@Override
	public MemberVO memreportcard(String user_nickname) throws Exception {
		return dao.memreportcard(user_nickname);
	}

	@Override
	public void memreportupdate(MemberVO vo) throws Exception {
		dao.memreportupdate(vo);
	}

	//비밀번호 찾기 이메일발송
	@Override
	public void sendemail(MemberVO vo, String div) throws Exception {
		// Mail Server 설정
		String charSet = "utf-8";
		String hostSMTP = "smtp.gmail.com";
		String hostSMTPid = "jiyulp@gmail.com";
		String hostSMTPpwd = "wxhb xwid zroi lvyk";

		// 보내는 사람 EMail, 제목, 내용
		String fromEmail = "admin@bttf.co.kr";
		String fromName = "BTTF관리자";
		String subject = "BTTF 임시비밀번호 발급 메일";
		String msg = "";

		if(div.equals("findpw")) {
			subject = "BTTF 임시 비밀번호 입니다.";
			msg += "<html>";
			msg += "<head>";
			msg +="<meta charset='UTF-8'>";
			msg +="<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
			msg +="<title>Insert title here</title>";
			msg +="<link href='../../resource/vendor/bootstrap/css/bootstrap.css' rel='stylesheet'” type='text/css' />";
			msg +="<link rel='stylesheet' href='../../resource/css/custom.css'>";
			msg +="</head>";
			msg +="<body>";
			msg +="<div class='container'>";
			msg +="<form action=''>";
			msg +="<div class='mail_content_center'>";
			msg +="<div class='row'>";
			msg +="<h1 class='mail_subject'> <img src='../../resource/img/favicon/favicon-32x32.png'” style='padding: 0px 7px 7px 0px;'>Back to the Front </h1>";
			msg +="</div>";
			msg +="<div class='row'>";
			msg +="<div style='padding: 40px 0;'>";
			msg +="<p>안녕하세요. BTTF커뮤니티 관리자입니다.</p>";
			msg += vo.getUser_email() + "님의 임시 비밀번호 입니다. 비밀번호를 변경하여 사용하세요.</h3>";
			msg += "<p>임시 비밀번호 : ";
			msg += vo.getUser_pw() + "</p></div>";
			msg +="<p>하단 비밀번호 번경 버튼을 클릭하여 비밀번호 변경을 진행해주세요.</p>";
			msg +="</div>";
			msg +="<div>";
			msg +="<a class='btn btn-primary' href='http://localhost:9091/member/updatepw'> 비밀번호 변경 </a>";
			msg +="</div>";
			msg +="</div>";
			msg +="</div>";
			msg +="</form>";
			msg +="</div>";
			msg +="<script src='../../resource/vendor/bootstrap/js/bootstrap.min.js' type='text/javascript'></script>";
			msg +="</body>";
			msg +="</html>";
		}

		// 받는 사람 E-Mail 주소
		String mail = vo.getUser_email();
		try {
			HtmlEmail email = new HtmlEmail();
			email.setDebug(true);
			email.setCharset(charSet);
			email.setSSL(true);
			email.setHostName(hostSMTP);
			email.setSmtpPort(465); //네이버 이용시 587

			email.setAuthentication(hostSMTPid, hostSMTPpwd);
			email.setTLS(true);
			email.addTo(mail, charSet);
			email.setFrom(fromEmail, fromName, charSet);
			email.setSubject(subject);
			email.setHtmlMsg(msg);
			email.send();
		} catch (Exception e) {
			System.out.println("메일발송 실패 : " + e);
		}
	}

	//비밀번호찾기
	@Override
	public void findpw(HttpServletResponse response, MemberVO vo) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		MemberVO ck = dao.readMember(vo.getUser_email());
		PrintWriter out = response.getWriter();
		// 가입된 이메일이 아니면
		if(ck.getUser_email() == null) {
			ScriptUtils.alertAndBackPage(response, "등록되지 않은 이메일입니다");
			
			out.close();
		}else if(!vo.getUser_email().equals(ck.getUser_email())) {
			ScriptUtils.alertAndBackPage(response, "등록되지 않은 이메일입니다");
			out.close();
		}else {
			// 임시 비밀번호 생성
			String pw = "";
			for (int i = 0; i < 15; i++) {
				pw += (char) ((Math.random() * 26) + 97);
			}
			vo.setUser_pw(pw);
			// 비밀번호 변경
			dao.updatePw(vo);
			// 비밀번호 변경 메일 발송
			sendemail(vo, "findpw");

			ScriptUtils.alertAndMovePage(response, "입력하신 이메일로 임시 비밀번호를 발송했습니다", "/");
		}
	}
	
} 
