function createLoginTracker(userInfo) {
  let attemptCount = 0;
  const loginAttempt = (passwordAttempt) => {
    attemptCount++;
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }
    return `Attempt ${attemptCount}: Login failed`;
  };
  return loginAttempt;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

const login = createLoginTracker({ username: "user1", password: "password123" });
console.log(login("wrong"));
console.log(login("wrong2"));
console.log(login("password123"));
console.log(login("password123"));