## Topic
***
### 1. Shapes
- Shape is used for visual presentation. It is used to show variables or something visually. I described the cool time of the shield as Rect.
```javascript

        //sketch.js 1400~1404
        rect(x+200,64,64,-64 * this.rollCountDeltaTime/3);
        rect(x+300,64,64,-64 * this.skillCountDelta/5);
        pop();
        rect(x+1020,120,100/10*this.guardRefillDelta,10);
        rect(x+1120,120,0,10);


```





***
### 2. Colors
- Colors can also represent something visually. It can tell you when something is changed. I changed the color of the square when the parrying timing came.
```javascript

//boss.js 178~185
if(this.rightAttackDelta > 0.4 && this.rightAttackDelta < 0.85)
{
    fill('red');
    rect(this.pos.x-50,this.pos.y-165,50*(this.rightAttackDelta/1.85),10);
}else{
    fill(255);
    rect(this.pos.x-50,this.pos.y-165,50*(this.rightAttackDelta/1.85),10);
}

```
***
### 3. Variables
- Use when you need to keep a value or need a name. For example, player.hp must have a constant value and a name.
If the shape and color showed a visual change, it can be represented internally by changing the value of the variable.
For example, In sktech.js ,variable stateCheck indicates the current stage, and an increase in one value indicates that the stage has changed.
 ```javascript
 // variable declaration sketch.js line 77
 let stateCheck;

 //variable initialization sketch.js line 499
 stateCheck = 0;

// variable stateCheck indicates the current stage, and an increase in one value indicates that the stage has changed.
//line 715~ 717
if(player.pos.x > cameraState && keyIs)
    {
        stateCheck++;
        ...etc...
    }
 ```

***
4. Conditional Statements
The typical "if Conditional Statements" is if conditions are true, execute code in {}
If a variable has a value, it must be controlled. For example, if player.hp is zero, the variables related to the stage and the player must be initialized.
```javascript
// sketch.js line 972 ~ 1031
if(player.life <1)
    {
        keyIs = false;
        if(stateCheck != 3)
        {
            player.attackedCheck = 0;
        }
        if(stateCheck < 3)
        {
            stateCheck = 0
        }else if(stateCheck == 5)
        {
            stateCheck = 5
        }else{
            stateCheck = 3
        }
        
        
        
        spawnCheck = 0;
        player.pos.x = 100;
        player.pos.y = 480;
        player.life = 5;
        player.startPlay = 0;
        checkPause = 1;
        if(stateCheck == 4)
        {
            cameraState = 3500;
        }else if(stateCheck == 3)
        {
            cameraState = 2200;
        }else{
            cameraState = 2400;
        }
        
        player.rollCount = 3;
        player.skillCount = 1;
        player.animState = 0;
        player.isSkill = 0;   
        player.attackCheck = 0;

        
        player.attackedVel.x = 0;
        
        player.rollVec.x = 0;
        player.checkRoll = 0;
        player.rollCountDeltaTime = 0;
        player.skillCountDelta = 0;
        player.guardRefillDelta = 0;
    }
```
Or you can control the visual state now.
Put delta time in "rightWalkDelta" and show the current image over time.


```javascript
//In Archer.js line 207 ~ 231
else if(this.animState == 1)
            {

                this.rightWalkDelta += deltaTime/1000;
                if(this.rightWalkDelta > 0.8)
                {
                    
                    image(this.moveImage[4],this.pos.x,this.pos.y,200,200);
                    this.rightWalkDelta = 0;
                }else if(this.rightWalkDelta >0.6)
                {
                    image(this.moveImage[3],this.pos.x,this.pos.y,200,200);
                }else if(this.rightWalkDelta >0.4)
                {
                    image(this.moveImage[2],this.pos.x,this.pos.y,200,200);
                }else if(this.rightWalkDelta >0.2)
                {
                    image(this.moveImage[1],this.pos.x,this.pos.y,200,200);
                }else
                {
                    image(this.moveImage[0],this.pos.x,this.pos.y,200,200);
                }
                
            }

```
There are so many examples and they can be used in a variety of ways.
Finally, this is an example of making a boss's attack determination.
The first condition is when parrying, the second when only defending, and the third when doing nothing.
```javascript
if(player.isParrying == 1 && this.isCanParry == 1 && player.checkA == 1)
{
        if(this.stunCheck == 0)
        {
                console.log("여기");
                this.animState = 6;
                this.stunCheck = 1;
                this.leftAttackDelta = 0;
                this.rightAttackDelta = 0;
                player.shieldVel.x = 0;
                this.stunDeltaTime = 0;
                if(player.life < 5)
                {
                    player.life += 1;
                }
                
            
        }
        this.isCanParry = 0;
        player.isParrying = 0;
    }else if(player.isGuard == 1 && player.checkA == 1 && this.stunCheck == 0){
        if(this.playerShieldCheck == 0)
        {
            player.shieldCount -= 1;
            player.shieldCheck = 1;
            this.sfx[1].play();
            
        }
        this.playerShieldCheck = 1;
        player.shieldVel.x = 300;
    }else if(this.stunCheck == 0){
        if(player.attackedCheck == 0)
        {
            player.life -= 1;
            this.sfx[0].play();
        }

        player.attackedCheck = 1;
        
        
        // player.gravityVel.addTo(new Vec2(2,-2));
        // player.pos.x += 100;
        player.attackedVel.x = 300;
    
    
}

```
***
5. Loops
- It is used to execute something repeatedly. Use the "for" or "while"  It is also used to access all elements in an array. Usually loops set number to repeat You can exit the loops only after repeating that number. The next code of "for or while..etc(){}" will be executed only after loops are finished.

