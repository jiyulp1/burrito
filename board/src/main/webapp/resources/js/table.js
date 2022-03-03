$.extend($.fn.dataTable.defaults, {
  autoWidth: false,
  dom:
    `<'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i>` +
    `<'col-sm-12 col-md-7 dataTables_pager'lp>>`,
  language: {
    emptyTable: '데이터가 없습니다.',
    infoEmpty: '',
    info: ' _TOTAL_ 개의 데이터가 있습니다.',
    search: '<span>검색 :</span> _INPUT_',
    searchPlaceholder: '내용 입력...',
    lengthMenu: 'Display _MENU_',
    paginate: {
      first: 'First',
      last: 'Last',
      next: $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;',
      previous: $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;',
    },
  },
  // 검색 기능 숨기기
  searching: false,
  // 표시 건수기능 숨기기
  lengthChange: false,
  // 한 페이지에 표시되는 Row 수
  pageLength: 10,
});