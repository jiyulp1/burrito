package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;

public interface CssBoardDAO {
	
	// 게시글 목록
	public List<CssBoardVO> cssList() throws Exception;
	
	// 게시글 작성
	public void cssWrite(CssBoardVO vo) throws Exception;
	
	// 게시글 상세
	public CssBoardVO cssView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int cssvcnt(int post_id) throws Exception;
		
	// 게시글 수정
	public void cssEdit(CssBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void cssDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void csscategory2(int post_id) throws Exception;


}
