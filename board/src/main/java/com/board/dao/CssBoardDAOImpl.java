package com.board.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.board.domain.CssBoardVO;

@Repository
public class CssBoardDAOImpl implements CssBoardDAO {

 @Inject
 private SqlSession sql;
 
 private static String namespace = "com.board.mappers.board";

 // 寃뚯떆臾� 紐⑸줉
 @Override
 public List csslist() throws Exception { 
  
  return sql.selectList(namespace + ".list");
 }

@Override
public void write(CssBoardVO vo) throws Exception {
	// TODO Auto-generated method stub
	sql.insert(namespace + ".write", vo);
}
//寃뚯떆臾� 議고쉶
public CssBoardVO view(int bno) throws Exception {

return sql.selectOne(namespace + ".view", bno);
}

//寃뚯떆臾� �닔�젙
@Override
public void modify(CssBoardVO vo) throws Exception {
sql.update(namespace + ".modify", vo);
}

public void delete(int bno) throws Exception {
	sql.delete(namespace + ".delete", bno);
}

}