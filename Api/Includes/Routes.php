<?php

use helper\Router;

Router::get('/users', array('controller' => 'UserController', 'action' => 'index'));
Router::post('/users', array('controller' => 'UserController', 'action' => 'create'));
Router::put('/users/:int', array('controller' => 'UserController', 'action' => 'update'));

Router::post('/authenticate', array('controller' => 'AuthController', 'action' => 'login'));

Router::get('/user/:int/widgets', array('controller' => 'UserWidgetController', 'action' => 'getUserWidgets'));

Router::get('/user/:int/relations', array('controller' => 'UserWidgetController', 'action' => 'getRelations'));
Router::post('/user/relation', array('controller' => 'UserWidgetController', 'action' => 'create'));
Router::put('/user/:int/relation/:int', array('controller' => 'UserWidgetController', 'action' => 'update'));
Router::delete('/user/:int/relation/:int', array('controller' => 'UserWidgetController', 'action' => 'delete'));
Router::delete('/user/:int/relations', array('controller' => 'UserWidgetController', 'action' => 'deleteAll'));

Router::get('/widgets', array('controller' => 'WidgetController', 'action' => 'index'));
Router::put('/widgets/:int', array('controller' => 'WidgetController', 'action' => 'update'));
Router::delete('/widgets/:int', array('controller' => 'WidgetController', 'action' => 'delete'));

Router::get('/install/widgets', array('controller' => 'WidgetController', 'action' => 'install'));

Router::get('/admin/widgets', array('controller' => 'WidgetController', 'action' => 'getAll'));

