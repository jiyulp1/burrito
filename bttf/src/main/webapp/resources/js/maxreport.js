var maxChecked = 1;
var totalChecked = 0;
// 설정 끝
function CountChecked(field) {
if (field.checked)
totalChecked += 1;
else
totalChecked -= 1; 
if (totalChecked > maxChecked) {
alert ("신고사유를 1가지만 선택하세요.");
field.checked = false;
totalChecked -= 1;
} 
}
function ResetCount(){
totalChecked = 0;
}
