export const calculateProficiencyLevel = (passedQuizes: any[] = []) => {
    const passedQuizesLength = passedQuizes.length;
    if (!passedQuizesLength) return 0;

    const failed = passedQuizes.filter(q => q.failed).length;
    return Math.round(((passedQuizesLength - failed) / passedQuizesLength) * 100);
};