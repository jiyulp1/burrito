package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.JsBoardVO;

@Repository
public class JsBoardDAOImpl implements JsBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.boardMapper";
	
	@Override
	public List<JsBoardVO> jsList() throws Exception {
		return sql.selectList(namespace + ".jslist");
	}
	
	@Override
	public void jsWrite(JsBoardVO vo) throws Exception {
		sql.insert(namespace + ".jswrite", vo);
	}
	
	@Override
	public JsBoardVO jsView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".jsview", post_id);
	}

	@Override
	public int jsvcnt(int post_id) throws Exception {
		return sql.update(namespace + ".jsvcnt", post_id);

	}

	@Override
	public void jsModify(JsBoardVO vo) throws Exception {
		sql.update(namespace + ".jsmodify", vo);
	}
	
	@Override
	public void jsDelete(int post_id) throws Exception {
		sql.delete(namespace + ".jsdelete", post_id);
	}

	@Override
	public void jscategory2(int post_id) throws Exception {
		sql.update(namespace + ".jscategory2", post_id);
		
	}
}
