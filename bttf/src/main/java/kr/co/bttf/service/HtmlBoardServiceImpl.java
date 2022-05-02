package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.HtmlBoardDAO;
import kr.co.bttf.domain.HtmlBoardVO;

@Service
public class HtmlBoardServiceImpl implements HtmlBoardService {

	@Inject
	private HtmlBoardDAO dao;

	// 게시글 목록
	@Override
	public List<HtmlBoardVO> htmlList() throws Exception {
		return dao.htmlList();
	}

	// 게시글 작성
	@Override
	public void htmlWrite(HtmlBoardVO vo) throws Exception {
		dao.htmlWrite(vo);
	}

	// 게시글 상세
	@Override
	public HtmlBoardVO htmlView(int post_id) throws Exception {

		return dao.htmlView(post_id);
	}
	
	// 게시글 조회수
	@Override
	public int htmlvcnt(int post_id) throws Exception {
		return dao.htmlvcnt(post_id);
	}
	
	// 게시물 수정
	@Override
	public void htmlModify(HtmlBoardVO vo) throws Exception {

		dao.htmlModify(vo);
	}

	// 게시물 삭제
	public void htmlDelete(int post_id) throws Exception {
		
		dao.htmlDelete(post_id);
	}

	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void htmlcategory2(int post_id) throws Exception {
		dao.htmlcategory2(post_id);
		
	}
	
	
	// 게시글 북마크 유무 확인
	@Override
	public int htmlbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {
		
		return dao.htmlbookmarklist(postid_useridx);
		
	}

	// 게시글 북마크 설정
	@Override
	public void htmlbookmark(HashMap<String, Integer> postid_useridx) throws Exception {

		dao.htmlbookmark(postid_useridx);
	}
	
	// 게시글 좋아요 확인
	@Override
	public Map<String, Object> htmlRecommendCheck(Map<String, Object> post_useridx) {
		
		return dao.htmlRecommendCheck(post_useridx);
	}
	
	// 추천  테이블 인서트
	@Override
	public void htmlInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		dao.htmlInsertRecBtn(post_useridx);
	}

	// 게시글 추천수 +1 업데이트
	@Override
	public void htmlUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		dao.htmlUpdateRecCntPlus(post_useridx);
	}

	// 추천 테이블 recommend_check 업데이트
	@Override
	public void htmlUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		dao.htmlUpdateRecCheck(post_useridx);
	}
	
	// 게시글 추천수 -1 업데이트
	@Override
	public void htmlUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		dao.htmlUpdateRecCntMinus(post_useridx);
	}

	//게시글 추천 수 조회
	@Override
	public int htmlGetRecCnt(Map<String, Object> post_useridx) throws Exception {
		return dao.htmlGetRecCnt(post_useridx);
	}
	
}