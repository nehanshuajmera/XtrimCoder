import React from 'react'
import './roadmap.css'
export default function Mlroadmap() {
  return (
    <div style={{color:"black"}}>
         <br/>
<h1 style={{color:"white",textAlign:"center"}}>Machine learning RoadMap</h1> 
<ul className="timeline">
<li>
  <div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">programming language</span>
      <span className="time-wrapper"><span className="time">1 Month</span></span>
    </div>
    <div className="desc">The first step to start learning machine learning is to pick up a programming language. There are different programming languages in the market, but the most suitable for machine learning are Python and R.

I recommend Python. Why? Because its popular, easy to learn and future-ready

With Python, you can switch domains easily. Python offers popular frameworks like Django and Flask for backend development, Tkinter for GUI development, Pygames for Game development, etc. Here is my free Python tutorial in Hindi (with notes)

If you go with Python, you must learn sklearn for Machine Learning. Sklearn is a modern machine learning library written in Python. 

The best thing about sklearn is that most of the Machine learning algorithms are written for you already. It has a lot of useful classes for preprocessing your data for further analysis

If you want to learn machine learning in Hindi, I have made an end-to-end machine learning video on CodeWithHarry YouTube channel where I walk you through the steps on tackling a machine learning problem from scratch.

You should also look into the Tensorflow module, which can help you build a neural network without many efforts!</div>
  </div>
</li>

<li>
  <div className="direction-l">
    <div className="flag-wrapper">
      <span className="flag">Learn Linear Algebra</span>
      <span className="time-wrapper"><span className="time">3 Months</span></span>
    </div>
    <div className="desc">You should learn Linear Algebra if you wish to master Machine Learning and become a pro!

This is essential because if you want to tune your models with maximum flexibility, you need to know how they work, and knowing linear algebra is a must for that!

When you start, you should focus on Step 1, and while you are following step 1, you can begin learning Linear Algebra parallelly. This is what I call the parallel conquering technique.

You start two similar things parallelly, focusing on the first and keeping relatively less priority on the other tasks. This can help you keep the enthusiasm and the motivation up.

One of the resources I found very helpful for revisiting linear algebra concepts was this pdf notes.</div>
  </div>
</li>
<li>
<div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">Learn Statistics</span>
      <span className="time-wrapper"><span className="time">1 Month</span></span>
    </div>
    <div className="desc">Having a basic understanding of probability and statistics is important when it comes to mastering Machine Learning. 

Here is one of the best resources for that: Statistics Revision Notes by MathBox.</div>
  </div>
</li>

<li>
  <div className="direction-l">
    <div className="flag-wrapper">
      <span className="flag"> Learn Core ML Algorithms</span>
      <span className="time-wrapper"><span className="time">3 Months</span></span>
    </div>
    <div className="desc">Once you have some idea of using sklearn after learning python, you should start looking into how these machine learning algorithms work. 

While using sklearn, an ML Algorithm is a black box written by the sklearn developers.

In order to get an idea of how these Machine learning algorithms work from within, look into:

Gradient Descent
Slope
Supervised vs Unsupervised learning
Reinforcement Learning
Basic Linear Regression
Working of all such similar models
Clustering
An amazing resource to learn about all this is a book called “Hands-on ML with Scikit learn and tensorflow.” (Not an affiliate link)

Try to grab a copy of this book. It will help you a lot. 

There are few other resources too that are worth looking into:

ML Course from Google
madewithml.com
How to read a book
Schedule your reading time
Try to turn the pages and look for exercise-questions
Now try to find the answers to those questions while reading
These are the points author of the book wants your focus on
Try to use read-aloud feature of Microsoft edge. It works pretty well.</div>
  </div>
</li>
<li>
<div className="direction-r">
    <div className="flag-wrapper">
      <span className="flag">Learn Python Libraries</span>
      <span className="time-wrapper"><span className="time">1 Month</span></span>
    </div>
    <div className="desc">Learn Numpy
Learn Pandas
All this will be helpful to debug the python/sklearn code</div>
  </div>
</li>

<li>
  <div className="direction-l">
    <div className="flag-wrapper">
      <span className="flag"> Learn Deployment</span>
      <span className="time-wrapper"><span className="time">3 Months</span></span>
    </div>
    <div className="desc">To host your machine learning models with a powerful backend, you will need to learn frameworks like Django and Flask.

Docker and Kubernetes can be of great help if you want to ship and deploy your models quickly!

Streamlit is worthy of looking into if you wish to build custom web apps for machine learning and data science.</div>
  </div>
</li>

</ul>
  </div>

  )
}
