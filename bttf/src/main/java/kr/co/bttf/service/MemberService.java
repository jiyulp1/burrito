package kr.co.bttf.service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.ReportVO;

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
	
	//비밀번호 찾기
	public void findpw(HttpServletResponse response, MemberVO member) throws Exception;
	
	//이메일발송
	public void sendemail(MemberVO vo, String div) throws Exception;
	
	//비밀번호 변경
	public void updatePw(HttpServletResponse response, MemberVO vo) throws Exception;

	// 신고된 유저의 report category를 2번으로 업데이트
	public void memcategory2(int user_index) throws Exception;

	// 최초 신고된 유저
	public void memberreport(HashMap<String, Integer> map) throws Exception;
	
	// 신고 중복확인
	public boolean reportSuccess(HashMap<String, Integer> map);
	
	// 마이페이지 작성한 글 수
	public int mypostcnt(int user_index) throws Exception;

	// 마이페이지 작성한 댓글 수
	public int myreplycnt(String user_nickname) throws Exception;
		
	// 마이페이지 작성한 글 목록 조회
	public List<BoardVO> mypostlist(int user_index) throws Exception;
	
	
	
}
