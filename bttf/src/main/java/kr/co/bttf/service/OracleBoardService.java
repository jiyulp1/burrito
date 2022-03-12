package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.OracleBoardVO;

public interface OracleBoardService {
	public List<OracleBoardVO> oracleList() throws Exception;
	
	public void oracleWrite(OracleBoardVO vo) throws Exception;
	
	// 게시물 조회
	public OracleBoardVO oracleView(int post_id) throws Exception;
	
	// 게시물 수정
	public void oracleModify(OracleBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void oracleDelete(int post_id) throws Exception;

	
}