- For example this code is about platform instance All platform objects in the platform array must be drawn in each frame and must be judged in conflict with the player in each frame. If you miss a frame to execute a function or fail to execute a function of another platform object, the player will fall. However, you can run them all at once with loops
```javascript
//sketch.js line 896 ~ 901
for(var a= 0; a<platForm.length;a++)
{
    platForm[a].draw();
    platForm[a].colPlayer(player);
}
```
- Conditional statements can also be used in loops
```javascript
//sketch.js 904 ~ 946
for(var a = 0; a<enemy.length;a++)
    {
        if(enemy[a].life > 0)
        {
            if(enemy[a].pos.y > 600)
            {
                enemy[a].life = 0;
            }
            enemy[a].animUpdate();
            
            enemy[a].update();
            if(enemy[a].type == 1)
            {
                enemy[a].checkParry(player);
                enemy[a].checkAttack(player);
            }else{
                enemy[a].checkAttack(player);
                enemy[a].specialAttack(player);
            }

            if(enemy[a].type == 5)
            {
                BossHp(enemy[a]);
            }

                for(var b = 0;b<platForm.length;b++)
                {
                    
                    if(platForm[b].type != 3)
                    {
                        enemy[a].platformCheck(platForm[b]);
                        if(player.startPlay == 1)
                        {
                            enemy[a].behavior(player,platForm[b]);
                            enemy[a].moveUpdate();
                        }
                        platForm[b].colMonster(enemy[a]);
                    }
                    
                }
            
        }
```
***
6. Functions
- It is used when the associated code is required to be grouped under one name or a factor to be received. It is also used when a return value is required.

For example.
- It's tied up under one name. In this way, the call from the draw() function improves readability.
```javascript

function mainMenu()
{
    if(screenCheck == 0)
    {
        image(mainImage[0],400,50,400,200);
        image(mainImage[1],500,300);
        image(mainImage[3],500,400);
    }else if(screenCheck == 2)
    {
        image(mainImage[6],200,0);
    }
    
   
}
//another example 
function BossHp(boss)
{
    push();
    textSize(30);
    fill(0);
    text("RichKing",400,100);
    fill('red');
    rect(530,80,300*(boss.life / 20),25);
    pop();

}
```
- Of course, you can put this in draw(), but if the code is long, it will be inconvenient to see, so it is better to tie it.



- There are times when factors are needed. Sometimes you have to take one object from another or just another. The factors are available in a variety of ways. Variables, Objects, Arrays

