package kr.co.bttf.domain;

public class AnnVO {

	private int post_id;
	private String post_subject;
	private String post_contents;
	private String user_nickname;
	private int post_vcount;
	private String post_regdate;
	private String post_available;

	public int getPost_id() {
		return post_id;
	}

	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}

	public String getPost_subject() {
		return post_subject;
	}

	public void setPost_subject(String post_subject) {
		this.post_subject = post_subject;
	}

	public String getPost_contents() {
		return post_contents;
	}

	public void setPost_contents(String post_contents) {
		this.post_contents = post_contents;
	}

	public String getUser_nickname() {
		return user_nickname;
	}

	public void setUser_nickname(String user_nickname) {
	}

	public int getPost_vcount() {
		return post_vcount;
	}

	public void setPost_vcount(int post_vcount) {
		this.post_vcount = post_vcount;
	}

	public String getPost_regdate() {
		return post_regdate;
	}

	public void setPost_regdate(String post_regdate) {
		this.post_regdate = post_regdate;
	}

	public String getPost_available() {
		return post_available;
	}

	public void setPost_available(String post_available) {
		this.post_available = post_available;
	}

}
