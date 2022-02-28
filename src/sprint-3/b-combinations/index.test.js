const { genCombinations } = require('./');

const cases = [
  ['23', 'ad ae af bd be bf cd ce cf'],
  ['92', 'wa wb wc xa xb xc ya yb yc za zb zc'],
  // [
  //   '7884',
  //   'pttg ptth ptti ptug ptuh ptui ptvg ptvh ptvi putg puth puti puug puuh puui puvg puvh puvi pvtg pvth pvti pvug pvuh pvui pvvg pvvh pvvi qttg qtth qtti qtug qtuh qtui qtvg qtvh qtvi qutg quth quti quug quuh quui quvg quvh quvi qvtg qvth qvti qvug qvuh qvui qvvg qvvh qvvi rttg rtth rtti rtug rtuh rtui rtvg rtvh rtvi rutg ruth ruti ruug ruuh ruui ruvg ruvh ruvi rvtg rvth rvti rvug rvuh rvui rvvg rvvh rvvi sttg stth stti stug stuh stui stvg stvh stvi sutg suth suti suug suuh suui suvg suvh suvi svtg svth svti svug svuh svui svvg svvh svvi',
  // ],
];

cases.forEach(([input, expected]) => {
  test(`Generates combination. Input: ${input}.`, () => {
    expect(genCombinations(input)).toEqual(expected);
  });
});
