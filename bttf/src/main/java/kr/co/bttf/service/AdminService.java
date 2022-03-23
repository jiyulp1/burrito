package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

public interface AdminService {

	// 전체 회원 목록
	public List<MemberVO> memberall() throws Exception;

	// 신고된 회원 목록
	public List<MemberVO> memberblock() throws Exception;

	// 공지사항 목록
	public List<AnnVO> announcements() throws Exception;

	// 공지사항 작성
	public void annwrite(AnnVO vo) throws Exception;

	// 공지사항 상세보기
	public AnnVO annview(int post_id) throws Exception;

	// 공지사항 수정
	public void annedit(AnnVO vo) throws Exception;
	
	// 공지사항 삭제
	public void anndelete(int post_id) throws Exception;
	
	// CSS 신고 게시글 해제
	public void cssundo(CssBoardVO vo) throws Exception;
	
	// 신고 회원 해제
	public void memberundo(MemberVO vo) throws Exception;
	
	// CSS 신고 들어온 게시글 안보이게 퇴출
	public void cssexpell(CssBoardVO vo) throws Exception;
	
	// 신고가 들어온 회원 퇴출
	public void memberexpell(MemberVO vo) throws Exception;

	



}
