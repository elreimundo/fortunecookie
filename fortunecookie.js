;(function () {
  var fortuneDiv = document.getElementsByClassName('fortune')[0];

  var fortunes = [
    'The man or woman you desire feels the same about you.',
    'Meeting adversity well is the source of your strength.',
    'A dream you have will come true.',
    'Our deeds determine us, as much as we determine our deeds.',
    'Never give up. You\'re not a failure if you don\'t give up.',
    'You will become great if you believe in yourself.',
    'There is no greater pleasure than seeing your loved ones prosper.',
    'You will marry your lover.',
    'A very attractive person has a message for you.',
    'You already know the answer to the questions lingering inside your head.',
    'It is now, and in this world, that we must live.',
    'You must try, or hate yourself for not trying.',
    'You can make your own happiness.',
    'The greatest risk is not taking one.',
    'The love of your life is stepping into your planet this summer.',
    'Love can last a lifetime, if you want it to.',
    'Adversity is the parent of virtue.',
    'Serious trouble will bypass you.',
    'A short stranger will soon enter your life with blessings to share.',
    'Now is the time to try something new.',
    'Wealth awaits you very soon.',
    'If you feel you are right, stand firmly by your convictions.',
    'If winter comes, can spring be far behind?',
    'Keep your eye out for someone special.',
    'You are very talented in many ways.',
    'A stranger, is a friend you have not spoken to yet.',
    'A new voyage will fill your life with untold memories.',
    'You will travel to many exotic places in your lifetime.',
    'Your ability for accomplishment will follow with success.',
    'Nothing astonishes men so much as common sense and plain dealing.',
    'Its amazing how much good you can do if you dont care who gets the credit.',
    'Everyone agrees. You are the best.',
    'LIFE CONSIST NOT IN HOLDING GOOD CARDS, BUT IN PLAYING THOSE YOU HOLD WELL.',
    'Jealousy doesn\'t open doors, it closes them!',
    'It\'s better to be alone sometimes.',
    'When fear hurts you, conquer it and defeat it!',
    'Let the deeds speak.',
    'You will be called in to fulfill a position of high honor and responsibility.',
    'The man on the top of the mountain did not fall there.',
    'You will conquer obstacles to achieve success.',
    'Joys are often the shadows, cast by sorrows.',
    'Fortune favors the brave.',
    'An upward movement initiated in time can counteract fate.',
    'A journey of a thousand miles begins with a single step.',
    'Sometimes you just need to lay on the floor.',
    'Never give up. Always find a reason to keep trying.',
    'If you have something worth fighting for, then fight for it.',
    'Stop wishing. Start doing.',
    'Accept your past without regrets. Handle your present with confidence. Face your future without fear.',
    'Stay true to those who would do the same for you.'
  ];

  function FortuneCookie (el) {
    this.model = new FortuneCookie.Model;
    this.view = new FortuneCookie.View(el);
    this.bindClicks();
  };
  FortuneCookie.fortunes = fortunes;

  FortuneCookie.prototype.crackOpen = function () {
    this.model.selectAFortune();
    this.view.render(this.model.fortune);
  };

  FortuneCookie.prototype.bindClicks = function () {
    this.view.el.addEventListener('click', this.crackOpen.bind(this));
  };

  FortuneCookie.Model = function () {
    this.fortune = null;
  };
  FortuneCookie.View = function (el) {
    this.el = el;
  };

  FortuneCookie.Model.prototype.selectAFortune = function () {
    var randomIndex = Math.floor(Math.random() * FortuneCookie.fortunes.length);
    this.fortune = FortuneCookie.fortunes[randomIndex];
  }

  FortuneCookie.View.prototype.render = function (fortune) {
    this.el.innerText = fortune;
  }

  var cookie = new FortuneCookie(fortuneDiv);
})()