<?php

namespace helper;

class Router {

	public static $routes = array();

	public static $methods = array();

	public static $callbacks = array();

	public static $permissions = array();

	public static $patterns = array(
        ':any' => '([^/]+)',
        ':char' => '([a-zA-Z]+)',
        ':int' => '([0-9]+)',
        ':all' => '(.*)'
    );

    public static $current_route = '/';

	public static function __callStatic($method, $params){

		$params[0] = ltrim($params[0], '/');
		$params[0] = trim($params[0], '/');
		array_push(self::$routes, $params[0]);
		array_push(self::$methods, strtoupper($method));
		array_push(self::$callbacks, $params[1]);
	}

	public static function run($force_route = null){

		$rt = isset($_GET["rt"]) ? $_GET["rt"] : '';
		$method = $_SERVER["REQUEST_METHOD"];
		if (in_array($rt, self::$routes)){
			$keys = array_keys(self::$routes, $rt);
			foreach($keys as $key){
				if (self::$methods[$key] == $method || self::$methods[$key] == 'ANY'){
					self::$current_route = '/'.self::$routes[$key];
					return self::process(self::$callbacks[$key], array());
				}
			}
		} else {
            $pos = 0;
            foreach (self::$routes as $route) {
                if (strpos($route, ':') !== false) {
                    $route = str_replace(array_keys(self::$patterns), array_values(self::$patterns), $route);
                }
                if (preg_match('#^' . $route . '$#', $rt, $matched)) {
                	if (self::$methods[$pos] == $method || self::$methods[$pos] == 'ANY'){
                		array_shift($matched);
                		return self::process(self::$callbacks[$pos], $matched);
                	}
                }
            	$pos++;
            }
		}
		//return new Redirect(404);
	}

	public static function process($call, $params){
		if (!is_object($call)){

			$controller = new $call['controller']();

			return call_user_func_array(array($controller, $call['action']), $params);

		} else {
			return call_user_func_array($call, $params);
		}
	}

}
