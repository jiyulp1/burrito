package kr.co.bttf.dao;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.MemberVO;

@Repository
public class MemberDAOImpl implements MemberDAO {
	
	@Inject
	private SqlSession sql;
	
	private static String namespace = "kr.co.bttf.mappers.memberMapper";

	//회원가입
	@Override
	public void join(MemberVO vo) throws Exception {
		sql.insert(namespace + ".join", vo);
	}

	//로그인
	@Override
	public MemberVO login(MemberVO vo) throws Exception {
		return sql.selectOne(namespace + ".login", vo);
	}
}
