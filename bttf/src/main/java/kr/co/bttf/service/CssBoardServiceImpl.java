package kr.co.bttf.service;

import java.util.List;

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
	public void cssEdit(CssBoardVO vo) throws Exception {

		dao.cssEdit(vo);
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

}