package kr.co.bttf.dao;

import java.util.HashMap;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

public interface MemberDAO {

	// 회원 가입
	public void signup(MemberVO vo) throws Exception;
	
	// 로그인
	public MemberVO signin(MemberVO vo) throws Exception;
	
		// 로그인 성공여부
	public MemberVO signin(HashMap<String, String> map) throws Exception;

	//신고접수(글)
	public void cssboardreported(CssBoardVO vo) throws Exception;

	
	//신고접수(유저)
		//신고사유
	public MemberVO memreportcard(String user_nickname) throws Exception;
	
		//신고목록등재
	public void memreportupdate(MemberVO vo) throws Exception;

	
	//비밀번호 찾기
		// 등록된 회원이면 회원 정보 가져오기
	public MemberVO readMember(String user_email) throws Exception;
		// 등록된 회원인지 검사하기
	public boolean idCheck(String user_email) throws Exception;
		// 비밀번호 갱신하기
	public void updatePw(MemberVO vo) throws Exception;
	
	
}
