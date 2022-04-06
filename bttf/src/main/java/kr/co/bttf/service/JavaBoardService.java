package kr.co.bttf.service;

import java.util.List;

import kr.co.bttf.domain.JavaBoardVO;

public interface JavaBoardService {
	
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

}
