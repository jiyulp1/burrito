package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.co.bttf.domain.OracleBoardVO;

public interface OracleBoardDAO {
	
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
	
	// 게시글 북마크 유무 확인
	public int oraclebookmarklist(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 북마크 설정
	public void oraclebookmark(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 좋아요 확인
	public Map<String, Object> oracleRecommendCheck(Map<String, Object> post_useridx);

	// 추천 테이블 인서트
	public void oracleInsertRecBtn(Map<String, Object> post_useridx) throws Exception;

	// 게시글 추천수 +1 업데이트
	public void oracleUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception;

	// 추천 테이블 recommend_check 업데이트
	public void oracleUpdateRecCheck(Map<String, Object> post_useridx) throws Exception ;

	// 게시글 추천수 -1 업데이트
	public void oracleUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception ;

	//게시글 추천수 조회
	public int oracleGetRecCnt(Map<String, Object> post_useridx) throws Exception;
	
}
