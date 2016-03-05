var marked = require('marked');

var desc = [
  {
    name: 'some name',
    desc: 'some desc',
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

module.exports = {
  desc: desc
};
