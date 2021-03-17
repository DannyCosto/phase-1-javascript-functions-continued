// Your code here
function saturdayFun(fun="roller-skate"){
    return `This Saturday, I want to ${fun}!`

}

function mondayWork(act="go to the office"){
    return `This Monday, I will ${act}.`
}

function wrapAdjective(param1="*"){
    return function(param2="special"){
        return `You are ${param1}${param2}${param1}!`
    }
}