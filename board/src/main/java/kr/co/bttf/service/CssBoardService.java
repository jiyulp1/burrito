package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.CssBoardVO;

public interface CssBoardService {
	public List<CssBoardVO> csslist() throws Exception;
	
	public void csswrite(CssBoardVO vo) throws Exception;
	
	// 게시물 조회
	public CssBoardVO cssview(int post_id) throws Exception;
	
	// 게시물 수정
	public void cssmodify(CssBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void cssdelete(int post_id) throws Exception;

	
}
