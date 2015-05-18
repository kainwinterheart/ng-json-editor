ng-json-editor
---

AngularJS wrapper for <https://github.com/josdejong/jsoneditor>

Example
===

In HTML:

```html
<div jsoneditor="my_editor"></div>
<div jsoneditor="another_editor"></div>
```

In your app:

```js
$scope.jsoneditor.editors.my_editor.get()
$scope.jsoneditor.editors.another_editor.set({asd:"qwe"})
```
