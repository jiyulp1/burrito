package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.SpringBoardDAO;
import kr.co.bttf.domain.SpringBoardVO;

@Service
public class SpringBoardServiceImpl implements SpringBoardService {

	@Inject
	private SpringBoardDAO dao;

	// 게시글 목록
	@Override
	public List<SpringBoardVO> springList() throws Exception {
		return dao.springList();
	}

	// 게시글 작성
	@Override
	public void springWrite(SpringBoardVO vo) throws Exception {
		dao.springWrite(vo);
	}

	// 게시글 상세
	@Override
	public SpringBoardVO springView(int post_id) throws Exception {
		return dao.springView(post_id);
	}

	// 게시글 조회수
	@Override
	public int springvcnt(int post_id) throws Exception {
		return dao.springvcnt(post_id);
	}

	// 게시글 수정
	@Override
	public void springModify(SpringBoardVO vo) throws Exception {
		dao.springModify(vo);
	}

	// 게시글 삭제
	@Override
	public void springDelete(int post_id) throws Exception {
		dao.springDelete(post_id);
	}
	
	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void springcategory2(int post_id) throws Exception {
		dao.springcategory2(post_id);
		
	}
	
	// 게시글 북마크 유무 확인
	@Override
	public int springbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {
		
		return dao.springbookmarklist(postid_useridx);
		
	}

	// 게시글 북마크 설정
	@Override
	public void springbookmark(HashMap<String, Integer> postid_useridx) throws Exception {

		dao.springbookmark(postid_useridx);
	}
	
	// 게시글 좋아요 확인
	@Override
	public Map<String, Object> springRecommendCheck(Map<String, Object> post_useridx) {
		
		return dao.springRecommendCheck(post_useridx);
	}
	
	// 추천  테이블 인서트
	@Override
	public void springInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		dao.springInsertRecBtn(post_useridx);
	}

	// 게시글 추천수 +1 업데이트
	@Override
	public void springUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		dao.springUpdateRecCntPlus(post_useridx);
	}

	// 추천 테이블 recommend_check 업데이트
	@Override
	public void springUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		dao.springUpdateRecCheck(post_useridx);
	}
	
	// 게시글 추천수 -1 업데이트
	@Override
	public void springUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		dao.springUpdateRecCntMinus(post_useridx);
	}

	//게시글 추천 수 조회
	@Override
	public int springGetRecCnt(Map<String, Object> post_useridx) throws Exception {
		return dao.springGetRecCnt(post_useridx);
	}

}