
`sudo mysql`
`mysql -u root -p` root
`sudo service mysql start|stop|restart`


La instalación de MySQL en Ubuntu usa por defecto auth_socket como plugin de autenticación.
Debemos cambiarlo manualmente a mysql_native_password.

https://stackoverflow.com/questions/39281594/error-1698-28000-access-denied-for-user-rootlocalhost

Despues del cambio, ya no funcionará `sudo mysql`.