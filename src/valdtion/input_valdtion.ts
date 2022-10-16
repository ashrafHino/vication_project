////////////////////////email valdtion
export class valdtionData{
    constructor(){}
    public getEmail(a:string)
    {
        const valid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (String(a).toLowerCase().match(valid))
             return true
        else
            return false
    }


///////////////passwordd valdtion
    public getPass(a:string){
        if(a == "") {  
            return false;  
         }  
          
        //minimum password length validation  
         if(a.length < 8) {  
            return false;  
         }  
         
       //maximum length of password validation  
         if(a.length > 15) {   
            return false;  
         } else {  
            return true;  
         }  
       }  
}