package kr.co.bttf.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.ReportVO;

public interface MemberService {

	// 회원 가입
	public void signup(MemberVO vo) throws Exception;

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
	
	// 신고 건수 업데이트
	public void  memreportcnt( int user_index)  throws Exception;
	
	// 신고된 유저의 정보를 변수에 저장
	public ReportVO memcategoryselect(int user_index) throws Exception;
	
	// 신고된 유저의 report category를 2번으로 업데이트
	public void memcategory2(int user_index) throws Exception;

	// 신고된 유저의 report category를 3번으로 업데이트
	public void memcategory3(int user_index) throws Exception;
	
	// 최초 신고된 유저
	public void insert_report_user( int report_category_id, int user_index) throws Exception;

	
}