/*
var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '끝말잇기';
document.body.append(단어);
var 버튼 = document.createElement('input');
document.body.append(입력);
*/

var word = '끝말잇기'
while(true){
    var ans=prompt(word)
    if(word[word.length-1]===ans[0]){
        alert('딩동댕')
        word=ans;
    }else{
        alert('땡')
    }
}
