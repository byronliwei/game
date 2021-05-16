
// Ga Analytics
function sentEvent(category, action, label) {
    var category = category ? category : '',
        action = action ? action : '',
        label = label ? label : '';
    ga('send', 'event', category, action, label);
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    //UTM
    if (!r) {
        var reg = new RegExp("\/" + name + "\/(\\w+)");
        var r = location.href.match(reg) || [];
        var r = r[1] || null;
    }
    if (r != null) return unescape(r[2]);
    return null;
}
// 5 10	
$(function () {
     //写cookies    
	 function setCookie(name,value) { 
        var Days = 30; 
        var exp = new Date(); 
        exp.setTime(exp.getTime() + Days*24*60*60*1000); 
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=/";
    } 

    //读取cookies 
    function getCookie(name) { 
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

        if(arr=document.cookie.match(reg))

            return unescape(arr[2]); 
        else 
            return null; 
    } 
    if (getCookie('isseted') == null) {
        $.ajax({
            url: 'https://www.ecdbrain.com/getEuropeanUnion',
            type: 'GET',
            success: function(data) {
                console.log(data)
                if (data.isEU) {
                    $('#cookie-notice').show()
                    sentEvent('GDPR', 'display')
                }
            },
            error: function(err) {
                console.log(err)
            }
        })
        $('#game_frame').attr('src', $('#game_frame').attr('data-src'))
    } else {
        if ($('#game_frame').length > 0) {
            if ($('#game_frame').data('source') == 'gmdb') {
                if (getCookie('isseted') == 'true') {
                    $('#game_frame').attr('src', $('#game_frame').attr('data-src')+'?gdpr-targeting=1')
                } else {
                    $('#game_frame').attr('src', $('#game_frame').attr('data-src')+'?gdpr-targeting=0')
                }                  
            } else {
                $('#game_frame').attr('src', $('#game_frame').attr('data-src'))
            }
        }

    }

    $('#cn-accept-cookie').click(function() {
        setCookie('isseted', true)
        $('#cookie-notice').hide()
        sentEvent('GDPR', 'yes')
    })

    $('#cn-more-info').click(function() {   
        setCookie('isseted', false)     
        $('#cookie-notice').hide()
        sentEvent('GDPR', 'no')
    })
    $('#cn-close-notice').click(function() {   
        $('#cookie-notice').hide()
        sentEvent('GDPR', 'close')
    })    

    // index页面
    // 5 10点击首页不带标签游戏时发送
    $(".item-inner-new").on('click', function () {
        var cate = "homepage";
        var action = "enter";        
        var label = "";
        sentEvent(cate, action, label)
    })
    // info页面
    // 5 10点击详情页面play now按钮时发送
    $(".info-play").on('click', function () {
        var cata = "detailpage";
        var action = "play";
        var label = "";
        sentEvent(cata, action, label)
    })
    $("#rankid").on('click', function () {
        var cata = "homepage";
        var action = "rank";
        var label = "";
        sentEvent(cata, action, label)
    })
    $(".main-right").on('click', function () {
        var cata = "rankpage";
        var action = "enter";
        var label = "";
        sentEvent(cata, action, label)
    })
    // 5 10点击详情页面底部流行游戏时发送
    $(".pop_game_info").on('click', function () {
        var cata = "detailpage";
        var action = "revelant_list";
        var label = "";
        sentEvent(cata, action, label)
    })
    // 5 10点击详情页面底部相关游戏时发送
    $(".rel_game_info").on('click', function () {
        var cata = "detailpage";
        var action = "related_list";
        var label = "";
        sentEvent(cata, action, label)
    })
    // 5 10点击详情页顶部回首页按钮时发送
    $(".back-home").on('click', function () {
        var cata = "detailpage";
        var action = "homepage";
        var label = "";
        sentEvent(cata, action, label)
    })
    // play页面
    // 5 10点击游戏页面顶部回首页按钮时发送
    $("#game-home-button").on('click', function () {
        var cata = "playpage";
        var action = "homepage";
        var label = "";
        sentEvent(cata, action, label)
    })
    if (location.href.indexOf('free.game') > -1) {
        $('#playbot-as').hide();
        $('.related-toggle').hide();
    }
    var cLi = $('.style-iconlist li');
    $('.style-iconlist').width(cLi.width() * cLi.size() + 30);
    $('.related-toggle').on('click', function () {
        $('#play-box').toggleClass('botrel-toggle')
    })
    $('#game_frame').height($(window).height())
    $('#game_frame').width($(window).width())
    $(window).resize(function () {
        $('#game_frame').height($(window).height())
        $('#game_frame').width($(window).width())
    })
    $('.watchvideo').click(function () {
        $('html, body').animate({
            scrollTop: $('.gamevideobox').offset().top
        }, 500);
        sentEvent('detailpage', 'video', '', '')
    })
    $('.playnowvideobottombtn a').click(function () {
        sentEvent('detailpage', 'play', 'play_video', '')
    })
    $('.info-play').click(function () {
        sentEvent('detailpage', 'play', 'play', '')
    })
    $('#ClickToPlayButtton').click(function () {
        $('#adsContainer').hide()
        $('#play-box').show()
        $('.playloadadone').hide()
        sentEvent('playpage', 'play', '', '')
        $('.playdiergeguanggao').append($(`
		<div style="text-align: center;">
			<ins class="adsbygoogle"
			style="display:inline-block;width:300px;height:250px"
			data-ad-client="ca-pub-2104961258307381"
			data-ad-slot="6036433733"></ins>
			<script>
				(adsbygoogle = window.adsbygoogle || []).push({});
			</script>
		</div>
		`))
    })
    if ($('#play-box').length == 0) {
        jQuery.scrollDepth({
            minHeight: 0,
            elements: ['#all', 'footer'],
            // percentage: false,
            userTiming: false,
            pixelDepth: false,
            nonInteraction: false,
            eventHandler: function (data) {
                var point = data.eventLabel
                if (point == '#all') point = '0%'
                var action = 'homepage'
                if ($('.item-inner-new-fa').length == 0) {
                    action = 'detailpage'                   
                }
                sentEvent('scroll_depth', action, point, '')
            }
        })
    }
    var tempscrollflag = true
    var tempHomeFlag = 44
    if (window.innerWidth > 760) {
        tempHomeFlag = 43
    }
    $(window).scroll(function () {
        if (!tempscrollflag) return false
        if ($('.bottombannerad').length > 0 && $(window).scrollTop() > 150) {
            if (!$('.bottombannerad').hasClass('hadaddad')) {
                $('.bottombannerad').addClass('hadaddad')
                $('.bottombannerad').append($(`       			
				<div class="" style="width: 100%;text-align: center;overflow:hidden;">
					<ins class="adsbygoogle"
					style="display:inline-block;width:320px;height:50px"
					data-ad-client="ca-pub-2104961258307381"
					data-ad-slot="3402423737"></ins>
					<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
					</script>
				</div>
				`))
            }
        }
        if ($('.item-inner-new-fa').length != 0) {
            if (tempHomeFlag < $('.item-inner-new-fa li').length) {
                if ($($('.item-inner-new-fa li')[tempHomeFlag]).offset().top - $(window).height() - $(window).scrollTop() < 100) {
                    if (!$($('.item-inner-new-fa li')[tempHomeFlag]).hasClass('thisGongGongItemHadAddAd')) {
                        $($('.item-inner-new-fa li')[tempHomeFlag]).addClass('thisGongGongItemHadAddAd').addClass(`homeloop-${tempHomeFlag}`)
                        var slotId = '9764706004'
                        if (location.href.indexOf('s1.gamev6') > -1) {
                            slotId = '2633247449'
                        }
                        $(`       
						<div class="divLinePa" style="margin: 0.5rem 0;text-align: center;color: #ccc;font-size: 14px;position: relative;"><div class="divLine" style="border-bottom: 1px solid #e3e3e3 !important;background: none !important;width: 100%;color: #d9d9d9;height: 1px;position: absolute;top: 50%;margin-top: -2px;"></div><span style="background: #fff; position: relative;">ADVERTISMENT</span></div>                
						<div class="" style="width: 100%;text-align: center;overflow:hidden;">
							<ins class="adsbygoogle"
							style="display:inline-block;width:300px;height:250px"
							data-ad-client="ca-pub-2104961258307381"
							data-ad-slot="${slotId}"></ins>
							<script>
								(adsbygoogle = window.adsbygoogle || []).push({});
							</script>
						</div>
						`).insertAfter($($('.item-inner-new-fa li')[tempHomeFlag]))
                        if (window.innerWidth > 760) {
                            tempHomeFlag = tempHomeFlag + 44
                        } else {
                            tempHomeFlag = tempHomeFlag + 45
                        }  
                        console.log(tempHomeFlag)
                    }
                }
            }
        }
        if ($('.playloadadone').length > 0 && $(window).scrollTop() > 100) {
            if ($('.playloadadone').children().length > 0 && !$('.playloadadtwo').hasClass('hadaddad') && $('#play-box').css('display') == 'block') {
                $('.playloadadtwo').addClass('hadaddad')
                $('.playloadadtwo').append($(`
				<div style="text-align: center;">
					<ins class="adsbygoogle"
					style="display:inline-block;width:300px;height:250px"
					data-ad-client="ca-pub-2104961258307381"
					data-ad-slot="6036433733"></ins>
					<script>
						(adsbygoogle = window.adsbygoogle || []).push({});
					</script>
				</div>
				`))
            } else {
                if (!$('.playloadadone').hasClass('hadaddad')) {
                    $('.playloadadone').addClass('hadaddad')
                    $('.playloadadone').append($(`
					<div style="text-align: center;">
						<ins class="adsbygoogle"
						style="display:inline-block;width:300px;height:250px"
						data-ad-client="ca-pub-2104961258307381"
						data-ad-slot="7642704033"></ins>
						<script>
							(adsbygoogle = window.adsbygoogle || []).push({});
						</script>
					</div>
					`))
                }
            }
        }
        tempscrollflag = true
    })
    $('.drop_down').click(function () {
        $('.v6playdingwei').show()
        $(this).hide()
        $('.pul_up').show()
        sentEvent('playpage', 'topmenu', 'open', '')
    })
    $('.pul_up').click(function () {
        $('.v6playdingwei').hide()
        $(this).hide()
        $('.drop_down').show()
        sentEvent('playpage', 'topmenu', 'close', '')
    })
    $('.refresh').click(function() {
        sentEvent('playpage', 'topmenu', 'refresh', '')
    })
    $('.goback').click(function() {
        sentEvent('playpage', 'topmenu', 'goback', '')
    })
    $('.homepage').click(function() {
        sentEvent('playpage', 'topmenu', 'homepage', '')
    })
    $('.v6playtuijian a').click(function() {
        sentEvent('playpage', 'topmenu', 'revelant_list', '')
    })
    var $window = $(window);
    // 获取包含data-src属性的img，并以jQuery对象存入数组:
    var lazyImgs = $('img[data-src]').get().map(function (i) {
        return $(i);
    });
    // 定义事件函数:
    var onScroll = function () {
        // 获取页面滚动的高度:
        var wtop = $window.scrollTop();
        // 判断是否还有未加载的img:
        if (lazyImgs.length > 0) {
            // 获取可视区域高度:
            var wheight = $window.height();
            // 存放待删除的索引:
            var loadedIndex = [];
            // 循环处理数组的每个img元素:
            lazyImgs.forEach(function ($i, index) {
                // 判断是否在可视范围内:
                if ($i.offset().top - wtop < wheight) {
                    // 设置src属性:
                    $i.attr('src', $i.attr('data-src'));
                    // 添加到待删除数组:
                    loadedIndex.unshift(index);
                    var url = 'https://wangmeng.online/setGameIndexShowAmount'
                    if ($('.info-detail').length > 0) {
                        url = 'https://wangmeng.online/setGameDetailsShowAmount'
                    }
                    if ($('.v6playinfo').length > 0) {
                        url = 'https://wangmeng.online/setGamePlayShowAmount'
                    }
                    $.ajax({
                        url: url,
                        type: 'GET',
                        data: {
                            qid: $i.data('qid'),
                            lang: 'en',
                            website: 'gamev6',
                            type: 'mobile'
                        },
                        success: function (data) {
                            console.log(data)
                        },
                        error: function (err) {
                            console.log(err)
                        }
                    })
                }
            });
            // 删除已处理的对象:
            loadedIndex.forEach(function (index) {
                lazyImgs.splice(index, 1);
            });
        }
    };
    // 绑定事件:
    $window.scroll(onScroll);
    // 手动触发一次:
    onScroll();
})