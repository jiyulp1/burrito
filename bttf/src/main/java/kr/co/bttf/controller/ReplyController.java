package kr.co.bttf.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.bttf.domain.ReplyVO;
import kr.co.bttf.service.ReplyService;

@RestController
@RequestMapping("/reply/*")
public class ReplyController {

	@Inject
	private ReplyService service;
	
	@PostMapping(value = "/new/{urls}", consumes = "application/json;charset=utf-8", produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> create(@RequestBody ReplyVO reply){
		if (service.register(reply) == 1) {
			return new ResponseEntity<>("success", HttpStatus.OK);
			
		}else
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	
	@GetMapping(value = "/page/{board_category_id}/{post_id}/{page}", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<List<ReplyVO>> getList(			
			@PathVariable("board_category_id") int board_category_id,
			@PathVariable("page") int page,
			@PathVariable("post_id") Long post_id){
		
		Map <String, Object> reply_id_category = new HashMap<String, Object>();
		
		reply_id_category.put("post_id", post_id);
		reply_id_category.put("board_category_id", board_category_id);
				
		Criteria crit = new Criteria(page, 10);
		return new ResponseEntity<>(service.getList(crit, reply_id_category), HttpStatus.OK);
	}
	
	@GetMapping(value = "/{reply_id}/{board_category_id}", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_UTF8_VALUE})
	public ResponseEntity<ReplyVO> get(@PathVariable("reply_id") Long reply_id, @PathVariable("board_category_id") int board_category_id){
		
		Map <String, Object> reply_id_category = new HashMap<String, Object>();
		
		reply_id_category.put("reply_id", reply_id);
		reply_id_category.put("board_category_id", board_category_id);
		
		return new ResponseEntity<>(service.get(reply_id_category), HttpStatus.OK);
	}
	
	@PostMapping(value = "/{board_category_id}/{reply_id}", produces = {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> remove(@PathVariable("reply_id") Long reply_id, @PathVariable("board_category_id") int board_category_id){
		

		Map <String, Object> reply_id_category2 = new HashMap<String, Object>();
		
		reply_id_category2.put("reply_id", reply_id);
		reply_id_category2.put("board_category_id", board_category_id);
				
		return service.remove(reply_id_category2) == 1?
				new ResponseEntity<>("success", HttpStatus.OK) :
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	
	@PostMapping(value = "/{board_category_id}/{reply_id}/{reply_contents}")
	public Map<String, Object> replyupdate(@PathVariable int board_category_id, @PathVariable int reply_id, @PathVariable String reply_contents) {
		Map<String, Object> map = new HashMap<String, Object>();
		try {
			ReplyVO replybean = new ReplyVO();
			replybean.setReply_id(reply_id);
			replybean.setBoard_category_id(board_category_id);
			replybean.setReply_contents(reply_contents);
			
			service.replyupdate(replybean);
			map.put("result", "success");
		} catch (Exception e) {
			e.printStackTrace();
			map.put("result", "fail");
		}
		return map;
	}
	
}
