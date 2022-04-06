package kr.co.bttf.dao;

import java.util.List;

import kr.co.bttf.domain.JsBoardVO;

public interface JsBoardDAO {
	
	// 게시글 목록
	public List<JsBoardVO> jsList() throws Exception;
	
	// 게시글 작성
	public void jsWrite(JsBoardVO vo) throws Exception;
	
	// 게시글 상세
	public JsBoardVO jsView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int jsvcnt(int post_id) throws Exception;
		
	// 게시글 수정
	public void jsModify(JsBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void jsDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void jscategory2(int post_id) throws Exception;

}
