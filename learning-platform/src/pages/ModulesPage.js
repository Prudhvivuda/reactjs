import React, { useState } from 'react';

const SidebarItem = ({ type, isActive, onClick }) => {
  const getSymbol = () => {
    switch (type) {
      case 'Topic':
        return '💏';
      case 'Quiz':
        return '🫂';
      case 'Assignment':
        return '💝';
      default:
        return '';
    }
  };

  return (
    <span id='wrapper'
      className={`default-sidebar ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className="symbol">{getSymbol()}</span>
      <span className="type">{type}</span><br/>
    </span>
  );
};

const Sidebar = ({ items, activeItem, onItemClick }) => {

  return (
    <div className="module-link " activeclassName="active">
      {items.map((item) => (
        <SidebarItem
          key={item.type}
          type={item.type}
          isActive={activeItem === item.type}
          onClick={() => onItemClick(item.type)}
        /> 
      ))}<br/>
    </div>
  );
};

const TopicContent = () => {
  return (
    <div className="content">
      <h2>Topic</h2>
      <p>This is the content for the Topic.</p>
    </div>
  );
};

const QuizContent = () => {
  return (
    <div className="content">
      <h2>Quiz</h2>
      <p>This is the content for the Quiz.</p>
    </div>
  );
};

const AssignmentContent = () => {
  return (
    <div className="content">
      <h2>Assignment</h2>
      <p>This is the content for the Assignment.</p>
    </div>
  );
};

const ModulesPage = () => {
    const [activeItem, setActiveItem] = useState('Topic');

    const items = [
        { type: 'Topic', content: <TopicContent /> },
        { type: 'Quiz', content: <QuizContent /> },
        { type: 'Assignment', content: <AssignmentContent /> },
    ];

    const handleItemClick = (type) => {
        setActiveItem(type);
    };

    const getContent = () => {
        const item = items.find((item) => item.type === activeItem);
        return item ? item.content : null;
    };

    return (
    <div>
        <Sidebar items={items} activeItem={activeItem} onItemClick={handleItemClick} />
        {getContent()}
    </div>
    );
};

export default ModulesPage;
