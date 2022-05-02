package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.CssBoardDAO;
import kr.co.bttf.domain.CssBoardVO;

@Service
public class CssBoardServiceImpl implements CssBoardService {

	@Inject
	private CssBoardDAO dao;

	// 게시글 목록
	@Override
	public List<CssBoardVO> cssList() throws Exception {

		return dao.cssList();
	}

	// 게시글 작성
	@Override
	public void cssWrite(CssBoardVO vo) throws Exception {
		// insert, update인 경우니 return이 없고 redirect방식으로 통신함
		dao.cssWrite(vo);
	}

	// 게시글 상세
	@Override
	public CssBoardVO cssView(int post_id) throws Exception {

		return dao.cssView(post_id);
	}
	
	// 게시글 조회수
	@Override
	public int cssvcnt(int post_id) throws Exception {
		return dao.cssvcnt(post_id);
	}
	
	// 게시글 수정
	@Override
	public void cssModify(CssBoardVO vo) throws Exception {

		dao.cssModify(vo);
	}

	// 게시글 삭제
	public void cssDelete(int post_id) throws Exception {
		
		dao.cssDelete(post_id);
	}

	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void csscategory2(int post_id) throws Exception {
		dao.csscategory2(post_id);
		
	}
	
	// 게시글 북마크 유무 확인
	@Override
	public int cssbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {
		
		return dao.cssbookmarklist(postid_useridx);
		
	}

	// 게시글 북마크 설정
	@Override
	public void cssbookmark(HashMap<String, Integer> postid_useridx) throws Exception {

		dao.cssbookmark(postid_useridx);
	}

	// 게시글 좋아요 확인
	@Override
	public Map<String, Object> cssRecommendCheck(Map<String, Object> post_useridx) {
		
		return dao.cssRecommendCheck(post_useridx);
	}
	
	// 추천  테이블 인서트
	@Override
	public void cssInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		dao.cssInsertRecBtn(post_useridx);
	}

	// 게시글 추천수 +1 업데이트
	@Override
	public void cssUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		dao.cssUpdateRecCntPlus(post_useridx);
	}

	// 추천 테이블 recommend_check 업데이트
	@Override
	public void cssUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		dao.cssUpdateRecCheck(post_useridx);
	}

	// 게시글 추천수 -1 업데이트
	@Override
	public void cssUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		dao.cssUpdateRecCntMinus(post_useridx);
	}

	//게시글 추천 수 조회
	@Override
	public int cssGetRecCnt(Map<String, Object> post_useridx) throws Exception {
		return dao.cssGetRecCnt(post_useridx);
	}

}