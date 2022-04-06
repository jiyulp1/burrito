package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import kr.co.bttf.domain.BoardVO;
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
	
	// 아이디 찾기
	public List<MemberVO> findid(MemberVO vo) throws Exception;
	
	//비밀번호 찾기
	// 등록된 회원이면 회원 정보 가져오기
	public MemberVO readMember(HashMap<String, String> map) throws Exception;
	
	// 등록된 회원인지 검사하기
	public boolean idCheck(String user_email) throws Exception;

		// 임시비밀번호로 변경
	public void temporaryPw(MemberVO vo) throws Exception;
		// 임시비밀번호 체크
	public String pwCheck(String user_pw) throws Exception;
		// 비밀번호 변경하기
	public void updatePw(HttpServletResponse response, MemberVO vo) throws Exception;
	
	// 신고된 유저의 report category를 2번으로 업데이트
	public void memcategory2(int user_index) throws Exception;
	
	// 최초 신고된 유저
	public void memberreport(HashMap<String, Integer> map) throws Exception;
	
	//중복신고
	public int reportSuccess(HashMap<String, Integer> map);

	// 마이페이지 작성한 글 수
	public int mypostcnt(int user_index) throws Exception;
	
	// 마이페이지 작성한 댓글 수
	public int myreplycnt(String user_nickname) throws Exception;
	
	// 마이페이지 작성한 글 목록 조회
	public List<BoardVO> mypostlist(int user_index) throws Exception;
	
	// 마이페이지 - 수정하기 화면
	public MemberVO mypage_view(int user_index);
	
	// 마이페이지 - 수정하기 (DB) 
	public int mypage_update(MemberVO member);
	
	// 마이페이지 - 회원탈퇴
	public int joinout(int user_index);

	
}
