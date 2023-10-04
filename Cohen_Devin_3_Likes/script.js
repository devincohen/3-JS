function addLike1() {
    var like1 = document.querySelector("#likes-header-1");
    var likeCount1 = like1.innerText.split(" ")[0];
    likeCount1++;
    like1.innerText = likeCount1 + " Like(s)";
}
function addLike2() {
    var like2 = document.querySelector("#likes-header-2");
    var likeCount2 = like2.innerText.split(" ")[0];
    likeCount2++;
    like2.innerText = likeCount2 + " Like(s)";
}
function addLike3() {
    var like3 = document.querySelector("#likes-header-3");
    var likeCount3 = like3.innerText.split(" ")[0];
    likeCount3++;
    like3.innerText = likeCount3 + " Like(s)";
}