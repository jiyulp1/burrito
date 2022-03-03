package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.CssBoardVO;

@Repository
public class CssBoardDAOImpl implements CssBoardDAO {

	@Inject
	private SqlSession sql;

	private static String namespace = "kr.co.bttf.mappers.board";

	// 
	@Override
	public List csslist() throws Exception {

		return sql.selectList(namespace + ".csslist");
	}

	// 
	@Override
	public void csswrite(CssBoardVO vo) throws Exception {
		
		sql.insert(namespace + ".csswrite", vo);
	}

	// 오버라이드 없음
	public CssBoardVO cssview(int post_id) throws Exception {

		return sql.selectOne(namespace + ".cssview", post_id);
	}

	// 
	@Override
	public void cssmodify(CssBoardVO vo) throws Exception {
		sql.update(namespace + ".cssmodify", vo);
	}

	// 
	public void cssdelete(int post_id) throws Exception {
		sql.delete(namespace + ".cssdelete", post_id);
	}

}