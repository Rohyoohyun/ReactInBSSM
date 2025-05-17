import React from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../App';

const DiaryItem = ({ id, emotion, content, date }) => {
  const navigate = useNavigate();
  
  // 날짜 형식 변환
  const strDate = new Date(date).toLocaleDateString();
  
  // 감정 데이터 가져오기
  const emotionData = emotionList.find((item) => item.emotion_id === emotion);
  
  // 일기 상세 페이지로 이동
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  
  return (
    <div className="diary-item" onClick={goDetail}>
      <div className="diary-date">{strDate}</div>
      <div className="diary-emotion">
        <div className={`emotion-img emotion-${emotion}`}>
          {emotionData.emotion_img}
        </div>
        <span>{emotionData.emotion_descript}</span>
      </div>
      <div className="diary-content">
        {content.length > 60 ? content.slice(0, 60) + '...' : content}
      </div>
    </div>
  );
};

const DiaryList = ({ diaryList }) => {
  // 날짜 순으로 정렬 (최신순)
  const sortedDiary = diaryList.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return (
    <div className="diary-list">
      {sortedDiary.map((diary) => (
        <DiaryItem key={diary.id} {...diary} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;