package com.board.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.board.dao.CssBoardDAO;
import com.board.domain.CssBoardVO;

@Service
public class CssBoardServiceImpl implements CssBoardService {

	@Inject
	private CssBoardDAO dao;

	@Override
	public List csslist() throws Exception {

		return dao.csslist();
	}

	@Override
	public void write(CssBoardVO vo) throws Exception {
		// TODO Auto-generated method stub
		dao.write(vo);
	}
	
	// 게시물 조회
	@Override
	public CssBoardVO view(int bno) throws Exception {

	 return dao.view(bno);
	}
	// 게시물 수정
	@Override
	public void modify(CssBoardVO vo) throws Exception {
	  
	 dao.modify(vo);
	}
	
	//게시물 삭제
	public void delete(int bno) throws Exception {
		dao.delete(bno);
	}
	
}