package kr.co.bttf.dao;

import java.util.HashMap;

import kr.co.bttf.domain.MemberVO;

public interface MemberDAO {

	// 회원 가입
	public void signup(MemberVO vo) throws Exception;
	
	// 로그인
	public MemberVO signin(MemberVO vo) throws Exception;
	
	
	public MemberVO login(HashMap<String, String> map) throws Exception;
	
	
}
