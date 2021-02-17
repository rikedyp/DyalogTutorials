# Dyalog
A modern, multi-paradigm application development platform with an APL language kernel.

## Who is it good for?
Subject matter experts can write bespoke solutions in a short amount of time, without relying on boilerplate or external libraries.

Concise code with high [semantic density](https://aplwiki.com/wiki/Semantic_density) makes it quick and easy to adapt code to meet changing specifications.

Create prototypes (or "MVPs" as the agilers call them) in a matter of hours that can take weeks or more in other languages.

## Quick and dirty examples
See more on [the APL Wiki](https://apl.wiki/Simple_examples).

<b>Monte carlo simulation</b>  
Estimate Pi with 10,000 pairs of random numbers:
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
Swap two substrings  
```APL
      'ab' 'ra'⎕R'ra' 'ab'⊢'abracadabra'
raabcadraab
```

<b>A powerful date time converter</b>
```APL
      now ← 1613552859   ⍝ Unix Timestamp
      
      'Dddd Doo Mmmm YYYY hh:mm' (1200⌶) 20 1 ⎕DT now
┌──────────────────────────────────┐
│Wednesday 17th February 2021 09:07│
└──────────────────────────────────┘
```

