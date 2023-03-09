# Quick and dirty examples
See more on [the APL Wiki](https://apl.wiki/Simple_examples).

## Monte carlo simulation

<div style="display:flex; justify-content:space-between;" class="apl-example-title">
	<p>Estimate Pi with 10,000 pairs of random numbers:</p>
	<p><a href="https://tryapl.org/?clear&q=%7B4%C3%97(%2B%E2%8C%BF%C3%B7%E2%89%A2)1%3E0.5*%E2%8D%A8%2B%2F2*%E2%8D%A8%3F%E2%8D%B5%202%E2%8D%B40%200%7D10000&run">Try it now!</a></p>
</div>

```APL
      {4×(+⌿÷≢)1>0.5*⍨+/2*⍨?⍵ 2⍴0 0}10000
3.1456
```

## Regex like you've never seen

<div style="display:flex; justify-content:space-between;" class="apl-example-title">
	<p>Convert what you say into what your dog Rex hears:</p>
	<p><a href="https://tryapl.org/?clear&q=Rex%20%E2%86%90%20%27rex%27%20%27\w%27%E2%8E%95R%27\0%27%20%27*%27%E2%8D%A01%20%20%20%E2%8B%84%20%20%20Rex%20%27Rex%2C%20I%20told%20you%20not%20to%20do%20that!%20Now%2C%20Rex%2C%20go%20and%20wait%20outside%27&run">Try it now!</a></p>
</div>

```APL
      Rex ← 'rex' '\w'⎕R'\0' '*'⍠1
      Rex 'Rex, I told you not to do that! Now, Rex, go and wait outside'
Rex, * **** *** *** ** ** ****! ***, Rex, ** *** **** *******
```

<div style="display:flex; justify-content:space-between;" class="apl-example-title">
	<p>Swap two substrings:</p>
	<p><a href="https://tryapl.org/?clear&q=%27ab%27%20%27ra%27%E2%8E%95R%27ra%27%20%27ab%27%E2%8A%A2%27abracadabra%27&run">Try it now!</a></p>
</div>

```APL
      'ab' 'ra'⎕R'ra' 'ab'⊢'abracadabra'
raabcadraab
```

## A powerful date time converter:

<div style="display:flex; justify-content:space-between;" class="apl-example-title">
<p>Convert between most datetime formats, and create human-readable output with an intuitive template syntax:</p>
<p><a href="https://tryapl.org/?clear&q=%27Dddd%20Doo%20Mmmm%20YYYY%20hh%3Amm%27%20(1200%E2%8C%B6)%201%20%E2%8E%95DT%20%E2%8A%82%E2%8E%95TS&run">Try it now!</a></p>
</div>

```APL
      now ← 1613552859          ⍝ Unix Timestamp
                                ⍝ 1200⌶ is experimental
      'Dddd Doo Mmmm YYYY hh:mm' (1200⌶) 20 1 ⎕DT now
┌──────────────────────────────────┐
│Wednesday 17th February 2021 09:07│
└──────────────────────────────────┘
```

## Look and say sequence


<iframe width="354" height="630" src="https://www.youtube.com/embed/mPnfLfPPbY0" title="Look and Say Sequence in Dyalog APL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>