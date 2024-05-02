export const calculateExperience = (birthday: Date | string): number => {
    const birthdayDate = new Date(birthday).getFullYear();
    const age = new Date().getFullYear() - birthdayDate;

    if (age < 7) return 0;

    const baseExperiencePerYear = 22;
    const experienceExponent = 1.45;

    return Math.floor((age - 7) * baseExperiencePerYear ** experienceExponent);
};
