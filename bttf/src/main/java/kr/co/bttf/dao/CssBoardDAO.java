package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.co.bttf.domain.CssBoardVO;

public interface CssBoardDAO {
	
	// 게시글 목록
	public List<CssBoardVO> cssList() throws Exception;
	
	// 게시글 작성
	public void cssWrite(CssBoardVO vo) throws Exception;
	
	// 게시글 상세
	public CssBoardVO cssView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int cssvcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void cssModify(CssBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void cssDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void csscategory2(int post_id) throws Exception;

	//// 게시글 북마크 유무 확인
	public int cssbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception;

	// 게시글 북마크 설정
	public void cssbookmark(HashMap<String, Integer> postid_useridx) throws Exception;

	// 게시글 좋아요 확인
	public Map<String, Object> cssRecommendCheck(Map<String, Object> post_useridx);
	
	// 추천 테이블 인서트
	public void cssInsertRecBtn(Map<String, Object> post_useridx) throws Exception;

	// 게시글 추천수 +1 업데이트
	public void cssUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception;

	// 추천 테이블 recommend_check 업데이트
	public void cssUpdateRecCheck(Map<String, Object> post_useridx) throws Exception ;

	// 게시글 추천수 -1 업데이트
	public void cssUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception ;

	//게시글 추천수 조회
	public int cssGetRecCnt(Map<String, Object> post_useridx) throws Exception;





}
