package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.OracleBoardVO;

@Repository
public class OracleBoardDAOImpl implements OracleBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.boardMapper";
	
	@Override
	public List<OracleBoardVO> oracleList() throws Exception {
		return sql.selectList(namespace + ".oraclelist");
	}
	
	@Override
	public void oracleWrite(OracleBoardVO vo) throws Exception {
		sql.insert(namespace + ".oraclewrite", vo);
	}
	
	@Override
	public OracleBoardVO oracleView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".oracleview", post_id);
	}
	
	@Override
	public void oracleModify(OracleBoardVO vo) throws Exception {
		sql.update(namespace + ".oraclemodify", vo);
	}
	
	@Override
	public void oracleDelete(int post_id) throws Exception {
		sql.delete(namespace + ".oracledelete", post_id);
	}
	
	
	
}