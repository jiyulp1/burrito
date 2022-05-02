package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.AnnVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.HtmlBoardVO;
import kr.co.bttf.domain.JavaBoardVO;
import kr.co.bttf.domain.JsBoardVO;
import kr.co.bttf.domain.JspBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.OracleBoardVO;
import kr.co.bttf.domain.SpringBoardVO;
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
	public void cssundo(int post_id) {
		sql.update(namespace + ".cssundo", post_id );
		
	}

	@Override
	public void memberundo(int user_index) {
		sql.update(namespace + ".memberundo", user_index);
		
	}
	
	@Override
	public void cssexpell(int post_id) {
		sql.delete(namespace + ".cssexpell", post_id);
		
	}

	@Override
	public void memberexpell(int user_index) {
		sql.delete(namespace + ".memberexpell", user_index);
		
		
	}

	@Override
	public List<CssBoardVO> boardallcss() throws Exception {
		return sql.selectList(namespace + ".boardallcss");
	}

	@Override
	public List<HtmlBoardVO> boardallhtml() throws Exception {

		return sql.selectList(namespace + ".boardallhtml");
	}

	@Override
	public List<JsBoardVO> boardalljs() throws Exception {

		return sql.selectList(namespace + ".boardalljs");
	}

	@Override
	public List<JavaBoardVO> boardalljava() throws Exception {

		return sql.selectList(namespace + ".boardalljava");
	}

	@Override
	public List<JspBoardVO> boardalljsp() throws Exception {

		return sql.selectList(namespace + ".boardalljsp");
	}

	@Override
	public List<OracleBoardVO> boardalloracle() throws Exception {

		return sql.selectList(namespace + ".boardalloracle");
	}

	@Override
	public List<SpringBoardVO> boardallspring() throws Exception {

		return sql.selectList(namespace + ".boardallspring");
	}

	@Override
	public List<CssBoardVO> boardblockcss() throws Exception {

		return sql.selectList(namespace + ".boardblockcss");
	}

	@Override
	public List<HtmlBoardVO> boardblockhtml() throws Exception {

		return sql.selectList(namespace + ".boardblockhtml");
	}

	@Override
	public List<JsBoardVO> boardblockjs() throws Exception {

		return sql.selectList(namespace + ".boardblockjs");
	}

	@Override
	public List<JavaBoardVO> boardblockjava() throws Exception {

		return sql.selectList(namespace + ".boardblockjava");
	}

	@Override
	public List<JspBoardVO> boardblockjsp() throws Exception {
		
		return sql.selectList(namespace + ".boardblockjsp");
	}

	@Override
	public List<OracleBoardVO> boardblockoracle() throws Exception {
		
		return sql.selectList(namespace + ".boardblockoracle");
	}

	@Override
	public List<SpringBoardVO> boardblockspring() throws Exception {
		
		return sql.selectList(namespace + ".boardblockspring");
	}

}         
