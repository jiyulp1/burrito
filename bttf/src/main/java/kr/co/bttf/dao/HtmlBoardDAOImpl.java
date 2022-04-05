package kr.co.bttf.dao;

import java.util.List;

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
	
}
