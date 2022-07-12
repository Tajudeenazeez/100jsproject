//Budget control where new income and expenses object are created
//dynamically
const budgetController = (function(){
    const Expense = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value  = value
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function(totalIncome){
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100)
        }else{
            this.percentage = -1;
        }
        Expense.prototype.getPercentage = function(){
            return this.percentage
        }

    }
    const Income = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value  = value
    }

    let calculateTotal = function(type) {
        let sum = 0;
        data.allItem[type].forEach(function(cur){
            sum += cur.value;
        });
        data.totals[type] = sum;
    }

    const data = {
        allItem : {
            expense : [],
            income : []
        },
        totals :{
            expense : 0,
            income : 0
        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem : function (type, desc, value){
            let newItem, ID;
            if(data.allItem[type].length > 0) {
                ID = data.allItem[type][data.allItem[type].length - 1].id + 1
            } else{ 
                ID = 0;
            }

            if(type === "expense"){
               newItem = new Expense(ID, desc, value)
            } else if(type === "income"){
               newItem = new Income(ID, desc, value)
            }
            data.allItem[type].push(newItem)
            return newItem  
        },

        deleteItem: function(type, id){
            let index, ids; 
              ids = data.allItem[type].map(function(current){
                return current.id;
            })
            index = ids.indexOf(id);
            if(index !== -1){
                return data.allItem[type].splice(index, 1)
            }
        },
        calculateBudget: function(){
            //calculate total income and expenses
            calculateTotal("income");
            calculateTotal("expense");

            //Calculate the budget (income - expenses)
            // if(data.totals.inc > 0 && data.totals.exp > 0 ){
            //     data.budget = Math.round((data.totals.inc - data.totals.exp) * 100);
            // } else{
            //     data.budget = data.totals.inc - data.totals.exp
            // }
            data.budget = data.totals.income - data.totals.expense;
            // Calculate the percentage of income that we spent
            if(data.totals.income > 0){
                data.percentage = Math.round((data.totals.expense / data.totals.income) * 100) 
            }else{
                data.percentage = -1
            }
        },
        //Cal percentage
        calculatePercentage: function(){
            let db = data.allItem.expense
            db.forEach(function(cur){
                cur.calcPercentage(data.totals.income)
            })
        },
        getAllPercentages: function(){
            let allPerc = data.allItem.expense.map(function(cur){
                return cur.getPercentage();
            })
            return allPerc
        },
        // return the budget, income and expenses
        getBudget: function(){
            return {
                budget: data.budget,
                totalIncome: data.totals.income,
                totalExpenses: data.totals.expense,
                percentage: data.percentage,
            }
        },
        testing: function(){
            console.log(data);
        }
       
    }

})()

