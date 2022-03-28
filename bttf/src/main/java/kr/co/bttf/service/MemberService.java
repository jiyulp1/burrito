package kr.co.bttf.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

public interface MemberService {

	// 회원 가입
	public void signup(MemberVO vo) throws Exception;
		// 이메일 중복확인
	public int emailcheck(MemberVO vo) throws Exception;
		// 닉네임 중복확인
	public int nickcheck(MemberVO vo) throws Exception;
	
	// 로그인
	public MemberVO signin(MemberVO vo) throws Exception;
	
	// 로그아웃
	public void signout(HttpSession session) throws Exception;

	// 성공여부
	public boolean signin(HttpServletRequest req) throws Exception;
	
	//신고접수(글)
	public void cssboardreported(CssBoardVO vo) throws Exception;
	
	//신고접수(유저)
		//신고사유
	public MemberVO memreportcard(String user_nickname) throws Exception;
		//신고목록등재
	public void memreportupdate(MemberVO vo) throws Exception;

	//비밀번호 찾기
	public void findpw(HttpServletResponse response, MemberVO member) throws Exception;
	
	//이메일발송
	public void sendemail(MemberVO vo, String div) throws Exception;
	
	//비밀번호 변경
	public void updatePw(HttpServletResponse response, MemberVO vo) throws Exception;
	
}