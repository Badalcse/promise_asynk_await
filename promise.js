const promise1 =  new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("astenr is seccesfully")
        resolve()

    } ,1000)

})
promise1.then(function(){
    console.log("promise consume")
})

const promise2 = new Promise(function(resolve,reject){

    setTimeout( function(){
        console.log("seccessfully")
        resolve()
    },1000)
    }).then(function(){
        console.log("promise consume ")

})

const promise3 = new Promise(function(resolve,reject){

    setTimeout( function(){
        resolve({userNmae: "badal", email: "bk7874457@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout( function(){
        let error = true;
        if (!error) {
           resolve({username: "badal", email: "bk7874457"})
            
        } else {
            reject("Error: something went wrong")
            
        }
    },1000)
    
    })
    promise4.then(function(user){
        console.log(user)

    }).catch(function(error){
        console.log(error)

    })

    const promise5 = new Promise(function(resolve,reject){
        setTimeout( function(){
            let error = false;
            if (!error) {
               resolve({username: "kumar", email: "bk7874457"})
                
            } else {
                reject("Error: something went wrong")
                
            }
        },1000)
        
        })

        async function consumepromise(){
            const respons = await promise5;
            console.log(respons)
        }
        consumepromise()

   

   