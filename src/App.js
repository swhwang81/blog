/* esLint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   let posts = "개발자 맛집";
   //let [글제목,글제목변경] = useState('코트 추천');  //state 는 변수 대신 데이터 저장 공간
   //  [데이터, 데이터 변경 함수]
   let [글제목,글제목변경] = useState(['코트 추천','개발자 맛집','MCP 서버']); 
   let [따봉, 따봉변경] =useState(0);

   function 함수(){
    return 100
   }
  return (
    <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
     </div>
     
      <div className='list'>
        <h3> {글제목[0]} <span onClick={()=>{alert('따봉!')}}>👍</span> 0</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {글제목[1]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> {글제목[2]} <span>👍</span> {따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
