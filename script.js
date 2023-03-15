const projectName = 'random-quote-machine';

const colors = [
'#0457ac',
'#308fac',
'#37bd79',
'#a7e237',
'#f4e604',
'#440087',
'#13B0E4',
'#D4FFFD',
'#7DEEF1',
'#16a085',
'#27ae60',
'#2c3e50',
'#f39c12',
'#e74c3c',
'#9b59b6',
'#FB6964',
'#342224',
'#472E32',
'#BDBB99',
'#77B1A9',
'#73A857',
'#34568B',
'#FF6F61',
'#6B5B95',
'#88B04B',
'#F7CAC9',
'#92A8D1',
'#955251',
'#B565A7',
'#009B77',
'#DD4124',
'#D65076',
'#45B8AC',
'#EFC050',
'#5B5EA6',
'#9B2335',
'#DFCFBE',
'#55B4B0',
'#E15D44',
'#7FCDCD',
'#BC243C',
'#C3447A',
'#98B4D4',
'#FDAC53',
'#9BB7D4',
'#B55A30',
'#F5DF4D',
'#0072B5',
'#A0DAA9',
'#E9897E'];


const quotesArr = [
{
  quote: "'We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology.'",
  author: "Carl Sagan" },

{
  quote: "'Everything is theoretically impossible until it is done.'",
  author: "Robert A. Heinlein" },

{
  quote: "'The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom'",
  author: "Isaac Asimov" },

{
  quote: "'If we knew what it was we were doing, it would not be called research, would it?'",
  author: "Albert Einstein " },

{},


{
  quote: "'There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance.'",
  author: "Hippocrates" },

{
  quote: "'Science is magic that works.'",
  author: "Kurt Vonnegut" },

{
  quote: "'Until man duplicates a blade of grass, nature can laugh at his so-called scientific knowledge.'",
  author: "Thomas Edison" },

{
  quote: "'In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual'",
  author: "Galileo Galilei" },

{
  quote: "'The scientist only imposes two things, namely truth and sincerity, imposes them upon himself and upon other scientists.'",
  author: "Erwin Schrödinger" },

{
  quote: "'The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.'",
  author: "Nikola Tesla" },

{
  quote: "'It is strange that only extraordinary man-made the discoveries twitch later appear so easy and simple.'",
  author: "George C. Lichtenberg " },

{
  quote: "'Art is the tree of life. Science is the tree of death.'",
  author: "William Blake" },

{
  quote: "'The art and science of asking questions is the source of all knowledge.'",
  author: "Thomas Berger " },

{
  quote: "'The science of today is the technology of tomorrow.'",
  author: "Edward Teller" },

{
  quote: "'Nothing has such power to broaden the mind as the ability to investigate systematically and truly all that comes under thy observation in life.'",
  author: "Marcus Aurelius" },

{
  quote: "'Equipped with his five senses, man explores the universe around him and calls the adventure Science.'",
  author: "Edwin Hubble" },

{
  quote: "'Science is just pure empiricism, and by virtue of its method, it excludes metaphysics.'",
  author: "Steve Martin" },

{
  quote: "'Science is the acceptance of what works and the rejection of what does not. That needs more courage than we might think.'",
  author: "Jacob Bronowski" },

{
  quote: "'An expert is a person who has made all the mistakes that can be made in a very narrow field.'",
  author: "Neils Bohr" },

{
  quote: "'I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here.'",
  author: "Arthur C. Clarke " },

{
  quote: "'There is no law except the law that there is no law.'",
  author: "John Archibald Wheeler" },

{
  quote: "'Science is organized knowledge. Wisdom is organized life.'",
  author: "Immanuel Kant" },

{
  quote: "'What I love about science is that as you learn, you don’t really get answers. You just get better questions.'",
  author: "John Green" },

{
  quote: "'We feel that even if all possible scientific questions be answered, the problems of life have still not been touched at all.'",
  author: "Ludwig Wittgenstein" },

{
  quote: "'The feeling of awed wonder that science can give us is one of the highest experiences of which the human psyche is capable.'",
  author: "Richard Dawkin" },

{
  quote: "'The scientist is not a person who gives the right answers, he’s one who asks the right questions.'",
  author: "Claude Levi-Strauss" },

{
  quote: "'Scientists have become the bearers of the torch of discovery in our quest for knowledge'",
  author: "Stephen Hawking" },

{
  quote: "'We are born at a given moment, in a given place, and like vintage years of wine, we have the qualities of the year and of the season of which we are born. Astrology does not lay claim to anything more.'",
  author: "Carl Jung" },

{
  quote: "'There’s real poetry in the real world. Science is the poetry of reality.'",
  author: "Richard Dawkins" },

{
  quote: "'Science is the great antidote to the poison of enthusiasm and superstition.'",
  author: "Adam Smith" },

{
  quote: "'Speculation and the exploration of ideas beyond what we know with certainty are what lead to progress.'",
  author: "Lisa Randall" }];



let currentQuote = '';
let currentAuthor = '';

function getRandomQuote() {
  return quotesArr[
  Math.floor(Math.random() * quotesArr.length)];

}

function getQuote() {
  let randomQuote = getRandomQuote();

  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;

  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').text(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);

  $('html body').animate(
  {
    backgroundColor: colors[color],
    color: colors[color] },

  1000);

  $('.button').animate(
  {
    backgroundColor: colors[color] },

  1000);

}

$(document).ready(function () {
  $('#new-quote').on('click', getQuote);
});