```javascript
checkAttack(monster)
{
    if(this.attackCheck == 1)
    {

    
    if(this.isAttack == 1)
    {  

            for(var a = 0; a<monster.length;a++)
            {
                
                if(this.checkRange(this.attackLeft.x-10,this.attackLeft.x+70,monster[a].upLeft.x,monster[a].upRight.x) && this.checkRange(this.attackLeft.y,this.attackLeft.y+50,monster[a].upLeft.y,monster[a].downRight.y))
                    {

                        if(monster[a].life >0)
                        {  
                        
                        
                        monster[a].life -= 1;
                        sfx[1].play();
                        
                        //오른쪽 네모
                        if(this.checkA == 0 )
                        {
                            if(monster[a].type != 3 && monster[a].type != 5 )
                            {
                                
                                monster[a].animState = 7;
                                monster[a].isAttacked = 1;
                            }
                            monster[a].pos.addTo(new Vec2(15,0));
                        }else{
                            console.log("1번");
                            if(monster[a].type != 3 && monster[a].type != 5)
                            {
                                monster[a].animState = 8;
                                monster[a].isAttacked = 1;
                            }
                            monster[a].pos.addTo(new Vec2(-15,0));
                        }
                        
                        this.attOne = 1;
                        }
                    }
            }
        
        }
    }
}
```
***
7. Classes
- Classes are sometimes used to combine related variables and functions at once, and also exist as objects and have their own values, such as monsters. The class is a blueprint, but it exists as a car of A People or as a car of B People through objectification. After all, the form is similar, but the Inherent value is different And it is easy to manage It is easy to find where the problem occurred by separating what works as multiple functions.

I have a lot of class such as Pike.js,player.js,etc..
for example.
it is player.js constructor and This is like telling what variables this class should have.
```javascript
//player.js line 18~26...
constructor(_defaultImage,_rightImage,_leftImage,_leftAttackImage,_rightAttackImage,_guardRight,_guardLeft,_uiImage,RollImage,sfx)
    {

        this.pos = new Vec2(100,500);
        this.moveVel = new Vec2(0,0);
        this.vel = new Vec2(0,0);
        this.attackedVel = new Vec2(0,0);
        this.shieldVel = new Vec2(0,0);

        // .... etc..
    }
```
and it is have a lot function related player.
```javascript
updateAnim();
checkKeyboard();
update();
addGravity();
checkLeft(stateCheck);
```

When you need multiple monsters, and when you need their own actions, their own values. it have another position.
```javascript
enemy.push(new Skeleton(1,skeletonDefault,1200,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,1400,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,1500,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,1000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,900,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,400,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,2000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,2100,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
```




***
8. Arrays
- Arrays are required in order and when objects or values are placed under one name. The function and class are different, either by putting the object itself or by controlling the values at once, making it easier to call. Arrays are required in order and when objects or values are placed under one name. The function and class are different, either by putting the object itself or by controlling the values at once, making it easier to call. Also, users cannot write any code. There is a function or value that can be used in an array. ex) array.splice(), array.length

Monsters are placed in a single array to be managed and called all at once via loops.
```javascript
//sketch.js line 60
let enemy = [];

//sketch.js line 752~763
enemy.push(new Skeleton(1,skeletonDefault,1200,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,1400,250,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,1500,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,1000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,900,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,550,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,400,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,2000,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));
enemy.push(new Skeleton(1,skeletonDefault,2100,450,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage,skelSfx));

//for using like this. sketch.js line 912~978
for(var a = 0; a<enemy.length;a++)
    {
        if(enemy[a].life > 0)
        {
            if(enemy[a].pos.y > 600)
            {
                enemy[a].life = 0;
            }
            enemy[a].animUpdate();
            
            enemy[a].update();
            if(enemy[a].type == 1)
            {
                enemy[a].checkParry(player);
                enemy[a].checkAttack(player);
            }else{
                enemy[a].checkAttack(player);
                enemy[a].specialAttack(player);
            }

            if(enemy[a].type == 5)
            {
                BossHp(enemy[a]);
            }

                for(var b = 0;b<platForm.length;b++)
                {
                    
                    if(platForm[b].type != 3)
                    {
                        enemy[a].platformCheck(platForm[b]);
                        if(player.startPlay == 1)
                        {
                            enemy[a].behavior(player,platForm[b]);
                            enemy[a].moveUpdate();
                        }
                        platForm[b].colMonster(enemy[a]);
                    }
                    
                }
            
        }else{
            if(enemy[a].type != 5)
            {
                enemy[a].dead();
                let c = 0;
                for(var e = 0; e < enemy.length ; e ++)
                {
                    if(enemy[e].isDead == 1)
                    {
                        c++;
                    }
                    if(c == enemy.length)
                    {
                        keyIs = true;
                    }
                }
            }else{
                keyIs = true;
                enemy.splice(a,1);
            }
            
        }
    }



```
Or sometimes you have to put things in order.
 ```javascript

    //sketch.js 357~364 
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_1.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_2.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_3.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_4.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_5.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_6.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_7.png"));
    bossRA.push(loadImage("./Assets/Boss/RightAttack/RightAttack_8.png"));

 ```

***