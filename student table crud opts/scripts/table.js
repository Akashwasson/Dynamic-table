
          var students = [
          {id: '1', name:'Rahul' , address:'mumbai'},
          {id: '2', name:'Manoj' , address:'jalandhar'},
          {id: '3', name:'Aarti' , address:'punjab'},
          {id: '4', name:'Rajan' , address:'delhi'},
          {id: '5', name:'Aditya' , address:'canada'},
          {id: '6', name:'Ravi' , address:'america'},
          {id: '7', name:'Ninja' , address:'batala'},
          {id: '8', name:'Guts' , address:'amritsar'},
          {id: '9', name:'Griffith' , address:'pune'},
          {id: '10', name:'Zodd' , address:'banglore'},
          {id: '11', name:'Ye Qiu' , address:'chennai'},
          {id: '12', name:'Rohda' , address:'jammu'},
          {id: '13', name:'kaashi' , address:'gujrat'},
                          ];

           var data='';
           var doc='';
           var span = document.getElementsByClassName("close")[0];
               span.onclick = function() {
               content.style.display = "none";
           }          
                      // search button function
              
          function searchitem(){
            var val=document.getElementById('search').value;
            function filterByValue(array, string) {
            return array.filter(o => Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));    
          }
            var n= filterByValue(students, val);
            var id=n.map(item=>item.id)  
            var array=[];
            for(var j=0;j<id.length;j++){
            var c=students.findIndex(x => x.id=== id[j]);
            array.push(c);

            }
            
            var name=n.map(item=>item.name)
            var address=n.map(item=>item.address)
            for(var j=0;j<id.length;j++){
            var c= array[j];
            doc+=`<tr id='table`+c+`'>  <td>`+id[j]+`</td>  
            <td>`+name[j]+`</td>  
            <td>`+address[j]+`</td>
            <td><button onclick='edit(`+c+`)'>Edit</button> <button onclick='remove(`+c+`)'>Remove</button></td>
            </tr>`
            table.innerHTML=doc;
                
            } doc='';}
                        ////////search button end
            var o='';
            var savebutton=document.getElementById('savebtn');                    
            //save button function in add card btn
            savebutton.onclick= function(){
            // countt++;
            var id1= +document.getElementById('idd').value;
            var name1=document.getElementById('namee').value;
            var address1=document.getElementById('addresss').value;
            var o={id:id1.toString(), name:name1 ,address:address1 };
            students.push(JSON.parse(JSON.stringify(o))); ///length increased
            var j=students.length -1 ;
                        
            for (var  i = students.length -1 ; i < students.length; i++) {
          
            if(i == j) 
            {  
            var html='';
            data+=`<tr id='table`+i+`'>  <td>`+students[i].id+`</td>  
            <td>`+students[i].name+`</td>  
            <td>`+students[i].address+`</td>
            <td><button onclick='edit(`+i+`)'>Edit</button> <button onclick='remove(`+i+`)'>Remove</button></td>
            </tr>`
            var nl= table.innerHTML=data;
            
            }}}
               //////savebtn end
                      
              ///for popup
            var btn = document.getElementById("btn");
            btn.onclick = function() {
                if( content.style.display =='block'){
                  content.style.display='none';
                }
                else{
                    content.style.display='block';
                }
            }
          //for popup end

            var table=document.getElementById('table');
            display();
             
            function display(){
                var html='';
                for(var i=0;i<students.length;i++){
                html+=`<tr id='table`+i+`'>  <td>`+students[i].id+`</td>  
                <td>`+students[i].name+`</td>  
                <td>`+students[i].address+`</td>
                <td><button onclick='edit(`+i+`)'>Edit</button> <button onclick='remove(`+i+`)'>Remove</button></td>
                </tr>`
                data= table.innerHTML=html;        
                }  
            }
           /////////////edit function
              
           function edit(indice) {
                var html =`<tr><td><input id='id`+indice+`' type='text' value='`+students[indice].id+`'></td>
                <td><input id='name`+indice+`' type='text' value='`+students[indice].name+`'></td>
                <td><input id='address`+indice+`' type='text' value='`+students[indice].address+`'></td>
                <td><button onclick='save(`+indice+`)'>Save</button><button onclick='remove(`+indice+`)'>Remove</button></td>
                </tr>`
                document.getElementById("table"+indice).innerHTML = html; 
           }    
             /////save 
          function save(indice) {
                students[indice].id = document.getElementById("id"+indice).value;
                students[indice].name = document.getElementById("name"+indice).value;
                students[indice].address = document.getElementById("address"+indice).value;
                var  html=`<tr id='table`+indice+`'>  <td>`+students[indice].id+`</td>  
                <td>`+students[indice].name+`</td>  
                <td>`+students[indice].address+`</td>
                <td><button onclick='edit(`+indice+`)'>Edit</button> <button onclick='remove(`+indice+`)'>Remove</button></td>
                </tr>`
                document.getElementById("table"+indice).innerHTML = html; 
                display();
          }
            /// remove
            function remove(indice) {
                students.splice(indice, 1);
                display(); 
            }
        
