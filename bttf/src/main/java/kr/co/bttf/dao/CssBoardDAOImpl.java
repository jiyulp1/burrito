package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	public void cssModify(CssBoardVO vo) throws Exception {
		sql.update(namespace + ".cssmodify", vo);
	}

	@Override
	public void cssDelete(int post_id) throws Exception {
		sql.delete(namespace + ".cssdelete", post_id);
	}

	@Override
	public void csscategory2(int post_id) throws Exception {
		sql.update(namespace + ".csscategory2", post_id);
		
	}
	
	@Override
	public int cssbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {

		return sql.selectOne(namespace +".cssbookmarklist", postid_useridx);
	}

	@Override
	public void cssbookmark(HashMap<String, Integer> postid_useridx) throws Exception {
		
		sql.insert(namespace + ".cssbookmark", postid_useridx);
	}
	
	@Override
	public Map<String, Object> cssRecommendCheck(Map<String, Object> post_useridx) {
		return sql.selectOne(namespace + ".cssRecommendCheck", post_useridx);
	}

	@Override
	public void cssInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		sql.insert(namespace +".cssInsertRecBtn", post_useridx);
		
	}

	@Override
	public void cssUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		sql.update(namespace + ".cssUpdateRecCntPlus", post_useridx);
	}

	@Override
	public void cssUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".cssUpdateRecCheck", post_useridx);
	}

	@Override
	public void cssUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".cssUpdateRecCntMinus", post_useridx);
	}

	@Override
	public int cssGetRecCnt(Map<String, Object> post_useridx) throws Exception {

		return sql.selectOne(namespace + ".cssGetRecCnt", post_useridx);
	}
}
