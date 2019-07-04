/*-------------------------------------------------------------------------------------
  # Order Form Config
  -------------------------------------------------------------------------------------*/
// Check url if "narucivanje" page is opened from other page
if ($('.order-form').length > 0) {
    if (window.location.href.indexOf("f=web") > -1 || window.location.href.indexOf("f=grafika") > -1 || window.location.href.indexOf("f=graphic") > -1 || window.location.href.indexOf("f=seo") > -1) {
        $('.popart-order-btn').each(function () {
            $(this).removeClass('selected-btn');
            $('.order-form').fadeOut(0);
        });
    }

    if (window.location.href.indexOf("f=web") > -1) {
        console.log('www')
        $('.order-form-web').fadeIn();
        $('#web').addClass('selected-btn');
    }

    if (window.location.href.indexOf("f=grafika") > -1 || window.location.href.indexOf("f=graphic") > -1) {
        $('.order-form-graphic').fadeIn();
        $('#graphic').addClass('selected-btn');
    }

    if (window.location.href.indexOf("f=seo") > -1) {
        $('.order-form-seo').fadeIn();
        $('#seo').addClass('selected-btn');
    }
}

// Check if input has value and move the label above input
function checkInputValue(e) {
    var $this = $(e.target);


    if ($this.prop('type') !== 'checkbox' && $this.prop('type') !== 'radio' && $this.prop('type') !== 'number') {
        if ($this.length > 0 && $this.val() !== '') {
            $this.next().addClass('input-has-value');
        } else {
            $this.next().removeClass('input-has-value');
        }
    }
}


// By clicking one of the top form buttons, it's form shows
function showOrderForm() {
    $('.order-form').each(function () {
        $(this).fadeOut();
    });
    $('.popart-order-btn').each(function () {
        $(this).removeClass('selected-btn');
    });
    $(this).addClass('selected-btn');

    if ($(this).is('#seo'))
        $('.order-form-seo').fadeIn();

    if ($(this).is('#graphic'))
        $('.order-form-graphic').fadeIn();

    if ($(this).is('#web'))
        $('.order-form-web').fadeIn();
}

// Check if required inputs are not empty
function checkSingleRequiredField() {
    // check input fields on input blur
    if ($(this).prop('required') && !$(this).prop('readonly') && $(this).val() === '') {
        $(this).addClass('invalid-input');
        $(this).parent().find('.invalid-input-msg').slideDown(350);
    } else {
        $(this).removeClass('invalid-input');
        $(this).parent().find('.invalid-input-msg').slideUp(350);
    }
}
function checkSingleSpanRequiredField() {
    // check input fields on input blur
    if ($(this).attr('data') === 'required' && $(this).parent().find('input').val() === '') {
        $(this).addClass('invalid-input');
        $(this).parent().find('.invalid-input-msg').slideDown(350);
    } else {
        $(this).removeClass('invalid-input');
        $(this).parent().find('.invalid-input-msg').slideUp(350);
    }
}

