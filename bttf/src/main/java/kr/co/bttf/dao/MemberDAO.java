package kr.co.bttf.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.ReportVO;

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
	
	//비밀번호 찾기
	// 등록된 회원이면 회원 정보 가져오기
	public MemberVO readMember(String user_email) throws Exception;
	
	// 등록된 회원인지 검사하기
	public boolean idCheck(String user_email) throws Exception;
	
	// 비밀번호 갱신하기
	public void updatePw(MemberVO vo) throws Exception;

	// 신고된 유저의 report category를 2번으로 업데이트
	public void memcategory2(int user_index) throws Exception;
	
	// 최초 신고된 유저
	public void memberreport(HashMap<String, Integer> map) throws Exception;




}
