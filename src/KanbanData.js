import { v4 as uuidv4 } from 'uuid';
export const data = [
  {
    id: '1',
    Order: ' Praesent.',
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '25-May-2020',
  },
  {
    id: '2',
    Order: 'Fix Styling',
    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '26-May-2020',
  },
  {
    id: '3',
    Order: 'Handle Door Specs',
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '27-May-2020',
  },
  {
    id: '4',
    Order: 'morbi',
    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    // Priority: 'High',
    Due_Date: '23-Aug-2020',
  },
  {
    id: '5',
    Order: 'proin',
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: '05-Jan-2021',
  },
];

const weekday = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]

const getDayPrint = (date) => {
  let d = new Date(date);
  // return weekday[d.getDay()] + ", " + d.getDate() + "." + (d.getMonth() + 1); 
  return d.toLocaleDateString('Ru', {  day: "numeric", month:"numeric", weekday:"short",}); 
}

export const daysOfPrint = {
  [uuidv4()]: {
    date: getDayPrint("07/09/2023"),
    items: data,
  },
  [uuidv4()]: {
    date: 'We, 23.09',
    items: [],
  },
  [uuidv4()]: {
    date: getDayPrint(null),
    items: [],
  },
  [uuidv4()]: {
    date: 'Fr, 25.09',
    items: [],
  },
  [uuidv4()]: {
    date: 'Se, 24.09',
    items: [],
  },
  [uuidv4()]: {
    date: 'Fr, 25.09',
    items: [],
  },  
};

export const daysOfPrintt ={

};

