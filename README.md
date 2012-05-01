dataset
=======

<p>The util used to get customise data(by HTML tag&#39;s data-attribute).</p>
<p>一个获取自定义数据的轻巧工具</p>
<h2 clas="t-pos-center">What is the dataset?</h2>
<p>The dataset is a util used to get customise data(HTML tag data-attribute).It is very lightly,i hope you will enjoy it :-)</p>

<h2>Usage</h2>
<h5>HTML: Turn this</h5>
<pre>
&lt;section data-type="username" 
         data-age="23" 
         data-userAddress='{"province":"ZheJiang","city":"HangZhou"}'
         data-vip="true" data-email="null"
&gt;
&lt;/section&gt;
</pre>

<h5>Data: You want into this</h5>
<pre>
{
  type: 'username',
  age: 23,
  userAddress: {
    province: 'ZheJiang',
    city: 'HangZhou'
  },
  vip: true,
  email: null
}
</pre>

<h5>So you can do this</h5>
<pre>
dataset(document.querySelectorAll('section')[0])	
</pre>

<strong>Yea, so easy!</strong>

<h2>Merits</h2>
<p>The reason why the dataset is lightly, because the <ins class="dataset">dataset</ins> for HTML tag's [<a href="http://www.w3.org/TR/html5/global-attributes.html#embedding-custom-non-visible-data-with-the-data-attributes" target="_blank">data-attribute</a>] made simple encapsulate.</p>
<p>The dataset solves HTML5 element.dataset dont't deal with data type problem.</p>
<p>The dataset compatible with the lower level of the browser(Don't supported HTML5),such as IE6,IE7 and IE8.</p>

<h2>Compatible</h2>
<ul>
	<li>Chrome all</li>
<li>Firefox all</li>
<li>Safari all</li>
<li>Opera all</li>
<li>IE9+</li>
</ul>