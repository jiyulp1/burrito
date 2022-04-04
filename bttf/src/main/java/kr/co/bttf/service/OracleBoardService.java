package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.OracleBoardVO;

public interface OracleBoardService {
	
	// 게시글 목록
	public List<OracleBoardVO> oracleList() throws Exception;
	
	// 게시글 작성
	public void oracleWrite(OracleBoardVO vo) throws Exception;
	
	// 게시글 상세
	public OracleBoardVO oracleView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int oraclevcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void oracleModify(OracleBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void oracleDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void oraclecategory2(int post_id) throws Exception;


}
