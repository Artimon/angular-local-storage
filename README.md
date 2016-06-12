# Angular Local Storage

- Did you ever ask yourself why the local storage only supports strings?
- Have you ever been frustrated about different implementations in different browsers like localStorage.getItem(...) throwing an exception when the item is not available?

You may have found an answer with the angular local storage!

**Features**
- Data types: String, Boolean, Number, null and custom fallbacks.
- Namespacing to organize stored data.
- Zones to separate data between different logins for example.

### 2 Steps Setup & HowTo

**1. Include Local Storage Module**

Include local-storage.js after angular.js and before your app code as this example shows.

```html
<script type='text/javascript' src="vendor/angular.min.js"></script>
<script type='text/javascript' src="vendor/angular-pads/local-storage.js"></script>
<script type='text/javascript' src="app/app.js"></script>
```

**2. Add Local Storage To Your App**

Simply add **pads.localStorage** to your app depenencies.

```js
var myApp = angular.module('myApp', ['pads.localStorage']);
```

**3. Usage For Modules**

You are ready to use the local storage for your modules.

```js
angular.module('myApp').controller('MyCtrl', function ($scope, $padsLocalStorage) {
    // Optional, the default zone is "anonymous". Can be changed any time.
    $padsLocalStorage.setZone($scope.userId);

    // Set values into the storage under the namespace 'my-ctrl' with different variable names.
    $padsLocalStorage.setItem('my-ctrl', 'boolean-value', true);
    $padsLocalStorage.setItem('my-ctrl', 'number-value', 12.3);

    // Get item, it will return true and not "true", thus you can check with === against true.
    $padsLocalStorage.getItem('my-ctrl', 'boolean-value', false);

    // Remove an item from the storage.
    $padsLocalStorage.removeItem('my-ctrl', 'boolean-value');
});
```

License
----

MIT


**Free Software for your enjoyment!**