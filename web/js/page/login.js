$(function(){$("#login-btn").click(function(){var o="http://47.92.107.76/server",n=$("#username"),s=$("#password"),t="";if(""==$.trim(n.val())?(t="用户名不能为空",n.focus()):""==$.trim(s.val())&&(t="密码不能为空",s.focus()),""!=t)$(".box .msg").html(t);else{var e=n.val(),a=s.val();$.ajax({type:"POST",url:o+"/login",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{account:e,password:a},dataType:"json",success:function(n){if("200"!=n.code)return $(".box .msg").html("用户名或密码不正确，请重新输入"),!1;$.ajax({type:"GET",url:o+"/user/role",headers:{token:n.data.token},dataType:"json",success:function(o){"200"==o.code&&((new Cookies).set("md_user","username="+e+"&password="+a+"&token="+n.data.token+"&role="+o.data[0].name,"h1"),window.location.href="datalist.html")},error:function(o){console.log(o),$(".box .msg").html("请求失败，请联系管理员")}})},error:function(o){console.log(o),$(".box .msg").html("请求失败，请联系管理员")}})}}),$(document).keydown(function(o){13===o.keyCode&&$("#login-btn").trigger("click")}),$("#username").focus(function(){$(this).parents(".input").addClass("input-focus")}),$("#username").blur(function(){$(this).parents(".input").removeClass("input-focus")}),$("#password").focus(function(){$(this).parents(".input").addClass("input-focus")}),$("#password").blur(function(){$(this).parents(".input").removeClass("input-focus")})});