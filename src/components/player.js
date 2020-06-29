class Player extends Animation {
  constructor(
    matriz,
    image,
    personageX,
    personageY,
    personageWidth,
    personageHeight,
    widthSprite,
    heightSprite
  ) {
    super(
      matriz,
      image,
      personageX,
      personageY,
      personageWidth,
      personageHeight,
      widthSprite,
      heightSprite
    );
    this.personageYInitial = height - personageHeight - personageY;
    this.personageY = this.personageYInitial;
    this.jumpSpeed = 0;
    this.gravity = 3;
    this.jumpHeight = -30;
    this.numberJump = 0;
    this.invulnerable = false;
  }

  jump() {
    if (this.numberJump < 2) {
      jumpSound.play();
      this.jumpSpeed = this.jumpHeight;
      this.numberJump++;
    }
  }

  applyGravity() {
    this.personageY = this.personageY + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;
    if (this.personageY > this.personageYInitial) {
      this.personageY = this.personageYInitial;
      this.numberJump = 0;
    }
  }

  isInvulnerable() {
    this.invulnerable = true;
    setTimeout(() => {
      this.invulnerable = false;
    }, 1000);
  }

  collision(opponent) {
    if (this.invulnerable) {
      return false;
    }
    const precision = 0.8;

    // noFill();
    // rect(
    //   this.personageX,
    //   this.personageY,
    //   this.personageWidth,
    //   this.personageHeight
    // );
    // rect(
    //   opponent.personageX,
    //   opponent.personageY,
    //   opponent.personageWidth,
    //   opponent.personageHeight
    // );

    return collideRectRect(
      this.personageX,
      this.personageY,
      this.personageWidth,
      this.personageHeight,
      opponent.personageX,
      opponent.personageY,
      opponent.personageWidth,
      opponent.personageHeight
    );
  }
}
