package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import kr.co.bttf.domain.SpringBoardVO;

public interface SpringBoardService {
	
	// 게시글 목록
	public List<SpringBoardVO> springList() throws Exception;
	
	// 게시글 작성
	public void springWrite(SpringBoardVO vo) throws Exception;
	
	// 게시글 상세
	public SpringBoardVO springView(int post_id) throws Exception;
	
	// 게시글 조회수
	public int springvcnt(int post_id) throws Exception;
	
	// 게시글 수정
	public void springModify(SpringBoardVO vo) throws Exception;
	
	// 게시글 삭제
	public void springDelete(int post_id) throws Exception;
	
	// 게시글 신고(가용성 카테고리 변경)
	public void springcategory2(int post_id) throws Exception;
	
	// 게시글 북마크 유무 확인
	public int springbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 북마크 설정
	public void springbookmark(HashMap<String, Integer> postid_useridx) throws Exception;
	
	// 게시글 추천확인
	public Map<String, Object> springRecommendCheck(Map<String, Object> post_useridx);
	
	// 추천 테이블 인서트
	public void springInsertRecBtn(Map<String, Object> post_useridx) throws Exception;

	// 게시글 추천수 +1 업데이트
	public void springUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception;

	// 추천 테이블의 recommend_check 업데이트
	public void springUpdateRecCheck(Map<String, Object> post_useridx) throws Exception;
	
	// 게시글 추천수 -1 업데이트
	public void springUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception ;

	// 게시글 추천수 조회
	public int springGetRecCnt(Map<String, Object> post_useridx) throws Exception;
	
}
