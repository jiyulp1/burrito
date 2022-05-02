package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.JavaBoardVO;

@Repository
public class JavaBoardDAOImpl implements JavaBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.boardMapper";
	
	@Override
	public List<JavaBoardVO> javaList() throws Exception {
		return sql.selectList(namespace + ".javalist");
	}
	
	@Override
	public void javaWrite(JavaBoardVO vo) throws Exception {
		sql.insert(namespace + ".javawrite", vo);
	}
	
	@Override
	public JavaBoardVO javaView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".javaview", post_id);
	}

	@Override
	public int javavcnt(int post_id) throws Exception {
		return sql.update(namespace + ".javavcnt", post_id);

	}

	@Override
	public void javaModify(JavaBoardVO vo) throws Exception {
		sql.update(namespace + ".javamodify", vo);
	}
	
	@Override
	public void javaDelete(int post_id) throws Exception {
		sql.delete(namespace + ".javadelete", post_id);
	}

	@Override
	public void javacategory2(int post_id) throws Exception {
		sql.update(namespace + ".javacategory2", post_id);
		
	}
	
	@Override
	public int javabookmarklist(HashMap<String, Integer> postid_useridx) throws Exception {

		return sql.selectOne(namespace +".javabookmarklist", postid_useridx);
	}

	@Override
	public void javabookmark(HashMap<String, Integer> postid_useridx) {
		
		sql.insert(namespace + ".javabookmark", postid_useridx);
	}
	
	@Override
	public Map<String, Object> javaRecommendCheck(Map<String, Object> post_useridx) {
		return sql.selectOne(namespace + ".javaRecommendCheck", post_useridx);
	}

	@Override
	public void javaInsertRecBtn(Map<String, Object> post_useridx) throws Exception {

		sql.insert(namespace +".javaInsertRecBtn", post_useridx);
		
	}

	@Override
	public void javaUpdateRecCntPlus(Map<String, Object> post_useridx) throws Exception {

		sql.update(namespace + ".javaUpdateRecCntPlus", post_useridx);
	}

	@Override
	public void javaUpdateRecCheck(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".javaUpdateRecCheck", post_useridx);
	}

	@Override
	public void javaUpdateRecCntMinus(Map<String, Object> post_useridx) throws Exception  {

		sql.update(namespace + ".javaUpdateRecCntMinus", post_useridx);
	}

	@Override
	public int javaGetRecCnt(Map<String, Object> post_useridx) throws Exception {

		return sql.selectOne(namespace + ".javaGetRecCnt", post_useridx);
	}
}
