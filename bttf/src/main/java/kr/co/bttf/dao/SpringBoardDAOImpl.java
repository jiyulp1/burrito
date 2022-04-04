package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.SpringBoardVO;

@Repository
public class SpringBoardDAOImpl implements SpringBoardDAO {

	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.boardMapper";
	
	@Override
	public List<SpringBoardVO> springList() throws Exception {
		return sql.selectList(namespace + ".springlist");
	}
	
	@Override
	public void springWrite(SpringBoardVO vo) throws Exception {
		sql.insert(namespace + ".springwrite", vo);
	}
	
	@Override
	public SpringBoardVO springView(int post_id) throws Exception {
		return sql.selectOne(namespace + ".springview", post_id);
	}

	@Override
	public int springvcnt(int post_id) throws Exception {
		return sql.update(namespace + ".springvcnt", post_id);
		
	}
	
	@Override
	public void springModify(SpringBoardVO vo) throws Exception {
		sql.update(namespace + ".springmodify", vo);
	}
	
	@Override
	public void springDelete(int post_id) throws Exception {
		sql.delete(namespace + ".springdelete", post_id);
	}
	
	@Override
	public void springcategory2(int post_id) throws Exception {
		sql.update(namespace + ".springcategory2", post_id);
		
	}
	
}
