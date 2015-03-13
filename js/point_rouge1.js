<script>
<body onload="PointRouge()"> //加载页面，开始function PointRouge
function PointRouge()	//功能：延迟3秒，（此处还应该有：屏幕上出现3秒倒计时）
{
var t=setTimeout("setPoint()",3000)
}	
function setPoint() //开始游戏
{
  $(document).ready(function(){  //未完成！！！：点击，消失
  $("#hide").click(function(){
  $("p").hide();
  })
<onclick="style.color='white'"> //未完成！！！：点击红点，红点变为白点
}

var p = new Processing(document.getElementById("game"),function(p)){
	var point = [], mainPath = [[-50,50]], //不明白什么意思
		pause = false //不明白什么意思
	var colors = { //设定球的颜色：白色和红色
		point:{
			fill:[p.color(255，0，0)，p.color(255，255，255)]
			stroke:p.color(255)
		}
	}

}