function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0 || (gender !== "мужской" && gender !== "женский")) {
        return 0;
    }

    const filterUser = users.filter(user => user.gender === gender)
    const totalAge = filterUser.reduce((sum, user) => sum + user.age, 0);
    const averAge = totalAge / filterUser.length;
    return averAge;
}