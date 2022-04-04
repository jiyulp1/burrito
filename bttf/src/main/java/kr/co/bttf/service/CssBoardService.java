package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;

public interface CssBoardService {
	
	// 게시물 목록 조회
	public List<CssBoardVO> cssList() throws Exception;
	
	// 게시물 작성
	public void cssWrite(CssBoardVO vo) throws Exception;
	
	// 게시물 상세
	public CssBoardVO cssView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int cssvcnt(int post_id) throws Exception;
	
	// 게시물 수정
	public void cssEdit(CssBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void cssDelete(int post_id) throws Exception;

	// 게시글 신고(가용성 카테고리 변경)
	public void csscategory2(int post_id) throws Exception;

	
}
