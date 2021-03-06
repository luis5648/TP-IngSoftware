var color = document.querySelector('#theme');
var itemColor = color.options[color.selectedIndex].value;
var editor = ace.edit("editor");
editor.session.setMode("ace/mode/c_cpp");

//evento para cargar el tema al inicio de la página
window.addEventListener('load', () => {

    editor.setTheme(`ace/theme/${itemColor}`);
});


//evento para cambiar el tema según la selección
color.addEventListener('change', (e) => {

    editor.setTheme(`ace/theme/${e.target.value}`);

});

//bajar lo del textarea


var txt = document.querySelector('#editor');
document.getElementById('link').onclick = function (code) {
    this.href = 'data:text/none;charset=utf-8,'
        + encodeURIComponent(txt.innerText.substr(txt.innerText.indexOf("//Escribe tu código de c o c++ aqui!")));
};


// recibir problemas
$(document).ready(function () {


    var direcc = 'management/c_api.php';
    var lenguaje = 2;
    var cont = 0;
    $.ajax({
        type: 'POST',
        url: direcc,
        data: {lenguaje},
        success: function (response) {
            let r = JSON.parse(response);

            $('#prob').text( r[0].enunciado);

            //selectbox

            r.forEach(element => {
                $('#selectP').append(`<option id="opcProblema" desc="${element.numero}" value="${element.id}">${element.nombre}</option>`);

         
            });

            $('#selectP').change(function (){
                var sel = document.querySelector('#selectP');
                item = sel.options[sel.selectedIndex].getAttribute("desc");
                console.log(item);
                if(r.length<item){
                    alert("NO")
                }
                else{
                    $('#prob').text(r[item].enunciado);
                }
                
            });
            
            

        }
    });
});



