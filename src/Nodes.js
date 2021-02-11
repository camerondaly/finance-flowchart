import './index.css';

const nodes = [
    { 
      id: 'horizontal-1', 
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Step 0: Budget' }, 
      position: { x: 0, y: 5 },
      style: {
        background: "#b0bec4",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-2', 
      sourcePosition: 'right',
      targetPosition: 'left', 
      data: { label: 'Step 1: Save an Emergency Fund' }, 
      position: { x: 200, y: 5 }, 
      style: {
        background: "rgb(200, 122, 122)",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-3', 
      sourcePosition: 'right',
      targetPosition: 'left', 
      data: { label: 'Step 2: Employer-sponsored matching funds' }, 
      position: { x: 400, y: 5 }, 
      style: {
        background: "rgb(250, 250, 120)",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-4', 
      sourcePosition: 'right',
      targetPosition: 'left', 
      data: { label: 'Step 3: Pay off debts' }, 
      position: { x: 600, y: 5 }, 
      style: {
        background: "rgb(126, 231, 100)",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-5', 
      sourcePosition: 'right',
      targetPosition: 'left', 
      data: { label: 'Step 4: Save for retirement in an IRA' }, 
      position: { x: 800, y: 5 }, 
      style: {
        background: "rgb(158, 200, 255)",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-6', 
      sourcePosition: 'right',
      targetPosition: 'left', 
      data: { label: 'Step 5: Additional retirement savings' }, 
      position: { x: 1000, y: 5 }, 
      style: {
        background: "rgb(0, 110, 255)",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-7', 
      sourcePosition: 'right',
      targetPosition: 'left', 
      data: { label: 'Step 6: Additional goals and advanced methods' }, 
      position: { x: 1200, y: 5 }, 
      style: {
        background: "rgb(150, 0, 209)",
        width: 130,
        height: 50,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'vertical-1', 
      sourcePosition: 'right',
      targetPosition: 'left',  
      data: { label: ''},
      position: { x: 600, y: 200 }, 
      style: {
        background: "rgb(150, 0, 209)",
        width: 130,
        height: .000000001,
        fontSize: "14px",
        fontFamily: "Helvetica",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'horizontal-e1-2', 
      source: 'horizontal-1', 
      target: 'horizontal-2', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'horizontal-e2-3', 
      source: 'horizontal-2', 
      target: 'horizontal-3', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'horizontal-e3-4', 
      source: 'horizontal-3', 
      target: 'horizontal-4', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'horizontal-e4-5', 
      source: 'horizontal-4', 
      target: 'horizontal-5', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'horizontal-e5-6', 
      source: 'horizontal-5', 
      target: 'horizontal-6', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'horizontal-e6-7', 
      source: 'horizontal-6', 
      target: 'horizontal-7', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
  ];

export default nodes;