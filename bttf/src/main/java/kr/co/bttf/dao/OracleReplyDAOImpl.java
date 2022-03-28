package kr.co.bttf.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.OracleReplyVO;

@Repository
public class OracleReplyDAOImpl implements OracleReplyDAO {

	
	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.replyMapper";
	
	// 댓글 조회
	@Override
	public List<OracleReplyVO> oracleReplyList(int post_id) throws Exception {
		return sql.selectList(namespace + ".oracle_reply_list", post_id);

	}

	// 댓글 작성
	@Override
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception {
		sql.insert(namespace + ".oracle_reply_write", vo);
	}

	// 댓글 수정
	@Override
	public void oracleReplyModify(OracleReplyVO vo) throws Exception {
		sql.update(namespace + ".oracle_reply_modify", vo);

	}

	// 댓글 삭제
	@Override
	public void oracleReplyDelete(OracleReplyVO vo) {
		sql.insert(namespace + ".oracle_reply_delete", vo);
	}

}
