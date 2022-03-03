package com.board.service;

import java.util.List;
import com.board.domain.CssBoardVO;

public interface CssBoardService {
	public List<CssBoardVO> csslist() throws Exception;
	
	public void write(CssBoardVO vo) throws Exception;
	
	// 게시물 조회
	public CssBoardVO view(int bno) throws Exception;
	
	// 게시물 수정
	public void modify(CssBoardVO vo) throws Exception;
	
	//게시물 삭제
	public void delete(int bno) throws Exception;
	
}
