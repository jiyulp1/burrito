$(".select-box").click(function() {
  var select = $(this);
  
  //드롭다운 열기
  select.addClass("open").next('.select-box-dropDown').slideDown(100).addClass("open");
  
  //다른영역 클릭 시 닫기
  $(document).mouseup(function(e) {
    var seting = $(".select-box-dropDown");
    if (seting.has(e.target).length === 0) {
      seting.removeClass("open").slideUp(100);
      select.removeClass("open");
    }
  });

  $(".select-box-dropDown a").click(function() {
    var option = $(this).text();
    
    //클릭 시 드롭다운 닫기
    $(".select-box-dropDown a").removeClass('selected');
    $(".select-box-dropDown").removeClass("open").slideUp(100);
    select.removeClass("open");
    $(this).addClass('selected');
    
    //select에  text 넣기
    select.text(option);
  });
});