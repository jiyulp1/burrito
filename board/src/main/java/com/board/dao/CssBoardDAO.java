package com.board.dao;

import java.util.List;

import com.board.domain.CssBoardVO;

public interface CssBoardDAO {
	//notice list
	public List<CssBoardVO> csslist() throws Exception;
	//notice write
	public void write(CssBoardVO vo) throws Exception;
	// 寃뚯떆臾� 議고쉶
	public CssBoardVO view(int bno) throws Exception;
	// 寃뚯떆臾� �닔�젙
	public void modify(CssBoardVO vo) throws Exception;
	// 寃뚯떆臾� �궘�젣
	public void delete(int bno) throws Exception;
}
