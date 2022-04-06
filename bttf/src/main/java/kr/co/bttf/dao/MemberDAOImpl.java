package kr.co.bttf.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kr.co.bttf.domain.BoardVO;
import kr.co.bttf.domain.CssBoardVO;
import kr.co.bttf.domain.MemberVO;
import kr.co.bttf.domain.ReportVO;

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

	// 이메일 중복확인
	@Override
	public int emailcheck(MemberVO vo) throws Exception {
		int result = sql.selectOne(namespace + ".emailcheck", vo);
		return result;
	}
	// 닉네임 중복확인
	@Override
	public int nickcheck(MemberVO vo) throws Exception {
		int result = sql.selectOne(namespace + ".nickcheck", vo);
		return result;
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
	public List<MemberVO> findid(MemberVO vo) throws Exception {
		return sql.selectList(namespace + ".findid", vo);
	}

	@Override
	public MemberVO readMember(HashMap<String, String> map) {
		return sql.selectOne(namespace + ".readMember", map);
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
	public void temporaryPw(MemberVO vo) {
		sql.update(namespace + ".temporaryPw", vo);
	}
	
	@Override
	public String pwCheck(String user_pw) {
		return sql.selectOne(namespace + ".readPw", user_pw);
	}
	
	@Override
	public void updatePw(HttpServletResponse response, MemberVO vo) {
		sql.update(namespace + ".updatePw", vo);
	}


	@Override
	public void memcategory2(int user_index) throws Exception {
		sql.update(namespace + ".memcategory2", user_index);
		
	}

	
	@Override
	public void memberreport(HashMap<String, Integer> map) throws Exception {
		
		sql.insert(namespace + ".memberreport", map);
		
	}

	@Override
	public int reportSuccess(HashMap<String, Integer> map) {
		int result = sql.selectOne(namespace + ".reportSuccess",map);
		
		return result;
	}
	
		@Override
	public int mypostcnt(int user_index) throws Exception {

		return sql.selectOne(namespace + ".mypostcnt", user_index);
		
	}

	@Override
	public int myreplycnt(String user_nickname) throws Exception {
		
		return sql.selectOne(namespace + ".myreplycnt", user_nickname);
		
	}

	@Override
	public List<BoardVO> mypostlist(int user_index) throws Exception{
		
		// 전체 게시글 목록
		List<BoardVO> mypostlist = new ArrayList<BoardVO>();

		// 각각의 게시글 목록
		List<BoardVO> eachlist = new ArrayList<BoardVO>();			
		
		
		for (int i = 0; i < 7; i++) {
			eachlist = sql.selectList(namespace + ".mypostlist"+i, user_index );
			
			if(eachlist==null) {
				continue;				
			}
			
			for(int j = 0; j<eachlist.size(); j++) {
				
				BoardVO board = eachlist.get(j);
								
				mypostlist.add(board);
			}
		}
		

		
		return mypostlist;
	}

	@Override
	public MemberVO mypage_view(int user_index) {
		
		return sql.selectOne(namespace + ".mypage_view", user_index);
	}

	@Override
	public int mypage_update(MemberVO member) {

		int result = sql.update(namespace + ".mypage_update", member);
		
		return result;

	}

	@Override
	public int joinout(int user_index) {

		int result = sql.update(namespace + ".joinout", user_index);
		
		return result;
	}
	

}
