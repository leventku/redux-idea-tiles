export const FETCH_IDEAS = 'FETCH_IDEAS';
export const UPDATE_IDEA = 'UPDATE_IDEA';
export const CREATE_IDEA = 'CREATE_IDEA';

let nextId = 0;

export function fetchIdeas() {
  const ideas = [
    // {
    //   id: 1,
    //   created_date: new Date(),
    //   title: 'first idea',
    //   body: 'body text of the first idea' 
    // },
    // {
    //   id: 2,
    //   created_date: new Date(),
    //   title: 'second idea',
    //   body: 'body text of the second idea' 
    // },
  ];
  
  return {
    type: FETCH_IDEAS,
    payload: ideas
  }
};

export function updateIdea(obj) {
  // POST idea/update
  console.log('POST idea/update: ', obj);

  return {
    type: UPDATE_IDEA
  }
}

export function addIdea() {
  // GET idea/new
  const newId = fetchIdeas().payload.length + 1;
  console.log('GET idea/new: ', newId);

  return {
    type: CREATE_IDEA,
    payload: {
      id: nextId++,
      created_date: new Date()
    }
  }
}