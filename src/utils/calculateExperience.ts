export const calculateExperience = (birthday: Date): number => {
    const age = new Date().getFullYear() - birthday.getFullYear();

    if (age < 7) return 0;

    const baseExperiencePerYear = 22;
    const experienceExponent = 1.45;

    return Math.floor((age - 7) * baseExperiencePerYear ** experienceExponent);
};
