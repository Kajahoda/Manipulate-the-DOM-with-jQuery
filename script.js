names = ['Kája', 'Dan', 'Bohuslav', 'Břetislav'];
$('.list').append('<li><strong>'+names[0]+'</strong></li>');
$('.list').append('<li>'+names[1]+'</li>');
$('.list').append('<li>'+names[2]+'</li>');
$('.list').append('<li>'+names[3]+'</li>');

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  $('body').append('<heading>'+additionalBlock.title+'</heading>');
  $('body').append('<p>'+additionalBlock.text+'</p>');
