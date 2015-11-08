# background-changer
A very simple jQuery plugin to change the background color of HTML elements

## Example usage
### Example HTML markup
```html 
<ul id="change">
    <li>Line 1</li>
    <li>Line 2</li>
    <li>Line 3</li>
    <li>Line 4</li>
</ul>
<button id="revert">Revert changes !</button>
```
### Example Javascript
```javascript
$(function($){
    $('#change li').backgroundChanger({
        color:'#E11E11'
    });

    $('#revert').click(function(){
        $('#change li').backgroundChanger('clear');
    });
});
```