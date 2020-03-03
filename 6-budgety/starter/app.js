var budgetController = (function(){
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Expenses = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var testExpense = new Expenses(1,'TestExpense',10);
    var testIncome = new Income(1,'TestIncome',10);
    console.log(testExpense,testIncome);
    
    function calculateTotals(type){
        var sum = 0;
        budgetData.allItems[type].forEach(function(current){
            sum +=current.value;
            console.log("Sum : "+sum);
        });
        budgetData.totals[type] = sum;
    }
    var budgetData = {
        allItems : {
            exp:[],
            inc:[]
        },
        totals: {
            exp:0,
            inc:0
        },
        budget :0,
        percentage :-1
    }
    
    return {
        addItem: function(type, description,value){
            var ID, newItem;
            //ID
            if(budgetData.allItems[type].length>0){
                ID = budgetData.allItems[type][budgetData.allItems[type].length - 1].id +1;    
            }else{
                ID = 0;    
            }
            
            //New Item
            if(type === 'exp'){
                newItem = new Expenses(ID,description,value);   
            }else if(type === 'inc'){
                newItem = new Income(ID,description,value);
            }
            
            //Add Item to Data
            budgetData.allItems[type].push(newItem);
            console.log(budgetData.allItems[type]);
            return newItem;
        },
        
        calculateBudget : function(){
            //1. Calculate Totals
            calculateTotals('inc');
            calculateTotals('exp');
            
            //2. Calculate Budget
            budgetData.budget = budgetData.totals.inc - budgetData.totals.exp;
            //console.log(budgetData.totals.inc, budgetData.totals.exp);
            
            //3. Calculate Percentage
            if(budgetData.totals.inc > 0){
                budgetData.percentage = Math.round((budgetData.totals.exp / budgetData.totals.inc) * 100);   
            }
            
        },
        
        returnBudget: function(){
            return {
                budget: budgetData.budget,
                income: budgetData.totals.inc,
                expense: budgetData.totals.exp,
                percentage: budgetData.percentage
            }
        },
        
        publicTesting: function(){
            console.log(budgetData);
        }
    }
        
})();

var UIController = (function(){
    
    var DOMString = {
        DOMType: '.add__type',
        DOMDescription : '.add__description',
        DOMValue : '.add__value',
        DOMAddbtn : '.add__btn',
        DOMIncomeDiv: '.income__list',
        DOMExpenseDiv:'.expenses__list',
        budgetLabel : '.budget__value',
        expenseLabel : '.budget__expenses--value',
        incomeLabel : '.budget__income--value',
        percentageLabel: '.budget__expenses--percentage',
        itemContaoner : '.container'
    }
    return {
        getInput: function(){
            return {
                type : document.querySelector(DOMString.DOMType).value,
                description : document.querySelector(DOMString.DOMDescription).value,
                value : parseFloat(document.querySelector(DOMString.DOMValue).value)
            };
        },
        
        addListItem : function(object,type){
            var html, newHTML, element;
            //1. Create HTML PlaceHolder
            if(type === 'inc'){
                element = DOMString.DOMIncomeDiv;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'exp'){
                element = DOMString.DOMExpenseDiv;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //2. Replace HTML Placeholder with data
            newHTML = html.replace('%id%',object.id);
            newHTML = newHTML.replace('%description%',object.description);
            newHTML = newHTML.replace('%value%',object.value);
            
            //3. Add List item to HTML
            document.querySelector(element).insertAdjacentHTML('beforeend',newHTML);
        },
        
        clearFiels : function(){
            var fields, fieldsArray;
            
            fields = document.querySelectorAll(DOMString.DOMDescription+', '+DOMString.DOMValue);
            fieldsArray = Array.prototype.slice.call(fields);
        
            console.log(fields,fieldsArray);
            fieldsArray.forEach(function(current,index,array){
                current.value ="";
            });
        },
        
        displayBudget : function(budget){
            console.log(budget.budget,budget.income,budget.expense,budget.percentage);
            document.querySelector(DOMString.budgetLabel).textContent = budget.budget;
            document.querySelector(DOMString.incomeLabel).textContent = budget.income;
            document.querySelector(DOMString.expenseLabel).textContent = budget.expense;
            if(budget.percentage> 0){
                document.querySelector(DOMString.percentageLabel).textContent = budget.percentage+'%';
            }else{
                document.querySelector(DOMString.percentageLabel).textContent = '---';
            }
            
        },
        
        getDOMString: function(){
            return DOMString;
        }
    }
})();


var appController = (function(budgetController,UIController){
    
    
    //All Event Listners are here
    var eventListener = function(){
        var DOMString = UIController.getDOMString();
        
        document.querySelector(DOMString.DOMAddbtn).addEventListener('click',addItems);
        document.addEventListener('keypress',function(event){
        if(event.keyCode === 13){
                addItems();
            }
        });    
        
        document.querySelector(DOMString.itemContaoner).addEventListener('click',deleteItems);
    }
    
    function upddateBudget(){
        //1. Calculate Budget
        budgetController.calculateBudget();
        
        //2. Return Budget
        var budget = budgetController.returnBudget();
        
        //3. Display budget on page
        UIController.displayBudget(budget);
    }
    
    // Add Items inputs is here
    var addItems = function(){
        //1. Read Input values
        var input = UIController.getInput(); 
        console.log(input);
        
        if(input.description!="" && !isNaN(input.value) && input.value!=0){
            //2. Add Item
            var addItem = budgetController.addItem(input.type,input.description,input.value);
            console.log(addItem);

            //3. Add List Item to HTML Page
            UIController.addListItem(addItem,input.type);

            //4. clear Fields
            UIController.clearFiels();
            
            //5. Update Budget
            upddateBudget();
        }
        
    };     
    
    var deleteItems = function(event){
      var itemId, splitItem, itemType, itemId;
        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        splitItem = itemId.split('-');
        itemType = splitItem[0];
        itemId = splitItem[1];
        console.log(itemId, itemType);
        
        //1. Delete Item from Data Structure
        
        //2. Delete Item from UI
        
        //3. Update Budget
        
    };
    
    return {
        init : function(){
            console.log('Application started....')
            UIController.displayBudget({
                budget: 0,
                income: 0,
                expense: 0,
                percentage: -1
            });
            eventListener();
        }
    }
        
})(budgetController,UIController);

appController.init();