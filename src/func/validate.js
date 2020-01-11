function require(value){
    if(value == ''){
        return false
    }
    return true
}

function email(value){
    var flag=1
    var exclude_comp = ['gmail','yahoo','hotmail','outlook']

    if(value.indexOf('@')===-1 || value.indexOf('.')===-1){
        flag=0;
    }else{
        var compname = value.substring(value.indexOf('@')+1,value.lastIndexOf('.'))
        compname = compname.toLowerCase()

        if(exclude_comp.indexOf(compname) != -1){
            flag=0;
        }
    }
    if(flag == 0){
        return false;
    }
    return true;
}

function pass(value){
    var flag=1

    if(!value.match(/[a-z]/g)){
        flag=0
    }
    if(!value.match(/[A-Z]/g)){
        flag=0
    }
    if(!value.match(/[0-9]/g)){
        flag=0
    }
    if(!value.length >= 8){
        flag=0
    }
    
    if(flag==0){
        return false
    }
    return true
}

function ph_no(value){
    var flag=1

    if(value.match(/[a-z]/g)){
        flag=0
    }
    if(value.match(/[A-Z]/g)){
        flag=0
    }
    if(value.match(/[!@#$%^&*_+\-=\[\]{};':"\\|,.<>\/?]/g)){
        flag=0
    }

    if(flag==0){
        return false
    }
    return true
}

function validate_main(values,req){
    var valid=[]
    var i=0
    while(i<req.length){
        var k=0
        var flag=1
        while(k<req[i].length){
            if(req[i][k] == 'req'){
                if(!require(values[i])){flag=0;break;}
            }else if(req[i][k] == 'email'){
                if(!email(values[i])){flag=0;break;}
            }else if(req[i][k] == 'pass'){
                if(!pass(values[i])){flag=0;break;}
            }else if(req[i][k] == 'phno'){
                if(!ph_no(values[i])){flag=0;break;}
            }
            k++;
        }
        if(flag==1){
            valid.push(true)
        }else if(flag==0){
            valid.push(false)
        }
        i++;
    }
    return valid;
}

export default validate_main;