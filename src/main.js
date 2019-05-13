
import $ from 'jquery';
import indexTpl from './views/index.art';
import _ from 'underscore';

const data = {
  title: 'My Page'
};
const html = indexTpl(data);
console.log(html);

$('#app').append(html);

$('#alert').click(() => {
  const evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
  alert(evens);
});


