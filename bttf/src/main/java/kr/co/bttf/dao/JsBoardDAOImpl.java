package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	public JsBoardVO javascriptView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".javascriptView", post_id);
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
	
	@Override
	public int jsbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {

		return sql.selectOne(namespace +".jsbookmarklist", postid_useridx);
	}

	@Override
	public void jsbookmark(HashMap<String, Integer> postid_useridx) {
		
		sql.insert(namespace + ".jsbookmark", postid_useridx);
	}
	
	@Override
	public Map<String, Object> jsRecommendCheck(Map<String, Object> post_useridx) {
		return sql.selectOne(namespace + ".jsRecommendCheck", post_useridx);
	}

	@Override
	public void jsInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		sql.insert(namespace +".jsInsertRecBtn", post_useridx);
		
	}

	@Override
	public void jsUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		sql.update(namespace + ".jsUpdateRecCntPlus", post_useridx);
	}

	@Override
	public void jsUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".jsUpdateRecCheck", post_useridx);
	}

	@Override
	public void jsUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".jsUpdateRecCntMinus", post_useridx);
	}

	@Override
	public int jsGetRecCnt(Map<String, Object> post_useridx) throws Exception {

		return sql.selectOne(namespace + ".jsGetRecCnt", post_useridx);
	}

}
