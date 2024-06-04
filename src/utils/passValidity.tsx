export const isValidPassword = {
    lengthCheck: (password: string) => password.length >= 8,
    caseCheck: (password: string) => /[A-Z]/.test(password),
    numberCheck: (password: string) => /[0-9]/.test(password),
    checkAll: (password: string) =>
        isValidPassword.lengthCheck(password) &&
        isValidPassword.caseCheck(password) &&
        isValidPassword.numberCheck(password),
};
