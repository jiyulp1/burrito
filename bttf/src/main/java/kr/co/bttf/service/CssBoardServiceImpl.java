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
	public List<CssBoardVO> cssList() throws Exception {

		return dao.cssList();
	}

	@Override
	public void cssWrite(CssBoardVO vo) throws Exception {
		// insert, update인 경우니 return이 없고 redirect방식으로 통신함
		dao.cssWrite(vo);
	}

	// 게시물 조회
	@Override
	public CssBoardVO cssView(int post_id) throws Exception {

		return dao.cssView(post_id);
	}

	// 게시물 수정
	@Override
	public void cssModify(CssBoardVO vo) throws Exception {

		dao.cssModify(vo);
	}

	// 게시물 삭제
	public void cssDelete(int post_id) throws Exception {
		
		dao.cssDelete(post_id);
	}

}