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
    
    var budgetData = {
        allItems : {
            exp:[],
            inc:[]
        },
        totals: {
            exp:0,
            inc:0
        }
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
        DOMExpenseDiv:'.expenses__list'
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
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else if(type === 'exp'){
                element = DOMString.DOMExpenseDiv;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
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
        
        getDOMString: function(){
            return DOMString;
        }
    }
})();


var appController = (function(budgetController,UIController){
    
    
    //All Event Listners are here
    var eventListener = function(){
        var DOMString = UIController.getDOMString();
        
        document.querySelector(DOMString.DOMAddbtn).addEventListener('click',appcnrlAddItems);
        document.addEventListener('keypress',function(event){
        if(event.keyCode === 13){
                appcnrlAddItems();
            }
        });    
    }
    
    // Add Items inputs is here
    var appcnrlAddItems = function(){
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
        }
        
    }     
    
    return {
        init : function(){
            console.log('Application started....')
            eventListener();
        }
    }
        
})(budgetController,UIController);

appController.init();