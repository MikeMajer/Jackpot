class Wallet {
  constructor(money) {
    let _money = money;
    // Download current wallet value
    this.getWalletValue = () => _money;

    //Check player resources
    this.checkCanPlay = value => {
      if (_money >= value) return true;
      return false;
    }

    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return _money += value;
        } else if (type === "-") {
          return _money -= value;
        } else {
          throw new Error("incorrect type of operation")
        }

      } else {
        console.log(typeof value);
        throw new Error("incorrect number")
      }
    }
  }
}
