package kr.co.bttf.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.JavaBoardDAO;
import kr.co.bttf.domain.JavaBoardVO;

@Service
public class JavaBoardServiceImpl implements JavaBoardService {

	@Inject
	private JavaBoardDAO dao;

	// 게시글 목록
	@Override
	public List<JavaBoardVO> javaList() throws Exception {
		return dao.javaList();
	}

	// 게시글 작성
	@Override
	public void javaWrite(JavaBoardVO vo) throws Exception {
		dao.javaWrite(vo);
	}

	// 게시글 상세
	@Override
	public JavaBoardVO javaView(int post_id) throws Exception {
		return dao.javaView(post_id);
	}

	// 게시글 조회수
	@Override
	public int javavcnt(int post_id) throws Exception {
		return dao.javavcnt(post_id);
	}
	
	// 게시글 수정
	@Override
	public void javaModify(JavaBoardVO vo) throws Exception {
		dao.javaModify(vo);
	}

	// 게시글 삭제
	@Override
	public void javaDelete(int post_id) throws Exception {
		dao.javaDelete(post_id);
	}
	
	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void javacategory2(int post_id) throws Exception {
		dao.javacategory2(post_id);
		
	}

	// 게시글 북마크 유무 확인
	@Override
	public int javabookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {
		
		return dao.javabookmarklist(postid_useridx);
		
	}

	// 게시글 북마크 설정
	@Override
	public void javabookmark(HashMap<String, Integer> postid_useridx) throws Exception {

		dao.javabookmark(postid_useridx);
	}
	
	// 게시글 좋아요 확인
	@Override
	public Map<String, Object> javaRecommendCheck(Map<String, Object> post_useridx) {
		
		return dao.javaRecommendCheck(post_useridx);
	}
	
	// 추천  테이블 인서트
	@Override
	public void javaInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		dao.javaInsertRecBtn(post_useridx);
	}

	// 게시글 추천수 +1 업데이트
	@Override
	public void javaUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		dao.javaUpdateRecCntPlus(post_useridx);
	}

	// 추천 테이블 recommend_check 업데이트
	@Override
	public void javaUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		dao.javaUpdateRecCheck(post_useridx);
	}
	// 게시글 추천수 -1 업데이트
	@Override
	public void javaUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		dao.javaUpdateRecCntMinus(post_useridx);
	}

	//게시글 추천 수 조회
	@Override
	public int javaGetRecCnt(Map<String, Object> post_useridx) throws Exception {
		return dao.javaGetRecCnt(post_useridx);
	}
}