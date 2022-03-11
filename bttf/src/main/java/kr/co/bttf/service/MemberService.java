package kr.co.bttf.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

public interface MemberService {

	// 회원 가입
	public void signup(MemberVO vo) throws Exception;

	// 로그인
	public MemberVO signin(MemberVO vo) throws Exception;
	
	// 로그아웃
	public void signout(HttpSession session) throws Exception;

	// 성공여부
	public boolean signin(HttpServletRequest req) throws Exception;
	
	//신고접수(글)
	public void cssboardreported(CssBoardVO vo) throws Exception;

	//신고접수(유저)
	public void memberreported(MemberVO vo) throws Exception;
}