define({ "api": [
  {
    "type": "post",
    "url": "/users/:userid/items/:itemid/files",
    "title": "Create File",
    "name": "CreateFile",
    "group": "Files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of File</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>mimetype</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>URL</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "ispreview",
            "description": "<p>Use as Preview</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sorting",
            "description": "<p>Sorting</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"name\" : \"file 2\",\n    \"description\" : \"file description\",\n    \"mimetype\" : \"image/jpg\",\n    \"url\" : \"https://upload....\",\n    \"ispreview\" : \"true\",\n    \"sorting\" : \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"id\": \"5714ab76ac49314c315cf9f0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/users/files/:fileid/download",
    "title": "Piping Download File",
    "name": "File",
    "group": "Files",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/users/:userid/items/:itemid/files/:fileid",
    "title": "Get File",
    "name": "File",
    "group": "Files",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"5714b371b83840f022252b29\",\n  \"sorting\": 1,\n  \"url\": \"https://upload.w...gallop.jpg\",\n  \"mimetype\": \"image/jpg\",\n  \"description\": \"file description\",\n  \"name\": \"file 1\",\n  \"ispreview\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "get",
    "url": "/users/:userid/items/:itemid/files",
    "title": "Get File List of Item",
    "name": "FilesList",
    "group": "Files",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5714b371b83840f022252b29\",\n    \"sorting\": 1,\n    \"url\": \"https://upload.w...gallop.jpg\",\n    \"mimetype\": \"image/jpg\",\n    \"description\": \"file description\",\n    \"name\": \"file 1\",\n    \"ispreview\": true\n  },\n  ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "put",
    "url": "/users/:userid/items/:itemid/files/:fileid",
    "title": "Update File",
    "name": "UpdateFile",
    "group": "Files",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "put",
    "url": "/users/:userid/items/:itemid/files/:fileid",
    "title": "Update File",
    "name": "UpdateFile",
    "group": "Files",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Files"
  },
  {
    "type": "put",
    "url": "/users/:userid/items/:itemid/licences",
    "title": "Update Licence",
    "name": "AddLicence",
    "group": "Items",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "post",
    "url": "/users/:userid/items/:itemid/licences",
    "title": "Add Licence to Item",
    "name": "AddLicence",
    "group": "Items",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "post",
    "url": "/users/:userid/items",
    "title": "Create Item",
    "name": "CreateItem",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Item</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Item</p>"
          },
          {
            "group": "Parameter",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Parameter",
            "type": "[Date]",
            "optional": false,
            "field": "expirationdate",
            "description": "<p>Expiration Date if necessary</p>"
          },
          {
            "group": "Parameter",
            "type": "[Number]",
            "optional": false,
            "field": "downloadlimit",
            "description": "<p>Download Limitation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"name\" : \"item 1\",\n    \"description\" : \"description item 1\",\n    \"tags\" : [\"tag 1\", \"tag 2\"],\n    \"expirationdate\" : \"2016/12/31\",\n    \"downloadlimit\" : 5\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"id\": \"5714ab76ac49314c315cf9f0\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "delete",
    "url": "/users/:userid/items/:itemid/licences",
    "title": "Delete Licence",
    "name": "DeleteLicence",
    "group": "Items",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/users/:userid/items",
    "title": "Request Items List of User",
    "name": "GetItems",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>'me' or database unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>DB Id of Item.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of Item</p>"
          },
          {
            "group": "Success 200",
            "type": "[String]",
            "optional": false,
            "field": "tags",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "files",
            "description": "<p>Array of item files</p>"
          },
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "licences",
            "description": "<p>Array of item files</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of Item</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "creationdate",
            "description": "<p>Date of Item Creation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n[\n {\n    \"_id\": \"5710060e6dfb15242b2c7e36\",\n    \"name\": \"item new 6\",\n    \"tags\": [],\n    \"files\": [\n      {\n        \"name\": \"file 41\",\n        \"url\": \"test url\",\n        \"mimetype\": \"png\",\n        \"_id\": \"5710060e6dfb15242b2c7e37\",\n        \"ispreview\": false\n      }\n    ],\n    \"licences\": [],\n    \"state\": \"created\",\n    \"creationdate\": \"2016-04-14T21:05:18.996Z\"\n  }, ...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/users/:userid/items",
    "title": "Get List of User Items",
    "name": "ItemsList",
    "group": "Items",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5714ab76ac49314c315cf9f0\",\n    \"name\": \"item 1\",\n    \"description\": \"description item 1\",\n    \"expirationdate\": \"2016-12-30T23:00:00.000Z\",\n    \"downloadlimit\": 5,\n    \"tags\": [\n      \"tag 1\",\n      \"tag 2\"\n    ],\n    \"files\": [],\n    \"licences\": [],\n    \"state\": \"created\",\n    \"creationdate\": \"2016-04-18T09:40:06.383Z\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "put",
    "url": "/users/:userid/items/:itemid/state",
    "title": "Set State of Item",
    "name": "SetStateItem",
    "group": "Items",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n    \"state\" : \"active\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "put",
    "url": "/users/:userid/items",
    "title": "Update User Item",
    "name": "UpdateItem",
    "group": "Items",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "Items"
  },
  {
    "type": "put",
    "url": "/users/:userid",
    "title": "Change User",
    "name": "ChangeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:userid/password",
    "title": "Change User Password",
    "name": "ChangeUserPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>old Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>new Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"oldPassword\": \"123\",\n    \"newPassword\": \"456\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create new User",
    "name": "CreateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of new created user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authirization token for new created user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"id\": \"57145eae7e576380308925d7\",\n    \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGci...\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "System",
            "description": "<p>Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Validation",
            "description": "<p>Error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "System Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"code\": 11000,\n  \"errmsg\": \"E11000 duplicate key error collection: tpdev.users index: email_1 dup key: { : \\\"new@user.de\\\" }\"\n}",
          "type": "json"
        },
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"message\": \"User validation failed\",\n  \"name\": \"ValidationError\",\n  \"errors\": {\n    \"password\": {\n      \"properties\": {\n        \"minlength\": 6,\n        \"type\": \"minlength\",\n        \"message\": \"Path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length (6).\",\n        \"path\": \"password\",\n        \"value\": \"1\"\n      },\n      \"message\": \"Path `password` (`1`) is shorter than the minimum allowed length (6).\",\n      \"name\": \"ValidatorError\",\n      \"kind\": \"minlength\",\n      \"path\": \"password\",\n      \"value\": \"1\"\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userid",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>'me' or database unique ID. If 'me' returns data of authenticated user. Database id only for administrator allowed</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>DB Id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>Alias of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Date of User registration.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State of User.  Values: 'requested', 'preliminary', 'active', 'disabled', 'deleted'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>Authentication provider for user, default 'local', TODO: facebook...</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User role, values: 'merchandpreliminary', 'merchand', 'moderator', 'administrator'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"_id\": \"571003880274d0600e5ac80c\",\n     \"email\": \"super@admin.com\",\n     \"name\": \"superadmin\",\n     \"alias\": \"superman\",\n     \"registered\": \"2016-04-14T20:54:32.491Z\",\n     \"state\": \"requested\",\n     \"provider\": \"local\",\n     \"role\": \"administrator\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userid/userimage",
    "title": "Get User Image",
    "name": "GetUserImage",
    "group": "User",
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get User List",
    "name": "GetUserList",
    "group": "User",
    "permission": [
      {
        "name": "User role administrator"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>User Alias</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "registered",
            "description": "<p>Date of User Registration</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>User State. Values: 'requested', 'preliminary', 'active', 'disabled', 'deleted'</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>Authentication Provider for User, default 'local', TODO: facebook...</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>User Role, values: 'merchandpreliminary', 'merchand', 'moderator', 'administrator'</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"_id\": \"571003880274d0600e5ac80c\",\n     \"email\": \"super@admin.com\",\n     \"name\": \"superadmin\",\n     \"alias\": \"superman\",\n     \"registered\": \"2016-04-14T20:54:32.491Z\",\n     \"state\": \"requested\",\n     \"provider\": \"local\",\n     \"role\": \"administrator\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:userid/userimage",
    "title": "Save User Image",
    "name": "SaveUserImage",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"userimage\" : \"iVBORw0KGgoAAAANSUhEUgAA...\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./user/index.js",
    "groupTitle": "User"
  }
] });
