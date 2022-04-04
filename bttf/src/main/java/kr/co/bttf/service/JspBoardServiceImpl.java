package kr.co.bttf.service;

import java.util.List;

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

}