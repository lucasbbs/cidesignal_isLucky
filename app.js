function isLucky(n) {
    this.size = null;
    this.arrays = [];
    
    getArrays = function(size){
        re = new RegExp('[0-9]{1,'+String(size)+'}', "g");
        newStr = String(n).match(re);
        this.arrays = newStr;
    }
    
    areEqual = function(array){
        console.log(array[0].split('').reduce((acc, cur)=>Number(acc)+Number(cur)));
        if (    array[0].split('').reduce((acc, cur)=>Number(acc)+Number(cur)) == 
                array[1].split('').reduce((acc, cur)=>Number(acc)+Number(cur))
           ){    return true;}
            else{return false;}
    }
    
     if (String(n).length%2 === 0){
        this.size = String(n).length/2;
        getArrays(this.size);
       if (areEqual(this.arrays))
           {
               return true;
           }else{
               return false;
           }
    } else{
        console.log('This is not an even number!');
        return false;
    }
    

    };
