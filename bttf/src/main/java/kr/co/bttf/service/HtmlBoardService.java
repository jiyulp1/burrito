package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;

public interface HtmlBoardService {
	public List<HtmlBoardVO> htmlList() throws Exception;
	
	public void htmlWrite(HtmlBoardVO vo) throws Exception;
	
	// 게시물 조회
	public HtmlBoardVO htmlView(int post_id) throws Exception;
	
	// 게시물 수정
	public void htmlModify(HtmlBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void htmlDelete(int post_id) throws Exception;

	
}
