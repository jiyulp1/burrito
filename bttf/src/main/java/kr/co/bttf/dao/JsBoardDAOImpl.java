package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JsBoardVO;

@Repository
public class JsBoardDAOImpl implements JsBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.board";
	
	@Override
	public List<JsBoardVO> jsList() throws Exception {
		return sql.selectList(namespace + ".jslist");
	}
	@Override
	public void jsWrite(JsBoardVO vo) throws Exception {
		sql.insert(namespace + "jswrite", vo);
	}
	@Override
	public JsBoardVO jsView(int post_id) throws Exception {
		return sql.selectOne(namespace + "jsview", post_id);
	}
	@Override
	public void jsModify(JsBoardVO vo) throws Exception {
		sql.update(namespace + ".jsmodify", vo);
	}
	@Override
	public void jsDelete(int post_id) throws Exception {
		sql.delete(namespace + ".jsdelete", post_id);
	}
	
	
}
