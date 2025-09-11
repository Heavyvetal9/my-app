import {multiply, splitIntoWords, sum} from "./01";

test ('sum should be correct', ()=> {
    //data
    const a=1;
    const b=2;
    const c=3;
    //action
    const result1 = sum(a,b);
    const result2 = sum(b,c);
    //expect
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test ('multiply should be correct', ()=> {
    //data
    const a=1;
    const b=2;
    const c=3;
    //action
    const result1 = multiply(a,b);
    const result2 = multiply(b,c);
    //expect
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})
test ('split into words should be correct', ()=>{
    //data
    const sent1 = 'Hello my friend!'
    const sent2 = 'JS  - is programming language.'

    //action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);
    //expect
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(4);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('is');
    expect(result2[2]).toBe('programming');
    expect(result2[3]).toBe('language');

})
