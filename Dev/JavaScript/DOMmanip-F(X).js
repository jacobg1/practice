for (i = 1; i <= 3; i++) {
   var boxElement = document.createElement('div');
   boxElement.className = 'box-' + i;
   document.getElementsByTagName('body')[0].appendChild(boxElement);
};


/*html and css

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Abstract Art</title>
</head>
<body>

</body>
</html>


.box-1 {
    background-color: red;
    height: 100px;
    width: 300px;
}


.box-2 {
    background-color: green;
    height: 400px;
    width: 750px;
}

.box-3 {
*/