// UI controller get all the html element from our html file
const UIController = (function(){
    const DOMstrings = {
        inputType : ".add__type",
        inputDesc : ".add__description",
        inputValue : ".add__value",
        inputBtn : ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expensesPerLabel: ".item__percentage",
        dateLabel: ".budget__title--month"   
        }
        const formatBudget = function(num, type) {
           let int, dec, numSplit;
           num = Math.abs(num)
           num = num.toFixed(2)
           numSplit = num.split('.')
           int = numSplit[0]
           dec = numSplit[1]
           if(int.length > 3){
            int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3) 
           }
           return (type == 'expense' ? '-': '+') + ' ' + int + '.' + dec
        }
        let nodeListForEach = function(list, callback) {
            for(let i = 0; i < list.length; i++) {
                callback(list[i], i);
            }
        }
    return {
        getInput: function(){ 
           return {
            type : document.querySelector(DOMstrings.inputType).value,
            desc : document.querySelector(DOMstrings.inputDesc).value,
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
           }
        },
        addListItem: (obj, type) => {
            let html, newHtml, element;
            
            //create a HTML string placeholder text
            if(type === "income"){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn">del<i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if(type == "expense"){
                    element = DOMstrings.expensesContainer;
                    html = ` <div class="item clearfix" id="expense-%id%">
                    <div class="item__description">%description%</div>
                    <div class="right clearfix">
                        <div class="item__value">%value%</div>
                        <div class="item__percentage">21%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn">del<i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`
                }

            //Replace the placeholder text with some actual data
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace("%description%", obj.description);
                newHtml = newHtml.replace("%value%", formatBudget(obj.value, type));

            //Insert the HTML into the  DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);

        },
        deleteListItem: function(selectorID){
            let el = document.getElementById(selectorID)
            el.parentNode.removeChild(el)
        },

        clearFields : function(){
            let fields, fieldArr;
            fields = document.querySelectorAll(DOMstrings.inputDesc + ', ' + DOMstrings.inputValue);
            fieldArr = Array.prototype.slice.call(fields)
            fieldArr.forEach(current => {
                current.value = "";
            });
            fieldArr[0].focus();
         
            },
            displayBudget: (obj) => {
                document.querySelector(DOMstrings.budgetLabel).textContent = formatBudget(obj.budget)
                document.querySelector(DOMstrings.incomeLabel).textContent = formatBudget(obj.totalIncome)
                document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExpenses
                if(obj.percentage > 0){
                    document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%"
                }else{
                    document.querySelector(DOMstrings.percentageLabel).textContent = "---"
                }
            },

            displayPercentages: function(percentage){
                let fields = document.querySelectorAll(DOMstrings.expensesPerLabel)

                nodeListForEach(fields, function(current, index){
                    if(percentage[index] > 0) {
                        current.textContent = percentage[index] + '%';
                    }
                    else {
                        current.textContent = "---";
                    }
                })
            },

            displayDate : function(){
                let now, month;
                now = new Date()
                month = now.getFullYear() + '-' + now.getMonth() + '-' + now.getDay();
                document.querySelector(DOMstrings.dateLabel).textContent = month
            },
            changeType : function(){
                let fields;
                fields = document.querySelectorAll(
                    DOMstrings.inputType + ',' + 
                    DOMstrings.inputDesc + ',' + 
                    DOMstrings.inputValue)
                nodeListForEach(fields, function(cur){
                    cur.classList.toggle('red-focus')
                })
                document.querySelector(DOMstrings.inputBtn).classList.toggle('red')
            },

            getDOMstrings : function(){
            return DOMstrings
            } 
    }

    //code in here
})()


const controller = (function(budgetCtrl, UICtrl){
    const setupEventListeners = function(){
        const DOM = UICtrl.getDOMstrings()
        document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem)
        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem)
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)
        document.addEventListener("keypress", function(KeyboardEvent){
             if(KeyboardEvent.keyCode === 13)
                  ctrlAddItem()
        })
    }

    let updateBudget = function(){
        //1. calculate the budget
        budgetCtrl.calculateBudget()
        //2. Return the Budget
        const budget = budgetCtrl.getBudget()
        //3. Display the budget on the UI 
         UICtrl.displayBudget(budget)
    };
    let updatePercentage = function(){
        // 1. Calculate percentage
          budgetCtrl.calculatePercentage(); 
        // 2. Read percentage from the budget
          let percentages = budgetCtrl.getAllPercentages();
        // 3. Update the UI with the new percentage
         UICtrl.displayPercentages(percentages);
    }
    const ctrlAddItem = () => {
        let input, newItem;
        // 1. get the input data
         input = UICtrl.getInput()

         if(input.desc !== "" && !isNaN(input.value) && input.value > 0){
 
        //2. add item to budget
        newItem = budgetCtrl.addItem(input.type, input.desc, input.value);
        //3. add the item to ui
        UICtrl.addListItem(newItem, input.type)

        //4.  clear fields
        UICtrl.clearFields();

        //5. Calculate and update budget
        updateBudget()

        // 6. update the percentage
        updatePercentage()

         }
     
    }
    const ctrlDeleteItem = function(event){
        let itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.id;
        if (itemID){
            splitID = itemID.split("-");
            type =splitID[0];
            ID = parseInt(splitID[1]);
           

            // 1. delete the item from the data structure
                budgetCtrl.deleteItem(type,ID )

            // 2. delete the item from the UI
               UICtrl.deleteListItem(itemID)

            // 3. update and show the new budget
               updateBudget()

            // 4. cal and update percentage
              updatePercentage()
        }

    }
    return {
        init : function (){
            UICtrl.displayDate()
            console.log("Application has started")
            setupEventListeners()
            UICtrl.displayBudget(
                {
                    budget: 0,
                    totalIncome: 0,
                    totalExpenses: 0,
                    percentage: -1
                }
            )
        }
    }
})(budgetController, UIController)

controller.init()