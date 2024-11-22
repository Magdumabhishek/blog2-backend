{
	"info": {
		"_postman_id": "0a2b97c3-5fe9-472e-ab41-c63d06cf0bad",
		"name": "blog2-Backend",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "39559616"
	},
	"item": [
		{
			"name": "get Blog",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/blog",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog"
					]
				}
			},
			"response": []
		},
		{
			"name": "post Blog",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2M4OTY5YmUzMWYxYjg2NTI4MWUxYyIsImlhdCI6MTczMjAyNTUyOH0.Y7XoSa562lj-s-QMxwo-yUw-8Rudi7Zdv90wKRRjRdw",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\":\"blog test\",\r\n    \"content\":\"test test test\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/blog",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog"
					]
				}
			},
			"response": []
		},
		{
			"name": "update Blog",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2M4OTY5YmUzMWYxYjg2NTI4MWUxYyIsImlhdCI6MTczMjAyNTUyOH0.Y7XoSa562lj-s-QMxwo-yUw-8Rudi7Zdv90wKRRjRdw",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"title\":\"blog test 2\",\r\n    \"content\":\"test test test 2\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/blog/673c9d0e48c2dbfb39ab248d",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog",
						"673c9d0e48c2dbfb39ab248d"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete Blog",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2M4OTY5YmUzMWYxYjg2NTI4MWUxYyIsImlhdCI6MTczMjAyNTUyOH0.Y7XoSa562lj-s-QMxwo-yUw-8Rudi7Zdv90wKRRjRdw",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/blog/673c9d0e48c2dbfb39ab248d",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"blog",
						"673c9d0e48c2dbfb39ab248d"
					]
				}
			},
			"response": []
		},
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\":\"vrushali@gmail.com\",\r\n    \"password\":\"Vrushali@000\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/user/login",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "get User",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "post User",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\":\"abcd\",\r\n    \"email\":\"abcd@gmail.com\",\r\n    \"password\":\"Abcd@123\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/user/login",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "update User",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2NhMDNiYThlZjEzMTJmNjI0MDRjYyIsImlhdCI6MTczMjAyNjQ4MH0.0wT12Spl020VaB7W0vpqmWs7Cq87hoOx7V4ashxTmJw",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/user",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete User",
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "auth-token",
						"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3M2NhMDNiYThlZjEzMTJmNjI0MDRjYyIsImlhdCI6MTczMjAyNjQ4MH0.0wT12Spl020VaB7W0vpqmWs7Cq87hoOx7V4ashxTmJw",
						"type": "text"
					}
				],
				"url": {
					"raw": "https://blog2-backend-oojm.onrender.com/api/user/673ca03ba8ef1312f62404cc",
					"protocol": "https",
					"host": [
						"blog2-backend-oojm",
						"onrender",
						"com"
					],
					"path": [
						"api",
						"user",
						"673ca03ba8ef1312f62404cc"
					]
				}
			},
			"response": []
		}
	]
}