function validateEmail(email) {
    // check email validation
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function checkAllRequiredField(id) {
//   // check input fields on form submit button
//   if(id == 'seo-opt'){
//       var email = $('#email').val();
//   }else if(id == 'web'){
//       var email = $('#' + id + '-email').val();
//   }else if(id = 'graphic') {
//       var email = $('#' + id + '-email').val();
//   }else if(id = 'seo') {
//       var email = $('#' + id + '-email').val();
//   }
//
//   var validInputs = true;
//   var validEmail = true;
//   var validTextarea = true;
//   var validSpan = true;
//
//   $('.order-form-' + id + ' input').each(function () {
//     if ($(this).prop('required') && !$(this).prop('readonly') && $(this).val() === '') {
//       $(this).addClass('invalid-input');
//       $(this).parent().find('.invalid-input-msg').slideDown(350);
//       validInputs = false;
//     }
//
//     if ($(this).prop('type') === 'email' && $(this).prop('required') && !$(this).prop('readonly')) {
//       if (!validateEmail(email)) {
//         $(this).addClass('invalid-input');
//         $(this).parent().find('.invalid-input-msg').slideDown(350);
//         validEmail = false;
//       }
//     }
//   })
//
//   $('.order-form-' + id + ' textarea').each(function () {
//     if ($(this).prop('required') && !$(this).prop('readonly') && $(this).val() === '') {
//       $(this).addClass('invalid-input');
//       $(this).parent().find('.invalid-input-msg').slideDown(350);
//       validTextarea = false;
//     }
//   });
//
//   $('.order-form-' + id + ' span').each(function () {
//     if ($(this).attr('data') === 'required' && $(this).parent().find('input').val() === '') {
//       $(this).addClass('invalid-input');
//       $(this).parent().find('.invalid-input-msg').slideDown(350);
//       validSpan = false;
//     }
//   });
//
//   if (validEmail && validInputs && validTextarea && validSpan) {
//     return true;
//   } else {
//     return false;
//   }
// }

$('.popart-order-btn').on('click',function(){
    $('#form-web').find('.invalid-input').removeClass('invalid-input');
    $('#form-web').find('.invalid-input-msg').hide();
    $('.icon-cross-web-privacy').css('border','2px solid #959595');

    $('#form-graphic').find('.invalid-input').removeClass('invalid-input');
    $('#form-graphic').find('.invalid-input-msg').hide();
    $('.icon-cross-graphic-privacy').css('border','2px solid #959595');

    $('#form-seo').find('.invalid-input').removeClass('invalid-input');
    $('#form-seo').find('.invalid-input-msg').hide();
    $('.icon-cross-seo-privacy').css('border','2px solid #959595');

});

if(document.getElementById('web-telefon') != null){
    document.getElementById('web-telefon').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,25})/);
      e.target.value = x[0];
    });
}
if(document.getElementById('graphic-telefon') != null){
    document.getElementById('graphic-telefon').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,25})/);
      e.target.value = x[0];
    });
}
if(document.getElementById('seo-telefon') != null){
    document.getElementById('seo-telefon').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,25})/);
      e.target.value = x[0];
    });
}
if(document.getElementById('order-tel') != null){
    document.getElementById('order-tel').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,25})/);
      e.target.value = x[0];
    });
}
if(document.getElementById('careers-tel') != null){
    document.getElementById('careers-tel').addEventListener('input', function (e) {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{0,25})/);
      e.target.value = x[0];
    });
}


$('#web-name').on('keyup',function(){
    var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
    
});



$('#graphic-name').on('keyup',function(){
    var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
});


$('#seo-name').on('keyup',function(){
    var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
});



$('#order-name').on('keyup',function(){
    var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
});



$('#careers-name').on('keyup',function(){
   var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
});

$('#full-name').on('keyup',function(){
    var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
});


$('#contact-name').on('keyup',function(){
    var myString = this.value;
    var lastChar = myString[myString.length -1];
    var regex = /^([^0-9]*)$/;
    
    if(!regex.test(lastChar)) {
        $(this).val('');
    }
});


$('#website').on('change',function(){
    var flag = ValidURL(this.value);
    if(!flag){
        $('#website').val('');
        setTimeout(function(){
            $('#website').addClass('invalid-input');
        },100);
         setTimeout(function(){
            $('#website').removeClass('invalid-input');
        },2000);
        $('#website').focus();
    }else{
        $('#website').removeClass('invalid-input');
    }
});

$('#web-website').on('change',function(){
    var flag = ValidURL(this.value);
    if(!flag){
        $('#web-website').val('');
        setTimeout(function(){
            $('#web-website').addClass('invalid-input');
        },100);
        setTimeout(function(){
            $('#web-website').removeClass('invalid-input');
        },2000);
        $('#web-website').focus();
    }else{
        $('#web-website').removeClass('invalid-input');
    }
});



function ValidURL(str) {
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if(!regexp.test(str)) {
    return false;
  } else {
    return true;
  }
}

function checkAllRequiredField(id) {
    // check input fields on form submit button
    if(id == 'seo-opt'){
        var email = $('#email').val();
        
    }else if(id == 'web'){
        var email = $('#' + id + '-email').val();
        
    }else if(id == 'graphic') {
        var email = $('#' + id + '-email').val();
    }else if(id == 'seo') {
        var email = $('#' + id + '-email').val();
    }else if(id == 'careers') {
        var email = $('#' + id + '-email').val();
    }else if(id == 'order') {
        var email = $('#' + id + '-email').val();
    }else if(id == 'contact') {
        var email = $('#' + id + '-email').val();
    }

    var validInputs = true;
    var validEmail = true;
    var validTextarea = true;
    var validSpan = true;


    $('.order-form-' + id + ' input').each(function () {
        if ($(this).prop('required') && !$(this).prop('readonly') && $(this).val() === '') {
            $(this).addClass('invalid-input');
            $(this).parent().find('.invalid-input-msg').slideDown(350);
            validInputs = false;
        }

        if ($(this).prop('type') === 'email' && $(this).prop('required') && !$(this).prop('readonly')) {
            if (!validateEmail(email)) {
                $(this).addClass('invalid-input');
                $(this).parent().find('.invalid-input-msg').slideDown(350);
                validEmail = false;
            }
        }
    })

    $('.order-form-' + id + ' textarea').each(function () {
        if ($(this).prop('required') && !$(this).prop('readonly') && $(this).val() === '') {
            $(this).addClass('invalid-input');
            $(this).parent().find('.invalid-input-msg').slideDown(350);
            validTextarea = false;
        }
    });

    $('.order-form-' + id + ' span').each(function () {
        if ($(this).attr('data') === 'required' && $(this).parent().find('input').val() === '') {
            $(this).addClass('invalid-input');
            $(this).parent().find('.invalid-input-msg').slideDown(350);
            validSpan = false;
        }
    });

    if (validEmail && validInputs && validTextarea && validSpan) {
        return true;
    } else {
        return false;
    }
}

