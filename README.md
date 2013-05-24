dataset
=======

<p>The util used to get customise data(by HTML tag&#39;s data-attribute).It does not depend on and other javascript frameworks.</p>
<h2 clas="t-pos-center">What is the dataset?</h2>
<p>The dataset is a util used to get customise data(HTML tag data-attribute).It is very lightly,i hope you will enjoy it :-)</p>
<p>dataset's website:<a href="http://labs.cross.hk/projects/dataset" target="_blank">http://qiqicartoon.com/projects/dataset</a></p>

<h2>Usage</h2>
<h5>HTML: Turn this</h5>
<pre>
&lt;div data-type="username" 
         data-age="23" 
         data-userAddress='{"province":"ZheJiang","city":"HangZhou"}'
         data-vip="true" data-email="null"
         data-company='{"china":"[\"Alipay\",\"Taobao\"]"}'
         data-avatars='[{"google":["img.png","img2.png"]}]'
&gt;
&lt;/div&gt;
</pre>

<h5>Data: You want into this</h5>
<pre>
{
  type: 'username',    {String}
  age: 23,             {Number}
  userAddress: {       {Object}
    province: 'ZheJiang',
    city: 'HangZhou'
  },
  vip: true,           {Boolean}
  email: null,         {Object}
  company:{            {Object}
     "china":["Alipay","Taobao"]
  },
  avatars:[{"google":["img.png","img2.png"]}] {Object}
}
</pre>
<h5>So you can do this</h5>
<pre>
dataset(document.querySelectorAll('div')[0])	
</pre>

<strong>Yea, so easy!</strong>

<h2>Merits</h2>
<p>It does not depend on and other javascript frameworks.</p>
<p>The reason why the dataset is lightly, because the dataset for HTML tag's [<a href="http://www.w3.org/TR/html5/global-attributes.html#embedding-custom-non-visible-data-with-the-data-attributes" target="_blank">data-attribute</a>] made simple encapsulate.</p>
<p>The dataset solves HTML5 element.dataset dont't deal with data type problem.<span style="color:#FF5500;">Note that, HTML5 element.dataset put all the customise data are as string return.</span></p>
<p>The dataset compatible with the lower level of the browser(Don't supported HTML5),such as IE6,IE7 and IE8.</p>

<h2>Compatible</h2>
<ul>
	<li>Chrome all</li>
	<li>Firefox all</li>
	<li>Safari all</li>
	<li>Opera all</li>
	<li>IE6+</li>
	<li>Windows Phone 7 IE</li>
	<li>iOS Safari all</li>
	<li>Android OS browser all</li>
	<li>UC browser 7.9+</li>
</ul>

<img src="http://qiqicartoon.com/projects/dataset/qrcode.png" alt="dataset qrcode" />
<p>Shooting this code to open</p>
