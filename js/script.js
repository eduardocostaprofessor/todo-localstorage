var aTextos = JSON.parse(localStorage.getItem('list_todos')) || [];

    // elementos
    var buttonCadastrar = document.querySelector('#cadastrar');
    var listTodos = document.querySelector('ul');
    var button = document.querySelector('button');

    button.addEventListener('click', cadastrarTodo);

    function renderTodos() {
        listTodos.innerHTML = '';
        
        for ( texto of aTextos){
            var li = document.createElement('li');
            var textNode = document.createTextNode(texto);
                li.append(textNode);

            var linkElement = document.createElement('a');
                linkElement.setAttribute('href', '#');
                var pos = aTextos.indexOf(texto);
                linkElement.setAttribute('onclick', 'removeTodo('+pos+')');
            
            var linkText = document.createTextNode(' excluir');
                linkElement.appendChild(linkText);
                li.append(linkElement);
            li.appendChild(linkElement);

            listTodos.appendChild(li);
        }
    }

    function removeTodo(pos){

        aTextos.splice(pos, 1);
        saveToStorage();
        renderTodos();
    }

    function cadastrarTodo() {

        var texto = document.getElementById('cadastrar').value;
        aTextos.push(texto.trim());
        document.getElementById('cadastrar').value = '';
        saveToStorage();
        renderTodos();
    }
    
    function saveToStorage() {
        localStorage.setItem('list_todos',JSON.stringify(aTextos));
    }

    renderTodos();