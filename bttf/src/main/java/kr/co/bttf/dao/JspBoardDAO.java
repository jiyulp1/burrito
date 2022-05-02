package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.co.bttf.domain.JspBoardVO;

public interface JspBoardDAO {
	
	// 게시글 목록
	public List<JspBoardVO> jspList() throws Exception;
	
	// 게시글 작성
	public void jspWrite(JspBoardVO vo) throws Exception;
	
	// 게시글 상세
	public JspBoardVO jspView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int jspvcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void jspModify(JspBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void jspDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void jspcategory2(int post_id) throws Exception;

	// 게시글 북마크 유무 확인
	public int jspbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 북마크 설정
	public void jspbookmark(HashMap<String, Integer> postid_useridx) throws Exception;

	// 게시글 좋아요 확인
	public Map<String, Object> jspRecommendCheck(Map<String, Object> post_useridx);
	
	// 추천 테이블 인서트
	public void jspInsertRecBtn(Map<String, Object> post_useridx) throws Exception;

	// 게시글 추천수 +1 업데이트
	public void jspUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception;

	// 추천 테이블 recommend_check 업데이트
	public void jspUpdateRecCheck(Map<String, Object> post_useridx) throws Exception ;

	// 게시글 추천수 -1 업데이트
	public void jspUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception ;

	//게시글 추천수 조회
	public int jspGetRecCnt(Map<String, Object> post_useridx) throws Exception;
}
