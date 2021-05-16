var timer, speed1 = 5, speed2 = 10,_distance=0;

shareData = {
    tTitle: "Panda Run, Experimente a emoção de correr legal！",
    tContent: "Panda Run, Experimente a emoção de correr legal！"
};

shareArr=['caramujos','rã','gato','gato','gato','gato','Robles','Robles','trem','trem','aeronave','aeronave','foguete'];

function getShareStr(){
    var _index=Math.floor(_distance/200);

    if(_index>12){
        str='Lightspeed';
    }else{
        str=shareArr[_index];
    }

    return 'Haha, eu corria '+_distance+' metros, transcender'+str+'！';
};


$(document).ready(function () {
 
    function share2() { 
        $('#gm-done-result').attr('src', 'static/bottom.png');
        $('#gm-done-title').html(getShareStr());
    }

    $('#gm-done-button-again').on('click touchstart', function () {
        window.location.reload();
    });

    $('#gm-done-button-share').on('click touchstart', function () {
        var url=location.href;
        window.location.href='https://www.facebook.com/sharer/sharer.php?u='+url;
    });

    $("#start-game").on('click touchstart',function () {
        $("#home-page").hide();
        var game = new Phaser.Game(document.body.clientWidth, document.body.clientHeight, Phaser.CANVAS, 'nima-game', { preload: preload, create: create, update: update });
        var background_wall, ground, nima, group, hitgroup, ishited = false, text, nimaJudge;
        var nimaData = { "frames": [
            {
                "filename": "jump",
                "frame": { "x": 0, "y": 0, "w": 101, "h": 93 },
                "rotated": false,
                "trimmed": true,
                "spriteSourceSize": { "x": 0, "y": 0, "w": 101, "h": 93 },
                "sourceSize": { "w": 101, "h": 93 }
            },
            {
                "filename": "squat",
                "frame": { "x": 101, "y": 0, "w": 138, "h": 55 },
                "rotated": false,
                "trimmed": true,
                "spriteSourceSize": { "x": 0, "y": 0, "w": 138, "h": 55 },
                "sourceSize": { "w": 138, "h": 55 }
            },
            {
                "filename": "run00",
                "frame": { "x": 239, "y": 0, "w": 97, "h": 111 },
                "rotated": false,
                "trimmed": true,
                "spriteSourceSize": { "x": 0, "y": 0, "w": 97, "h": 111 },
                "sourceSize": { "w": 97, "h": 111 }
            },
            {
                "filename": "run01",
                "frame": { "x": 336, "y": 0, "w": 97, "h": 111 },
                "rotated": false,
                "trimmed": true,
                "spriteSourceSize": { "x": 0, "y": 0, "w": 97, "h": 111 },
                "sourceSize": { "w": 97, "h": 111 }
            },
            {
                "filename": "run02",
                "frame": { "x": 433, "y": 0, "w": 97, "h": 111 },
                "rotated": false,
                "trimmed": true,
                "spriteSourceSize": { "x": 0, "y": 0, "w": 97, "h": 111 },
                "sourceSize": { "w": 97, "h": 111 }
            },
            {
                "filename": "run03",
                "frame": { "x": 530, "y": 0, "w": 97, "h": 111 },
                "rotated": false,
                "trimmed": true,
                "spriteSourceSize": { "x": 0, "y": 0, "w": 97, "h": 111 },
                "sourceSize": { "w": 97, "h": 111 }
            }]
        }
        function preload() {
            game.stage.backgroundColor = '#FFFFFF';
            game.load.image('background-fire', 'static/background-fire.png');
            game.load.image('background-pattern', 'static/background-pattern.png');
            game.load.image('bottomobject', 'static/bottomobject.png');
            game.load.image('share', 'static/share_text.png');
            game.load.image('topobject', 'static/topobject.png');
            game.load.image('line49', 'static/49.png');
            game.load.image('line240', 'static/240.png');
            game.load.image('nima-judge', 'static/nima-judge.png');

            game.load.atlas('nima', 'static/nima.png', null, nimaData);

            game.load.spritesheet('upbutton', 'static/upbutton.png', 117, 80);
            game.load.spritesheet('downbutton', 'static/downbutton.png', 117, 80);
        }
        var deltaHeight = 0, deltaHeight1 = 0;
        function create() {
            deltaHeight = game.world.height - 504;
            deltaHeight1 = (game.world.height - 490) / 2;
            if (deltaHeight > 0) deltaHeight = 0;
            if (deltaHeight1 < 0) deltaHeight1 = 0;
            game.physics.startSystem(Phaser.Physics.ARCADE);
            background_wall = game.add.tileSprite(0, deltaHeight, game.world.width, 568, 'background-pattern');
            ground = game.add.tileSprite(0, deltaHeight, game.world.width, 768, 'background-fire');
            var buttonup = game.add.button(game.world.width - 145, 410 + deltaHeight + deltaHeight1, 'upbutton', actionOnUpClick, ground, null, 0, 1, 0);
            var buttondown = game.add.button(25, 410 + deltaHeight + deltaHeight1, 'downbutton', actionOnDownClick, ground, null, 0, 1, 0);

            group = game.add.group();
            hitgroup = game.add.group();
            hitgroup.enableBody = true;
            hitgroup.physicsBodyType = Phaser.Physics.ARCADE;

            nima = game.add.sprite(game.world.width / 4 - 69, 217 + deltaHeight, 'nima');
            nimaJudge = game.add.sprite(game.world.width / 4 - 44, 217 + deltaHeight, 'nima-judge');
            nimaJudge.checkWorldBounds = true;
            game.physics.enable(nimaJudge, Phaser.Physics.ARCADE);
            nimaJudge.body.collideWorldBounds = true;
            nimaJudge.body.bounce.set(1);
            nima.animations.add('run', ['run00', 'run01', 'run02', 'run03']);
            nima.animations.add('jump', ['jump', 'jump', 'jump', 'jump', 'jump', 'jump']);
            nima.animations.add('squat', ['squat', 'squat', 'squat', 'squat', 'squat', 'squat']);
            nima.animations.add('jump1', ['jump', 'jump', 'jump', 'jump', 'jump']);
            nima.animations.add('squat1', ['squat', 'squat', 'squat', 'squat', 'squat']);
            nima.animations.play('run', speed1, true);
            nima.animations.getAnimation("squat").onComplete.add(actionComplete);
            nima.animations.getAnimation("jump").onComplete.add(actionComplete);
            nima.animations.getAnimation("squat1").onComplete.add(actionComplete);
            nima.animations.getAnimation("jump1").onComplete.add(actionComplete);

            nima.animations.getAnimation("squat").onStart.add(function () {
                nima.y = 275 + deltaHeight;
                nimaJudge.y = 275 + deltaHeight;
            });
            nima.animations.getAnimation("jump").onStart.add(function () {
                nima.y = 140 + deltaHeight;
                nimaJudge.y = 140 + deltaHeight;
            });
            nima.animations.getAnimation("squat1").onStart.add(function () {
                nima.y = 275 + deltaHeight;
                nimaJudge.y = 275 + deltaHeight;
            });
            nima.animations.getAnimation("jump1").onStart.add(function () {
                nima.y = 140 + deltaHeight;
                nimaJudge.y = 140 + deltaHeight;
            });
            nima.z = 4;
            group.z = 4;
            hitgroup.z = 4;
            text = game.add.text(20, 10, "0", {
                font: "38px Arial",
                fill: "#4c3026",
                align: "center"
            });
        }
        function actionComplete() {
            nima.y = 217 + deltaHeight;
            nimaJudge.y = 217 + deltaHeight;
            nima.animations.play('run', speed1, true);
        }
        var distance = 0, zawindex = 0;
        function update() {
            game.physics.arcade.overlap(nimaJudge, hitgroup, HitPaddle, null, this);
            if (ishited == false) {
                text.setText(Math.floor(game.time.totalElapsedSeconds() * 50)+'m');
                timer = Math.round(game.time.totalElapsedSeconds());
                _distance=Math.floor(game.time.totalElapsedSeconds() * 50);
                if (game.time.totalElapsedSeconds() >= 30) {
                    /*text.setText('30.00');
                    timer = 30;
                    game.gamePaused();
                    $("#gm-done-wrapper").delay(1000).fadeIn();
                    share2();*/
                }
                speed1 = 5 + 3 * timer / 30;
                speed2 = 2 * Math.floor(speed1);
            }
            background_wall.tilePosition.x -= 4;
            ground.tilePosition.x -= speed1;
            group.x -= speed1;
            hitgroup.x -= speed1;
            distance += speed1;
            if (Math.floor(distance / 420) > zawindex) {
                zawindex++;
                var r = Math.floor((Math.random() * 10)) % 2;
                var zaw, hitPosition;
                if (r == 0) {
                    zaw = group.create(game.world.width + distance, deltaHeight, 'topobject');
                    hitPosition = hitgroup.create(game.world.width + distance + 35, 0 + deltaHeight, 'line240');
                }
                else {
                    zaw = group.create(game.world.width + distance, 280 + deltaHeight, 'bottomobject');
                    hitPosition = hitgroup.create(game.world.width + distance + 16, 280 + deltaHeight, 'line49');
                }
                zaw.outOfBoundsKill = true;
                hitPosition.outOfBoundsKill = true;
                hitPosition.body.bounce.set(1);

            }
        }
        function HitPaddle() {
            game.gamePaused();
            ishited = true;

            try {
                $("#gm-done-wrapper").delay(1000).fadeIn();
                setTimeout(function () {  mobConfig.stop();game.world.shutdown(); $("canvas").hide();}, 1000);
                share2();

            }
            catch (e) {
                alert(e.Description);
            }

        }
        function actionOnUpClick() {
            if (ishited == false) {
                if (timer < 15)
                    nima.animations.play('jump', speed2, false, false);
                else
                    nima.animations.play('jump1', speed2, false, false);

            }
        }
        function actionOnDownClick() {
            if (ishited == false) {
                if (timer < 15)
                    nima.animations.play('squat', speed2, false, false);
                else
                    nima.animations.play('squat1', speed2, false, false);

            }
        }
    })
});


