# Titlebinder

Esta aplicación, a partir de un campo de texto, filtra tanto los contenidos de una columna de posts, asi como también de una columna de tareas por hacer. 

# Instrucciones de instalación

Esta aplicación está pensada para funcionar desde localhost, u hosteada en una página. No funcionará si se decide abrir desde escritorio porque en ese caso implica realizar solicitudes de referencias cruzadas.

Si no se tiene una página para hostear la aplicación, una forma es configurar un servidor HTTP mediante Node.js, agregar los archivos de este repositorio a una carpeta public, posteriormente ejecutar el script para hacer funcionar el servidor, y finalmente abrir la página en el navegador, en el puerto configurado en el script de servidor (ver como referencia este [tutorial](https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular)).


# Instrucciones de uso

- Se escribe en el campo de búsqueda en la parte superior 
- Una vez que se escribe, se muestran en la parte izquierda todos los posts que tienen en su título como contenido el input introducido en el campo de búsqueda, mientras que en la parte derecha se muestran todas las tareas que tienen en su título como contenido ese mismo input. 
