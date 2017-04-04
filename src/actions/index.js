export const FETCH_IDEAS = 'FETCH_IDEAS';


export function fetchIdeas() {
  const ideas = [
    {
      id: 1,
      created_date: new Date(),
      title: 'first idea',
      body: 'body text of the first idea' 
    },
    {
      id: 2,
      created_date: new Date(),
      title: 'second idea',
      body: 'body text of the second idea' 
    },
  ];
  
  return {
    type: FETCH_IDEAS,
    payload: ideas
  }
};
