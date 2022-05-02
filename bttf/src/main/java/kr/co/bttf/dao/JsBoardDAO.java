package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.co.bttf.domain.JsBoardVO;

public interface JsBoardDAO {
	
	// 게시글 목록
	public List<JsBoardVO> jsList() throws Exception;
	
	// 게시글 작성
	public void jsWrite(JsBoardVO vo) throws Exception;
	
	// 게시글 상세
	public JsBoardVO javascriptView (int post_id) throws Exception;
	
	// 게시글 조회수
	public int jsvcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void jsModify(JsBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void jsDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void jscategory2(int post_id) throws Exception;

	// 게시글 북마크 유무 확인
	public int jsbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 북마크 설정
	public void jsbookmark(HashMap<String, Integer> postid_useridx) throws Exception;

	// 게시글 좋아요 확인
	public Map<String, Object> jsRecommendCheck(Map<String, Object> post_useridx);
	
	// 추천 테이블 인서트
	public void jsInsertRecBtn(Map<String, Object> post_useridx) throws Exception;

	// 게시글 추천수 +1 업데이트
	public void jsUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception;

	// 추천 테이블 recommend_check 업데이트
	public void jsUpdateRecCheck(Map<String, Object> post_useridx) throws Exception ;

	// 게시글 추천수 -1 업데이트
	public void jsUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception ;

	//게시글 추천수 조회
	public int jsGetRecCnt(Map<String, Object> post_useridx) throws Exception;
}
