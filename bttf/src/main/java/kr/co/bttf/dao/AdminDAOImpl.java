package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.catalina.mapper.Mapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
@Repository
public class AdminDAOImpl implements AdminDAO {
	
	
	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.adminMapper";


	@Override
	public List<MemberVO> memberall() throws Exception {
		return sql.selectList(namespace + ".memberall");

	}

	@Override
	public List<MemberVO> memberblock() throws Exception {
		return sql.selectList(namespace + ".memberblock");

	}

	@Override
	public List<AnnVO> announcements() throws Exception {
		return sql.selectList(namespace + ".announcements");

	}

	@Override
	public void annwrite(AnnVO vo) throws Exception{
		sql.insert(namespace + ".annwrite", vo);

	}

	@Override
	public AnnVO annview(int post_id) throws Exception {
		return sql.selectOne(namespace + ".annview", post_id);
	}
	

	@Override
	public int annvcnt(int post_id) throws Exception {
		return sql.update(namespace + ".annvcnt", post_id);
		
	}

	@Override
	public void annedit(AnnVO vo) throws Exception {
		sql.update(namespace + ".annedit", vo);

	}

	@Override
	public void anndelete(int post_id) throws Exception {
		sql.delete(namespace + ".anndelete", post_id);

	}

	@Override
	public void cssundo(CssBoardVO vo) {
		sql.update(namespace + ".cssundo", vo );
		
	}

	@Override
	public void memberundo(MemberVO vo) {
		sql.update(namespace + "memberundo", vo);
		
	}

	@Override
	public void cssexpell(CssBoardVO vo) {
		sql.delete(namespace + "cssexpell", vo);
		
	}

	@Override
	public void memberexpell(MemberVO vo) {
		sql.delete(namespace + "memberexpell", vo);
		
		
	}

}
