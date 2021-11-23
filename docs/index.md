---
template: home.html
title: Home
---

# About
Dyalog is a modern, [multi-paradigm](language/paradigms.md) application development platform with an [APL language kernel]().

## Quick and dirty examples
See more on [the APL Wiki](https://apl.wiki/Simple_examples).

<b>Monte carlo simulation</b>  
Estimate Pi with 10,000 pairs of random numbers  [Try it now!](https://tryapl.org/?clear&q=%7B4%C3%97(%2B%E2%8C%BF%C3%B7%E2%89%A2)1%3E0.5*%E2%8D%A8%2B%2F2*%E2%8D%A8%3F%E2%8D%B5%202%E2%8D%B40%200%7D10000&run):
```APL
      {4×(+⌿÷≢)1>0.5*⍨+/2*⍨?⍵ 2⍴0 0}10000
3.1456
```

<b>Regex like you've never seen</b>  
Convert what you say into what your dog Rex hears:
```APL
      Rex ← 'rex' '\w'⎕R'\0' '*'⍠1
      Rex 'Rex, I told you not to do that! Now, Rex, go and wait outside'
Rex, * **** *** *** ** ** ****! ***, Rex, ** *** **** *******
```
Swap two substrings:
```APL
      'ab' 'ra'⎕R'ra' 'ab'⊢'abracadabra'
raabcadraab
```

<b>A powerful date time converter</b>
```APL
      now ← 1613552859          ⍝ Unix Timestamp
                                ⍝ 1200⌶ is experimental
      'Dddd Doo Mmmm YYYY hh:mm' (1200⌶) 20 1 ⎕DT now
┌──────────────────────────────────┐
│Wednesday 17th February 2021 09:07│
└──────────────────────────────────┘
```

## More fleshed out examples
Still APL to the bones, but a bit more fleshy.

## About APL and the Dyalog platform
- Read about the [features of Dyalog and APL]() to learn some of the key differences between Dyalog and other conventional programming languages and environments.
- Read about the [history of Dyalog]() to learn why some of these differences exist are the way that they are.
