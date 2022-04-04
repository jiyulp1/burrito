package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.JspBoardVO;

public interface JspBoardService {
	
	// 게시글 목록
	public List<JspBoardVO> jspList() throws Exception;
	
	// 게시글 작성
	public void jspWrite(JspBoardVO vo) throws Exception;
	
	// 게시글 상세
	public JspBoardVO jspView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int jspvcnt(int post_id) throws Exception;
		
	// 게시글 수정
	public void jspModify(JspBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void jspDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void jspcategory2(int post_id) throws Exception;
	
}
