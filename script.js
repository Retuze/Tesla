
var pi = 3.1415926535;//圆周率
var e0 = 8.854187817;//真空介电常数
var p = 18.15;//常温铜电阻率
function jisuan() {
    var DE = document.getElementById('xqzj');
    var NE = document.getElementById('xqzs');
    var WE = document.getElementById('rxzj');
    var SE = document.getElementById('zjj');

    var H = document.getElementById('xqgd');
    var L = document.getElementById('rxcd');
    var Q = document.getElementById('pzys');
    var Loop = document.getElementById('xqdg');
    var Cap = document.getElementById('jsdr');
    var Xl = document.getElementById('xzzk');
    var Freq = document.getElementById('xzpl');
    var Res = document.getElementById('zldz');

    var LengthValue = 0, ResValue = 0, QValue = 0, LoopValue = 0, HighValue = 0, XlValue = 0, FreqValue = 0, CapValue = 0;

    var N = Number(NE.value);
    var W = Number(WE.value);
    var S = Number(SE.value);
    var D = Number(DE.value);

    //骨架半径
    var R = D / 2;

    //绕线半径
    var r = W / 2;

    //绕线截面积
    var s = pi * r * r;

    //线圈高度
    HighValue =N*(W+S);

    //绕线长度
    LengthValue =N*pi*D/1000;

    //直流电阻
    ResValue =1000*p*LengthValue/s/1000000;

    //线圈电感
    LoopValue = (N*N*R/25.4*R/25.4)/(9*R/25.4+10*HighValue/25.4);

    //寄生电容
    CapValue = 5.08*R/25.4*(0.0563*((HighValue/25.4)/(R/25.4))+0.08+0.38*Math.sqrt(1/((HighValue/25.4)/(R/25.4))));

    //谐振频率
    FreqValue = 1000*(1/(2*pi*Math.sqrt(LoopValue*CapValue)));

    //谐振阻抗
    XlValue = 2*pi*FreqValue*LoopValue;

    //品质因数
    QValue = XlValue/ResValue;

    H.innerText = "线圈高度: " + HighValue.toFixed(4) + " mm";
    L.innerText = "绕线长度: " + LengthValue.toFixed(4) + "  m";
    Q.innerText = "品质因数: " + QValue.toFixed(4) ;
    Loop.innerText = "线圈电感: " + LoopValue.toFixed(4) + " uH";
    Cap.innerText = "寄生电容: " + CapValue.toFixed(4) + " pF";
    Res.innerText = "直流电阻: " + ResValue.toFixed(4) + " ohm";
    Xl.innerText = "谐振阻抗: " + XlValue.toFixed(4) + " ohm";
    Freq.innerText = "谐振频率: " + FreqValue.toFixed(4) + " MHz";
}




