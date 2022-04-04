package kr.co.bttf.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import kr.co.bttf.dao.SpringBoardDAO;
import kr.co.bttf.domain.SpringBoardVO;

@Service
public class SpringBoardServiceImpl implements SpringBoardService {

	@Inject
	private SpringBoardDAO dao;

	// 게시글 목록
	@Override
	public List<SpringBoardVO> springList() throws Exception {
		return dao.springList();
	}

	// 게시글 작성
	@Override
	public void springWrite(SpringBoardVO vo) throws Exception {
		dao.springWrite(vo);
	}

	// 게시글 상세
	@Override
	public SpringBoardVO springView(int post_id) throws Exception {
		return dao.springView(post_id);
	}

	// 게시글 조회수
	@Override
	public int springvcnt(int post_id) throws Exception {
		return dao.springvcnt(post_id);
	}

	// 게시글 수정
	@Override
	public void springModify(SpringBoardVO vo) throws Exception {
		dao.springModify(vo);
	}

	// 게시글 삭제
	@Override
	public void springDelete(int post_id) throws Exception {
		dao.springDelete(post_id);
	}
	
	// 게시글 신고(가용성 카테고리 변경)
	@Override
	public void springcategory2(int post_id) throws Exception {
		dao.springcategory2(post_id);
		
	}

}