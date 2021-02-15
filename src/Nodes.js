import './index.css';

const nodes = [

    // OVERVIEW

    { 
      id: 'horizontal-1', 
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: 'Step 0: Create a monthly spending budget' }, 
      position: { x: 0, y: 5 },
      style: {
        background: "#b0bec4",
        width: 130,
        height: 50,
        fontSize: "16px",
        fontFamily: "poppins",
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
        fontSize: "16px",
        fontFamily: "poppins",
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
        fontSize: "16px",
        fontFamily: "poppins",
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
        fontSize: "16px",
        fontFamily: "poppins",
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
        fontSize: "16px",
        fontFamily: "poppins",
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
        fontSize: "16px",
        fontFamily: "poppins",
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
        background: "rgb(201, 137, 226)",
        width: 130,
        height: 50,
        fontSize: "16px",
        fontFamily: "poppins",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },

    // FLOWCHART

    { 
      id: 'vertical-0', 
      sourcePosition: 'bottom',
      targetPosition: 'top',
      data: { label: 'Address immediate financial necesseties: rent, food, utility bills, healthcare' }, 
      position: { x: 200, y: 200 },
      style: {
        background: "#b0bec4",
        width: 200,
        height: 60,
        fontSize: "16px",
        fontFamily: "poppins",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'vertical-1', 
      sourcePosition: 'bottom',
      targetPosition: 'top',
      data: { label: 'Make minimum payments on all debts and loans' }, 
      position: { x: 200, y: 300 },
      style: {
        background: "#b0bec4",
        width: 200,
        height: 50,
        fontSize: "16px",
        fontFamily: "poppins",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'vertical-2', 
      sourcePosition: 'bottom',
      targetPosition: 'top', 
      data: { label: "Save an Emergency Fund of at least one month's worth of expenses " }, 
      position: { x: 200, y: 400 }, 
      style: {
        background: "rgb(200, 122, 122)",
        width: 200,
        height: 50,
        fontSize: "16px",
        fontFamily: "poppins",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
      id: 'vertical-3', 
      sourcePosition: 'right',
      targetPosition: 'left',
      data: { label: "Does your employer offer a match on your retirement account contributions?" }, 
      position: { x: 200, y: 500 }, 
      style: {
        background: "rgb(250, 250, 120)",
        width: 200,
        height: 60,
        fontSize: "16px",
        fontFamily: "poppins",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
      },
    },
    { 
    id: 'vertical-4', 
    sourcePosition: 'bottom',
    targetPosition: 'left', 
    data: { label: "Contribute the minimum amount necessary to maximize your employer match" }, 
    position: { x: 500, y: 500 }, 
    style: {
      background: "rgb(250, 250, 120)",
      width: 200,
      height: 60,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-5', 
    sourcePosition: 'right',
    targetPosition: 'top', 
    data: { label: 'Do you have any high interest (> ~10%) debt?' }, 
    position: { x: 310, y: 650 }, 
    style: {
      background: "rgb(126, 231, 100)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-6', 
    sourcePosition: 'bottom',
    targetPosition: 'left', 
    data: { label: 'Starting with the highest interest rate, pay off high interest debts.' }, 
    position: { x: 600, y: 650 }, 
    style: {
      background: "rgb(126, 231, 100)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-7', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: "Increase emergency fund to 3-6 months of expenses" }, 
    position: { x: 400, y: 780 }, 
    style: {
      background: "rgb(200, 122, 122)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-8', 
    sourcePosition: 'right',
    targetPosition: 'top', 
    data: { label: 'Do you have any moderate interest (~5%) debt?' }, 
    position: { x: 310, y: 900 }, 
    style: {
      background: "rgb(126, 231, 100)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-9', 
    sourcePosition: 'bottom',
    targetPosition: 'left', 
    data: { label: 'Starting with the highest interest rate, pay off moderate interest debts.' }, 
    position: { x: 600, y: 900 }, 
    style: {
      background: "rgb(126, 231, 100)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-10', 
    sourcePosition: 'bottom',
    targetPosition: 'right', 
    data: { label: "Consider the merits of a Roth vs. Traditional IRA and max your yearly contribution" }, 
    position: { x: 200, y: 1020 }, 
    style: {
      background: "rgb(158, 200, 255)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-11', 
    sourcePosition: 'right',
    targetPosition: 'top', 
    data: { label: 'Are you preparing for a large purchase in the near future?' }, 
    position: { x: 310, y: 1150 }, 
    style: {
      background: "#b0bec4",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-12', 
    sourcePosition: 'bottom',
    targetPosition: 'left', 
    data: { label: 'Save for this purchase in a savings account or a CD depending on your timeframe' }, 
    position: { x: 600, y: 1150 }, 
    style: {
      background: "#b0bec4",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-13', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: "Are you saving 15% of your pre-tax income for retirement?" }, 
    position: { x: 400, y: 1300 }, 
    style: {
      background: "rgb(0, 110, 255)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-14', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: 'Does your employer offer a 403b or 401k retirement account? Or, do you have access to and Individual 401k?' }, 
    position: { x: 600, y: 1400 }, 
    style: {
      background: "rgb(0, 110, 255)",
      width: 200,
      height: 80,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-15', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: "Increase contributions until 15% of pre-tax income is saved for retirement" }, 
    position: { x: 400, y: 1550 }, 
    style: {
      background: "rgb(0, 110, 255)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-16', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: 'Increase investments in a taxable account until 15% of pre-tax income is being saved for retirement' }, 
    position: { x: 800, y: 1550 }, 
    style: {
      background: "rgb(0, 110, 255)",
      width: 200,
      height: 80,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-17', 
    sourcePosition: 'right',
    targetPosition: 'top', 
    data: { label: "Max yearly HSA contributions, if applicable" }, 
    position: { x: 200, y: 1670 }, 
    style: {
      background: "rgb(201, 137, 226)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'horizontal-18', 
    sourcePosition: 'bottom',
    targetPosition: 'left', 
    data: { label: "Do you have children?" }, 
    position: { x: 550, y: 1670 }, 
    style: {
      background: "rgb(201, 137, 226)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-19', 
    sourcePosition: 'right',
    targetPosition: 'top', 
    data: { label: "Evaluate the merits of a 529 savgings plan and contribute accordingly" }, 
    position: { x: 550, y: 1800 }, 
    style: {
      background: "rgb(201, 137, 226)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'horizontal-20', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: "Do you want to retire early?" }, 
    position: { x: 200, y: 1900 }, 
    style: {
      background: "rgb(201, 137, 226)",
      width: 200,
      height: 50,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-21', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: "Maximize 401k/403b contributions and consider a 'backdoor' Roth IRA. Contribute to a taxable account." }, 
    position: { x: 400, y: 2020 }, 
    style: {
      background: "rgb(0, 110, 255)",
      width: 200,
      height: 100,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },
  { 
    id: 'vertical-22', 
    sourcePosition: 'bottom',
    targetPosition: 'top', 
    data: { label: "Use a savings account and a conservative mix of stocks and bonds for savings in excess of retirement" }, 
    position: { x: 200, y: 2170 }, 
    style: {
      background: "rgb(201, 137, 226)",
      width: 200,
      height: 80,
      fontSize: "16px",
      fontFamily: "poppins",
      boxShadow: "5px 5px 5px 0px rgba(0,0,0,.50)"
    },
  },


    // EDGES  

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
    // vertical
    {
      id: 'vertical-e0-1',
      label: '', 
      source: 'vertical-0', 
      target: 'vertical-1', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e1-2',
      label: '', 
      source: 'vertical-1', 
      target: 'vertical-2', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e2-3',
      label: '', 
      source: 'vertical-2', 
      target: 'vertical-3', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e3-4',
      label: 'yes', 
      source: 'vertical-3', 
      target: 'vertical-4', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e3-5', 
      label: 'no', 
      source: 'vertical-3', 
      target: 'vertical-5', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e4-5', 
      source: 'vertical-4', 
      target: 'vertical-5', 
      animated: true,
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'vertical-e5-6',
      label: 'yes', 
      source: 'vertical-5', 
      target: 'vertical-6', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'horizontal-e5-7', 
      label: 'no', 
      source: 'vertical-5', 
      target: 'vertical-7', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e6-7', 
      label: '', 
      source: 'vertical-6', 
      target: 'vertical-7', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'horizontal-e7-8', 
      label: '', 
      source: 'vertical-7', 
      target: 'vertical-8', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e8-9',
      label: 'yes', 
      source: 'vertical-8', 
      target: 'vertical-9', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e8-10',
      label: 'no', 
      source: 'vertical-8', 
      target: 'vertical-10', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e9-10',
      label: '', 
      source: 'vertical-9', 
      target: 'vertical-10', 
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e10-11',
      label: '', 
      source: 'vertical-10', 
      target: 'vertical-11',
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e11-12',
      label: 'yes', 
      source: 'vertical-11', 
      target: 'vertical-12',
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e11-13',
      label: 'no', 
      source: 'vertical-11', 
      target: 'vertical-13',
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e12-13',
      label: '', 
      source: 'vertical-12', 
      target: 'vertical-13',
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    {
      id: 'vertical-e13-17',
      label: 'yes', 
      source: 'vertical-13', 
      target: 'vertical-17',
      animated: true,
      arrowHeadType: 'arrowclosed',
      labelStyle: {
        fontSize: '14px',
      }
    },
    
  ];

export default nodes;