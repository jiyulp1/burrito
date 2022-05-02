package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.JspBoardVO;

@Repository
public class JspBoardDAOImpl implements JspBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.boardMapper";
	
	@Override
	public List<JspBoardVO> jspList() throws Exception {
		return sql.selectList(namespace + ".jsplist");
	}
	
	@Override
	public void jspWrite(JspBoardVO vo) throws Exception {
		sql.insert(namespace + ".jspwrite", vo);
	}
	
	@Override
	public JspBoardVO jspView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".jspview", post_id);
	}

	@Override
	public int jspvcnt(int post_id) throws Exception {
		return sql.update(namespace + ".jspvcnt", post_id);

	}

	@Override
	public void jspModify(JspBoardVO vo) throws Exception {
		sql.update(namespace + ".jspmodify", vo);
	}
	
	@Override
	public void jspDelete(int post_id) throws Exception {
		sql.delete(namespace + ".jspdelete", post_id);
	}

	@Override
	public void jspcategory2(int post_id) throws Exception {
		sql.update(namespace + ".jspcategory2", post_id);
		
	}
	
	@Override
	public int jspbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {

		return sql.selectOne(namespace +".jspbookmarklist", postid_useridx);
	}

	@Override
	public void jspbookmark(HashMap<String, Integer> postid_useridx) {
		
		sql.insert(namespace + ".jspbookmark", postid_useridx);
	}
	
	@Override
	public Map<String, Object> jspRecommendCheck(Map<String, Object> post_useridx) {
		return sql.selectOne(namespace + ".jspRecommendCheck", post_useridx);
	}

	@Override
	public void jspInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		sql.insert(namespace +".jspInsertRecBtn", post_useridx);
		
	}

	@Override
	public void jspUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		sql.update(namespace + ".jspUpdateRecCntPlus", post_useridx);
	}

	@Override
	public void jspUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".jspUpdateRecCheck", post_useridx);
	}

	@Override
	public void jspUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".jspUpdateRecCntMinus", post_useridx);
	}

	@Override
	public int jspGetRecCnt(Map<String, Object> post_useridx) throws Exception {

		return sql.selectOne(namespace + ".jspGetRecCnt", post_useridx);
	}
}
