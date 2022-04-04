package kr.co.bttf.service;

import java.util.List;

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

}