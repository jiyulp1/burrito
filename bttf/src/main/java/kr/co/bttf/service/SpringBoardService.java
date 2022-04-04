package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.SpringBoardVO;

public interface SpringBoardService {
	
	// 게시글 목록
	public List<SpringBoardVO> springList() throws Exception;
	
	// 게시글 작성
	public void springWrite(SpringBoardVO vo) throws Exception;
	
	// 게시글 상세
	public SpringBoardVO springView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int springvcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void springModify(SpringBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void springDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void springcategory2(int post_id) throws Exception;

}
