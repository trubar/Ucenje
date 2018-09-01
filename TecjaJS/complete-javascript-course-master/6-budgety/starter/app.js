//kontroler proracun
var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    /*
        var allExpenses = [];
        var allIncomes = [];
        var totalExpenses = 0;
        var totalIncomes = 0;
    */
    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
        /** primer kako izračunam
        0
        [200, 300, 100]
        sum = 0 + 200
        sum = 200 + 300
        sum = 500 + 100 = 700
         */

    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        precentage: -1
    };

    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            //[1 2 3 4 5], next ID = 6
            //[1 2 4 6 8], next ID = 9
            //ID = last ID + 1

            // Naredi nov ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Ustvarim nov zapis glede na to ali je exp ali inc tip
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Dodam novi zapis v array
            data.allItems[type].push(newItem);

            //Vrnem vrednost novega zapisa
            return newItem;
        },

        deleteItem: function (type, id) {
            var ids, index;

            // id = 6
            //data.allItems[type][id]; *** ID in index nista eneak zato ne moremo brisati tako ***
            //ids = [1 2 4 6 8]
            //index = 3

            ids = data.allItems[type].map(function (current) {
                return current.id; //naredim cel nov array
            });

            index = ids.indexOf(id); // dobim index za funkcijo splice

            //if (index !== -1) {
            data.allItems[type].splice(index, 1); // odstarniim en zapis
            //}

        },

        calculateBudget: function () {

            // Izračunam vse prihodke in odhodke
            calculateTotal('exp');
            calculateTotal('inc');

            // Vsi prihodki - odhodki
            data.budget = data.totals.inc - data.totals.exp;

            // Dostotek odhodkov glede na prihodke
            if (data.totals.inc > 0) {
                data.precentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.precentage = -1;
            }

            // odhodki = 100 in prihodki so 300, odstotek je 33.3333% = 100/300 = 0,33333 * 100

        },

        calculatePercentages: function () {

            /**
             * a=20
             * b=10
             * c=40
             * income = 100
             * a=20/100 = 20%
             * b=10/100 = 10%
             * c=40/100 = 40%
             */

            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            });

        },

        getPercentages: function () {
            var allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                precentage: data.precentage
            }
        },

        testing: function () {
            console.log(data);
        }
    };



})();



//UI Kontroler
var UIControler = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        precentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function (num, type) {
        /**
         * + ali - pred številom
         * dve decimalki
         * pika ločuje tisočice
         * 
         * 2310,4567 -> + 2.310,46
         * 2000 -> + 2.000,00
         * 
         */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + '.' + int.substr(int.length - 3, 3); // input 2310, output 2.310
        }
        dec = numSplit[1];

        return (type === 'exp' ? '- ' : '+ ') + int + ',' + dec;
    };

    var nodeListForEach = function (list, callBack) {
        for (var i = 0; i < list.length; i++) {
            callBack(list[i], i);
        }
    };

    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //bo ali inc ali exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItems: function (obj, type) {
            var html, newHtml, element;
            // Ustvarim HTML iz placeholder tekstom
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Zamenjam placeholder tekst iz podatki

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            // Vnesem HTML v DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


        },

        deleteListItem: function (selectorID) {

            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el); //DOM manipulations blog.garstasio.com

        },

        clearFields: function () {
            var fields;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); //vrene list

            var fieldsArr = Array.prototype.slice.call(fields); // spremenim list v array, da lahko loopam

            fieldsArr.forEach(function (currrent, index, array) {
                currrent.value = "";
            });

            fieldsArr[0].focus(); // premakne kurzor na polje opis
        },

        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            document.querySelector(DOMstrings.precentageLabel).textContent = obj.precentage;

            if (obj.precentage > 0) {
                document.querySelector(DOMstrings.precentageLabel).textContent = obj.precentage + '%';
            } else {
                document.querySelector(DOMstrings.precentageLabel).textContent = '---';
            }

        },

        displayPercentages: function (percentages) {

            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel); //to je nodeList in ne array, ker pride iz HTML zato ne dela forEach funkcija

            nodeListForEach(fields, function (current, index) {
                // naredi nekaj
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });

        },

        displayMonth: function () {
            var now, year;

            now = new Date();
            //var christmas = new Date(2018, 11, 25);

            months = ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

        },

        changedType: function () {

            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);


            nodeListForEach(fields, function (cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');

        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();


//Skupni kontroler
var controller = (function (budgetCtrl, UICrtl) {

    var setupEventListeners = function () {
        var DOM = UICrtl.getDOMstrings(); //Dobim vredonosi iz drugega modula zato je samo DOM in ne DOMstrings

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICrtl.changedType);

    };

    var updatePercentages = function () {

        // 1. Izračunaj procente
        budgetCtrl.calculatePercentages();

        // 2. Preberi iz modula proračun
        var percentages = budgetCtrl.getPercentages();

        // 3. posodobi UI
        UIControler.displayPercentages(percentages);

    };

    var updateBudget = function () {

        // 1. preračunaj proračun
        budgetCtrl.calculateBudget();

        // 2. Vrni vrednost preračuna
        var budget = budgetCtrl.getBudget();

        // 3. prikaži proračun v UI
        UIControler.displayBudget(budget);

    };

    var ctrlAddItem = function () {
        var input, newItem;

        // 1. dobi podatke iz input polja
        input = UICrtl.getinput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // 2. dodaj podatke v kontroler proračun
            newItem = budgetController.addItem(input.type, input.description, input.value);

            // 3. Dodaj število v UI
            UICrtl.addListItems(newItem, input.type);

            // 4. Brišem vrednosto polj
            UICrtl.clearFields();

            // 5. Preračunaj in objavi proračun
            updateBudget();

            // 6. izračunaj in posodobi procente
            updatePercentages();

        }

    };

    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if (itemID) {

            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. Brisi zapis is arraya
            budgetCtrl.deleteItem(type, ID);

            // 2. Brisi zapis is UI
            UICrtl.deleteListItem(itemID);

            // 3. Posodobi in pokaži novi proračun
            updateBudget();

            // 4. izračunaj in posodobi procente
            updatePercentages();

        }

    };

    return {
        init: function () {
            console.log('Aplikacija je začela delovati!');
            UICrtl.displayMonth();
            UICrtl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                precentage: -1
            });
            setupEventListeners();
        }
    };


})(budgetController, UIControler);

controller.init();