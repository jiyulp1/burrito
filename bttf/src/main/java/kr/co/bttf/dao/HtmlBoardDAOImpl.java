package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.HtmlBoardVO;

@Repository
public class HtmlBoardDAOImpl implements HtmlBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.boardMapper";
	
	@Override
	public List<HtmlBoardVO> htmlList() throws Exception {
		return sql.selectList(namespace + ".htmllist");
	}
	
	@Override
	public void htmlWrite(HtmlBoardVO vo) throws Exception {
		sql.insert(namespace + ".htmlwrite", vo);
	}
	
	@Override
	public HtmlBoardVO htmlView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".htmlview", post_id);
	}

	@Override
	public int htmlvcnt(int post_id) throws Exception {
		return sql.update(namespace + ".htmlvcnt", post_id);

	}
	
	@Override
	public void htmlModify(HtmlBoardVO vo) throws Exception {
		sql.update(namespace + ".htmlmodify", vo);
	}
	
	@Override
	public void htmlDelete(int post_id) throws Exception {
		sql.delete(namespace + ".htmldelete", post_id);
	}

	@Override
	public void htmlcategory2(int post_id) throws Exception {
		sql.update(namespace + ".htmlcategory2", post_id);
	}
	
	@Override
	public int htmlbookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {

		return sql.selectOne(namespace +".htmlbookmarklist", postid_useridx);
	}

	@Override
	public void htmlbookmark(HashMap<String, Integer> postid_useridx) {
		
		sql.insert(namespace + ".htmlbookmark", postid_useridx);
	}
	
	@Override
	public Map<String, Object> htmlRecommendCheck(Map<String, Object> post_useridx) {
		return sql.selectOne(namespace + ".htmlRecommendCheck", post_useridx);
	}

	@Override
	public void htmlInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		sql.insert(namespace +".htmlInsertRecBtn", post_useridx);
		
	}

	@Override
	public void htmlUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		sql.update(namespace + ".htmlUpdateRecCntPlus", post_useridx);
	}

	@Override
	public void htmlUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".htmlUpdateRecCheck", post_useridx);
	}

	@Override
	public void htmlUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".htmlUpdateRecCntMinus", post_useridx);
	}

	@Override
	public int htmlGetRecCnt(Map<String, Object> post_useridx) throws Exception {

		return sql.selectOne(namespace + ".htmlGetRecCnt", post_useridx);
	}
	
}
