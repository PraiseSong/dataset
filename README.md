dataSet
=======

<p>The util used to get customise data(by HTML tag&#39;s data-attribute).</p>
<p>一个获取自定义数据的轻巧工具</p>
<h2 clas="t-pos-center">What is the dataset?</h2>
<p>The dataset is a util used to get customise data(HTML tag data-attribute).It is very lightly,i hope you will enjoy it :-)</p>

<h2>Usage</h2>
<h5>HTML: Turn this</h5>
<code>
<section data-type="username" 
         data-age="23" 
         data-userAddress='{"province":"ZheJiang","city":"HangZhou"}'
         data-vip="true" data-email="null"
>
</section>
</code>

<h5>Data: You want into this</h5>
<code>
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
</code>

<h5>So you can do this</h5>
<code>
dataset(document.querySelectorAll('section')[0])	
</code>

<strong>Yea, so easy!</strong>