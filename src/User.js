class User {
  constructor(userData) {
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  getFirstName() {
    if (!this.name) {
      return 'Hello';
    }
    return this.name.split(' ')[0];
  }
}

export default User;