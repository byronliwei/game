//payed history
var HistoryGame=(function(){
  var loadHistory=function(){
    if(!storage.get("HistoryGame","data")||storage.get("HistoryGame","data")==''){
      $("#J_gameBox").html('<p class="noHistory">You have not played any games,go to <a href="/">play games</a></p>');
      return false
    };
    var _hdata=storage.get("HistoryGame","data");
    var Hhtml="";
    if(_hdata.length<1){
      Hhtml='<p class="noHistory">You have not played any games,go to <a href="/">play games</a></p>';
    }else{
      for(var i=0;i<_hdata.length;i++){
        //console.log(_hdata[i].url);
        Hhtml+='<a target="_blank" href="'+_hdata[i].url+'" class="gmpage1"><em class="icon-close">&macr;</em><img  src="'+_hdata[i].img+'" original="'+_hdata[i].img+'" alt="'+_hdata[i].name+'"><span title="'+_hdata[i].name+'">'+_hdata[i].name+'</span><i>'+_hdata[i].date+'</i></a>';
      }
    }
    $("#J_gameBox>center").html(Hhtml);
  }
  var removeHistory=function(){
    $("#J_gameBox em").on("click",function(event){
      var _this=$(this),_parent=_this.parents("a"),_index=$("#J_gameBox").find('em').index(this)||0;

      var curURl=_parent.attr("href");
      var _hdata=storage.get("HistoryGame","data");
      for(var i=0;i<_hdata.length;i++){
        if(_hdata[i].url==curURl){
          _hdata.splice(i,1);
        }
      }

      storage.set("HistoryGame","data",_hdata);
      _parent.hide(200,function(){
        _parent.remove();
        if($("#J_gameBox a").length<=0){
            $("#J_gameBox>center").html('<li class="noHistory">You have not played any games,go to <a href="/">play games</a></li>');
        }
      });

      event.stopPropagation();
      return false;
    });
  }
  var removeAll=function(){
    $(".deleteAll").on("click",function(){
      if(confirm("Are you sure to delete all records?")){
          storage.set("HistoryGame","data","");
          window.location.reload();
      }
    });
  }
  return {
      init:function(){
        loadHistory();
        removeHistory();
        removeAll();
      }
  } 
})();
HistoryGame.init();