// Check if fake robot is checked
function checkNorobot(id) {
    if ($('#order-norobot-' + id).is(':checked')) {
        $('.icon-cross-' + id + '-norobot').removeClass('invalid-norobot');
        return true;
    } else {
        $('.icon-cross-' + id + '-norobot').addClass('invalid-norobot');
        return false;
    }
}
// Check if privacy policy is checked
function checkPrivacy(id) {
    if ($('#order-privacy-' + id).is(':checked')) {
        //$('.icon-cross-' + id + '-privacy').removeClass('invalid-norobot');
        $('.icon-cross-' + id + '-privacy').css('border','2px solid #959595');
        return true;
    } else {
        //$('.icon-cross-' + id + '-privacy').addClass('invalid-norobot');
        $('.icon-cross-' + id + '-privacy').css('border','2px solid #ff3b30');
        return false;
    }
}

// Submit the form
function sendFormMessage(id) {
    //checkAllRequiredField(id);
    //checkNorobot(id);
    checkPrivacy(id);

    if (checkAllRequiredField(id) && checkPrivacy(id)) {
        var activeForm = $('#form-'+ id);
        $.ajax({
            url: 'ajax/order-form-'+ id +'-ajax.php',
            type: "POST",
            dataType: "json",
            data: $('#form-'+ id).serialize(),
            success: function (res) {
                
                // array order
                // 0: error
                // 1: message

                formResponse(activeForm, res[0], res[1]);
            }
        });
    } else {
        $('html, body').animate({
            scrollTop: $('.order-form-' + id).find('#form-' + id).offset().top - 120
        }, 750);
    }
}
function sendFormAttachmentMessage(id) {
    // checkAllRequiredField(id);
    // checkNorobot(id);
    checkPrivacy(id);

    if (checkAllRequiredField(id) && checkPrivacy(id)) {
        var form = $('#form-' + id);
        var activeForm = $('#form-'+ id)[0]; // You need to use standard javascript object here
        var formData = new FormData(activeForm);

        $.ajax({
            url: 'ajax/order-form-'+ id +'-ajax.php',
            type: "POST",
            data: formData,
            contentType: false,
            processData:false,
            success: function (res) {
                
                // data array order
                // 0: error
                // 1: message
                // 1: message

                var data = JSON.parse(res);
                formResponse(form, data[0], data[1]);
            },
            error:function(err){
                console.log(err)
            }
        });
    }
}

function formResponse(elem, error, message) {
    var errorClass = 'notification-field-error';
    if (error !== 0) {
        errorClass = 'notification-field-success';
        $(elem)[0].reset();
    }
    console.log(elem, error, message)
    $(elem).find('.notification-field').removeClass('notification-field-error notification-field-success');
    $(elem).find('.notification-field').addClass(errorClass).show();

    $(elem).find('.notification-message').html(message);
    $(elem).find('.notification-message').css('display','block');
    $(elem).find('#order-form-response').css('display', 'block');
    // $(elem).find('.notification-message').attr('tabindex','1');
    // $(elem).find('.notification-message').focus();
    
    $('html, body').animate({
        scrollTop: $(elem).find('.notification-message').offset().top
    }, 2000);
}

function checkFileSize(file) {
    var fileSize = 0;

    for (var i = 0; i < file.length; i++) {
        fileSize += file[i].size;
    }

    return fileSize > 5242880 ? false : true; // 5MB
}

