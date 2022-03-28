package kr.co.bttf.dao;

import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

public interface MemberDAO {

	// 회원 가입
	public void signup(MemberVO vo) throws Exception;
		// 이메일 중복확인
	public int emailcheck(MemberVO vo) throws Exception;
		// 닉네임 중복확인
	public int nickcheck(MemberVO vo) throws Exception;
	
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
		// 임시비밀번호로 변경
	public void temporaryPw(MemberVO vo) throws Exception;
		// 임시비밀번호 체크
	public String pwCheck(String user_pw) throws Exception;
		// 비밀번호 변경하기
	public void updatePw(HttpServletResponse response, MemberVO vo) throws Exception;
	
	
}
