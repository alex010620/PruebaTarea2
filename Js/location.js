
var Gtabla = [];
var comm = [];
var update = null;
var validar = true;
var a,b,c;
         

      function exito(){
     
          let fecha = new Date();
         
             date.value = fecha.toLocaleDateString();
             navigator.geolocation.getCurrentPosition((exito)=>{
                CLatitud.value = exito.coords.latitude;
                CLongitud.value = exito.coords.longitude;
             });
      }
      function error(error){
          alert("Hubo un error al octener la localizacion")
        }
        /*Eliminaciones*/ 
      function eliminartodo(){
        campos = document.getElementsByName('violacion');
        h = document.getElementById('com');
        h.innerHTML = h;
        tipos = [];
            for (i = 0; i < Gtabla.lengt; i++) {
               
            if (i != campos) {
                tipos.push(Gtabla[i]);
            } 
            }  
            Gtabla = tipos;
            localStorage.setItem('intro', JSON.stringify(Gtabla));
      }
      function confirETodo(){
          comf = confirm("Estas seguro de que quieres eliminar todos los registros?")
          if (comf == true) {
              eliminartodo();
          }
      }

        function EliminarFilaReporte(btn){
            eli = btn.getAttribute('eliminar');
            fila = btn.parentNode.parentNode;
            fila.parentNode.removeChild(fila);
    eli = btn.getAttribute('eliminar');
      tipos = [];

    for (i = 0; i < Gtabla.length; i++) {
       if (i != eli) {
           tipos.push(Gtabla[i]);
       } 
    }  
    Gtabla = tipos;
    localStorage.setItem('intro', JSON.stringify(Gtabla));
    
   }
   function v(){
       a = document.getElementById('lugar').value;
       b = document.getElementById('email').value;
       c = document.getElementById('coment').value;
   }


        function guardar(){
            v();
            Violacion = {};
            campos = document.getElementsByName('violacion');
            if(a == "" || b == "" || c == "" ){
                alert("Esta vasio");
            }else{
                for(i in campos){
                    campo = campos[i];
                    Violacion[campo.id] = campo.value;
                }
    
                if(update == null){
    
                    Gtabla.push(Violacion);
                }else{
                    Gtabla[update] = Violacion;
                    update= null;
                }
                localStorage.setItem('intro', JSON.stringify(Gtabla));
                mostrar();
                mostrarinfo();
                limpiar();
            }
           
           
        }
        function mostrar(){
            for (i = 0; i < Gtabla.length; i++) {
                 fila = Gtabla[i];
               tr = document.createElement('tr');
               vln= document.getElementById('com').value;
               vln = vln.replace('{email}',fila.email);
                  vln = vln.replace('{comentario}',fila.coment);
                  vln = vln.replace('{eliminar}', i);
               tr.innerHTML = vln;
               document.getElementById('commenta').appendChild(tr);
            }

       }
       function mostrarinfo(){
        for (i = 0; i < Gtabla.length; i++) {
             fila = Gtabla[i];
           tr = document.createElement('tr');
           vln= document.getElementById('lacion').value;
              vln = vln.replace('{lugar}',fila.lugar);
              vln = vln.replace('{tipo}',fila.tipo);
              vln = vln.replace('{date}',fila.date);
              vln = vln.replace('{CLatitud}',fila.CLatitud);
              vln = vln.replace('{CLongitud}',fila.CLongitud);
              vln = vln.replace('{email}',fila.email);
              vln = vln.replace('{comentario}',fila.coment);
              vln = vln.replace('{indice}', i);
              vln = vln.replace('{eliminar}', i);
           tr.innerHTML = vln;
           document.getElementById('bio').appendChild(tr);
        }

   }
       function editarFila(indic){
           update = indic;
           Violacion = Gtabla[indic];
           campos = document.getElementsByName('violacion');
            for(i in campos){
                campo = campos[i];
                campo.value =  Violacion[campo.id];
            }
        
       }
       function limpiar(){
           update = null;
           document.getElementById('lacion').innerHTML='';
           campos = document.getElementsByName('violacion');
            for(i in campos){
                campo = campos[i];
                campo.value = '';
            }
       }
     
       window.onload = function(){
           vln = localStorage.getItem('intro');
          
           if(vln != null){
              Gtabla = JSON.parse(vln);
           }
           mostrar();
           mostrarinfo();
       }
       var formBorrar = document.getElementById('reload');
      formBorrar.addEventListener('submit',function v(){
        campos = document.getElementsByName('violacion');
        for(i in campos){
            campo = campos[i];
           
        }
      })
    
      