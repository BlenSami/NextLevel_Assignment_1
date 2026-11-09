
const multiplyValue = (a:number, b=2) : number=>{

return a*b;

};



const processInput =(x : number | string | boolean ) : number | string | boolean =>{
   
    if( typeof x === "number"){
     return x*10;
    }
    else if( typeof x === "string"){
        const res = x.trim().toLocaleLowerCase();
        return res;
        
    }else{
        if( x){
            return "Active";

        }else{
            return "Inactive";
        }
    }


};



const formatCoordinate =(cor :readonly[number,number,string] ) : string  =>{


    return `Location: ${cor[2]} (${cor[0]}, ${cor[1]})`

};


const concatenateArrays = <T>(...arrays: T[][]) : T[]=>{


    const res : T []= [];
    for(let arr of arrays){
        for(let val of arr){
            res.push(val);
        }
    }

    return  res;
  

};



interface Course{
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudent: number):Course[] =>{
    let finalRes : Course[]= [];
    for(let course of courses){

        if(course.isPublished===true && course.students>= minStudent){

            finalRes.push(course);
        }
    }
    return finalRes;

};


const pluckValues = <T, K extends keyof T>(item:T[],key: K) : T[K][]=>{

    return item.map((item)=>item[key]);
}


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() :string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() : string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async( age: number): Promise<string> =>{
    if(age >= 18){

      const res = new Promise<string>((done)=> 
        setTimeout(()=>done("Access Granted"),1000));
       const data = await res;
       return data; 
    }
    throw new Error("Access Denied: Must be 18 or older");
    


}