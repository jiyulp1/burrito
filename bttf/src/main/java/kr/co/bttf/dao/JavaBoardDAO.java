package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.co.bttf.domain.JavaBoardVO;

public interface JavaBoardDAO {
	
	// 게시글 목록
	public List<JavaBoardVO> javaList() throws Exception;
	
	// 게시글 작성
	public void javaWrite(JavaBoardVO vo) throws Exception;
	
	// 게시글 상세
	public JavaBoardVO javaView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int javavcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void javaModify(JavaBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void javaDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void javacategory2(int post_id) throws Exception;

	// 게시글 북마크 유무 확인
	public int javabookmarklist(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 북마크 설정
	public void javabookmark(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 좋아요 확인
	public Map<String, Object> javaRecommendCheck(Map<String, Object> post_useridx);
	
	// 추천 테이블 인서트
	public void javaInsertRecBtn(Map<String, Object> post_useridx) throws Exception;

	// 게시글 추천수 +1 업데이트
	public void javaUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception;

	// 추천 테이블 recommend_check 업데이트
	public void javaUpdateRecCheck(Map<String, Object> post_useridx) throws Exception ;

	// 게시글 추천수 -1 업데이트
	public void javaUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception ;

	//게시글 추천수 조회
	public int javaGetRecCnt(Map<String, Object> post_useridx) throws Exception;
	
}
