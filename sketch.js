
let defaultImage = [];


let backgroundImage;
let rightMoveImage = [];
let leftMoveImage = [];
let leftAttackImage = [];
let rightAttackImage = [];
let rigthGuardImage = [];
let leftGuardImage = [];
let doorImage = [];

let verPlatForm;
// let hpImage;

let uiImage =[];


let slimeDefualt = [];

let skeletonDefault = [];
let skelRAttack = [];
let skelLAttack = [];
let skelMove = [];

let effectImage;

var defaultTime;
var defaultCheck = 0;

var player_x = 100;
var player_y = 200;

var cameraMove = 0;


let player;

let slime = [];
let skeleton;


let platForm = [];
let platForm_2 = [];
let platForm_3;
let platForm_4;
let platForm_5;
let platForm_6;
let platForm_7;
let platForm_8;
let platForm_9;


let door;
let itemImage = [];
let key;



//현재가 몇번째 인지 확인하기.
let stateCheck;




function preload()
{

    backgroundImage = loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/bg_forest.png");
    defaultImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Default.PNG"));
    defaultImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Default_2.PNG"));
    rightMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Right/right_1.png"));
    rightMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Right/right_2.png"));
    rightMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Right/right_3.png"));
    rightMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Right/right_4.png"));
    rightMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Right/right_5.png"));
    leftMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Left/left_1.png"));
    leftMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Left/left_2.png"));
    leftMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Left/left_3.png"));
    leftMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Left/left_4.png"));
    leftMoveImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Left/left_5.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack1.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack2.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack3.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack4.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack5.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack6.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/leftAttack7.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/Left_2_1.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/Left_2_2.png"));
    leftAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/LeftAttack/Left_2_3.png"));
    


    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_1.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_2.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_3.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_4.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_5.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_6.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/right_7.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/Right_2_1.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/Right_2_2.png"));
    rightAttackImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/RightAttack/Right_2_3.png"));
    
    
    rigthGuardImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardR/guard_R_1.png"));
    rigthGuardImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardR/guard_R_2.png"));
    rigthGuardImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardR/guard_R_3.png"));
    rigthGuardImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardR/guard_R_4.png"));
    rigthGuardImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardR/guard_R_5.png"));
    rigthGuardImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardR/guard_R_6.png"));
    leftGuardImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardL/guard_L_1.png'));
    leftGuardImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardL/guard_L_2.png'));
    leftGuardImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardL/guard_L_3.png'));
    leftGuardImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardL/guard_L_4.png'));
    leftGuardImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardL/guard_L_5.png'));
    leftGuardImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/guardL/guard_L_6.png'));

    //수직 플랫폼
    verPlatForm = loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/PlatForm/Vetical_Platfrom.png');
    //아이템
    itemImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Item/Key.png"));

    //이펙트 이미지
    effectImage = loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Effect/Effect.png");

    //도어
    doorImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/PlatForm/door_1.png'));
    doorImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/PlatForm/door_2.png'));
    doorImage.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/PlatForm/door_3.png'));

    //Skeleton
    skeletonDefault.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/Default/Defualt_1.png'));
    skeletonDefault.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/Default/Defualt_2.png'));
    skeletonDefault.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/Default/Defualt_3.png'));
    
    skeletonDefault.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/AttackedRight/AttackedRIght_2.png'));
    skeletonDefault.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/AttackedLeft/LeftAttacked_2.png"));



    skelRAttack.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/rAttack/attackR_1.png'));
    skelRAttack.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/rAttack/attackR_2.png'));
    skelRAttack.push(loadImage('/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/rAttack/attackR_3.png'));
    //여기부턴 스턴.
    skelRAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/rStun/stun_1.png"));
    skelRAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/rStun/stun_2.png"));
    skelRAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/rStun/stun_3.png"));

    //왼쪽공격
    skelLAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/lAttack/lAttack_1.png"));
    skelLAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/lAttack/lAttack_2.png"));
    skelLAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/lAttack/lAttack_3.png"));

    //스턴
    skelLAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/lStun/lStun_1.png"));
    skelLAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/lStun/lStun_2.png"));
    skelLAttack.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/lStun/lStun_3.png"));

    //무브 오른쪽
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkRight/rightWalk_1.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkRight/rightWalk_2.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkRight/rightWalk_3.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkRight/rightWalk_4.png"));
    
    //무브 왼쪽
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkLeft/walkLeft_1.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkLeft/walkLeft_2.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkLeft/walkLeft_3.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/walkLeft/walkLeft_4.png"));

    //피격모션.
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/attackedImage/attackedLeft.png"));
    skelMove.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Skleton/attackedImage/attackedRight.png"));


    
    slimeDefualt.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Slime/Slime_0.png"));
    slimeDefualt.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Slime/Slime_1.png"));
    slimeDefualt.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Slime/Slime_2.png"));
    slimeDefualt.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/Slime/slime_Attacked.png"));

    //UI
    // hpImage = loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/UI/HP.png");
    uiImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/UI/HP.png"));
    uiImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/UI/shield.png"));
    uiImage.push(loadImage("/cs099-final-project-make-a-game-yoobin-Kim-digipen/Assets/UI/brokenShield.png"));

    
    player = new Player(defaultImage, rightMoveImage , leftMoveImage,leftAttackImage, rightAttackImage,rigthGuardImage,leftGuardImage,uiImage);
    platForm.push(new PlatForm(0,500,1200,100,true,0));
    platForm.push(new PlatForm(1300,500,1200,100,true,0));
    platForm.push(new PlatForm(900,300,1200,100,false,0));
    platForm_2.push(new PlatForm(0,500,1200,100,true,0));
    platForm_2.push(new PlatForm(1300,500,1200,100,true,0));
    platForm_2.push(new PlatForm(900,300,1200,100,false,0));
    slime.push(new Skeleton(1,skeletonDefault,1200,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,1400,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,1500,150,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,450,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,550,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,0,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,400,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,2000,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,1700,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
    slime.push(new Skeleton(1,skeletonDefault,1900,350,25,-25,28,-50,40,skelRAttack,skelLAttack,skelMove,1,effectImage));
    //_x,_y,_width,_height,_base,_type,_vertical = 0
    platForm.push(new PlatForm(2400,0,100,400,true,1,verPlatForm));
    door = new Door(doorImage,2400,400,100,100);
    key = new Item(itemImage,1800,440);
    
}



function setup()
{
    createCanvas( 1200, 600 );
    frameRate(60);
    defaultTime = 0;
    checkTime = 0;
    stateCheck = 0;
}

function draw()
{

    background( 0 );
    push();

    if(player.pos.x > 2400)
    {
        stateCheck++;
        player.pos.x = 100;
        player.checkCameraX = 600;
        player.checkCameraX_L = 500;
        cameraMove = 0;
        if(stateCheck == 1)
        {
            platForm = 0;
        }
        
    }
    // image(hpImage,0,0);
    // 카메라 무빙.
    if(cameraMove<0 && cameraMove > -1300)
    {
        translate(cameraMove,0);
        image(backgroundImage,-cameraMove,0);
        player.seeUIImage(-cameraMove);
        // image(hpImage,-cameraMove,50);
    }else if(cameraMove < -1300)
    {
        console.log("여기가 까지 왔는가?")
        translate(-1300,0);
        image(backgroundImage,1300,0);
        player.seeUIImage(1300);
    }else{
        
        image(backgroundImage,0,0);
        player.seeUIImage(0);
    }
    
    if(focused)
    {

        if(stateCheck === 0)
        {

        
            for(var a= 0; a<platForm.length;a++)
            {

                platForm[a].draw();
                platForm[a].colPlayer(player);
            }


            for(var a = 0; a<slime.length;a++)
            {
                if(slime[a].life > 0)
                {
                    slime[a].animSlimeUpdate();
                    
                    slime[a].moveUpdate();
                
                    slime[a].update();
                    
                    slime[a].rayUpdate();
                    
                    
                    // slime[a].platformCheck(platForm[0]);
                    // platForm[0].colMonster(slime[a]);
                    // player.checkAttacked(slime[a]);
                    slime[a].checkParry(player);
                    slime[a].checkAttack(player);
                    
                    
                        for(var b = 0;b<platForm.length;b++)
                        {
                            slime[a].platformCheck(platForm[b]);
                            slime[a].behavior(player,platForm[b]);
                            platForm[b].colMonster(slime[a]);
                        }
                    
                }else{
                    slime.splice(a,1);
                }
            }

            player.checkAttack(slime);



            
            door.colPlayer(player);
            door.animUpdate();
            // player.checkDist(slime);
            
            if(slime.length == 0 && key.isRemove == 0)
            {
            
                key.draw();
                key.checkPlayer(player,door);
            }else if(slime.length == 0 && key.isRemove == 1){
                console.log("adad");
                key = 0;
            }
    
    }else if(stateCheck === 1)
    {
        console.log("여기에 들어오는가?");
        for(var a= 0; a<platForm_2.length;a++)
            {

                platForm_2[a].draw();
                platForm_2[a].colPlayer(player);
            }
    }
   
    player.updateAnim();
    player.checkKeyboard();
    player.update();
    player.addGravity();
    player.checkCamera();
    cameraMove += player.cameraMove();

    }   
    pop();
    
}



function mousePressed()
{
    console.log(mouseX,mouseY)
}