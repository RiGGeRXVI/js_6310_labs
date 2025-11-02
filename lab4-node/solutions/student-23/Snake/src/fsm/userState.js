const userStates = new Map();

export function getUserState(userId) {
  return userStates.get(userId) || {};
}

export function setUserState(userId, state) {
  userStates.set(userId, state);
}

export function resetUserState(userId) {
  userStates.delete(userId);
}
