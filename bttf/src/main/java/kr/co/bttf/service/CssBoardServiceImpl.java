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

	@Override
	public List csslist() throws Exception {

		return dao.csslist();
	}

	@Override
	public void csswrite(CssBoardVO vo) throws Exception {
		// insert, update인 경우니 return이 없고 redirect방식으로 통신함
		dao.csswrite(vo);
	}

	// 게시물 조회
	@Override
	public CssBoardVO cssview(int post_id) throws Exception {

		return dao.cssview(post_id);
	}

	// 게시물 수정
	@Override
	public void cssmodify(CssBoardVO vo) throws Exception {

		dao.cssmodify(vo);
	}

	// 게시물 삭제
	public void cssdelete(int post_id) throws Exception {
		
		dao.cssdelete(post_id);
	}

}