package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.HtmlBoardVO;

public interface HtmlBoardService {
	
	// 게시글 목록
	public List<HtmlBoardVO> htmlList() throws Exception;
	
	// 게시글 작성
	public void htmlWrite(HtmlBoardVO vo) throws Exception;
	
	// 게시글 상세
	public HtmlBoardVO htmlView(int post_id) throws Exception;

	// 게시글 조회수
	public int htmlvcnt(int post_id) throws Exception;
			
	// 게시글 수정
	public void htmlModify(HtmlBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void htmlDelete(int post_id) throws Exception;

	// 게시글 신고(가용성 카테고리 변경)
	public void htmlcategory2(int post_id) throws Exception;

}
