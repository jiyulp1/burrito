package kr.co.bttf.service;

import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.mail.HtmlEmail;
import org.springframework.stereotype.Service;

import kr.co.bttf.controller.ScriptUtils;
import kr.co.bttf.dao.MemberDAO;
import kr.co.bttf.domain.BoardVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.ReportVO;

@Service
public class MemberServiceImpl implements MemberService {

	@Inject
	private MemberDAO dao;

	// 회원 가입
	@Override 
	public void signup(MemberVO vo) throws Exception {
		dao.signup(vo);		
	}
	// 이메일 중복확인
	@Override
	public int emailcheck(MemberVO vo) throws Exception {
		int result = dao.emailcheck(vo);
		return result;
	}
	// 닉네임 중복확인
	@Override
	public int nickcheck(MemberVO vo) throws Exception {
		int result = dao.nickcheck(vo);
		return result;
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
	
	// 아이디 찾기
		public List<MemberVO> findid(MemberVO vo) throws Exception{
			return dao.findid(vo);
		}
	
	@Override
	public boolean reportSuccess(HashMap<String, Integer> map) {
		boolean reportSuccess = false;
		
		 int Report = dao.reportSuccess(map);
		
		if(Report == 0) {
			reportSuccess = true;
		}
		return reportSuccess;
	}
	
	
	
	// 로그아웃
	@Override
	public void signout(HttpSession session) throws Exception {
		session.invalidate();  // 세션 정보를 제거
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
			msg +="<link href='../../../resources/vendor/bootstrap/css/bootstrap.css' rel='stylesheet'” type='text/css' />";
			msg +="<link rel='stylesheet' href='../../../resources/css/custom.css'>";
			msg +="</head>";
			msg +="<body>";
			msg +="<div class='container'>";
			msg +="<form action=''>";
			msg +="<div class='mail_content_center'>";
			msg +="<div class='row'>";
			msg +="<h1 class='mail_subject'> <img src='../../../resources/img/favicon/favicon-32x32.png'” style='padding: 0px 7px 7px 0px;'>Back to the Front </h1>";
			msg +="</div>";
			msg +="<div class='row'>";
			msg +="<div style='padding: 40px 0;'>";
			msg +="<p>안녕하세요. BTTF커뮤니티 관리자입니다.</p>";
			msg += vo.getUser_email() + "님의 임시 비밀번호 입니다. 비밀번호를 변경하여 사용하세요.</h3>";
			msg += "<p>임시 비밀번호 : ";
			msg += vo.getUser_pw() + "</p></div>";
			msg +="<p>하단 링크를 클릭하여 로그인 후 마이페이지에서 비밀번호 변경을 진행해주세요.</p>";
			msg +="</div>";
			msg +="<div>";
			msg +="<a class='btn btn-primary' href='http://localhost:9090/member/signin'> 로그인 페이지로 이동 </a>";
			msg +="</div>";
			msg +="</div>";
			msg +="</div>";
			msg +="</form>";
			msg +="</div>";
			msg +="<script src='../../../resources/vendor/bootstrap/js/bootstrap.min.js' type='text/javascript'></script>";
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
		HashMap<String, String>map = new HashMap<String, String>();
		map.put("user_email", vo.getUser_email());
		map.put("user_phone", vo.getUser_phone());
		
		MemberVO ck = dao.readMember(map);
		PrintWriter out = response.getWriter();
		// ck.getUser_email이 null이 찍혀서 NullPointerException이 떴다. 그래서 일단 try~catch로 임시방편으로 해결해논 상황이다.
		try {
			// 가입된 이메일이 아니면
//			if(ck.getUser_email() == null) {
//				ScriptUtils.alertAndBackPage(response, "등록되지 않은 이메일입니다");
//				
//				out.close();
			if(!vo.getUser_email().equals(ck.getUser_email())) {
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
				dao.temporaryPw(vo);
				// 비밀번호 변경 메일 발송
				sendemail(vo, "findpw");
				ScriptUtils.alertAndMovePage(response, "입력하신 이메일로 임시 비밀번호를 발송했습니다", "/");
			}
			
		} catch (NullPointerException e) {
			ScriptUtils.alertAndBackPage(response, "입력하신 회원정보로 가입된 계정이 없습니다.");
		} 
	}


	@Override
	public void memcategory2(int user_index) throws Exception {
		dao.memcategory2(user_index);
		
	}


	@Override
	public void memberreport(HashMap<String, Integer> map) throws Exception {
		
		dao.memberreport(map);
		
	}


	
	
	@Override
	public void updatePw(HttpServletResponse response, MemberVO vo) throws Exception {
		response.setContentType("text/html;charset=utf-8");
		String pw = dao.pwCheck(vo.getUser_pw());
		PrintWriter out = response.getWriter();
		System.out.println(pw);
		if(!vo.getUser_pw().equals(pw)) {
			ScriptUtils.alertAndBackPage(response, "임시비밀번호가 틀립니다.");
			out.close();
		}else {
			dao.updatePw(response, vo);
			ScriptUtils.alertAndMovePage(response, "비밀번호가 성공적으로 변경되었습니다.", "/");
		}
	} 
	
	@Override
	public int mypostcnt(int user_index) throws Exception {
		
		return dao.mypostcnt(user_index);
	}
	
	@Override
	public int myreplycnt(String user_nickname) throws Exception {
		
		return dao.myreplycnt(user_nickname);
	}
	
	@Override
	public List<BoardVO> mypostlist(int user_index) throws Exception {
		
		return dao.mypostlist(user_index) ;
	}
	
	@Override
	public MemberVO mypage_view(int user_index) {

		return dao.mypage_view(user_index);
	}
	
	public int mypage_update(MemberVO member) {

		return dao.mypage_update(member);
	}
	
	@Override
	public int joinout(int user_index) {
		
		return dao.joinout(user_index);
	}
	

	
} 
