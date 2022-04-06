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
	private static String namespace = "kr.co.bttf.mappers.boardMapper";

	@Override
	public List<CssBoardVO> cssList() throws Exception {
		return sql.selectList(namespace + ".csslist");
	}

	@Override
	public void cssWrite(CssBoardVO vo) throws Exception {
		sql.insert(namespace + ".csswrite", vo);
	}

	@Override
	public CssBoardVO cssView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".cssview", post_id);
	}
	
	@Override
	public int cssvcnt(int post_id) throws Exception {
		return sql.update(namespace + ".cssvcnt", post_id);
		
	}

	@Override
	public void cssEdit(CssBoardVO vo) throws Exception {
		sql.update(namespace + ".cssedit", vo);
	}

	@Override
	public void cssDelete(int post_id) throws Exception {
		sql.delete(namespace + ".cssdelete", post_id);
	}

	@Override
	public void csscategory2(int post_id) throws Exception {
		sql.update(namespace + ".csscategory2", post_id);
		
	}
}
