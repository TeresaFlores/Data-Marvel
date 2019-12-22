
fetch('response_marvel.json')
    .then( response => {return response.json()})
    .then((data) => {
    // Work with JSON data here
      let elementData = document.getElementById ('elem');
    
      let newArrayName = [];
        console.log (newArrayName) ; 
       
        //  let newArrayComics = []; 
       
        // console.log (newArrayComics) ; 

      let  objectToArray= (object) => {
        
          let newData  = Object.keys(object);
        //   console.log (newData);
          
          for ( let i = 0; i < newData.length; i++) {

                let dataName = data.data.results[i];
                newArrayName.push(dataName.name);
                
                // let nameComics = data.data.results[i].comics.items[1].name;
             

                newArrayName.forEach(function(element)  {
               
                    let cards =
                     `<div class="conteiner">

                        <img src="./img/iron-man.jfif"  id="foto">
                        <h2>${element}</h2>
                        <button> X </button>
                    
                     </div>`
                    // console.log(element)
             
                    elementData.insertAdjacentHTML("beforeEnd", cards);
                  });


            
            //   newArrayComics.push(dataName.comics.items[1].name);
          }
     
         
          return newArrayName;
   
          
      }

      console.log (objectToArray (data.data.results));
     
  
     
    //   let nuevaData= Object.keys(data.data.results[9]);
    //   let nuevaArray = [
    //                     [nuevaData[1] , data.data.results[0] [nuevaData[1]]],
    //                     [nuevaData[6] , data.data.results[0].comics.items[1][nuevaData[1]]]
    //                 ]
    //   console.log(nuevaData)
    //   console.log(nuevaArray);
  
        console.log(data);  

        // elementData.innerHTML = 
        //         `
        //             <div class="conteiner">
        //                 <p>${data.data.results[0].name}</p>
        //                 <p>${data.data.results[0].comics.items[1].name}</p>   

        //             </div>     
                    
        //         ` 

      
    })
    .catch(err => {
        // Do something for an error here
    });



