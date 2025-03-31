class Wallet {
  private balance: number;
  private transactionHistory: string[] = [];

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.logTransaction(`Deposit: +${amount}`);
    }
  }

  private logTransaction(description: string): void {
    this.transactionHistory.push(`${new Date().toISOString()}: ${description}`);
  }

  public getBalance(): number {
    return this.balance;
  }
}
