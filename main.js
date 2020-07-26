let plyname = prompt("名前を入力してください");
let flag = true;
let flag2 = true;
//プレイヤーステータス
let plyLv = 1;
let plyHp = 6;
let plyHpMax = 6;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = [5, 15, 50];

let plyImg = document.getElementById("plyImg");
let plySt = [
  "plySt0",
  "plySt1",
  "plySt2",
  "plySt3",
  "plySt4",
  "plySt5",
  "plySt6",
];
for (let i = 0; i < plySt.length; i++) {
  plySt[i] = document.getElementById[i];
}
plySt0.textContent = plyname;
//プレイヤーのヒール(押す、離す)
plyImg.addEventListener("mousedown", () => {
  if (flag && flag2) {
    plyImg.src = "img/playerC.png";
  }
});
plyImg.addEventListener("mouseup", () => {
  if (flag && flag2) {
    plyImg.src = "img/playerA.png";
    plyHp += plyHeal;
    if (plyHp > plyHpMax) {
      plyHp = plyHpMax;
    }
    plySt2.textContent = "HP:" + plyHp;
  }
});
//敵のステータス
let eneName = [
  "スライム",
  "コウモリ",
  "ネズミ",
  "ヘビ",
  "オオカミ",
  "オニ",
  "ゴースト",
  "ゾンビ",
  "ヒノタマ",
  "クマ",
];
let eneLv = 0;
let eneHp = 10;
let eneHpMax = 10;
let eneAtt = 2;
let eneKill = 0;
let eneCnt = 5;
let eneCntMax = 5;
let eneExp = 1;
let eneSt = ["eneSt0", "eneSt1", "eneSt2", "eneSt3", "eneSt4"];
for (let i = 0; i < eneSt.length; i++) {
  eneSt[i] = document.getElementById[i];
}

//エネミーへのアタック(押す、離す)
eneImg.addEventListener("mousedown", () => {
  if (flag && flag2) {
    eneImg.src = "img/enemyB" + eneLv + ".png";
  }
});
eneImg.addEventListener("mouseup", () => {
  if (flag && flag2) {
    eneImg.src = "img/enemyA" + eneLv + ".png";
    if (eneHp > 0) {
      eneHp -= plyAtt;
    } else {
      eneHp = eneHpMax;
      eneKill++;
      eneSt4.textContent = "倒した回数：" + eneKill;
      if (flag && eneKill > 14) {
        plyImg.src = "img/clear.png";
        eneImg.src = "img/enemyT.png";
        eneSec.textContent = "おめでとう！";
        flag2 = false;
        clearInterval(loop);
      }
      //経験値の処理
      plyExp += eneExp;
      plySt5.textContent = "経験値:" + plyExp;
      plyExpNext -= eneExp;
      //レベルアップの処理
      if (plyExpNext == 0) {
        plyExpNext = plyExpNeed[plyLv];
        plyLv++;
        plySt1.textContent = "レベル:" + plyLv;
        plyHpMax = plyLv * 2 + 6;
        plyHp = plyHpMax;
        plySt2.textContent = "HP:" + plyHp;
        plyAtt++;
        plySt3.textContent = "攻撃力" + plyAtt;
        plyHeal++;
        plySt4.textContent = "回復魔法" + plyHeal;
      }
      plySt6.textContent = "次のレベルまでの経験値" + plyExpNext + "ポイント";
    }
    eneSt2.textContent = "HP:" + eneHp;
  }
});
//敵の攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
  if (eneCnt > 0) {
    eneCnt--;
    eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
  } else {
    plyImg.src = "img/playerB.png";
    plyHp -= eneAtt;
    if (plyHp > 0) {
      plySt2.textContent = "HP:" + plyHp;
      eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
    } else {
      plyHp = 0;
      clearInterval(loop);
      plySt2.textContent = "HP" + plyHp;
      eneSec.textContent = "GAMEOVER";
      flag = false;
    }
    setTimeout(() => {
      if (flag && flag2) {
        eneCnt = eneCntMax;
        plyImg.src = "img/playerA.png";
        eneSec.textContent = "モンスターの攻撃まで" + eneCnt + "秒";
      }
    }, 500);
  }
}, 1000);
//次のモンスターボタン
let right = document.getElementById("right");
right.addEventListener("click", () => {
  if (flag && eneLv < 9 && flag2) {
    eneLv += 1;
    eneImg.src = "img/enemyA" + eneLv + ".png";
    eneSt0.textContent = eneName[eneLv];
    eneHpMax += 10;
    eneHp = eneHpMax;
    eneAtt += 1;
    eneExp += 1;
    eneCnt = 5;
    eneSt1.textContent = "レベル：" + eneLv;
    eneSt2.textContent = "HP:" + eneHp;
    eneSt3.textContent = "攻撃力:" + eneAtt;
  }
});
//逃げるボタン
let left = document.getElementById("left");
left.addEventListener("click", () => {
  if (flag && flag2 && eneLv > 0) {
    eneLv -= 1;
    eneImg.src = "img/enemyA" + eneLv + ".png";
    eneSt0.textContent = eneName[eneLv];
    eneHpMax -= 10;
    eneHp = eneHpMax;
    eneAtt -= 1;
    eneExp -= 1;
    eneCnt = 5;
    eneSt1.textContent = "レベル：" + eneLv;
    eneSt2.textContent = "HP:" + eneHp;
    eneSt3.textContent = "攻撃力:" + eneAtt;
  }
});
