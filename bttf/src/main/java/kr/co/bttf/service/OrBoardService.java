package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.OracleBoardVO;

public interface OrBoardService {
	public List<OracleBoardVO> orList() throws Exception;
	
	public void orWrite(OracleBoardVO vo) throws Exception;
	
	// 게시물 조회
	public OracleBoardVO orView(int post_id) throws Exception;
	
	// 게시물 수정
	public void orModify(OracleBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void orDelete(int post_id) throws Exception;

	
}
