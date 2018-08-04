/*
* name;
*/
var EnemyTower = (function (superClass) {
    function EnemyTower(opts) {
        opts.color = 'white';
        superClass.call(this, opts);
        
        // 射击范围
        this.range = 100;
    }

    Laya.class(EnemyTower, 'enemyTower', superClass);

    var _proto = EnemyTower.prototype;

    _proto.move = function() {
        console.log('塔不移动');
    }

    _proto.attack = function() {
        var heroLink = ObjectHolder.heroLink;
        for (var i=0; i<heroLink.numChildren; i++) {
            var curHero = heroLink.getChildAt(i);
            var hx = curHero.x, hy = curHero.y;
            var ex = this.x, ey = this.y;
            var distance = Math.sqrt(Math.pow(hx - ex, 2) + Math.pow(hy - ey, 2));
            if (distance <= this.range) {
                console.log('进入射击范围:' + this.range);
                var bullet = new TowerBullet({});
                ObjectHolder.bulletBox.addChild(bullet);
                break;
            }
        }
    }



    return EnemyTower;
}(Enemy));