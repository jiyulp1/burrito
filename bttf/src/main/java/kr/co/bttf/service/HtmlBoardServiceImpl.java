package kr.co.bttf.service;

import java.util.List;

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
		// insert, update인 경우니 return이 없고 redirect방식으로 통신함
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
	
}