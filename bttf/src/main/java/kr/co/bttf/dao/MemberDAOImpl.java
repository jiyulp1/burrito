package kr.co.bttf.dao;

import java.util.HashMap;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;

@Repository
public class MemberDAOImpl implements MemberDAO {

	@Inject
	private SqlSession sql;

	// 매퍼
	private static String namespace = "kr.co.bttf.mappers.memberMapper";

	// 회원 가입
	@Override
	public void signup(MemberVO vo) throws Exception {
		sql.insert(namespace + ".signup", vo);
	}

	// 로그인
	@Override
	public MemberVO signin(MemberVO vo) throws Exception {
		return sql.selectOne(namespace + ".signin", vo);
	}

	@Override
	public MemberVO signin(HashMap<String, String> map) throws Exception {
		return sql.selectOne(namespace + ".login", map);

	}

	@Override
	public void cssboardreported(CssBoardVO vo) throws Exception {
		sql.update(namespace + ".cssboardreported", vo);

	}

	@Override
	public MemberVO memreportcard(String user_nickname) throws Exception {
		return sql.selectOne(namespace + ".memreportcard", user_nickname);
	}

	@Override
	public void memreportupdate(MemberVO vo) throws Exception {
		sql.update(namespace + ".memberreportupdate", vo);

	}

	@Override
	public MemberVO readMember(String user_email) {
		return sql.selectOne(namespace + ".readMember", user_email);
	}

	@Override
	public boolean idCheck(String user_nickname) {
		boolean result = false;
		if ((Integer) sql.selectOne(namespace + ".idCheck", user_nickname) == 1) {
			result = true;
		}
		return result;
	}

	@Override
	public void updatePw(MemberVO vo) {
		sql.update(namespace + ".updatePw", vo);
	}

}