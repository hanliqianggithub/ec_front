$(function(){$("#login-btn").click(function(){var t="http://47.92.107.76/server",n=$("#username"),o=$("#password"),s="";if(""==$.trim(n.val())?(s="用户名不能为空",n.focus()):""==$.trim(o.val())&&(s="密码不能为空",o.focus()),""!=s)$(".box .msg").html(s);else{var e=$.trim(n.val()),a=$.trim(o.val());$.ajax({type:"POST",url:t+"/login",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{account:e,password:a},dataType:"json",success:function(n){if("200"!=n.code)return $(".box .msg").html("用户名或密码不正确，请重新输入"),!1;$.ajax({type:"GET",url:t+"/user/role",headers:{token:n.data.token},dataType:"json",success:function(t){"200"==t.code&&((new Cookies).set("md_user","username="+e+"&password="+a+"&token="+n.data.token+"&role="+t.data[0].name,"h1"),"manager"==t.data[0].name?window.location.href="statistics.html":window.location.href="datalist.html")},error:function(t){console.log(t),$(".box .msg").html("请求失败，请联系管理员")}})},error:function(t){console.log(t),$(".box .msg").html("请求失败，请联系管理员")}})}}),$(document).keydown(function(t){13===t.keyCode&&$("#login-btn").trigger("click")}),$("#username").focus(function(){$(this).parents(".input").addClass("input-focus")}),$("#username").blur(function(){$(this).parents(".input").removeClass("input-focus")}),$("#password").focus(function(){$(this).parents(".input").addClass("input-focus")}),$("#password").blur(function(){$(this).parents(".input").removeClass("input-focus")})});