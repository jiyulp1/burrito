package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.OracleBoardDAO;
import kr.co.bttf.domain.OracleBoardVO;

@Service
public class OracleBoardServiceImpl implements OracleBoardService {

	@Inject
	private OracleBoardDAO dao;

	@Override
	public List<OracleBoardVO> oracleList() throws Exception {
		return dao.oracleList();
	}

	@Override
	public void oracleWrite(OracleBoardVO vo) throws Exception {
		dao.oracleWrite(vo);
	}

	@Override
	public OracleBoardVO oracleView(int post_id) throws Exception {
		return dao.oracleView(post_id);
	}

	@Override
	public int oraclevcnt(int post_id) throws Exception {
		return dao.oraclevcnt(post_id);
	}
	
	@Override
	public void oracleModify(OracleBoardVO vo) throws Exception {
		dao.oracleModify(vo);
	}

	@Override
	public void oracleDelete(int post_id) throws Exception {
		dao.oracleDelete(post_id);
	}
	
	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void oraclecategory2(int post_id) throws Exception {
		dao.oraclecategory2(post_id);
		
	}
	
	// 게시글 북마크 유무 확인
	@Override
	public int oraclebookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {
		
		return dao.oraclebookmarklist(postid_useridx);
		
	}

	// 게시글 북마크 설정
	@Override
	public void oraclebookmark(HashMap<String, Integer> postid_useridx) throws Exception {

		dao.oraclebookmark(postid_useridx);
	}
	
	// 게시글 좋아요 확인
	@Override
	public Map<String, Object> oracleRecommendCheck(Map<String, Object> post_useridx) {
		
		return dao.oracleRecommendCheck(post_useridx);
	}
	
	// 추천  테이블 인서트
	@Override
	public void oracleInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		dao.oracleInsertRecBtn(post_useridx);
	}

	// 게시글 추천수 +1 업데이트
	@Override
	public void oracleUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		dao.oracleUpdateRecCntPlus(post_useridx);
	}

	// 추천 테이블 recommend_check 업데이트
	@Override
	public void oracleUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		dao.oracleUpdateRecCheck(post_useridx);
	}
	
	// 게시글 추천수 -1 업데이트
	@Override
	public void oracleUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		dao.oracleUpdateRecCntMinus(post_useridx);
	}

	//게시글 추천 수 조회
	@Override
	public int oracleGetRecCnt(Map<String, Object> post_useridx) throws Exception {
		return dao.oracleGetRecCnt(post_useridx);
	}

}