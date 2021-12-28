var number,phoneNumber,dataNumber,plan,price,overChargeNumber,priceBasic,priceComprehensive,priceSucker,priceUnlimited,bestPlan,bestPlanCompany,worstPlanCompany,customerBest,customerW,overPayment;

let basicCustomers = 0;
let comprehensiveCustomers = 0;
let suckerCustomers = 0;
let unlimitedCustomers = 0;
let planMatchB = 0; 
let planMatchC = 0;
let planMatchS = 0;
let planMatchU = 0;

function initialize()
{
  console.log("Hello world");
  generateRandom();
  generateRandomData();
  generateRandomPlan();
  generateRandomPlan();
  generateArray();
  data();
  finalData();
}

/**Function to use to generate the data set amount */
function generateRandom()
{
   number = Math.floor(Math.random()*(10000-1000) + 1000);
   return number;
}

/** Function to generate the phone number of the user */
function generateRandomPhone()
{
  phoneNumber = Math.floor(Math.random()*(9999999999-1000000000)+1000000000);
  return phoneNumber;
}

/** Function to generate the data usage of the user */
function generateRandomData()
{
  dataNumber = Math.floor(Math.random()*(40000-1) + 1);
  return dataNumber;
}

/** Function to generate which data plan the user has */
function generateRandomPlan()
{
  let plans = ["Basic", "Comprehensive", "Sucker", "Unlimited"];
  return plans[Math.floor(Math.random() * plans.length)];
}


let customers = [];

function generateArray()
{
  for (var i = 0; i < number; i++)
  {
    let customer = {};
    customer.phoneNumber = generateRandomPhone();
    customer.data = generateRandomData();
    customer.plan = generateRandomPlan();
    customers.push(customer);
  }
}

let dataOvercharge = [];

/** This will calculate the overcharge */
function calculateOverCharge(i)
{
  /** if the customer's plan is basic, they will not be charged extra for it they used 1000 megabytes of data. If it is over 1000, the value will be calculated by subtracting 1000 from the total and then returned as the overcharge number. */
  if (customers[i-1].plan === ("Basic"))
  {
    basicCustomers += 1;
    if (customers[i-1].data <= 1000)
    {
      overchargeNumber = 0;
    }

    else
    {
      overchargeNumber = customers[i-1].data - 1000;
    }
  }

  /** if the customer's plan is Comprehensive,they will not be charged extra for it they used 4000 megabytes of data. If it is over 4000, the value will be calculated by subtracting 4000 from the total and then returned as the overcharge number.*/
  if (customers[i-1].plan === ("Comprehensive"))
  {
    comprehensiveCustomers += 1;
    if (customers[i-1].data <= 4000)
    {
      overchargeNumber = 0;
    }

    else
    {
      overchargeNumber = customers[i-1].data - 4000;
    }
  }

  /** if the customer's plan is Sucker, they will not be charged extra for anything since everyone of their megabytes will be 0.02 cents but it will be reported as whatever is the data used */
  if (customers[i-1].plan === ("Sucker"))
  {
    suckerCustomers += 1;
    overchargeNumber = customers[i-1].data;
  }

  /** If the customer's plan is Unlimited, they will not be charge extra for aything as they have an unlimited amount of megabytes for a set price */
  if (customers[i-1].plan === ("Unlimited"))
  {
    unlimitedCustomers += 1;
    overchargeNumber = 0;
  }
  
  dataOvercharge.push(overchargeNumber);
  return overchargeNumber;
}


/** This calculates the final price of the data base on the plan tat was given. */
function finalPrice(i)
{
  if (customers[i-1].plan === ("Basic"))
  {
    price = Math.round((dataOvercharge[i-1]*0.10 + 19.99) * 100) / 100;
  }

  if (customers[i-1].plan === ("Comprehensive"))
  {
    price = Math.round((dataOvercharge[i-1]*0.25 + 24.99) * 100) / 100;
  }

  if (customers[i-1].plan === ("Sucker"))
  {
    price = Math.round((dataOvercharge[i-1]*0.02 + 4.99 ) * 100) / 100 ;
  }

  if (customers[i-1].plan === ("Unlimited"))
  {
    price = 49.99;
  }
  return price;
}

