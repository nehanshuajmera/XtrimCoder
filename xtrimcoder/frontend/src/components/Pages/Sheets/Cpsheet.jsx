import React from 'react'
import Question from './Question'
export default function Cpsheet() {
  let items=[' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I','Max Sum of Rectangle No Larger Than K','Sliding Window Median','Sliding Window Median I',' Median of Two Sorted Arrays','Count of Smaller Numbers After Self','Max Sum of Rectangle No Larger Than K'];
  return (
    <div>
        <div className="card my-4">
  {/* <div className="card-header">
    Compititive Programming sheet by "Striver"
  </div>
  <ul className="list-group list-group-flush">
  {items.map(item=>(
       <Question  link={'https://leetcode.com/problems/sudoku-solver/'} title={item}/>
  ))}
    </ul> */}
    <article id="post-1673" class="my-4 mx-4 container post-1673 post type-post status-publish format-standard hentry category-interview-experience tag-striver-cp-sheet" style={{color:"black"}}>
<header class="entry-header row">
<h1 class="entry-title col my-4">Striver CP Sheet</h1>
{/* <img className='col'  src='https://codeforces.com/predownloaded/03/ac/03acceaee6c1e5c46bc6e32fd7e56a1839ad74ad.png' style={{width:"4px" ,height:"100px", paddingRight:"120px"}} alt='cflogo'/> */}
</header>
<div class="entry-content clearfix ">
<details>
<summary><b>Implementation / Constructive: (10*5=50)</b></summary>
<ol>
<li><a href="https://codeforces.com/problemset/problem/282/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/282/A</a></li>
<li><a href="https://codeforces.com/contest/514/problem/A" target="_blank" rel="nofollow noopener">https://codeforces.com/contest/514/problem/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/263/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/263/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/151/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/151/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/723/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/723/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1352/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1352/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/510/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/510/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/785/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/785/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/144/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/144/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1030/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1030/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/136/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/136/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/110/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/110/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/116/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/116/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/977/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/977/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/546/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/546/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/791/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/791/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/236/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/236/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/281/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/281/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/339/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/339/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1368/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1368/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/702/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/702/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1097/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1097/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/492/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/492/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1433/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1433/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1303/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1303/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1095/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1095/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1391/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1391/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/118/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/118/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1300/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1300/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1430/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1430/C</a></li>
<li><a href="https://codeforces.com/contest/139/problem/A" target="_blank" rel="noopener">https://codeforces.com/contest/139/problem/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/219/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/219/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1141/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1141/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/118/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/118/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1373/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1373/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/268/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/268/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/476/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/476/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/500/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/500/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/131/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/131/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1139/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1139/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1199/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1199/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1073/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1073/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/109/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/109/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1244/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1244/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1027/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1027/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1278/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1278/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1133/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1133/A</a></li>
<li><a title="Tower of Hanoi" href="https://codeforces.com/problemset/problem/507/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/507/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1237/A">https://codeforces.com/problemset/problem/1237/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/486/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/486/B</a></li>
</ol>
</details>
<details>
<summary><b>Maths: (10*5=50)</b></summary>
<ol>
<li><a href="https://codeforces.com/problemset/problem/1337/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1337/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1389/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1389/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/959/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/959/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1426/A">https://codeforces.com/problemset/problem/1426/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1296/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1296/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1385/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1385/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1358/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1358/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1294/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/1294/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1353/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1353/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1371/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1371/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1360/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1360/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1367/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1367/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1374/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1374/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1343/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1343/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/732/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/732/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1154/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1154/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1409/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1409/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1335/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1335/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1328/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1328/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/617/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/617/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/50/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/50/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1117/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1117/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1195/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1195/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1181/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1181/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1266/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1266/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1107/B">https://codeforces.com/problemset/problem/1107/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1260/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1260/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1266/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1266/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1620/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1620/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/610/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/610/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/69/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/69/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1199/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1199/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1257/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1257/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1204/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1204/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/515/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/515/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1395/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1395/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/688/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/688/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1473/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1473/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1476/A" target="_blank" rel="nofollow noopener">https://codeforces.com/problemset/problem/1476/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1359/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1359/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1342/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1342/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1463/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1463/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/463/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/463/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1511/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1511/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/630/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/630/C</a></li>
<li><a href="https://codeforces.com/problemset/problem/1189/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1189/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1038/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1038/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/630/D" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/630/D</a></li>
<li><a href="https://codeforces.com/problemset/problem/1355/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1355/A</a></li>
</ol>
</details>
<details>
<summary><b><strong>Binary Search:&nbsp;</strong></b></summary>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/371/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/371/problem/C</a></li>
<li><a href="https://codeforces.com/contest/670/problem/D1" target="_blank" rel="noopener">https://codeforces.com/contest/670/problem/D1</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/287/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/287/problem/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/1613/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1613/C</a>&nbsp;</li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/689/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/689 /problem/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1169/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1169/problem/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1073/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1073/problem/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/448/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/448/problem/D</a>&nbsp;</li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/1132/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1132/problem/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/954/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/954/problem/E</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1288/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1288/problem/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1370/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1370/problem/D</a></li>
</ol>
</details>
<details>
<summary><b><strong>Prime, Sieve, Prime Factorisation:</strong></b></summary>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://www.spoj.com/problems/PRIME1/cstart=10" target="_blank" rel="noopener">https://www.spoj.com/problems/PRIME1/cstart=10</a>&nbsp;</li>
<li><a href="https://www.spoj.com/problems/TDPRIMES/" target="_blank" rel="noopener">https://www.spoj.com/problems/TDPRIMES/</a>&nbsp;</li>
<li><a href="https://www.spoj.com/problems/TDKPRIME/" target="_blank" rel="noopener">https://www.spoj.com/problems/TDKPRIME/</a>&nbsp;</li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/264/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/264/problem/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/735/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/735/problem/D</a></li>
<li><a href="https://codeforces.com/contest/546/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/546/problem/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/222/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/222/problem/C</a></li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/111/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/111/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1228/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1228/problem/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1101/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1101/problem/D</a> (graph + sieve)</li>
</ol>
</details>
<details>
<summary><b>Bit Manipulation/Power Set:</b></summary>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/912/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/912/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1594/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1594/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1097/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1097/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1602/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1602/problem/C</a>&nbsp;</li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/1095/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1095/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1494/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1494/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1151/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1151/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1225/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1225/C</a>&nbsp;</li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/1174/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1174/problem/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1391/D" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1391/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1491/D" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1491/D</a>&nbsp;</li>
</ol>
</details>
<details>
<summary><b>Stack/Queues/PriorityQueues:&nbsp;</b></summary>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/343/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/343/problem/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/158/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/158/problem/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/5/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/5/problem/C</a>&nbsp;</li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/359/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/359/problem/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1092/problem/D1" target="_blank" rel="noopener">https://codeforces.com/contest/1092/problem/D1</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1313/problem/C2" target="_blank" rel="noopener">https://codeforces.com/contest/1313/problem/C2</a></li>
<li><a href="https://codeforces.com/contest/1515/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1515/problem/C</a> (priority queue)</li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/319/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/319/problem/B</a></li>
<li><a href="https://codeforces.com/contest/487/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/487/problem/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1092/problem/D2" target="_blank" rel="noopener">https://codeforces.com/contest/1092/problem/D2</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1156/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1156/problem/E</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/911/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/911/problem/E</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/507/problem/E?locale=en" target="_blank" rel="noopener">https://codeforces.com/contest/507/problem/E?locale=en</a> (priority queue)</li>
</ol>
</details>
<details>
<summary><b>String Algorithms:</b></summary>
<p><strong>String hashing:</strong></p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/271/D" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/271/D</a></li>
<li><a href="https://codeforces.com/contest/1326/problem/D2" target="_blank" rel="noopener">https://codeforces.com/contest/1326/problem/D2</a></li>
<li><a href="https://codeforces.com/contest/514/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/514/problem/C</a></li>
<li><a href="https://codeforces.com/contest/7/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/7/problem/D</a></li>
<li><a href="https://codeforces.com/contest/514/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/514/problem/C</a></li>
<li><a href="https://codeforces.com/contest/633/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/633/problem/C</a></li>
</ol>
<p><strong>Kmp / Z-function</strong></p>
<ol>
<li><a href="https://codeforces.com/contest/1016/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/1016/problem/B</a></li>
<li><a href="https://codeforces.com/contest/471/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/471/problem/D</a></li>
<li><a href="https://codeforces.com/problemset/problem/126/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/126/B</a></li>
<li><a href="https://codeforces.com/contest/471/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/346/problem/B</a></li>
<li><a href="https://codeforces.com/contest/1138/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1138/problem/D</a></li>
<li><a href="https://codeforces.com/contest/126/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/126/problem/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/432/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/432/problem/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1537/problem/E2" target="_blank" rel="noopener">https://codeforces.com/contest/1537/problem/E2</a></li>
</ol>
<p><strong>Manacher</strong></p>
<ol>
<li><a href="https://www.spoj.com/problems/NUMOFPAL/" target="_blank" rel="noopener">https://www.spoj.com/problems/NUMOFPAL/</a></li>
<li><a href="https://www.spoj.com/problems/LPS/" target="_blank" rel="noopener">https://www.spoj.com/problems/LPS/</a></li>
<li><a href="https://www.spoj.com/problems/MSUBSTR/" target="_blank" rel="noopener">https://www.spoj.com/problems/MSUBSTR/</a></li>
<li><a href="https://www.spoj.com/problems/EPALIN/" target="_blank" rel="noopener">https://www.spoj.com/problems/EPALIN/</a></li>
<li><a href="https://codeforces.com/contest/1080/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1080/problem/E</a>&nbsp;</li>
</ol>
</details>
<details>
<summary><b>BFS</b></summary>
<ol>
<li><a href="https://codeforces.com/problemset/problem/1006/F" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1006/F</a></li>
</ol>
</details>
<details>
<summary><b>Tree’s:</b></summary>
<p><strong>Easy:</strong></p>
<ol>
<li><a href="https://cses.fi/problemset/task/1674" target="_blank" rel="noopener">https://cses.fi/problemset/task/1674</a>&nbsp;</li>
<li><a href="https://cses.fi/problemset/task/1130" target="_blank" rel="noopener">https://cses.fi/problemset/task/1130</a>&nbsp;</li>
<li><a href="https://codeforces.com/gym/102694/problem/A" target="_blank" rel="noopener">https://codeforces.com/gym/102694/problem/A</a>&nbsp; (depth)</li>
<li><a href="https://codeforces.com/gym/102694/problem/B" target="_blank" rel="noopener">https://codeforces.com/gym/102694/problem/B</a> (diameter)</li>
</ol>
<p><strong>Med – Hard:</strong></p>
<ol>
<li><a href="https://codeforces.com/contest/1006/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1006/problem/E</a>&nbsp; (just tin tout concept)</li>
<li><a href="https://cses.fi/problemset/task/1133" target="_blank" rel="noopener">https://cses.fi/problemset/task/1133</a></li>
<li><a href="https://codeforces.com/contest/1294/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/1294/problem/F</a>&nbsp;</li>
</ol>
</details>
<details>
<summary><b>LCA</b></summary>
<p><strong>Easy:</strong></p>
<ol>
<li><a href="https://codeforces.com/gym/102694/problem/C" target="_blank" rel="noopener">https://codeforces.com/gym/102694/problem/C</a></li>
<li><a href="https://codeforces.com/gym/102694/problem/D" target="_blank" rel="noopener">https://codeforces.com/gym/102694/problem/D</a></li>
</ol>
<p><strong>Medium:</strong></p>
<ol>
<li><a href="https://codeforces.com/contest/1328/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1328/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1304/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1304/problem/E</a></li>
<li><a href="https://codeforces.com/contest/208/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/208/problem/E</a></li>
<li><a href="https://codeforces.com/contest/191/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/191/problem/C</a></li>
</ol>
<p><strong>Hard:</strong></p>
<ol>
<li><a href="https://codeforces.com/contest/519/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/519/problem/E</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/587/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/587/problem/C</a></li>
<li><a href="https://codeforces.com/contest/609/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/609/problem/E</a></li>
<li><a href="https://codeforces.com/contest/466/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/466/problem/E</a></li>
</ol>
<p><strong>Euler Tour:</strong></p>
<ol>
<li><a href="https://codeforces.com/gym/102694/problem/E" target="_blank" rel="noopener">https://codeforces.com/gym/102694/problem/E</a></li>
<li><a href="https://codeforces.com/gym/102694/problem/F" target="_blank" rel="noopener">https://codeforces.com/gym/102694/problem/F</a></li>
</ol>
</details>
<details>
<summary><b>Graph Algorithms </b></summary>
<p>(DFS, BFS, Dijsktra, Floyd Washall, Bellman Ford, Bridges, 0-1 BFS, Bipartite, Topo-sort …) :&nbsp;</p>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/520/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/520/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/115/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/115/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/580/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/580/C</a></li>
<li><a href="https://codeforces.com/problemset/problem/977/E" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/977/E</a></li>
<li><a href="https://codeforces.com/contest/1144/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/1144/problem/F</a> (simple dfs)</li>
<li><a href="https://codeforces.com/contest/510/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/510/problem/C</a> (topo sort)</li>
<li><a href="https://codeforces.com/contest/20/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/20/problem/C</a> (dijsktra)</li>
<li><a href="https://codeforces.com/problemset/problem/475/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/475/B</a> (SCC)</li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/986/problem/A" target="_blank" rel="noopener">https://codeforces.com/contest/986/problem/A</a> (djstra)</li>
<li><a href="https://codeforces.com/contest/242/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/242/problem/C</a> (bfs)</li>
<li><a href="https://codeforces.com/contest/1345/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1345/problem/D</a> (flood fill)&nbsp;</li>
<li><a href="https://codeforces.com/contest/229/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/229/problem/B</a> (dijsktra)</li>
<li><a href="https://codeforces.com/contest/1385/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1385/problem/E</a> (topo sort)</li>
<li><a href="https://codeforces.com/contest/295/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/295/problem/B</a> (floyd warshal)</li>
<li><a href="https://codeforces.com/contest/1213/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/1213/problem/F</a> (SCC)</li>
<li><a href="https://codeforces.com/contest/1343/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1343/problem/E</a> (djstra)</li>
<li><a href="https://codeforces.com/contest/1296/problem/E1" target="_blank" rel="noopener">https://codeforces.com/contest/1296/problem/E1</a> (biparthite)</li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/1573/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1573/problem/C</a> (topo sort)</li>
<li><a href="https://codeforces.com/contest/1547/problem/G" target="_blank" rel="noopener">https://codeforces.com/contest/1547/problem/G</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/229/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/229/problem/B</a> (djstra)</li>
<li><a href="https://codeforces.com/contest/400/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/400/problem/D</a> (flyod warshal)</li>
<li><a href="https://codeforces.com/contest/178/problem/B3" target="_blank" rel="noopener">https://codeforces.com/contest/178/problem/B3</a> (bridges)</li>
</ol>
</details>
<details>
<summary><b>Matrix Exponentiation: (basic to hard sorted)</b></summary>
<ol>
<li><a href="https://codeforces.com/problemset/problem/185/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/185/A</a></li>
<li><a href="https://codeforces.com/contest/1117/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1117/problem/D</a></li>
<li><a href="https://codeforces.com/contest/582/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/582/problem/B</a></li>
<li><a href="https://codeforces.com/contest/222/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/222/problem/E</a></li>
<li><a href="https://codeforces.com/contest/621/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/621/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1182/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1182/problem/E</a></li>
</ol>
</details>
<details>
<summary><b>Trie:</b></summary>
<ol>
<li><a href="https://codeforces.com/contest/706/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/706/problem/D</a></li>
<li><a href="https://codeforces.com/contest/948/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/948/problem/D</a></li>
<li><a href="https://codeforces.com/contest/665/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/665/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1285/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1285/problem/D</a></li>
<li><a href="https://codeforces.com/contest/858/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/858/problem/D</a></li>
<li><a href="https://codeforces.com/contest/455/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/455/problem/B</a></li>
<li><a href="https://codeforces.com/contest/113/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/113/problem/B</a></li>
<li><a href="https://codeforces.com/contest/282/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/282/problem/E</a></li>
</ol>
</details>
<details>
<summary><b>Dynamic Programming:&nbsp;</b></summary>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/702/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/702/A</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/894/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/894/A</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1501/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1501/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1469/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1469/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/363/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/363/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/313/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/313/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/327/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/327/A</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/961/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/961/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/522/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/522/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1042/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1042/B</a></li>
<li><a href="https://codeforces.com/problemset/problem/189/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/189/A</a></li>
<li><a href="https://codeforces.com/problemset/problem/1420/C1" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1420/C1</a></li>
<li><a href="https://codeforces.com/problemset/problem/414/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/414/B</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/1195/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1195/C</a></li>
<li><a href="https://codeforces.com/problemset/problem/1350/B" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1350/B</a>&nbsp;</li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/505/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/505/problem/C</a></li>
<li><a href="https://codeforces.com/contest/577/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/577/problem/B</a></li>
<li><a href="https://codeforces.com/contest/204/problem/A" target="_blank" rel="noopener">https://codeforces.com/contest/204/problem/A</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/448/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/448/problem/C</a></li>
<li><a href="https://codeforces.com/contest/479/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/479/problem/E</a></li>
<li><a href="https://codeforces.com/contest/401/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/401/problem/D</a></li>
<li><a href="https://codeforces.com/contest/777/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/777/problem/E</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/1036/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1036/problem/C</a></li>
<li><a href="https://codeforces.com/contest/219/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/219/problem/D</a></li>
<li><a href="https://codeforces.com/contest/337/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/337/problem/D</a></li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/165/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/165/problem/E</a></li>
<li><a href="https://codeforces.com/contest/687/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/687/problem/C</a></li>
<li><a href="https://codeforces.com/contest/1132/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/1132/problem/F</a></li>
<li><a href="https://codeforces.com/contest/1253/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1253/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1216/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/1216/problem/F</a></li>
<li><a href="https://codeforces.com/contest/461/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/461/problem/B</a></li>
<li><a href="https://codeforces.com/contest/319/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/319/problem/C</a></li>
<li><a href="https://codeforces.com/contest/1083/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1083/problem/E</a></li>
<li><a href="https://codeforces.com/contest/507/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/507/problem/D</a></li>
<li><a href="https://codeforces.com/contest/540/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/540/problem/D</a></li>
</ol>
</details>
<details>
<summary><b>Disjoint Set:&nbsp;</b></summary>
<p><strong>Easy</strong>:</p>
<ol>
<li><a href="https://codeforces.com/problemset/problem/1534/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1534/C</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/217/A" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/217/A</a>&nbsp;</li>
<li><a href="https://codeforces.com/contest/277/problem/A" target="_blank" rel="noopener">https://codeforces.com/contest/277/problem/A</a></li>
</ol>
<p><strong>Med</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/884/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/884/problem/C</a></li>
<li><a href="https://codeforces.com/contest/1332/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/1332/problem/C</a></li>
<li><a href="https://codeforces.com/contest/455/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/455/problem/C</a></li>
</ol>
<p><strong>Hard</strong>:</p>
<ol>
<li><a href="https://codeforces.com/contest/1156/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1156/problem/D</a></li>
<li><a href="https://codeforces.com/contest/1213/problem/G" target="_blank" rel="noopener">https://codeforces.com/contest/1213/problem/G</a></li>
<li><a href="https://codeforces.com/problemset/problem/1494/D" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/1494/D</a>&nbsp;</li>
<li><a href="https://codeforces.com/problemset/problem/455/C" target="_blank" rel="noopener">https://codeforces.com/problemset/problem/455/C</a>&nbsp;</li>
</ol>
</details>
<details>
<summary><b>Sqrt Decomposition/ MO’s algo:</b></summary>
<ol>
<li><a href="https://codeforces.com/contest/86/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/86/problem/D</a></li>
<li><a href="https://codeforces.com/contest/617/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/617/problem/E</a></li>
<li><a href="https://codeforces.com/contest/220/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/220/problem/B</a></li>
<li><a href="https://codeforces.com/contest/1514/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1514/problem/D</a></li>
<li><a href="https://codeforces.com/contest/375/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/375/problem/D</a></li>
<li><a href="https://codeforces.com/contest/242/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/242/problem/E</a>&nbsp;</li>
</ol>
</details>
<details>
<summary><b>Fenwick Tree:</b></summary>
<ol>
<li><a href="https://codeforces.com/contest/61/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/61/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1311/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/1311/problem/F</a></li>
<li><a href="https://codeforces.com/contest/283/problem/A" target="_blank" rel="noopener">https://codeforces.com/contest/283/problem/A</a></li>
<li><a href="https://codeforces.com/contest/459/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/459/problem/D</a></li>
<li><a href="https://codeforces.com/contest/340/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/340/problem/D</a></li>
<li><a href="https://codeforces.com/contest/1076/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1076/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1354/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1354/problem/D</a></li>
<li><a href="https://codeforces.com/contest/1405/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1405/problem/E</a></li>
<li><a href="https://codeforces.com/contest/383/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/383/problem/C</a></li>
<li><a href="https://codeforces.com/contest/1526/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1526/problem/D</a></li>
<li><a href="https://codeforces.com/contest/276/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/276/problem/E</a></li>
<li><a href="https://codeforces.com/contest/375/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/375/problem/D</a></li>
</ol>
</details>
<details>
<summary><b>Segment Tree(lazy also included):</b></summary>
<ol>
<li><a href="https://codeforces.com/contest/339/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/339/problem/D</a></li>
<li><a href="https://codeforces.com/contest/914/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/914/problem/D</a></li>
<li><a href="https://codeforces.com/contest/459/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/459/problem/D</a></li>
<li><a href="https://codeforces.com/contest/61/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/61/problem/E</a></li>
<li><a href="https://codeforces.com/contest/380/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/380/problem/C</a></li>
<li><a href="https://codeforces.com/contest/474/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/474/problem/F</a></li>
<li><a href="https://codeforces.com/contest/1237/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1237/problem/D</a></li>
<li><a href="https://codeforces.com/contest/292/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/292/problem/E</a></li>
<li><a href="https://codeforces.com/contest/482/problem/B" target="_blank" rel="noopener">https://codeforces.com/contest/482/problem/B</a></li>
<li><a href="https://codeforces.com/contest/1187/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1187/problem/D</a></li>
<li><a href="https://codeforces.com/contest/920/problem/F" target="_blank" rel="noopener">https://codeforces.com/contest/920/problem/F</a></li>
<li><a href="https://codeforces.com/contest/1535/problem/D?locale=en" target="_blank" rel="noopener">https://codeforces.com/contest/1535/problem/D?locale=en</a></li>
<li><a href="https://codeforces.com/contest/438/problem/D?locale=en" target="_blank" rel="noopener">https://codeforces.com/contest/438/problem/D?locale=en</a></li>
<li><a href="https://codeforces.com/contest/1556/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1556/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1567/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/1567/problem/E</a></li>
</ol>
</details>
<details>
<summary><b>Lazy propagation:</b></summary>
<ol>
<li><a href="https://codeforces.com/contest/52/problem/C" target="_blank" rel="noopener">https://codeforces.com/contest/52/problem/C</a></li>
<li><a href="https://codeforces.com/contest/1023/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1023/problem/D</a></li>
<li><a href="https://codeforces.com/contest/242/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/242/problem/E</a></li>
<li><a href="https://codeforces.com/contest/1557/problem/D" target="_blank" rel="noopener">https://codeforces.com/contest/1557/problem/D</a></li>
<li><a href="https://codeforces.com/contest/145/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/145/problem/E</a></li>
<li><a href="https://codeforces.com/contest/777/problem/E" target="_blank" rel="noopener">https://codeforces.com/contest/777/problem/E</a></li>
</ol>
</details>
</div>
</article>
</div>
    </div>
  )
}
