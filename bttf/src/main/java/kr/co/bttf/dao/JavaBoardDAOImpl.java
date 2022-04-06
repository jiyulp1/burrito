package kr.co.bttf.dao;

import java.util.List;

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
}
