function init() {
    canvas = document.getElementById("canvas"),
    stage = new createjs.Stage(canvas),
    void 0 == window.orientation ? options_mobile = !1 : (options_mobile = !0, options_orientation = window.orientation, createjs.Touch.enable(stage), stage.enableMouseOver(10), stage.mouseMoveOutside = !0),
    "undefined" == typeof console && (console = {});
    var e = 1,
    i = "my_adventure_book_2";
    com.funtomic.GameOps.init(i, e, {},
    {},
    null);
    var t = document.documentElement.style;
    if (t.cssText = t.cssText ? "": "overflow:hidden;width:100%;height:100%", _W = canvas.width, _H = canvas.height, options_square) {
        _W = document.body.clientWidth,
        _H = document.body.clientHeight;
        var a = Math.min(_W, _H);
        _W = a,
        _H = a,
        canvas.width = _W,
        canvas.height = _H
    } else options_mobile && (_W = document.body.clientWidth, _H = document.body.clientHeight, canvas.width = _W, canvas.height = _H);
    scaleGraphics = Math.min(_W / 1024, _H / 768),
    console.log("options_mobile:", options_mobile),
    refreshSize(),
    console.log("_W: " + Math.floor(_W) + "_" + Math.floor(_H) + ", " + scaleGraphics),
    hitHero *= scaleGraphics,
    language = new eliteLang,
    language.add_lang_xml("en"),
    language.loadSettings(),
    bgLoad = new createjs.Shape,
    bgLoad.graphics.beginFill("#000000").drawRect(0, 0, _W, _H),
    stage.addChild(bgLoad),
    bInit = !0,
    LoadBack = new createjs.Container,
    stage.addChild(LoadBack),
    scrContainer = new createjs.Container,
    stage.addChild(scrContainer),
    preload = new createjs.LoadQueue(!1),
    preload.installPlugin(createjs.Sound),
    preload.addEventListener("complete", handleComplete),
    preload.addEventListener("progress", handleProgress),
    createjs.Sound.alternateExtensions = ["m4a"],
    0 == options_mobile && window.addEventListener("resize", resize),
    HTML5API_preloaderStarted(),
    preload.loadFile({
        id: "LoadBack1",
        src: "static/LoadBack1.jpg"
    }),
    preload.loadFile({
        id: "barLoad",
        src: "static/barLoad.png"
    }),
    preload.loadFile({
        id: "comix1",
        src: "static/comix1.png"
    }),
    preload.loadFile({
        id: "comix2",
        src: "static/comix2.png"
    }),
    loadManifest(),
    stage.update()
}
function loadManifest() {
    preload.loadManifest([{
        id: "bgMenu",
        src: "static/bgMenu.jpg"
    },
    {
        id: "bgChapter",
        src: "static/bgChapter.jpg"
    },
    {
        id: "chapter1",
        src: "static/chapter1.png"
    },
    {
        id: "chapter2",
        src: "static/chapter2.png"
    },
    {
        id: "chapter3",
        src: "static/chapter3.png"
    },
    {
        id: "chapter4",
        src: "static/chapter4.png"
    },
    {
        id: "bgComix",
        src: "static/bgComix.jpg"
    },
    {
        id: "comicsEnd",
        src: "static/comicsEnd.png"
    },
    {
        id: "location1_1_dark",
        src: "static/location1_1_dark.png"
    },
    {
        id: "location1_2_daynight",
        src: "static/location1_2_daynight.png"
    },
    {
        id: "location1_3_day",
        src: "static/location1_3_day.png"
    },
    {
        id: "location1_4_daynight",
        src: "static/location1_4_daynight.png"
    },
    {
        id: "location1_6_daynight",
        src: "static/location1_6_daynight.png"
    },
    {
        id: "location1_8_mech",
        src: "static/location1_8_mech.jpg"
    },
    {
        id: "location3_4_engine",
        src: "static/location3_4_engine.jpg"
    },
    {
        id: "location3_6_lock",
        src: "static/location3_6_lock.jpg"
    },
    {
        id: "location1_1",
        src: "static/location1_1.jpg"
    },
    {
        id: "location1_2",
        src: "static/location1_2.png"
    },
    {
        id: "location1_3",
        src: "static/location1_3.png"
    },
    {
        id: "location1_4",
        src: "static/location1_4.png"
    },
    {
        id: "location1_5",
        src: "static/location1_5.png"
    },
    {
        id: "location1_6",
        src: "static/location1_6.png"
    },
    {
        id: "location1_7",
        src: "static/location1_7.png"
    },
    {
        id: "location1_8",
        src: "static/location1_8.png"
    },
    {
        id: "location2_1",
        src: "static/location2_1.jpg"
    },
    {
        id: "location2_2",
        src: "static/location2_2.jpg"
    },
    {
        id: "location2_3",
        src: "static/location2_3.jpg"
    },
    {
        id: "location2_4",
        src: "static/location2_4.jpg"
    },
    {
        id: "location2_5",
        src: "static/location2_5.jpg"
    },
    {
        id: "location2_6",
        src: "static/location2_6.jpg"
    },
    {
        id: "location2_7",
        src: "static/location2_7.jpg"
    },
    {
        id: "location2_8",
        src: "static/location2_8.jpg"
    },
    {
        id: "location2_9",
        src: "static/location2_9.jpg"
    },
    {
        id: "location2_10",
        src: "static/location2_10.jpg"
    },
    {
        id: "location2_11",
        src: "static/location2_11.jpg"
    },
    {
        id: "location2_12",
        src: "static/location2_12.jpg"
    },
    {
        id: "location3_1",
        src: "static/location3_1.jpg"
    },
    {
        id: "location3_1_gr",
        src: "static/location3_1_gr.jpg"
    },
    {
        id: "location3_2",
        src: "static/location3_2.jpg"
    },
    {
        id: "location3_2_gr",
        src: "static/location3_2_gr.jpg"
    },
    {
        id: "location3_3",
        src: "static/location3_3.jpg"
    },
    {
        id: "location3_4",
        src: "static/location3_4.jpg"
    },
    {
        id: "location3_5",
        src: "static/location3_5.jpg"
    },
    {
        id: "location3_6",
        src: "static/location3_6.jpg"
    },
    {
        id: "location3_7",
        src: "static/location3_7.jpg"
    },
    {
        id: "location3_8",
        src: "static/location3_8.jpg"
    },
    {
        id: "location3_9",
        src: "static/location3_9.jpg"
    },
    {
        id: "l1_1_door",
        src: "static/l1_1_door.png"
    },
    {
        id: "l1_1_key",
        src: "static/l1_1_key.png"
    },
    {
        id: "l1_1_torch",
        src: "static/l1_1_torch.png"
    },
    {
        id: "l1_1_well",
        src: "static/l1_1_well.png"
    },
    {
        id: "l1_1_boxClose",
        src: "static/l1_1_boxClose.png"
    },
    {
        id: "l1_1_boxOpen",
        src: "static/l1_1_boxOpen.png"
    },
    {
        id: "l1_2_stool",
        src: "static/l1_2_stool.png"
    },
    {
        id: "l1_2_text",
        src: "static/l1_2_text.png"
    },
    {
        id: "l1_3_bottle1",
        src: "static/l1_3_bottle1.png"
    },
    {
        id: "l1_3_bottle2",
        src: "static/l1_3_bottle2.png"
    },
    {
        id: "l1_3_bottle3",
        src: "static/l1_3_bottle3.png"
    },
    {
        id: "l1_3_bottle4",
        src: "static/l1_3_bottle4.png"
    },
    {
        id: "l1_3_knob",
        src: "static/l1_3_knob.png"
    },
    {
        id: "l1_3_clock",
        src: "static/l1_3_clock.png"
    },
    {
        id: "l1_4_door",
        src: "static/l1_4_door.png"
    },
    {
        id: "l1_4_head",
        src: "static/l1_4_head.png"
    },
    {
        id: "l1_4_body",
        src: "static/l1_4_body.png"
    },
    {
        id: "l1_4_text",
        src: "static/l1_4_text.png"
    },
    {
        id: "l1_5_door",
        src: "static/l1_5_door.png"
    },
    {
        id: "l1_5_key",
        src: "static/l1_5_key.png"
    },
    {
        id: "l1_5_gear",
        src: "static/l1_5_gear.png"
    },
    {
        id: "l1_5_torch",
        src: "static/l1_5_torch.png"
    },
    {
        id: "l1_6_PrincessSleep",
        src: "static/l1_6_PrincessSleep.png"
    },
    {
        id: "l1_6_PrincessStay",
        src: "static/l1_6_PrincessStay.png"
    },
    {
        id: "l1_6_text",
        src: "static/l1_6_text.png"
    },
    {
        id: "l1_6_teleport",
        src: "static/l1_6_teleport.png"
    },
    {
        id: "l1_7_loza",
        src: "static/l1_7_loza.png"
    },
    {
        id: "l1_7_gear",
        src: "static/l1_7_gear.png"
    },
    {
        id: "l1_8_gate1",
        src: "static/l1_8_gate1.png"
    },
    {
        id: "l1_8_gate2",
        src: "static/l1_8_gate2.png"
    },
    {
        id: "l1_8_wheel",
        src: "static/l1_8_wheel.png"
    },
    {
        id: "l1_8_desk",
        src: "static/l1_8_desk.png"
    },
    {
        id: "l1_8_gear",
        src: "static/l1_8_gear.png"
    },
    {
        id: "l1_8_gear1",
        src: "static/l1_8_gear1.png"
    },
    {
        id: "l1_8_gear2",
        src: "static/l1_8_gear2.png"
    },
    {
        id: "l1_8_gear3",
        src: "static/l1_8_gear3.png"
    },
    {
        id: "l1_8_gear1Big",
        src: "static/l1_8_gear1Big.png"
    },
    {
        id: "l1_8_gear2Big",
        src: "static/l1_8_gear2Big.png"
    },
    {
        id: "l1_8_gear3Big",
        src: "static/l1_8_gear3Big.png"
    },
    {
        id: "l1_8_key",
        src: "static/l1_8_key.png"
    },
    {
        id: "l2_1_fire",
        src: "static/l2_1_fire.png"
    },
    {
        id: "l2_2_column",
        src: "static/l2_2_column.png"
    },
    {
        id: "l2_3_lamp",
        src: "static/l2_3_lamp.png"
    },
    {
        id: "l2_3_water",
        src: "static/l2_3_water.png"
    },
    {
        id: "l2_3_text",
        src: "static/l2_3_text.png"
    },
    {
        id: "l2_4_banana",
        src: "static/l2_4_banana.png"
    },
    {
        id: "l2_4_door",
        src: "static/l2_4_door.png"
    },
    {
        id: "l2_4_wheel1",
        src: "static/l2_4_wheel1.png"
    },
    {
        id: "l2_4_wheel2",
        src: "static/l2_4_wheel2.png"
    },
    {
        id: "l2_4_btnLeft",
        src: "static/l2_4_btnLeft.png"
    },
    {
        id: "l2_4_btnRight",
        src: "static/l2_4_btnRight.png"
    },
    {
        id: "l2_4_wheel1d",
        src: "static/l2_4_wheel1d.png"
    },
    {
        id: "l2_5_stella",
        src: "static/l2_5_stella.png"
    },
    {
        id: "l2_5_trap",
        src: "static/l2_5_trap.png"
    },
    {
        id: "l2_7_bamboo",
        src: "static/l2_7_bamboo.png"
    },
    {
        id: "l2_7_rope",
        src: "static/l2_7_rope.png"
    },
    {
        id: "l2_8_ladder",
        src: "static/l2_8_ladder.png"
    },
    {
        id: "l2_8_balance",
        src: "static/l2_8_balance.png"
    },
    {
        id: "l2_8_ready",
        src: "static/l2_8_ready.png"
    },
    {
        id: "l2_9_rope1",
        src: "static/l2_9_rope1.png"
    },
    {
        id: "l2_9_rope2",
        src: "static/l2_9_rope2.png"
    },
    {
        id: "l2_9_cage",
        src: "static/l2_9_cage.png"
    },
    {
        id: "l2_9_cage2",
        src: "static/l2_9_cage2.png"
    },
    {
        id: "l2_9_air",
        src: "static/l2_9_air.png"
    },
    {
        id: "l2_10_door",
        src: "static/l2_10_door.png"
    },
    {
        id: "l2_10_blocks",
        src: "static/l2_10_blocks.png"
    },
    {
        id: "l2_10_border",
        src: "static/l2_10_border.png"
    },
    {
        id: "l2_10_eatrh",
        src: "static/l2_10_eatrh.png"
    },
    {
        id: "l2_11_border",
        src: "static/l2_11_border.png"
    },
    {
        id: "l2_11_block1",
        src: "static/l2_11_block1.png"
    },
    {
        id: "l2_11_block2",
        src: "static/l2_11_block2.png"
    },
    {
        id: "l2_12_border",
        src: "static/l2_12_border.png"
    },
    {
        id: "l2_12_mark",
        src: "static/l2_12_mark.png"
    },
    {
        id: "l2_12_door",
        src: "static/l2_12_door.png"
    },
    {
        id: "l2_12_light",
        src: "static/l2_12_light.png"
    },
    {
        id: "l2_20_wheel1",
        src: "static/l2_20_wheel1.png"
    },
    {
        id: "l2_20_wheel2",
        src: "static/l2_20_wheel2.png"
    },
    {
        id: "l3_1_lego",
        src: "static/l3_1_lego.png"
    },
    {
        id: "l3_1_valve",
        src: "static/l3_1_valve.png"
    },
    {
        id: "l3_2_button",
        src: "static/l3_2_button.png"
    },
    {
        id: "l3_2_slot",
        src: "static/l3_2_slot.png"
    },
    {
        id: "l3_2_magnet",
        src: "static/l3_2_magnet.png"
    },
    {
        id: "l3_2_lamp1G",
        src: "static/l3_2_lamp1G.png"
    },
    {
        id: "l3_2_lamp1R",
        src: "static/l3_2_lamp1R.png"
    },
    {
        id: "l3_2_lamp2G",
        src: "static/l3_2_lamp2G.png"
    },
    {
        id: "l3_2_lamp2R",
        src: "static/l3_2_lamp2R.png"
    },
    {
        id: "l3_2_lamp3G",
        src: "static/l3_2_lamp3G.png"
    },
    {
        id: "l3_2_lamp3R",
        src: "static/l3_2_lamp3R.png"
    },
    {
        id: "l3_2_off",
        src: "static/l3_2_off.png"
    },
    {
        id: "l3_2_start",
        src: "static/l3_2_start.png"
    },
    {
        id: "l3_3_fuel",
        src: "static/l3_3_fuel.png"
    },
    {
        id: "l3_3_lego",
        src: "static/l3_3_lego.png"
    },
    {
        id: "l3_4_displayOff",
        src: "static/l3_4_displayOff.png"
    },
    {
        id: "l3_4_displayOn",
        src: "static/l3_4_displayOn.png"
    },
    {
        id: "l3_4_aq",
        src: "static/l3_4_aq.png"
    },
    {
        id: "l3_4_book",
        src: "static/l3_4_book.png"
    },
    {
        id: "l3_4_cola",
        src: "static/l3_4_cola.png"
    },
    {
        id: "l3_4_stool",
        src: "static/l3_4_stool.png"
    },
    {
        id: "l3_4_nut",
        src: "static/l3_4_nut.png"
    },
    {
        id: "l3_4_legoB",
        src: "static/l3_4_legoB.png"
    },
    {
        id: "l3_4_legoG",
        src: "static/l3_4_legoG.png"
    },
    {
        id: "l3_4_legoR",
        src: "static/l3_4_legoR.png"
    },
    {
        id: "l3_4_legoY",
        src: "static/l3_4_legoY.png"
    },
    {
        id: "l3_4_solved",
        src: "static/l3_4_solved.png"
    },
    {
        id: "l3_4_unsolved",
        src: "static/l3_4_unsolved.png"
    },
    {
        id: "l3_5_detector",
        src: "static/l3_5_detector.png"
    },
    {
        id: "l3_5_lego",
        src: "static/l3_5_lego.png"
    },
    {
        id: "l3_5_mainValve",
        src: "static/l3_5_mainValve.png"
    },
    {
        id: "l3_5_pool",
        src: "static/l3_5_pool.png"
    },
    {
        id: "l3_5_valve",
        src: "static/l3_5_valve.png"
    },
    {
        id: "l3_6_bgLock",
        src: "static/l3_6_bgLock.png"
    },
    {
        id: "l3_6_door",
        src: "static/l3_6_door.png"
    },
    {
        id: "l3_6_lamp",
        src: "static/l3_6_lamp.png"
    },
    {
        id: "l3_6_lock",
        src: "static/l3_6_lock.png"
    },
    {
        id: "l3_6_lock1",
        src: "static/l3_6_lock1.png"
    },
    {
        id: "l3_6_lock2",
        src: "static/l3_6_lock2.png"
    },
    {
        id: "l3_7_lego",
        src: "static/l3_7_lego.png"
    },
    {
        id: "l3_7_magnet",
        src: "static/l3_7_magnet.png"
    },
    {
        id: "l3_detector",
        src: "static/l3_detector.png"
    },
    {
        id: "ind1",
        src: "static/ind1.png"
    },
    {
        id: "ind2",
        src: "static/ind2.png"
    },
    {
        id: "ind3",
        src: "static/ind3.png"
    },
    {
        id: "puzzle_alpha",
        src: "static/puzzle_alpha.png"
    },
    {
        id: "puzzle_for_anim",
        src: "static/puzzle_for_anim.png"
    },
    {
        id: "puzzle_light",
        src: "static/puzzle_light.png"
    },
    {
        id: "puzzle_ico",
        src: "static/puzzle_ico.png"
    },
    {
        id: "arrowRed",
        src: "static/arrowRed.png"
    },
    {
        id: "block",
        src: "static/block.png"
    },
    {
        id: "grass1",
        src: "static/grass1.png"
    },
    {
        id: "grass2",
        src: "static/grass2.png"
    },
    {
        id: "grass3",
        src: "static/grass3.png"
    },
    {
        id: "heartEmpty",
        src: "static/heartEmpty.png"
    },
    {
        id: "heartFull",
        src: "static/heartFull.png"
    },
    {
        id: "loza1",
        src: "static/loza1.png"
    },
    {
        id: "loza2",
        src: "static/loza2.png"
    },
    {
        id: "trap",
        src: "static/trap.png"
    },
    {
        id: "wayRun",
        src: "static/wayRun.png"
    },
    {
        id: "earth",
        src: "static/earth.jpg"
    },
    {
        id: "moon",
        src: "static/moon.png"
    },
    {
        id: "heartEmptyR",
        src: "static/heartEmpty.png"
    },
    {
        id: "heartFullR",
        src: "static/heartFull.png"
    },
    {
        id: "wayFly",
        src: "static/wayFly.png"
    },
    {
        id: "arrowGreen",
        src: "static/arrowGreen.png"
    },
    {
        id: "rocket",
        src: "static/rocket.png"
    },
    {
        id: "fire",
        src: "static/fire.png"
    },
    {
        id: "cloud1",
        src: "static/cloud1.png"
    },
    {
        id: "cloud2",
        src: "static/cloud2.png"
    },
    {
        id: "star",
        src: "static/star.png"
    },
    {
        id: "plane1",
        src: "static/plane1.png"
    },
    {
        id: "plane2",
        src: "static/plane2.png"
    },
    {
        id: "plane3",
        src: "static/plane3.png"
    },
    {
        id: "asteroid1",
        src: "static/asteroid1.png"
    },
    {
        id: "asteroid2",
        src: "static/asteroid2.png"
    },
    {
        id: "asteroid3",
        src: "static/asteroid3.png"
    },
    {
        id: "asteroid4",
        src: "static/asteroid4.png"
    },
    {
        id: "asteroid5",
        src: "static/asteroid5.png"
    },
    {
        id: "asteroid6",
        src: "static/asteroid6.png"
    },
    {
        id: "vent",
        src: "static/vent.png"
    },
    {
        id: "i_l1_1_key",
        src: "static/l1_1_key.png"
    },
    {
        id: "i_l1_2_stool",
        src: "static/l1_2_stool.png"
    },
    {
        id: "i_l1_3_bottle1",
        src: "static/l1_3_bottle1.png"
    },
    {
        id: "i_l1_3_bottle2",
        src: "static/l1_3_bottle2.png"
    },
    {
        id: "i_l1_3_bottle3",
        src: "static/l1_3_bottle3.png"
    },
    {
        id: "i_l1_3_knob",
        src: "static/l1_3_knob.png"
    },
    {
        id: "i_l1_5_gear",
        src: "static/l1_5_gear.png"
    },
    {
        id: "i_l1_5_key",
        src: "static/l1_5_key.png"
    },
    {
        id: "i_l1_5_torch",
        src: "static/l1_5_torch.png"
    },
    {
        id: "i_l1_7_gear",
        src: "static/l1_7_gear.png"
    },
    {
        id: "i_l1_8_gear",
        src: "static/l1_8_gear.png"
    },
    {
        id: "i_l1_8_key",
        src: "static/l1_8_key.png"
    },
    {
        id: "i_l2_1_fire",
        src: "static/l2_1_fire.png"
    },
    {
        id: "i_l2_3_lamp",
        src: "static/l2_3_lamp.png"
    },
    {
        id: "i_l2_3_water",
        src: "static/l2_3_water.png"
    },
    {
        id: "i_l2_4_banana",
        src: "static/l2_4_banana.png"
    },
    {
        id: "i_l2_7_rope",
        src: "static/l2_7_rope.png"
    },
    {
        id: "i_l2_9_air",
        src: "static/l2_9_air.png"
    },
    {
        id: "i_l2_10_eatrh",
        src: "static/l2_10_eatrh.png"
    },
    {
        id: "i_l3_1_lego",
        src: "static/l3_1_lego.png"
    },
    {
        id: "i_l3_1_valve",
        src: "static/l3_1_valve.png"
    },
    {
        id: "i_l3_3_lego",
        src: "static/l3_3_lego.png"
    },
    {
        id: "i_l3_4_cola",
        src: "static/l3_4_cola.png"
    },
    {
        id: "i_l3_5_detector",
        src: "static/l3_5_detector.png"
    },
    {
        id: "i_l3_5_lego",
        src: "static/l3_5_lego.png"
    },
    {
        id: "i_l3_7_lego",
        src: "static/l3_7_lego.png"
    },
    {
        id: "i_l3_7_magnet",
        src: "static/l3_7_magnet.png"
    },
    {
        id: "heroMove",
        src: "static/heroMove.png"
    },
    {
        id: "heroJump",
        src: "static/heroJump.png"
    },
    {
        id: "heroRoll",
        src: "static/heroRoll.png"
    },
    {
        id: "heroRun",
        src: "static/heroRun.png"
    },
    {
        id: "heroSoar",
        src: "static/heroSoar.png"
    },
    {
        id: "popuasBody",
        src: "static/popuasBody.png"
    },
    {
        id: "popuasFoot",
        src: "static/popuasFoot.png"
    },
    {
        id: "popuasHand1",
        src: "static/popuasHand1.png"
    },
    {
        id: "popuasHand2",
        src: "static/popuasHand2.png"
    },
    {
        id: "popuasSpear",
        src: "static/popuasSpear.png"
    },
    {
        id: "helmet",
        src: "static/helmet.png"
    },
    {
        id: "animFire",
        src: "static/animFire.png"
    },
    {
        id: "btnUp",
        src: "static/btnUp.png"
    },
    {
        id: "btnDown",
        src: "static/btnDown.png"
    },
    {
        id: "btnExit",
        src: "static/btnExit.png"
    },
    {
        id: "btnPlay",
        src: "static/btnPlay.png"
    },
    {
        id: "btnPlayActiv",
        src: "static/btnPlayActiv.png"
    },
    {
        id: "ButtonSoundOff",
        src: "static/ButtonSoundOff.png"
    },
    {
        id: "ButtonSoundOffActiv",
        src: "static/ButtonSoundOffActiv.png"
    },
    {
        id: "ButtonSoundOn",
        src: "static/ButtonSoundOn.png"
    },
    {
        id: "ButtonSoundOnActiv",
        src: "static/ButtonSoundOnActiv.png"
    },
    {
        id: "btnReset",
        src: "static/btnReset.png"
    },
    {
        id: "btnResetActiv",
        src: "static/btnResetActiv.png"
    },
    {
        id: "ButtonAchiv",
        src: "static/ButtonAchiv.png"
    },
    {
        id: "ButtonAchivActiv",
        src: "static/ButtonAchivActiv.png"
    },
    {
        id: "ButtonCredits",
        src: "static/ButtonCredits.png"
    },
    {
        id: "ButtonCreditsActiv",
        src: "static/ButtonCreditsActiv.png"
    },
    {
        id: "ButtonNext",
        src: "static/ButtonNext.png"
    },
    {
        id: "ButtonNextActiv",
        src: "static/ButtonNextActiv.png"
    },
    {
        id: "ButtonMenu",
        src: "static/ButtonMenu.png"
    },
    {
        id: "ButtonMenuActiv",
        src: "static/ButtonMenuActiv.png"
    },
    {
        id: "ButtonPause",
        src: "static/ButtonPause.png"
    },
    {
        id: "ButtonPauseActiv",
        src: "static/ButtonPauseActiv.png"
    },
    {
        id: "ResetButtonNo",
        src: "static/ResetButtonNo.png"
    },
    {
        id: "ResetButtonNoActiv",
        src: "static/ResetButtonNoActiv.png"
    },
    {
        id: "ResetButtonYes",
        src: "static/ResetButtonYes.png"
    },
    {
        id: "ResetButtonYesActiv",
        src: "static/ResetButtonYesActiv.png"
    },
    {
        id: "ButtonHint",
        src: "static/ButtonHint.png"
    },
    {
        id: "ButtonHintActiv",
        src: "static/ButtonHintActiv.png"
    },
    {
        id: "Strelka1",
        src: "static/Strelka1.png"
    },
    {
        id: "Strelka2",
        src: "static/Strelka2.png"
    },
    {
        id: "Strelka3",
        src: "static/Strelka3.png"
    },
    {
        id: "Strelka4",
        src: "static/Strelka4.png"
    },
    {
        id: "Strelka5",
        src: "static/Strelka5.png"
    },
    {
        id: "Strelka6",
        src: "static/Strelka6.png"
    },
    {
        id: "Strelka7",
        src: "static/Strelka7.png"
    },
    {
        id: "Strelka8",
        src: "static/Strelka8.png"
    },
    {
        id: "Cell",
        src: "static/Cell.png"
    },
    {
        id: "medal",
        src: "static/medal.png"
    },
    {
        id: "Oblachko1",
        src: "static/Oblachko1.png"
    },
    {
        id: "Credits_Plashka",
        src: "static/Credits_Plashka.png"
    },
    {
        id: "ResetPlashka",
        src: "static/ResetPlashka.jpg"
    },
    {
        id: "glow_add",
        src: "static/glow_add.png"
    },
    {
        id: "lock",
        src: "static/lock.png"
    },
    {
        id: "puzzle",
        src: "static/puzzle.png"
    },
    {
        id: "puzzleEmpty",
        src: "static/puzzleEmpty.png"
    },
    {
        id: "tfCongrat",
        src: "static/tfCongrat.png"
    },
    {
        id: "handTutor",
        src: "static/Hand.png"
    },
    {
        id: "OpenSansExtrabold",
        src: "static/segoepr.ttf"
    },
    {
        id: "Impact",
        src: "static/impact.ttf"
    },
    {
        id: "musicMenu",
        src: "static/musicMenu.ogg"
    },
    {
        id: "musicGame",
        src: "static/musicGame.ogg"
    }])
}
function spritesLoad() {
    if (sprites_loaded) return ! 0;
    sprites_loaded = !0;
    var e, i;
    e = preload.getResult("animFire"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            width: 68,
            height: 82,
            count: 5,
            regY: 0
        },
        animations: {
            one: [0, 4, !0, .5]
        }
    }),
    dataAnima.animFire = i,
    e = preload.getResult("l1_3_bottle4"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 46,
            height: 68,
            count: 7
        },
        animations: {
            one: [0, 6]
        }
    }),
    dataAnima.l1_3_bottle4 = i,
    e = preload.getResult("l1_3_clock"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 123,
            height: 290,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.l1_3_clock = i,
    e = preload.getResult("location1_3_day"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 642,
            height: 85,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.location1_3_day = i,
    e = preload.getResult("location1_2_daynight"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 561,
            height: 436,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.location1_2_daynight = i,
    e = preload.getResult("location1_4_daynight"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 564,
            height: 436,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.location1_4_daynight = i,
    e = preload.getResult("location1_6_daynight"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 562,
            height: 460,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.location1_6_daynight = i,
    e = preload.getResult("l1_5_door"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 197,
            height: 240,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.l1_5_door = i,
    e = preload.getResult("block"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 140,
            height: 426,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.block = i,
    e = preload.getResult("l1_4_head"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 100,
            height: 96,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.l1_4_head = i,
    e = preload.getResult("heroMove"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 93,
            height: 136,
            count: 15
        },
        animations: {
            one: [0, 14, !0, .8]
        }
    }),
    dataAnima.heroMove = i,
    e = preload.getResult("heroJump"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 104,
            height: 203,
            count: 15
        },
        animations: {
            one: [0, 14, !1, .6]
        }
    }),
    dataAnima.heroJump = i,
    e = preload.getResult("heroRoll"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 156,
            height: 170,
            count: 15
        },
        animations: {
            one: [0, 14, !0, .6]
        }
    }),
    dataAnima.heroRoll = i,
    e = preload.getResult("heroRun"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 98,
            height: 147,
            count: 15
        },
        animations: {
            one: [0, 14, !0, .8]
        }
    }),
    dataAnima.heroRun = i,
    e = preload.getResult("l1_6_teleport"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 200,
            height: 80,
            count: 3
        },
        animations: {
            one: [0, 2, !0, .2]
        }
    }),
    dataAnima.l1_6_teleport = i,
    e = preload.getResult("l3_3_fuel"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 102,
            height: 194,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.l3_3_fuel = i,
    e = preload.getResult("l3_6_lamp"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 49,
            height: 50,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.l3_6_lamp = i,
    e = preload.getResult("l3_6_lock"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 182,
            height: 64,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.l3_6_lock = i,
    e = preload.getResult("vent"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 8,
            height: 65,
            count: 2
        },
        animations: {
            one: [0, 1, !0, .4]
        }
    }),
    dataAnima.vent = i,
    e = preload.getResult("medal"),
    i = new createjs.SpriteSheet({
        images: [e],
        frames: {
            regX: 0,
            regY: 0,
            width: 100,
            height: 97,
            count: 2
        },
        animations: {
            one: [0, 1]
        }
    }),
    dataAnima.medal = i
}
function handleProgress() {
    if (progresPrecentage = Math.round(100 * preload.progress), HTML5API_preloaderProgress(progresPrecentage), null == LoadBack1) {
        var e = preload.getResult("LoadBack1");
        e && (LoadBack1 = new createjs.Bitmap(e), LoadBack1.scaleX = scaleGraphics, LoadBack1.scaleY = scaleGraphics, LoadBack1.x = 0, LoadBack1.y = 0, LoadBack.addChild(LoadBack1))
    }
    if (null == barLoad) {
        var e = preload.getResult("barLoad");
        if (e) {
            barLoad = new createjs.Bitmap(e),
            barLoad.scaleX = scaleGraphics,
            barLoad.scaleY = scaleGraphics,
            barLoad.x = 259 * scaleGraphics,
            barLoad.y = 618 * scaleGraphics,
            LoadBack.addChild(barLoad);
            var i = 496 * scaleGraphics,
            t = 380 * scaleGraphics;
            maskLoad = new createjs.Shape,
            maskLoad.x = barLoad.x - i,
            maskLoad.y = barLoad.y,
            maskLoad.graphics.beginFill("#FFFFFF").drawRect(0, 0, i, t),
            barLoad.mask = maskLoad
        }
    }
    if (null == comix1Load) {
        var e = preload.getResult("comix1");
        if (e) {
            comix1Load = new createjs.Container;
            var a = new createjs.Bitmap(e);
            a.x = -(a.image.width / 2),
            a.y = -(a.image.height / 2),
            comix1Load.addChild(a),
            comix1Load.scaleX = .9 * scaleGraphics,
            comix1Load.scaleY = .9 * scaleGraphics,
            comix1Load.x = 512 * scaleGraphics,
            comix1Load.y = 320 * scaleGraphics,
            LoadBack.addChild(comix1Load)
        }
    }
    if (null == comix2Load) {
        var e = preload.getResult("comix2");
        if (e) {
            comix2Load = new createjs.Container;
            var a = new createjs.Bitmap(e);
            a.x = -(a.image.width / 2),
            a.y = -(a.image.height / 2),
            comix2Load.addChild(a),
            comix2Load.scaleX = .9 * scaleGraphics,
            comix2Load.scaleY = .9 * scaleGraphics,
            comix2Load.x = 512 * scaleGraphics,
            comix2Load.y = 320 * scaleGraphics,
            comix2Load.visible = !1,
            LoadBack.addChild(comix2Load)
        }
    }
    if (progresPrecentage > 65 && 0 == transitionLoad && comix1Load && comix2Load && (transitionLoad = !0, comix2Load.alpha = 0, comix2Load.visible = !0, createjs.Tween.get(comix1Load).to({
        alpha: 0
    },
    500), createjs.Tween.get(comix2Load).to({
        alpha: 1
    },
    500)), barLoad) {
        var i = 496 * scaleGraphics;
        barLoad.mask.x = barLoad.x - i + i * preload.progress
    }
    stage.update()
}
function handleComplete() {
    preload.removeEventListener("complete", handleComplete),
    preload.removeEventListener("progress", handleProgress),
    HTML5API_preloaderEnded(),
    loadData(),
    spritesLoad(),
    ScreenPause = new ScrPause,
    ScreenPause.visible = !1,
    stage.addChild(ScreenPause),
    refreshSize(),
    stage.update(),
    start()
}
function getTimer() {
    var e = new Date,
    i = e.getTime();
    return i
}
function refreshTime() {
    options_pause || ScreenGame && ScreenPause && (14 == login_obj.location || 16 == login_obj.location || 27 == login_obj.location || 28 == login_obj.location) && ScreenGame.resetTimer()
}
function turnFPS() {
    0 == options_pause && ScreenGame && ScreenPause && ScreenPause.update(),
    stage.update()
}
function saveInvent() {
    if (isLocalStorageAvailable()) {
        if (invent_obj && login_obj.arInvent) {
            login_obj.arInvent = [];
            for (var e = 0; e < invent_obj.length; e++) {
                var i = invent_obj[e];
                i && login_obj.arInvent.push(i.name)
            }
        }
        if (invent_obj2 && login_obj.arInvent2) {
            login_obj.arInvent2 = [];
            for (var e = 0; e < invent_obj2.length; e++) {
                var i = invent_obj2[e];
                i && login_obj.arInvent2.push(i.name)
            }
        }
        if (invent_obj3 && login_obj.arInvent3) {
            login_obj.arInvent3 = [];
            for (var e = 0; e < invent_obj3.length; e++) {
                var i = invent_obj3[e];
                i && login_obj.arInvent3.push(i.name)
            }
        }
    }
}
function saveData() {
    if (isLocalStorageAvailable()) {
        saveInvent();
        var e = JSON.stringify(login_obj);
        localStorage.setItem("my_little_story", e),
        localStorage.setItem("options_music", options_music),
        localStorage.setItem("options_sound", options_sound)
    }
}
function loadData() {
    if (isLocalStorageAvailable()) if (localStorage.getItem("my_little_story")) {
        var e = localStorage.getItem("my_little_story");
        login_obj = JSON.parse(e),
        options_music = "true" == localStorage.getItem("options_music"),
        options_sound = "true" == localStorage.getItem("options_sound"),
        checkData()
    } else login_obj.arInvent = [],
    invent_obj = [],
    login_obj.arInvent2 = [],
    invent_obj2 = [],
    login_obj.arInvent3 = [],
    invent_obj3 = [],
    console.log("Loading: fail!")
}
function checkData() {
    void 0 == login_obj.arInvent && (login_obj.arInvent = []),
    void 0 == login_obj.arInvent2 && (login_obj.arInvent2 = []),
    void 0 == login_obj.arInvent3 && (login_obj.arInvent3 = [])
}
function isLocalStorageAvailable() {
    try {
        return "localStorage" in window && null !== window.localStorage
    } catch(e) {
        return console.log("localStorage_failed:", e),
        !1
    }
}
function removeSelf(e) {
    e && e.parent.contains(e) && e.parent.removeChild(e)
}
function start() {
    if (bgLoad.removeEventListener("mousedown", start), stage.removeChild(maskLoad), stage.removeChild(bgLoad), LoadBack && stage.removeChild(LoadBack), barLoad && (stage.removeChild(barLoad), stage.removeChild(maskLoad)), comix1Load && stage.removeChild(comix1Load), comix2Load && stage.removeChild(comix2Load), fps_time = getTimer(), createjs.Ticker.on("tick", turnFPS, stage), createjs.Ticker.setInterval(40), login_obj.location) {
        showGame(login_obj.location);
        var e = getLevelNumber();
        com.funtomic.GameOps.levelStarted(e)
    } else {
        showGame(1);
        var e = getLevelNumber(1);
        com.funtomic.GameOps.levelStarted(1)
    }
}
function reportFound(e, i) {
    com.funtomic.GameOps.reportEvent("item_found", {
        story_id: lvlNumber,
        location_id: locNumber,
        item_id: e,
        item_name: i
    })
}
function reportUsed(e, i) {
    com.funtomic.GameOps.reportEvent("item_used", {
        story_id: lvlNumber,
        location_id: locNumber,
        item_id: e,
        item_name: i
    })
}
function reportHint(e, i) {
    com.funtomic.GameOps.reportEvent("hint_used", {
        story_id: lvlNumber,
        location_id: locNumber,
        item_id: e,
        item_name: i
    })
}
function getLevelNumber(e) {
    var i = login_obj.location;
    e && (i = e);
    var t = 1;
    return i && (i > 20 ? t = 3 : i > 8 && (t = 2)),
    t
}
function getFirstTime(e) {
    return e ? !1 : !0
}
function getLocation(e) {
    var i = getLevelNumber(e),
    t = 1;
    return 1 == i ? t = e: 2 == i ? t = e - 8 : 3 == i && (t = e - 20),
    t
}
function music_stop() {
    createjs.Sound.stop()
}
function music_play(e) {
    musicTheme != e && options_music && (musicTheme = e, createjs.Sound.stop(), createjs.Sound.play(e, createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1))
}
function sound_play(e) {
    options_sound && createjs.Sound.play(e, createjs.Sound.INTERRUPT_NONE, 0, 0, 0, 1)
}
function getTime() {
    return createjs.Ticker.getTime()
}
function getText(e) {
    return language.get_txt(e)
}
function get_txt(e) {
    return language.get_txt(e)
}
function xml_get_children(e) {
    var i;
    return e.childNodes && (i = e.childNodes),
    e.children && (i = e.children),
    i
}
function get_child_by_attr(e, i, t) {
    var a = xml_get_children(e);
    for (var n in a) {
        var s = a[n];
        if (s.getAttribute && s.getAttribute(i) == t) return s
    }
    return null
}
function get_xml_by_attr(e, i, t) {
    for (var a in e) {
        var n = e[a];
        if (n.getAttribute && n.getAttribute(i) == t) return n
    }
    return null
}
function get_child_by_name(e, i) {
    var t = xml_get_children(e);
    for (var a in t) {
        var n = t[a];
        if (n.getAttribute && n.tagName == i) return n = xml_get_children(n)
    }
}
function get_xml_length(e) {
    var i = e,
    t = 0;
    for (var a in i) {
        var n = i[a];
        n.getAttribute && (t += 1)
    }
    return t
}
function get_normal_time(e) {
    if (0 > e) return "00:00";
    var i = Math.round(e / 1e3),
    t = Math.floor(i / 60);
    i -= 60 * t;
    var a = String(i),
    n = String(t);
    return 10 > i && i >= 0 && (a = "0" + String(i)),
    10 > t && t >= 0 && (n = "0" + String(t)),
    n + ":" + a
}
function removeAllScreens() {
    ScreenPause.visible = !1,
    ScreenMenu && (scrContainer.removeChild(ScreenMenu), ScreenMenu = null),
    ScreenGame && (scrContainer.removeChild(ScreenGame), ScreenGame = null),
    ScreenSelect && (scrContainer.removeChild(ScreenSelect), ScreenSelect = null),
    currentScreen && (scrContainer.removeChild(currentScreen), currentScreen = null)
}
function removeHint() {
    for (; hintGroup.children.length > 0;) {
        var e = hintGroup.children[0];
        hintGroup.removeChild(e)
    }
}
function addHint(e) {
    if (removeHint(), e) {
        var i = 30 * scaleGraphics,
        t = new createjs.Shape;
        t.graphics.beginFill("#000000").drawRect(0, 0, _W, i),
        t.alpha = .65,
        hintGroup.addChild(t);
        var a = new createjs.Text(get_txt(e), "bold " + 16 * scaleGraphics + "px Arial", "#FFFFFF");
        a.x = _W / 2 - Math.ceil(a.getMeasuredWidth() / 2),
        a.y = _H - a.getMeasuredHeight() - 5 * scaleGraphics + options_txt_offset,
        t.y = a.y - 5 * scaleGraphics,
        hintGroup.addChild(a),
        stage.addChild(hintGroup)
    }
}
function show_fade_gfx(e) {
    var i = new createjs.Shape;
    i.graphics.beginFill("#000000").drawRect(0, 0, _W, _H),
    i.alpha = 0,
    stage.addChild(i),
    createjs.Tween.get(i).to({
        alpha: 1
    },
    300).call(function() {
        e(),
        stage.removeChild(i);
        var t = new createjs.Shape;
        t.graphics.beginFill("#000000").drawRect(0, 0, _W, _H),
        stage.addChild(t),
        createjs.Tween.get(t).to({
            alpha: 0
        },
        300).call(function() {
            stage.removeChild(t)
        })
    })
}
function showMenu() {
    show_fade_gfx(function() {
        removeAllScreens(),
        ScreenMenu = new ScrMenu,
        scrContainer.addChild(ScreenMenu),
        currentScreen = ScreenMenu,
        currentScreen.name = "menu"
    })
}
function showSelect() {
    show_fade_gfx(function() {
        removeAllScreens(),
        ScreenSelect = new ScrSelect,
        scrContainer.addChild(ScreenSelect),
        currentScreen = ScreenSelect,
        currentScreen.name = "levels"
    })
}
function showComix() {
    show_fade_gfx(function() {
        removeAllScreens(),
        ScreenComix = new ScrComix,
        scrContainer.addChild(ScreenComix),
        currentScreen = ScreenComix,
        currentScreen.name = "comix"
    })
}
function showGame(e) {
    login_obj.location && (login_obj.prevLoc = login_obj.location),
    e || (e = 1),
    lvlNumber = getLevelNumber(e),
    locNumber = getLocation(e),
    strFT = "ft" + String(e),
    fstTime = getFirstTime(login_obj[strFT]),
    com.funtomic.GameOps.reportEvent("location_entered", {
        story_id: lvlNumber,
        location_id: locNumber,
        first_time: fstTime
    }),
    login_obj[strFT] = !0,
    show_fade_gfx(function() {
        removeAllScreens(),
        0 == fstTime && HTML5API_levelEnded(),
        HTML5API_levelStarted();
        var i = "ScrLocation" + String(e);
        ScreenGame = new this[i],
        music_play("musicGame"),
        scrContainer.addChild(ScreenGame),
        currentScreen = ScreenGame,
        currentScreen.name = "game",
        ScreenPause.visible = !0,
        ScreenPause.resetHint(),
        ScreenPause.func1()
    })
}
function addScreen(e) {
    removeAllScreens(),
    "menu" == e ? (currentScreen = new ScrMenu, currentScreen.name = "menu") : "levels" == e ? (currentScreen = new ScrSelect, currentScreen.name = "levels") : "game" == e && (currentScreen = new ScrGame, currentScreen.name = "game"),
    scrContainer.addChild(currentScreen)
}
function updateScreen() {
    ScreenPause && ScreenPause.refreshPosition(),
    currentScreen && ("game" == currentScreen.name ? showGame(login_obj.location) : addScreen(currentScreen.name))
}
function get_dd(e, i) {
    var t = i.x - e.x,
    a = i.y - e.y;
    return t * t + a * a
}
function getDD(e, i, t, a) {
    var n = t - e,
    s = a - i;
    return n * n + s * s
}
function hit_test(e, i, t, a) {
    var n = e.x - t,
    s = e.y - a,
    o = n * n + s * s;
    return i > o ? !0 : !1
}
function hit_test_rec(e, i, t, a, n) {
    return a > e.x - i / 2 && a < e.x + i / 2 && n > e.y - t / 2 && n < e.y + t / 2 ? !0 : !1
}
function sign(e) {
    return 0 > e && -1 || 1
}
function getXMLDocument(e) {
    var i;
    return window.XMLHttpRequest ? (i = new window.XMLHttpRequest, i.open("GET", e, !1), i.send(null), i.responseXML) : window.ActiveXObject ? (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = !1, i.load(e), i) : (console.log("Загрузка XML не поддерживается браузером"), null)
}
function refreshSize() {
    options_mobile ? (_W = Math.floor(document.body.clientWidth), _H = Math.floor(document.body.clientHeight)) : document.body.clientWidth > 1024 && document.body.clientHeight > 768 || (_W = Math.floor(document.body.clientWidth), _H = Math.floor(document.body.clientHeight));
    var e = 1;
    _W > _H ? (e = Math.min(_W / 1024, _H / 768), options_horizont = !0) : (e = Math.min(_W / 768, _H / 1024), options_horizont = !1),
    1 > e && (scaleGraphics = e, _W = 1024 * e, _H = 768 * e),
    canvas.width = Math.floor(_W),
    canvas.height = Math.floor(_H),
    updateScreen()
}
function getPageSize() {
    var e, i;
    window.innerHeight && window.scrollMaxY ? (e = document.body.scrollWidth, i = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (e = document.body.scrollWidth, i = document.body.scrollHeight) : document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight ? (e = document.documentElement.scrollWidth, i = document.documentElement.scrollHeight) : (e = document.body.offsetWidth, i = document.body.offsetHeight);
    var t, a;
    return self.innerHeight ? (t = self.innerWidth, a = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (t = document.documentElement.clientWidth, a = document.documentElement.clientHeight) : document.body && (t = document.body.clientWidth, a = document.body.clientHeight),
    pageHeight = a > i ? a: i,
    pageWidth = t > e ? t: e,
    [pageWidth, pageHeight, t, a]
}
function addScreenLock() {
    ScreenLock = new createjs.Container;
    var e = new createjs.Shape;
    e.graphics.beginFill("#000000").drawRect(0, 0, _W, _H),
    e.alpha = .8,
    ScreenLock.addChild(e);
    var i = new createjs.Text(get_txt("rotate_msg_err"), 40 * scaleGraphics + "px segoepr", "#FFFFFF");
    i.x = _W / 2 - Math.ceil(i.getMeasuredWidth() / 2),
    i.y = _H / 2 - 60 * scaleGraphics,
    ScreenLock.addChild(i),
    stage.addChild(ScreenLock),
    stage.update()
}
function refreshScaleGraphics() {
    options_mobile && (_W = document.body.clientWidth, _H = document.body.clientHeight, canvas.width = _W, canvas.height = _H),
    scaleGraphics = Math.min(_W / 1024, _H / 768),
    refreshSize(),
    options_txt_offset = -5 * scaleGraphics
}
function handleOrientation() {
    options_orientation != window.orientation && (options_orientation = window.orientation, refreshScaleGraphics(), updateScreen())
}
function resize() {
    refreshSize()
}
var _W, _H, _WO = 1024,
_HO = 768,
scaleGraphics = 1,
hitHero = 3e3,
login_obj = {};
login_obj.arInvent = [],
login_obj.arInvent2 = [],
login_obj.arInvent3 = [],
login_obj.arPuzzle = [],
login_obj.prevLoc = 1;
var invent_obj = null,
invent_obj2 = null,
invent_obj3 = null,
language, achievment, musicTheme = "none",
LoadBack = null,
LoadBack1 = null,
barLoad = null,
comix1Load = null,
comix2Load = null,
maskLoad = null,
sprites_loaded = !1,
transitionLoad = !1,
mouthSet, vekiSet, achievSet, dataAnima = [],
options_shop_enabled = !1,
options_debug = !1,
options_music = !0,
options_sound = !0,
options_mobile = !0,
options_square = !1,
options_pause = !1,
options_orientation = null,
options_horizont = !0,
options_txt_offset = 0,
lvlNumber = 1,
locNumber = 1,
strFT = "ft1",
fstTime = !0,
ScreenMenu,
ScreenGame,
ScreenSelect,
ScreenComix,
ScreenPause,
ScreenLock,
currentScreen,
scrContainer,
hintGroup = new createjs.Container,
fpsLabel = new createjs.Text("", "bold 20px Arial", "#FFFFFF");
fpsLabel.x = _W / 2 - Math.ceil(fpsLabel.getMeasuredWidth() / 2),
fpsLabel.y = 60;
var fps_time = 0,
frames = 0,
bInit = !1;
window.addEventListener("orientationchange", handleOrientation, !1);