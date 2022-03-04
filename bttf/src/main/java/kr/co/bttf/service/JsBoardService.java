package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;

public interface JsBoardService {
	public List<JsBoardVO> jsList() throws Exception;
	
	public void jsWrite(JsBoardVO vo) throws Exception;
	
	// 게시물 조회
	public JsBoardVO jsView(int post_id) throws Exception;
	
	// 게시물 수정
	public void jsModify(JsBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void jsDelete(int post_id) throws Exception;

	
}
