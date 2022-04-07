package kr.co.bttf.dao;

import java.util.List;

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
}
