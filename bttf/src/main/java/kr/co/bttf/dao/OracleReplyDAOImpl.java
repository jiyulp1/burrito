package kr.co.bttf.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.OracleReplyVO;

@Repository
public class OracleReplyDAOImpl implements OracleReplyDAO {

	
	@Inject
	private SqlSession sql;
	private static String namespace = "kr.co.bttf.mappers.replyMapper";
	
	// 댓글 목록
	@Override
	public List<OracleReplyVO> oracleReplyList(int post_id, int start, int end, HttpSession session) throws Exception {
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("post_id", post_id);
		map.put("start", start);
		map.put("end", end);
		return sql.selectList(namespace + ".oracleReplyList", map);
	}
	
	// 댓글 개수
	@Override
	public int oracleCount(int post_id) throws Exception {
		return sql.selectOne(namespace + ".oracleCount", post_id);
	}

	// 댓글 작성
	@Override
	public void oracleReplyWrite(OracleReplyVO vo) throws Exception {
		sql.insert(namespace + ".oracleReplyWrite", vo);
	}

	// 댓글 수정
	@Override
	public void oracleReplyModify(OracleReplyVO vo) throws Exception {
		sql.update(namespace + ".oracleReplyModify", vo);

	}

	// 댓글 삭제
	@Override
	public void oracleReplyDelete(OracleReplyVO vo) {
		sql.update(namespace + ".oracleReplyDelete", vo);
	}



}
