package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.JsBoardVO;

public interface JsBoardService {
	
	// 게시글 목록
	public List<JsBoardVO> jsList() throws Exception;
	
	// 게시글 작성
	public void jsWrite(JsBoardVO vo) throws Exception;
	
	// 게시글 조회
	public JsBoardVO jsView(int post_id) throws Exception;
	
	// 게시글 수정
	public void jsModify(JsBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void jsDelete(int post_id) throws Exception;

	
}
