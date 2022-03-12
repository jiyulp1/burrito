package kr.co.bttf.service;

import java.util.HashMap;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Service;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.dao.MemberDAO;

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
	
	
	
} 
