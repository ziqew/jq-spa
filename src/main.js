
import $ from 'jquery';
import indexTpl from './views/index.art';

const data = {
  title: 'My Page'
};
const html = indexTpl(data);
console.log(html);

$("#app").append(html);

$('#alert').click(() => {
  alert('Alert');
});


