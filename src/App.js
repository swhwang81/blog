/* esLint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderHome = () => (
    <div className="home-page">
      <div className="hero-section">
        <h1>2024 졸업 전시회</h1>
        <h2>디자인 아트 학부 졸업 작품전</h2>
        <p className="subtitle">창의성과 열정이 만나는 순간</p>
        <div className="exhibition-info">
          <div className="info-item">
            <h3>전시 기간</h3>
            <p>2024년 12월 15일 - 12월 20일</p>
          </div>
          <div className="info-item">
            <h3>전시 장소</h3>
            <p>대학 미술관 1층 전시실</p>
          </div>
          <div className="info-item">
            <h3>오픈 시간</h3>
            <p>10:00 - 18:00 (월-금)</p>
          </div>
        </div>
        <button className="cta-button">전시회 소개서 다운로드</button>
      </div>
      
      <div className="featured-works">
        <h2>주요 작품 미리보기</h2>
        <div className="works-grid">
          <div className="work-item">
            <div className="work-image">작품 이미지 1</div>
            <h3>디지털 아트</h3>
            <p>김예술 - 미래를 그리는 디자인</p>
          </div>
          <div className="work-item">
            <div className="work-image">작품 이미지 2</div>
            <h3>그래픽 디자인</h3>
            <p>이창작 - 브랜드 아이덴티티</p>
          </div>
          <div className="work-item">
            <div className="work-image">작품 이미지 3</div>
            <h3>웹 디자인</h3>
            <p>박디자인 - 사용자 경험 설계</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="about-page">
      <h1>졸업 준비 위원회</h1>
      <div className="committee-info">
        <div className="committee-section">
          <h2>위원장</h2>
          <div className="member">
            <h3>김교수</h3>
            <p>디자인학과 교수</p>
            <p>전시 기획 및 총괄</p>
          </div>
        </div>
        
        <div className="committee-section">
          <h2>부위원장</h2>
          <div className="member">
            <h3>이교수</h3>
            <p>시각디자인학과 교수</p>
            <p>작품 선정 및 전시 디자인</p>
          </div>
        </div>
        
        <div className="committee-section">
          <h2>기획팀</h2>
          <div className="team-members">
            <div className="member">
              <h3>박학생</h3>
              <p>기획 및 홍보</p>
            </div>
            <div className="member">
              <h3>최학생</h3>
              <p>행사 진행</p>
            </div>
            <div className="member">
              <h3>정학생</h3>
              <p>작품 관리</p>
            </div>
          </div>
        </div>
        
        <div className="committee-section">
          <h2>기술팀</h2>
          <div className="team-members">
            <div className="member">
              <h3>한학생</h3>
              <p>웹사이트 개발</p>
            </div>
            <div className="member">
              <h3>윤학생</h3>
              <p>디지털 콘텐츠 제작</p>
            </div>
          </div>
        </div>
        
        <div className="committee-section">
          <h2>디자인팀</h2>
          <div className="team-members">
            <div className="member">
              <h3>조학생</h3>
              <p>전시 공간 디자인</p>
            </div>
            <div className="member">
              <h3>임학생</h3>
              <p>홍보물 디자인</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="gallery-page">
      <h1>졸업생 작품 갤러리</h1>
      <div className="gallery-grid">
        <div className="gallery-item">
          <div className="artwork-image">작품 이미지</div>
          <div className="artwork-info">
            <h3>미래를 그리는 디자인</h3>
            <p className="artist">김예술</p>
            <p className="medium">디지털 아트, 2024</p>
            <p className="description">AI와 인간의 창작 과정을 탐구한 인터랙티브 작품</p>
          </div>
        </div>
        
        <div className="gallery-item">
          <div className="artwork-image">작품 이미지</div>
          <div className="artwork-info">
            <h3>브랜드 아이덴티티</h3>
            <p className="artist">이창작</p>
            <p className="medium">그래픽 디자인, 2024</p>
            <p className="description">지속가능한 패키지 디자인 시스템</p>
          </div>
        </div>
        
        <div className="gallery-item">
          <div className="artwork-image">작품 이미지</div>
          <div className="artwork-info">
            <h3>사용자 경험 설계</h3>
            <p className="artist">박디자인</p>
            <p className="medium">웹 디자인, 2024</p>
            <p className="description">접근성을 고려한 모바일 앱 인터페이스</p>
          </div>
        </div>
        
        <div className="gallery-item">
          <div className="artwork-image">작품 이미지</div>
          <div className="artwork-info">
            <h3>공간의 재해석</h3>
            <p className="artist">최공간</p>
            <p className="medium">인테리어 디자인, 2024</p>
            <p className="description">도시 공간의 새로운 활용 방안</p>
          </div>
        </div>
        
        <div className="gallery-item">
          <div className="artwork-image">작품 이미지</div>
          <div className="artwork-info">
            <h3>색채의 언어</h3>
            <p className="artist">정색채</p>
            <p className="medium">회화, 2024</p>
            <p className="description">감정을 표현하는 색채 연구</p>
          </div>
        </div>
        
        <div className="gallery-item">
          <div className="artwork-image">작품 이미지</div>
          <div className="artwork-info">
            <h3>디지털 스토리텔링</h3>
            <p className="artist">한스토리</p>
            <p className="medium">애니메이션, 2024</p>
            <p className="description">전통과 현대가 만나는 디지털 내러티브</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return renderHome();
      case 'about':
        return renderAbout();
      case 'gallery':
        return renderGallery();
      default:
        return renderHome();
    }
  };

  return (
    <div className="App">
      <nav className="navigation">
        <div className="nav-container">
          <div className="logo">
            <h2>졸업전시회 2024</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <button 
                className={currentPage === 'home' ? 'active' : ''} 
                onClick={() => setCurrentPage('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'about' ? 'active' : ''} 
                onClick={() => setCurrentPage('about')}
              >
                About
              </button>
            </li>
            <li>
              <button 
                className={currentPage === 'gallery' ? 'active' : ''} 
                onClick={() => setCurrentPage('gallery')}
              >
                Gallery
              </button>
            </li>
          </ul>
        </div>
      </nav>
      
      <main className="main-content">
        {renderContent()}
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 디자인 아트 학부 졸업 전시회. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
