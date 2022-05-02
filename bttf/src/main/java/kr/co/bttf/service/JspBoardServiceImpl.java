package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.JspBoardDAO;
import kr.co.bttf.domain.JspBoardVO;

@Service
public class JspBoardServiceImpl implements JspBoardService {

	@Inject
	private JspBoardDAO dao;

	// 게시글 목록
	@Override
	public List<JspBoardVO> jspList() throws Exception {
		return dao.jspList();
	}

	// 게시글 작성
	@Override
	public void jspWrite(JspBoardVO vo) throws Exception {
		dao.jspWrite(vo);
	}

	// 게시글 상세
	@Override
	public JspBoardVO jspView(int post_id) throws Exception {
		return dao.jspView(post_id);
	}

	// 게시글 조회수
	@Override
	public int jspvcnt(int post_id) throws Exception {
		return dao.jspvcnt(post_id);
	}
	
	// 게시글 수정
	@Override
	public void jspModify(JspBoardVO vo) throws Exception {
		dao.jspModify(vo);
	}

	// 게시글 삭제
	@Override
	public void jspDelete(int post_id) throws Exception {
		dao.jspDelete(post_id);
	}
	
	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void jspcategory2(int post_id) throws Exception {
		dao.jspcategory2(post_id);
		
	}

	// 게시글 북마크 유무 확인
	@Override
	public int jspbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {
		
		return dao.jspbookmarklist(postid_useridx);
		
	}

	// 게시글 북마크 설정
	@Override
	public void jspbookmark(HashMap<String, Integer> postid_useridx) throws Exception {

		dao.jspbookmark(postid_useridx);
	}
	
	// 게시글 좋아요 확인
	@Override
	public Map<String, Object> jspRecommendCheck(Map<String, Object> post_useridx) {
		
		return dao.jspRecommendCheck(post_useridx);
	}
	
	// 추천  테이블 인서트
	@Override
	public void jspInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		dao.jspInsertRecBtn(post_useridx);
	}

	// 게시글 추천수 +1 업데이트
	@Override
	public void jspUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		dao.jspUpdateRecCntPlus(post_useridx);
	}

	// 추천 테이블 recommend_check 업데이트
	@Override
	public void jspUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		dao.jspUpdateRecCheck(post_useridx);
	}
	// 게시글 추천수 -1 업데이트
	@Override
	public void jspUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		dao.jspUpdateRecCntMinus(post_useridx);
	}

	//게시글 추천 수 조회
	@Override
	public int jspGetRecCnt(Map<String, Object> post_useridx) throws Exception {
		return dao.jspGetRecCnt(post_useridx);
	}

}