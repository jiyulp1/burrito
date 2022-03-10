package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.MemberVO;

public interface AdminDAO {
	
	// 전체 회원 목록
	public List<MemberVO> memberall() throws Exception;

	// 신고된 회원 목록
	public List<MemberVO> memberblock() throws Exception;

	// 공지사항 목록
	public List<AnnVO> announcements() throws Exception;

	// 공지사항 작성
	public void annwrite(AnnVO vo, String writer) throws Exception;
}