function checkFileExtenstion(file) {
    var fileExt = [];
    var allowedExt = ["doc", "docx", "pdf"];
    var correctFileExt = [];

    for (var i = 0; i < file.length; i++) {
        fileExt.push(file[i].name.split('.').pop());
    }

    for (var j = 0; j < allowedExt.length; j++) {
        for (var k = 0; k < fileExt.length; k++) {
            if (allowedExt[j].indexOf(fileExt[k]) > -1) {
                correctFileExt.push(fileExt[k]);
            }
        }
    }

    return correctFileExt.length === fileExt.length ? true : false;
}

function checkFileValidation() {
    var activeForm = $(this).closest('form').attr('id')
    var file = this.files;

    // Return if file size is greater than 5MB
    if (!checkFileSize(file)) {
        $('#' + activeForm + ' #form-response').addClass('notification-field-error').show();
        $('#' + activeForm + ' #form-response').find('.notification-message').text('VeliÄina fajla mora biti manja od 5MB.');
        return false;
    }

    // Return if file type is not PDF, DOC or DOCX
    if (!checkFileExtenstion(file)) {
        $('#' + activeForm + ' #form-response').addClass('notification-field-error').show();
        $('#' + activeForm + ' #form-response').find('.notification-message').text('Tip fajla mora biti jedan od sledeÄ‡ih: PDF, DOC ili DOCX.');
        return false;
    }


    $('#' + activeForm + ' #form-response').removeClass('notification-field-error notification-field-success').hide();
    $('#' + activeForm + ' #form-response').find('.notification-message').text('');
    return true;
}

$('.file-careers').on('change', checkFileValidation);


function addNewField() {
    var arr = $('.favorite-website-field');
    if(arr.length <= 9){
        $(".all-favorite-websites").append('<div class="form-field full-width favorite-website-field"><input type="text" name="favorite-website[]" class="favorite-website"><span class="close-website-field">&times;</span></div>');
    }
}

function deleteNewField() {
    $(this).parent().remove();
}

var animatingHover = true;
var intervalTime;
$('.triger-single-options').on('mouseenter', function () {
    if (animatingHover) {
        animatingHover = false;
        $('.service-options').slideDown(300).addClass('animating');
        intervalTime = setInterval(function () {
            $('.service-options').removeClass('animating');
            animatingHover = true;
        }, 300);
    }
});
$('.triger-single-options').on('mouseleave', function () {
    $('.service-options').slideUp(300).addClass('animating')
    clearInterval(intervalTime);
    setTimeout(function () {
        $('.service-options').removeClass('animating');
        animatingHover = true;
    }, 300);
});;

$('.order-form input').on('input', checkInputValue);
$('.order-form input').blur(checkSingleRequiredField);
$('.order-form textarea').blur(checkSingleRequiredField);
$('.order-form span').on('click', checkSingleSpanRequiredField);
$('.popart-order-btn').on('click', showOrderForm);
$('#web_submit').on('click', function (e) {
    e.preventDefault();
    sendFormMessage('web');
});
$('#graphic_submit').on('click', function (e) {
    e.preventDefault();
    // var formData = $('#id_forme').serialize();
    sendFormMessage('graphic');
});
$('#seo_submit').on('click', function (e) {
    e.preventDefault();
    sendFormMessage('seo');
});
$('#seo_opt_submit').on('click', function (e) {
    e.preventDefault();
    sendFormMessage('seo-opt');
});
$('#order_submit').on('click', function (e) {
    e.preventDefault();
    sendFormMessage('order');
});
$('#careers_submit').on('click', function (e) {
    e.preventDefault();
    sendFormAttachmentMessage('careers');
});
$('#contact_submit').on('click', function (e) {
    e.preventDefault();
    sendFormMessage('contact');
});
$('.icon-cross').on('click', function () {
    $(this).removeClass('invalid-norobot');
});
$('.order-norobot label').on('click', function () {
    $(this).find('.icon-cross').removeClass('invalid-norobot');
})
$('.add-favorite-website-field-btn').on('click', addNewField);
$(document).on('click', '.close-website-field', deleteNewField);


// if ($('input[name="Acceptterms"]').is(':checked')) {
// $.ajax({
//     url: '<?php echo get_stylesheet_directory_uri(); ?>/ajax/contact-form.php',
//     type: "POST",
//     data: form.serialize(),
//     dataType: "json",
//     success: function (res) {
//       console.log(res);
//     }
// });
// } else {
//     $('.ajax-loader').css('visibility', 'hidden');
//     $('#form-response').addClass('wpcf7-response-output wpcf7-validation-errors').html('Please read and agree to the terms, also fill required fields.</span>').show();
// }