class Monster {
  constructor(name, health) {
    public name = name;
    private health = health;
  }

  attack(target) {
    log('The monster attacks ' + target);
  }

  get isAlive() {
    return private(this).health > 0;
  }

  set health(value) {
    if (value < 0) {
      throw new Error('Health must be non-negative.')
    }
    private(this).health = value
  }

  public numAttacks = 0;
  public const attackMessage = 'The monster hits you!';
}