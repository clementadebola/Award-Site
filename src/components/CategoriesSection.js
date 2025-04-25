import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoriesCard';

const CategoriesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  // Sample data
  const categoriesData = [
    {
      id: 1,
      category: 'Brand / Enterpreneur of the year',
      icon: '👑',
      description: 'Recognizing exceptional enterpreneurship qualities and impact on campus.',
      type: 'Enterpreneur',
      candidates: [
        { name: 'Ziongate', achievement: 'gadget brand' },
        { name: 'Timix', achievement: 'Design brand' },
        { name: 'David Kim', achievement: 'Founded peer mentoring program' }
      ]
    },
    {
      id: 2,
      category: 'Miss Petite',
      icon: '🎓',
      description: 'Celebrating outstanding pretty ladies',
      type: 'Petite',
      candidates: [
        { name: 'Berith'},
        { name: 'James Lee' },
        { name: 'Sophia Chen' }
      ]
    },
    {
      id: 3,
      category: 'Miss Sohisticated',
      icon: '💡',
      description: 'Recognizing sophisticated student',
      type: 'Sophisticated',
      candidates: [
        { name: 'Ryan Martinez' },
        { name: 'Olivia Taylor' },
        { name: 'Mohammed Ali' }
      ]
    },
    {
      id: 4,
      category: 'Icon of the year',
      icon: '🤝',
      description: 'Honoring dedication to community engagement and volunteer service.',
      type: 'Icon',
      candidates: [
        { name: 'Sarah Johnson', achievement: '500+ volunteer hours' },
        { name: 'Michael Brown', achievement: 'Founded homeless outreach program' },
        { name: 'Aisha Patel', achievement: 'Led multiple charity fundraisers' }
      ]
    },
    {
      id: 5,
      category: 'Most Expensive',
      icon: '🏆',
      description: 'Celebrating Expensive student',
      type: 'Expensive',
      candidates: [
        { name: 'Carlos Rodriguez'},
        { name: 'Jasmine Williams' },
        { name: 'Tyler Johnson' }
      ]
    },
    {
      id: 6,
      category: 'Most endowed',
      icon: '🎭',
      description: 'Recognizing endowed ladies in the department',
      type: 'endowed',
      candidates: [
        { name: 'Liam Wilson' },
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 7,
      category: 'Most Ebony',
      icon: '🎭',
      description: 'Recognizing Ebony ladies',
      type: 'Ebony',
      candidates: [
        { name: 'Liam mary' },
        { name: 'Emily Chen' },
        { name: 'Victorial' }
      ]
    },
    {
      id: 8,
      category: 'Popular Female',
      icon: '🎭',
      description: 'Recognizing Popular female students ',
      type: 'Popular female',
      candidates: [
        { name: 'akinsemi mary' },
        { name: 'berith'},
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 9,
      category: 'Most Popular Male',
      icon: '🎭',
      description: 'Recognizing Popular male students ',
      type: 'popular male',
      candidates: [
        { name: 'Liam Wilson' },
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 10,
      category: 'Miss Pretty',
      icon: '🎭',
      description: 'Recognizing Pretty students.',
      type: 'pretty',
      candidates: [
        { name: 'Liam Wilson'},
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 11,
      category: 'Hoc of year',
      icon: '🎭',
      description: 'Recognizing outstanding contributions to campus arts and culture.',
      type: 'Hoc',
      candidates: [
        { name: 'Liam Wilson' },
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 12,
      category: 'Clique of Friends',
      icon: '🎭',
      description: 'Recognizing Clique of Friends',
      type: 'clique',
      candidates: [
        { name: 'jonathan, juwon' },
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 13,
      category: 'Most popular Personality',
      icon: '🎭',
      description: 'Recognizing personality',
      type: 'popular',
      candidates: [
        { name: 'Liam Wilson'},
        { name: 'Emily Chen'},
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 14,
      category: 'Sophmor of the year',
      icon: '🎭',
      description: 'Recognizing outstanding contributions to campus arts and culture.',
      type: 'arts',
      candidates: [
        { name: 'Liam Wilson'},
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 15,
      category: 'Best departmental Fresher (Male)',
      icon: '🎭',
      description: 'Recognizing outstanding contributions to campus arts and culture.',
      type: 'fresher',
      candidates: [
        { name: 'Liam Wilson'},
        { name: 'Emily Chen'},
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 16,
      category: 'Best departmental Fresher (Female)',
      icon: '🎭',
      description: 'Recognizing outstanding contributions to campus arts and culture.',
      type: 'fresher',
      candidates: [
        { name: 'Liam Wilson' },
        { name: 'Emily Chen' },
        { name: 'Nathan Davis' }
      ]
    },
    {
      id: 17,
      category: 'Tiktoker of the year',
      icon: '🎭',
      description: 'Recognizing outstanding contributions of tiktoker',
      type: 'tiktoker',
      candidates: [
        { name: 'Liam Wilson', achievement: 'Directed the college tiktok acct well' },
        { name: 'Emily Chen', achievement: 'Published poetry collection' },
        { name: 'Nathan Davis', achievement: 'Founded multicultural festival' }
      ]
    },
    {
      id: 18,
      category: 'Best Course rep of the year',
      icon: '🎭',
      description: 'Recognizing outstanding contributions to campus arts and culture.',
      type: 'course rep',
      candidates: [
        { name: 'Liam Wilson', achievement: 'Directed award-winning play' },
        { name: 'Emily Chen', achievement: 'Published poetry collection' },
        { name: 'Nathan Davis', achievement: 'Founded multicultural festival' }
      ]
    },
    {
      id: 19,
      category: 'Most influential',
      icon: '🎭',
      description: 'Recognizing influential students.',
      type: 'influential',
      candidates: [
        { name: 'Liam Wilson', achievement: 'Directed award-winning play' },
        { name: 'Emily Chen', achievement: 'Published poetry collection' },
        { name: 'Nathan Davis', achievement: 'Founded multicultural festival' }
      ]
    },
    {
      id: 20,
      category: 'Best Lecturer',
      icon: '🎭',
      description: 'Recognizing outstanding contributions of lecturers in the College',
      type: 'lecturer',
      candidates: [
        { name: 'Dr. Olabode', achievement: 'Directed award-winning play' },
        { name: 'Emily Chen', achievement: 'Published poetry collection' },
        { name: 'Nathan Davis', achievement: 'Founded multicultural festival' }
      ]
    },
    {
      id: 21,
      category: 'Best Department',
      icon: '🎭',
      description: 'Recognizing outstanding contributions of department in the college.',
      type: 'arts',
      candidates: [
        { name: 'Computer Engineering', achievement: 'Directed award-winning play' },
        { name: 'Electrical Engineering', achievement: 'Published poetry collection' },
        { name: 'Civil Engineering', achievement: 'Founded multicultural festival' },
        {name: 'Biomedical Engineering'},
        {name: 'Mechanical Engineering'},
        {name: 'Mechatronics Engineering'}
      ]
    },
    {
      id: 22,
      category: 'Most Innovative',
      icon: '💡',
      description: 'Recognizing creative solutions and innovative projects.',
      type: 'innovation',
      candidates: [
        { name: 'Ryan Martinez', achievement: 'Created campus navigation app' },
        { name: 'Olivia Taylor', achievement: 'Designed sustainable water system' },
        { name: 'Mohammed Ali', achievement: 'Developed AI study assistant' }
      ]
    },
  ];
  
  useEffect(() => {
    setCategories(categoriesData);
    setFilteredCategories(categoriesData);
  }, []);
  
  const handleSearch = () => {
    let results = categories;
    
    // Apply search term filter
    if (searchTerm) {
      results = results.filter(category => 
        category.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filter !== 'all') {
      results = results.filter(category => category.type === filter);
    }
    
    setFilteredCategories(results);
  };
  
  return (
    <SectionContainer id="categories">
      <div className="container">
        <SectionTitle>Award Categories</SectionTitle>
        
        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder="Search categories..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <FilterSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="leadership">Leadership</option>
            <option value="academic">Academic</option>
            <option value="innovation">Innovation</option>
            <option value="service">Community Service</option>
            <option value="sports">Athletics</option>
            <option value="arts">Arts & Culture</option>
          </FilterSelect>
          
          <FilterButton onClick={handleSearch}>Apply Filter</FilterButton>
        </SearchContainer>
        
        <CategoriesGrid>
          {filteredCategories.map(category => (
            <CategoryCard 
              key={category.id}
              {...category}
            />
          ))}
        </CategoriesGrid>
      </div>
    </SectionContainer>
  );
};

export default CategoriesSection;


const SectionContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.grey};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${props => props.theme.gradients.header};
    border-radius: 2px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  min-width: 0;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const FilterSelect = styled.select`
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  border: 1px solid #ddd;
  font-size: 1rem;
  outline: none;
  background-color: white;
  min-width: 150px;
  
  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.2);
  }
`;

const FilterButton = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;