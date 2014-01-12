window.onload=function() { 
    
    /* Add an Expense DialogBox*/
    
    var dialog_box = new Box('box', document.body,500, 300);
    
    dialog_box.setTitle("Add An Expense");
    dialog_box.importHTML("source/table.html");
    
    var but = new Button('test', 'quit');
    var but1 = new Button('test1', 'test');
    var but2 = new Button('test2', 'test');
    
    but.onclick(function() { dialog_box.hide() });
    but1.onclick(function() { alert(' ') });
    dialog_box.addButton(but);
    dialog_box.addButton(but1);
    dialog_box.addButton(but2);
  
    document.getElementById('add_expense').addEventListener('click', function() { dialog_box.open(); dialog_box.show(); });

    /*Table Format*/
    var arrayLines = document.getElementById("synthesis").rows; //l'array est stocké dans une variable

    for(var i = 0; i < arrayLines.length; i++)
    {
	if(i % 2 == 0) 	{
	    //si la clé est paire
            arrayLines[i].style.backgroundColor = "#bdcbf5";
	}
	
	else {
	    //elle est impaire
            arrayLines[i].style.backgroundColor = "#829eeb";
	}
    }
}
