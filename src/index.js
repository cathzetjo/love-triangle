/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    let count = 0;
    for (let i = 0; i < preferences.length; i++) {
        let firstSpichonee = i + 1;
        let firstSpichoneeLoves = preferences[i];
        let nextSpichoneeLoves = preferences[firstSpichoneeLoves - 1];
        let lastSpichoneeLoves = preferences[nextSpichoneeLoves - 1];
        if (lastSpichoneeLoves == firstSpichonee) {
            count++;
        }
    }
    return parseInt(count / 3);
};



