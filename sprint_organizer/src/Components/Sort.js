
function Sort(issues) {
    for (let i = 0; i < issues.length; i++){
        for (let j = 0; j < issues.length; j++){
            if (issues.tempo[j] > issues.tempo[j + 1]){
                let temp = issues[j];
                issues[j] = issues[j+1];
                issues[j + 1] = temp;
            }
        }
    }
    return issues;

}

export default Sort
