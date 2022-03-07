package kr.co.bttf.service;

import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.MemberVO;

public interface MemberService {

	public void join(MemberVO vo) throws Exception;
	
	public MemberVO login(MemberVO vo) throws Exception;
	
	public void logout(HttpSession session) throws Exception;

}
