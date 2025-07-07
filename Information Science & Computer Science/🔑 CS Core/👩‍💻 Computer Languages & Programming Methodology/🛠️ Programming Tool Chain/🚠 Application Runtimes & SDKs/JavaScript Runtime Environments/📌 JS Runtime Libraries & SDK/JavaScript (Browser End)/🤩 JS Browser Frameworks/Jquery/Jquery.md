# [Jquery](https://jquery.com)

[TOC]



jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.



## Resources

- [jQuery Core API Documentation](https://api.jquery.com/)
- [jQuery Learning Center](https://learn.jquery.com/)
- [jQuery Blog](https://blog.jquery.com/)
- [Contribute to jQuery](https://contribute.jquery.com/)
- [About the jQuery Foundation](https://jquery.org/)
- [Browse or Submit jQuery Bugs](https://github.com/jquery/jquery/issues)



## A Brief Look

### DOM Traversal and Manipulation

Get the `<button>` element with the class 'continue' and change its HTML to 'Next Step...'

```
$( "button.continue" ).html( "Next Step..." )
```

### Event Handling

Show the `#banner-message` element that is hidden with `display:none` in its CSS when any button in `#button-container` is clicked.

```
var hiddenBox = $( "#banner-message" );$( "#button-container button" ).on( "click", function( event ) {  hiddenBox.show();});
```

### Ajax

Call a local script on the server `/api/getWeather` with the query parameter `zipcode=97201` and replace the element `#weather-temp`'s html with the returned text.

```
$.ajax({  url: "/api/getWeather",  data: {    zipcode: 97201  },  success: function( result ) {    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );  }});
```