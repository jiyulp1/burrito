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
public class OrBoardDAOImpl implements OrBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.board";
	
	@Override
	public List<OracleBoardVO> orList() throws Exception {
		return sql.selectList(namespace + ".orlist");
	}
	
	@Override
	public void orWrite(OracleBoardVO vo) throws Exception {
		sql.insert(namespace + "orwrite", vo);
	}
	
	@Override
	public OracleBoardVO orView(int post_id) throws Exception {
		return sql.selectOne(namespace + "orview", post_id);
	}
	
	@Override
	public void orModify(OracleBoardVO vo) throws Exception {
		sql.update(namespace + ".ormodify", vo);
	}
	
	@Override
	public void orDelete(int post_id) throws Exception {
		sql.delete(namespace + ".ordelete", post_id);
	}
	
	
	
}