let bestPlanC = [];
/**The analytics function is used to calculate the which is the best plan out of all the ones given. */
function analytics(i)
{
  let value = [];
  /**As unlimited did not count for overcharge, I needed to take the data that was previously generated to specify the other plan charge comparative */
  if (customers[i-1].plan === ("Unlimited"))
  {
    priceBasic = Math.round((customers[i-1].data * 0.10 + 19.99) * 100) / 100;
    value.push(priceBasic);
    priceComprehensive = Math.round((customers[i-1].data * 0.25 + 24.99) * 100) / 100;
    value.push(priceComprehensive);
    priceSucker = Math.round((customers[i-1].data * 0.02 + 4.99 ) * 100) / 100 ;
    value.push(priceSucker);
    priceUnlimited = 49.99;
    value.push(priceUnlimited);
  }
  else
  {
    priceBasic = Math.round((dataOvercharge[i-1] * 0.10 + 19.99) * 100) / 100;
    value.push(priceBasic);
    priceComprehensive = Math.round((dataOvercharge[i-1] * 0.25 + 24.99) * 100) / 100;
    value.push(priceComprehensive);
    priceSucker = Math.round((dataOvercharge[i-1] * 0.02 + 4.99 ) * 100) / 100 ;
    value.push(priceSucker);
    priceUnlimited = 49.99;
    value.push(priceUnlimited);
  }

  /** The minimum price is set to unlimited price since majority of the time it would be the cheapest plan. */
  var minimum = priceUnlimited;
  /** As unlimited is the third element in the array, it is set to 3 before it gets changed */
  var count = 3;

  for (var i = 0; i<value.length;i++)
  {
    if (value[i] < minimum)
    {
      minimum = value[i];
      count = i;
    }
  }

  if (count == 0)
  {
    bestPlan = "Basic";
  }
  else if (count == 1)
  {
    bestPlan = "Comprehensive";
  }
  else if (count == 2)
  {
    bestPlan = "Sucker";
  }
  else if (count == 3)
  {
   bestPlan = "Unlimited";
  }

  bestPlanC.push(bestPlan);
  return bestPlan;
}

/**This generates the table for the user and all of their data stored in the company database */
function data()
{
   dataTable = document.getElementById("companyData");
  let i = 1;
  for(let customer of customers) {
    /**A new row is created */
    var newRow = dataTable.insertRow();
    /** A new Column is created in the row*/
    var newColumn = newRow.insertCell();
    /** This counts the number of users that were generated */
    newColumn.innerHTML = "Customer " +i;
    newColumn = newRow.insertCell();
    /** This generates the customer and their phone number */
    newColumn.innerHTML = customer.phoneNumber;
    newColumn = newRow.insertCell();
    /**This generates the data in megabytes that they use */
    newColumn.innerHTML = customer.plan;
    newColumn = newRow.insertCell();
    /** This generates the plan that they currently have*/
    newColumn.innerHTML = customer.data;
    newColumn = newRow.insertCell();
    /** This generates the overcharge of the plan */
    newColumn.innerHTML = calculateOverCharge(i);
    newColumn = newRow.insertCell();
    /** This generates the value of the final price */
    newColumn.innerHTML = "$" + finalPrice(i); 
    /** This generates the best plan for the user */
    newColumn = newRow.insertCell();
    newColumn.innerHTML = analytics(i);
    i++;
  }
}

function finalData()
{
  let i = 0;


 /**Off values with best plan */
  /**This loop will go through the customers and their plan so there is data on how many people are using the plan and what are the best plan. */
  for(let customer of customers)
  {
    /**Calculates the amount of customers that are using the Basic plan. */
    if (customer.plan === "Basic" && bestPlan[i] === "Basic")
    {

      planMatchB += 1;
    }

    /**Calculates the amount of customers that are using the Comprehensive plan. */
    if (customer.plan === "Comprehensive" && bestPlanC[i] === "Comprehensive")
    {
      planMatchC += 1;
    }

    /**Calculates the amount of customers that are using the Sucker plan. */
    if (customer.plan === "Sucker" && bestPlanC[i] === "Sucker")
    {
      planMatchS += 1;
    }

    /**Calculates the amount of customers that are using the unlimited plan. */
    if (customer.plan === "Unlimited" && bestPlanC[i] === "Unlimited")
    {
        planMatchU++;
    }
    i++;

   }
   
  console.log(comprehensiveCustomers);
  console.log(planMatchU);
}
