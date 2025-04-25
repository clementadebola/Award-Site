import { useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryCard from './CategoriesCard';

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

const CategoriesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  // Sample data
  const categoriesData = [
    {
      id: 1,
      category: 'Best Student Leader',
      icon: '👑',
      description: 'Recognizing exceptional leadership qualities and impact on campus.',
      type: 'leadership',
      candidates: [
        { name: 'Alex Johnson', achievement: 'Led campus sustainability initiative' },
        { name: 'Maria Garcia', achievement: 'President of Student Government' },
        { name: 'David Kim', achievement: 'Founded peer mentoring program' }
      ]
    },
    {
      id: 2,
      category: 'Academic Excellence',
      icon: '🎓',
      description: 'Celebrating outstanding academic achievements and research contributions.',
      type: 'academic',
      candidates: [
        { name: 'Emma Wilson', achievement: '4.0 GPA, Published research paper' },
        { name: 'James Lee', achievement: 'Valedictorian, Multiple scholarships' },
        { name: 'Sophia Chen', achievement: 'Dean\'s list, Research assistant' }
      ]
    },
    {
      id: 3,
      category: 'Innovation Award',
      icon: '💡',
      description: 'Recognizing creative solutions and innovative projects.',
      type: 'innovation',
      candidates: [
        { name: 'Ryan Martinez', achievement: 'Created campus navigation app' },
        { name: 'Olivia Taylor', achievement: 'Designed sustainable water system' },
        { name: 'Mohammed Ali', achievement: 'Developed AI study assistant' }
      ]
    },
    {
      id: 4,
      category: 'Community Service',
      icon: '🤝',
      description: 'Honoring dedication to community engagement and volunteer service.',
      type: 'service',
      candidates: [
        { name: 'Sarah Johnson', achievement: '500+ volunteer hours' },
        { name: 'Michael Brown', achievement: 'Founded homeless outreach program' },
        { name: 'Aisha Patel', achievement: 'Led multiple charity fundraisers' }
      ]
    },
    {
      id: 5,
      category: 'Athletic Achievement',
      icon: '🏆',
      description: 'Celebrating excellence in sports and athletic competitions.',
      type: 'sports',
      candidates: [
        { name: 'Carlos Rodriguez', achievement: 'Basketball MVP, State champions' },
        { name: 'Jasmine Williams', achievement: 'Track & Field record holder' },
        { name: 'Tyler Johnson', achievement: 'Swimming national qualifier' }
      ]
    },
    {
      id: 6,
      category: 'Arts & Culture',
      icon: '🎭',
      description: 'Recognizing outstanding contributions to campus arts and culture.',
      type: 'arts',
      candidates: [
        { name: 'Liam Wilson', achievement: 'Directed award-winning play' },
        { name: 'Emily Chen', achievement: 'Published poetry collection' },
        { name: 'Nathan Davis', achievement: 'Founded multicultural festival' }
      ]
    }
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
