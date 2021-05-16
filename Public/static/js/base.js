(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-48110498-17', 'auto');
ga('send', 'pageview', {
    'hitCallback': function() {
        var urlHost = window.location.protocol+"//"+window.location.host
        if ($('#pc_indexpage').length > 0) {
            history.replaceState({}, "", `${urlHost}`);
        }
    }
});

function sentEvent(category, action, label, value) {
    var category = category ? category : '',
        action = action ? action : '',
        label = label ? label : '';
    val = value ? value : '';
    ga('send', 'event', category, action, label, {
        dimension1: val
    });
}
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
    $(window).scroll(function () {
        var srollTop = $(window).scrollTop()
        if (srollTop > 100) {
            $('.backtotop').show()
        } else if (srollTop < 50) {
            $('.backtotop').hide()
        }
    })
    $('.gamefullbtn').hover(function() {
        $('.fullnothover').hide()
        $('.fullhashover').show()
    },function() {
        $('.fullhashover').hide()
        $('.fullnothover').show()
    })
    $('.watchdesc').hover(function() {
        $('.imgnothover').hide()
        $('.imghashover').show()
    },function() {
        $('.imghashover').hide()
        $('.imgnothover').show()
    })
    $('.close').hover(function() {
        $('.closenothover').hide()
        $('.closehashover').show()
    },function() {
        $('.closehashover').hide()
        $('.closenothover').show()
    })
    if($('.alertflash').length>0) {
        var myFlash = (function(){
            if(typeof window.ActiveXObject != "undefined"){
              return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            }else{
              return navigator.plugins['Shockwave Flash']
            }
        })()
        if(!myFlash) {
            $('.alertflash').removeClass('alertflashnone')
            $('body').addClass('bodydontscroll')
        }
    }
    $('.close_overlay').click(function() {
        $('.alertflash').addClass('alertflashnone')
        $('body').removeClass('bodydontscroll')
    })
    $('#gamePlay-content .gamePlay-button').click(function() {
        $('#gamePlay-content').hide()
        $('.gamePlay-content').hide() 
        $('.fullbg').removeClass('zindex108')  
        $('#gameBoxFlash iframe').show()
        if ($('#gameBoxFlash').data('source') == 'gmdb') {
            if (getCookie('isseted') == 'true') {
                $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src')+'?gdpr-targeting=1')
            } else if (getCookie('isseted') == 'false') {
                $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src')+'?gdpr-targeting=0')
            } else {
                $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src'))
            }
        } else {
            $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src'))
        }        
        if ($('#gameBoxFlash').data('width') != 0) {
            $('#gameBoxFlash').removeClass('.classgameBoxFlash')
            var realWidth = $('#gameBoxFlash').data('width')
            var realHeight = $('#gameBoxFlash').data('height')            
            if (realWidth>realHeight) {
                var resultHeight = $('.play-iframe').width() * realHeight / realWidth
                $('#gameBoxFlash').width('100%')
                $('#gameBoxFlash iframe').width('100%').height(resultHeight)
            }
            if (realWidth<realHeight) {
                var resultWidth = $('.play-iframe').height() * realWidth / realHeight
                $('#gameBoxFlash').height('100%')
                $('#gameBoxFlash iframe').width(resultWidth).height('100%')
            }
        }
        sentEvent('Playpage', 'play', '', '')
        var imgUrl = $('.detail-img img').attr('src')
        var url = $(this).data('href')
        var name = $('.detail-name').text()
        var oldMsg = JSON.parse(localStorage.getItem('played')) || ''
        if (!oldMsg) {
            oldMsg = []
        }
        var newOBJ = {
            img: imgUrl,
            url: url,
            name: name
        }
        var newoldMsg = oldMsg.filter(function (item) {
            return JSON.stringify(item) != JSON.stringify(newOBJ)
        })
        newoldMsg.unshift(newOBJ)
        localStorage.setItem('played', JSON.stringify(newoldMsg))
        $.ajax({
            url: '/game/setplaycount/'+$('#gamePlay-content').data('name')+'.html',
            type: 'GET',
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
        $.ajax({
            url: 'https://wangmeng.online/setGamePlayAmount',
            type: 'GET',
            data: {
                qid: $('#gamePlay-content').data('qid'),
                lang: 'en',
                website: 'gamev6',
                type:'pc'
            },
            success: function(data) {
                console.log(data)
            },
            error: function(err) {
                console.log(err)
            }
        })
        setInterval(function() {
            console.log('showad............................')
            PreRollAd.showAd()
            sentEvent('Playpage', 'ads', 'clocked', '')
        }, 90000)
    })

    if ($('#gamePlay-content').length > 0) {
        $.ajax({
            url: 'https://wangmeng.online/setDetailsShowAmount',
            type: 'GET',
            data: {
                qid: $('#gamePlay-content').data('qid'),
                lang: 'en',
                website: 'gamev6',
                type:'pc'
            },
            success: function(data) {
                console.log(data)
            },
            error: function(err) {
                console.log(err)
            }
        })
    }

    $('.gamePlay-content .gamePlay-button').click(function() {
        $('.gamePlay-content').hide()   
        $('#gamePlay-content').hide()   
        $('.fullbg').removeClass('zindex108')  
        $('#gameBoxFlash iframe').show()
        if ($('#gameBoxFlash').data('source') == 'gmdb') {
            if (getCookie('isseted') == 'true') {
                $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src')+'?gdpr-targeting=1')
            } else if (getCookie('isseted') == 'false') {
                $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src')+'?gdpr-targeting=0')
            } else {
                $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src'))
            }
        } else {
            $('#gameBoxFlash iframe').attr('src', $('#gameBoxFlash').data('src'))
        } 
        if ($('#gameBoxFlash').data('width') != 0) {
            $('#gameBoxFlash').removeClass('.classgameBoxFlash')
            var realWidth = $('#gameBoxFlash').data('width')
            var realHeight = $('#gameBoxFlash').data('height')            
            if (realWidth>realHeight) {
                var resultHeight = $('.play-iframe').width() * realHeight / realWidth
                $('#gameBoxFlash').width('100%')
                $('#gameBoxFlash iframe').width('100%').height(resultHeight)
            }
            if (realWidth<realHeight) {
                var resultWidth = $('.play-iframe').height() * realWidth / realHeight
                $('#gameBoxFlash').height('100%')
                $('#gameBoxFlash iframe').width(resultWidth).height('100%')
            }
        }
        sentEvent('Playpage', 'play', '', '')
        var imgUrl = $('.detail-img img').attr('src')
        var url = $(this).data('href')
        var name = $('.detail-name').text()
        var oldMsg = JSON.parse(localStorage.getItem('played')) || ''
        if (!oldMsg) {
            oldMsg = []
        }
        var newOBJ = {
            img: imgUrl,
            url: url,
            name: name
        }
        var newoldMsg = oldMsg.filter(function (item) {
            return JSON.stringify(item) != JSON.stringify(newOBJ)
        })
        newoldMsg.unshift(newOBJ)
        localStorage.setItem('played', JSON.stringify(newoldMsg))
        $.ajax({
            url: '/game/setplaycount/'+$('#gamePlay-content').data('name')+'.html',
            type: 'GET',
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
        $.ajax({
            url: 'https://wangmeng.online/setGamePlayAmount',
            type: 'GET',
            data: {
                qid: $('#gamePlay-content').data('qid'),
                lang: 'en',
                website: 'gamev6',
                type:'pc'
            },
            success: function(data) {
                console.log(data)
            },
            error: function(err) {
                console.log(err)
            }
        })
        setInterval(function() {
            console.log('showad............................')
            PreRollAd.showAd()
            sentEvent('Playpage', 'ads', 'clocked', '')
        }, 90000)
    })
    $('.watchvideo').click(function() {
        $('html, body').animate({
            scrollTop: $('.walk_video').offset().top
        }, 500);
        sentEvent('Playpage', 'action', 'walktrough', '')
    })
    $('.watchdesc').click(function() {
        $('html, body').animate({
            scrollTop: $('.walk_video').offset().top
        }, 500);
        sentEvent('Playpage', 'action', 'info', '')
    })
    $('.gobacktopalygame').click(function() {
        $('html, body').animate({
            scrollTop: $('.watchvideo').offset().top
        }, 500);
        sentEvent('Playpage', 'action', 'backtogame', '')
    })
    $('.close').click(function() {
        $('.fullbg').hide()
        // $('body').removeClass('bodydontscroll')        
        $('.detail-contain-duyiwuer').removeClass('zindexdayufull')
        $('.play-game-name').show()
        sentEvent('Playpage', 'action', 'closescreen', '')
    })
    $('.gamefullbtn').click(function() {
        $(window).scrollTop(0)
        $('.play-game-name').hide()
        $('.fullbg').show().height($('body').height())
        $('.detail-contain-duyiwuer').addClass('zindexdayufull')
        sentEvent('Playpage', 'action', 'fullscreen', '')
        // $('body').addClass('bodydontscroll') 
        if ($('.gamePlay-content').css('display') != 'none') {
            $('.fullbg').addClass('zindex108')    
        }        
    })
    $('.backtotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        $(this).hide()
    })
    $(document).on('mouseenter', '.games_list-item', function () {
        $(this).find('.game_name').stop().animate({
            'height': '45px'
        }, 200)
        $(this).find('.game-played-item').stop().show()
    })
    $(document).on('mouseleave', '.games_list-item', function () {
        $(this).find('.game_name').stop().animate({
            'height': '0px'
        }, 200)
        $(this).find('.game-played-item').stop().hide()
    })
    $(document).on('mouseenter', '.games_list-big-item', function () {
        $(this).find('.game_name').stop().animate({
            'height': '45px'
        }, 200)
    })
    $(document).on('mouseleave', '.games_list-big-item', function () {
        $(this).find('.game_name').stop().animate({
            'height': '0px'
        }, 200)
    })
    var loadMorePage = 2
    var scrollFlag = false
    var windowScrollFlag = true
    $(window).scroll(function () {
        var tempNumberS = $(document).height() - $(window).scrollTop() - $(window).height()
        if (tempNumberS > 150) return false
        if (!windowScrollFlag) return false
        if (scrollFlag) return false
        windowScrollFlag = false
        $('.contain_games').append($('<img style="width:100px;" id="loadingImg" src="/Public/static/images/loading2.gif">'))
        var tempSTR = $('.classify_games').data('current') || ''
        $.ajax({
            url: '/game/category/' + tempSTR + '-games.html',
            type: 'GET',
            dataType: "json",
            data: ({
                page: loadMorePage,
            }),
            success: function (data) {
                loadMorePage = loadMorePage + 1
                windowScrollFlag = true
                if (!data.html || !data.html.length || data.html.length == 0) {
                    scrollFlag = true
                    return false
                }
                var newArr = []
                var tempArr = []
                for (var i = 1; i < data.html.length + 1; i++) {
                    tempArr.push(data.html[i - 1])
                    if (i % 11 === 0) {
                        newArr.push(tempArr)
                        tempArr = []
                    }
                }
                newArr.forEach(function (e, i) {
                    var classstr = 'loadmorefristli' + new Date() / 1
                    var games_list = $('<div class="games_list"></div>')
                    if (i === 0) {
                        games_list.addClass(classstr)
                    }
                    var bigA = ''
                    var smallDiv = $('<div class="games_list-small-item"></div>')
                    e.forEach(function (item, d) {
                        var url = ''
                        var imgUrl = item.img
                        url = $('.contain_games').data('utmplay') + item.seo_name + '.html' + '?sr=' + item.source
                        var gotnewtag = ''
                        if (item.hot == 1) {
                            gotnewtag = '<img class="hotnewtag" src="/Public/static/images/hot_icon.png" alt="">'
                        }
                        if (item.new == 1) {
                            gotnewtag = '<img class="hotnewtag" src="/Public/static/images/new_icon1.png" alt="">'
                        }
                        if (d == 5) {
                            bigA = $('<a class="games_list-big-item" href="' + url + '" target="_blank"><img src="/Public/static/images/gamev61.png" data-src="' + imgUrl + '"><div class="game_name">' + item.name + '</div>' + gotnewtag + '</a>')
                        } else {
                            smallDiv.append($('<a class="games_list-item" href="' + url + '" target="_blank"><img src="/Public/static/images/gamev61.png" data-src="' + imgUrl + '"><div class="game_name">' + item.name + '</div>' + gotnewtag + '</a>'))
                        }
                    })
                    if (bigA === '') {
                        games_list.append(smallDiv)
                    } else {
                        if (i % 2 == 0) {
                            games_list.append(smallDiv, bigA)
                        } else {
                            games_list.append(bigA, smallDiv)
                        }
                    }
                    $('.contain_games').append(games_list)
                    // $('html, body').animate({
                    //     scrollTop: $('.' + classstr).offset().top
                    // }, 500);                                            
                    imgLazyLoad(classstr)
                })
            },
            error: function (err) {
                console.log(err)
            },
            complete: function () {
                $('#loadingImg').remove()
            }
        })
    })


})
$(function () {
    imgLazyLoad()
    $('.detail-shares-item').click(function () {
        var that = this
        var appname = $(this).data('app')
        var qid = $(this).data('qid') || ''
        var pic = $(this).data('pic') || ''
        if (appname === 'link') {
            var clipboard = new ClipboardJS('.applink', {
                text: function () {
                    return location.href
                }
            });
            alert('Success Copy')
        } else {
            share(qid, pic, appname)
        }
    })
    $('.classify-item-more').mouseenter(function () {
        $('.moreContent').show()
    })
    $(document).mouseover(function (e) {
        if (e.target != $('.classify-item-more')[0] && e.target != $('.moreContent')[0] && checkEl(e.target)) {
            $('.moreContent').hide()
        }

        function checkEl(el) {
            var tempFlag = true
            $('.more_content-item').each(function () {
                if ($(this)[0] == el) {
                    tempFlag = false
                }
            })
            return tempFlag
        }
    })
    $(document).on('click', '.game-played-item', function (event) {
        event.preventDefault()
        $(this).parent().remove()
        var imgUrl = $(this).prev().prev().attr('src')
        var url = $(this).parent().attr('href')
        var name = $(this).prev().text()
        var data = {
            img: imgUrl,
            url: url,
            name: name
        }
        var oldMsg = JSON.parse(localStorage.getItem('played')) || ''
        var newoldMsg = oldMsg.filter(function (item) {
            return JSON.stringify(item) != JSON.stringify(data)
        })
        localStorage.setItem('played', JSON.stringify(newoldMsg))
    })
    // $('.gamePlay-button').click(function () {
    //     var imgUrl = $('.detail-img img').attr('src')
    //     var url = $(this).attr('href')
    //     var name = $('.detail-name').text()
    //     var oldMsg = JSON.parse(localStorage.getItem('played')) || ''
    //     if (!oldMsg) {
    //         oldMsg = []
    //     }
    //     var newOBJ = {
    //         img: imgUrl,
    //         url: url,
    //         name: name
    //     }
    //     var newoldMsg = oldMsg.filter(function (item) {
    //         return JSON.stringify(item) != JSON.stringify(newOBJ)
    //     })
    //     newoldMsg.unshift(newOBJ)
    //     localStorage.setItem('played', JSON.stringify(newoldMsg))
    // })
    if ($('.search-result-wrap-list-played').length > 0) {
        var playedArr = JSON.parse(localStorage.getItem('played')) || []
        playedArr.forEach(function (e, i) {
            $('.search-result-wrap-list').append($('<a href="' + e.url + '" class="games_list-item" target="_blank"><img src="' + e.img + '"><div class="game_name">' + e.name + '</div><div class="game-played-item"><img src="/Public/static/images/deletegame.png"></div></a>'))
        })
    }
})

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function share(qid, pic, media) {
    var url = location.href + '/tag/share/pic/' + pic + '/?t=119&media=' + media;
    var utm = getQueryString('utm');
    if (utm) url = url + '&utm=' + utm;

    var version = getQueryString('v');
    if (version == 1) url = url + '&v=' + version;

    url = encodeURIComponent(url);
    var title = document.title.split(' - ')[0];
    var via = "";

    var locUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    switch (media) {
        case 'twitter':
            locUrl = 'https://twitter.com/share?url=' + url + '&text=' + title + '&via=' + via
            // locUrl='https://twitter.com/intent/tweet?url='+url+'&text='+title+'&via='+via
            break;
        case 'google':
            locUrl = 'https://plus.google.com/share?url=' + url;
            break;
        case 'messenger':
            locUrl = 'fb-messenger://share/?app_id=1053226548106670&link=' + url + '&redirect_uri=' + location.protocol +
                '//' + location.host;
            break;
        case 'pinterest':
            locUrl = 'http://pinterest.com/pin/create/link/?url=' + url + '&media=' + pic + '&description=' + title;
            break;
        case 'whatsapp':
            locUrl = "whatsapp://send?text=" + url
            break;
    }

    openwindow(locUrl, '', 800, 500);
}

function openwindow(url, name, iWidth, iHeight) {
    var url;
    var name;
    var iWidth;
    var iHeight;
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' +
        iWidth + ',top=' + iTop + ',left=' + iLeft +
        ',toolbar=no,menubar=no,scrollbars=auto,resizeable=yes,location=no,status=no');
}

function imgLazyLoad(currentClass) {
    /**
     *  图片懒加载
     * */
    // 获取window的引用:
    var $window = $(window);
    // 获取包含data-src属性的img，并以jQuery对象存入数组:
    var lazyImgs = $('img[data-src]').get().map(function (i) {
        return $(i);
    });
    // if(currentClass) {
    //     lazyImgs = lazyImgs.slice($('.'+currentClass).index() - 1 - $('.common_list-ul').children('div').length)
    // }
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
                    if($i.parent().hasClass('detail-img')) {
                        $i.attr('src', $i.attr('data-src'));
                    } else {
                        $i.attr('src', $i.attr('data-src')+'&t='+new Date()/1);
                    }
                    // 添加到待删除数组:
                    loadedIndex.unshift(index);
                    // var url = '//wangmeng.online/setShowAmount'
                    // if ($i.data('question') === 'test') {
                    //     url = '//wangmeng.online/setDetailsShowAmount'
                    //     if (location.href.match('share') !== null) {
                    //         url = '//wangmeng.online/setChannelTestAmount'
                    //     }
                    // } else if ($i.data('question') === 'result') {
                    //     url = '//wangmeng.online/setTestResultShowAmount'
                    // }
                    // $.ajax({
                    //     url: url,
                    //     type: 'GET',
                    //     data: {
                    //         qid: $i.data('qid'),
                    //         lang: $i.data('language'),
                    //         type: $i.data('type'),
                    //         website: 'topfun'
                    //     },
                    //     error: function (err) {
                    //         console.log(err)
                    //     }
                    // })
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
}

// ga事件打点
$(function () {
    $('.classify-item').click(function () {
        var label = $(this).data('label')
        if (label) {
            sentEvent('Navigation', 'category', label, '')
        }
    })
    $('.more_content-item').click(function () {
        var label = $(this).data('')
        sentEvent('Navigation', 'category', label, '')
    })
    $('.games_list-item').click(function () {
        sentEvent('Navigation', 'game_list', '', '')
        var self = this
        var url = 'https://wangmeng.online/setGameIndexClickAmount'
        if ($('.detail-contain').length > 0) {
            url = 'https://wangmeng.online/setGameDetailsClickAmount'
        }
        if ($('.search-input').length > 0) {
            url = 'https://wangmeng.online/setGameSearchClickAmount'
        }
        $.ajax({
          url: url,
          type: 'GET',
          data: {
              qid: $(self).find('img').data('qid'),
              lang: 'en',
              website: 'gamev6',
              type: 'pc'
          },
          success: function(data) {
              console.log(data)
          },
          error: function(err) {
              console.log(err)
          }
        })
    })
    $('.games_list-big-item').click(function () {
        sentEvent('Navigation', 'game_list', '', '')
        var self = this
        $.ajax({
          url: 'https://wangmeng.online/setGameIndexClickAmount',
          type: 'GET',
          data: {
              qid: $(self).find('img').data('qid'),
              lang: 'en',
              website: 'gamev6',
              type: 'pc'
          },
          success: function(data) {
              console.log(data)
          },
          error: function(err) {
              console.log(err)
          }
        })
    })
    $('.backtotop').click(function () {
        sentEvent('Navigation', 'backtotop', '', '')
    })
    $('.games_list .games_list-item').click(function () {
        sentEvent('Game_enter', 'homepage', '', '')
    })
    $('#searchBtn').click(function () {
        sentEvent('Navigation', 'search', '', '')
    })
    $('.games_list-item-topgame').click(function () {
        sentEvent('Game_enter', 'playpage', 'topgames', '')
    })
    $('.games_list-item-relatedgame').click(function () {
        sentEvent('Game_enter', 'playpage', 'relatedgames', '')
    })
    $('.detailmaylike').click(function () {
        sentEvent('Game_enter', 'playpage', 'maylike', '')
    })
    
})

