<h1 align="center">
   
![image](https://user-images.githubusercontent.com/82424777/117688679-605bca00-b18f-11eb-954d-d76fa4cf6ba2.png)
</h1>

<p align="center">
This project is a simple web application of one to do list implemented with Vue.js. 
</p>
 
<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AleNoia/toDoList?color=%2304D361"> <img alt="Repository size" src="https://img.shields.io/github/repo-size/AleNoia/toDoList"> <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AleNoia/toDoList">
</p>


***
# 📌 Table of Contents
* 💡 [Features](#features)
* 🎯 [Purpose](#Purpose)
* 🛠 [Installation](#Installation)
* 📝 [Utilization](#Utilization)
  * 📃 [To add one task](#Toaddonetask)
  * ✏ [Text editor](#Texteditor) 
  * 📈 [Change status](#Changestatus)
  * 📊 [Data panel](#dataPanel) 
* 📱 [Responsive Web Design](#Responsive)
* 🤝 [Contributing](#Contributing)
* ⚙ [Technologies Used](#TechnologiesUsed)
* 👋 [Author](#Author)
* 🧾 [License](#License)
***
# <a name="features"></a>💡 Features
* 📃 List your day-to-day tasks.
* 📈 Have a data panel with the data of your tasks.
* ✏ Have a simple text editor to build your tasks.
* 📱 Responsive application.

***
# <a name="Purpose"></a>🎯 Purpose
My purpose with this project is to learn more about the Vue.js framework, also learn how to:
* create a text editor
* create a documentation
* work with data and create a data panel
* work with local storage
* work with date and time
* work with Ui and Ux design
* work with Scss
* work with responsive web design

***
# <a name="Installation"></a>🛠 Installation
You need to install [Node.js](https://nodejs.org/en/download/), [git](https://git-scm.com) and [Vue.js](https://vuejs.org/v2/guide/), then in order to clone the project, run this command:

```

git clone https://github.com/AleNoia/todolist.git

```

Install dependencies

```

npm install

```

Run the aplication

```

npm run serve

```

***

# <a name="Utilization"></a>📝 Utilization 
It  is very simple to use the toDoList.

![image](https://user-images.githubusercontent.com/82424777/117679633-d4de3b00-b186-11eb-9c10-f4c2d3fa11f0.png)

## <a name="Toaddonetask"></a> 📃 To add one task
To add a new task, just click the "Click here to add one" button or the button in the bottom right corner.
Both buttons will open a modal to add your task.

Task storage is responsible for the ```save()``` and the ```addTask(task)``` method.
## save()
``` javascript
save() {
    let id = Date.now() // Creatgin a id by the date.now()
    let tit = document.getElementById("title").innerHTML // Taking the task and storing on the let tit.

    if (tit.length === 0) { // Verifying that the task is not empty.
        this.showNotification = true;
        setTimeout(() => { // If it is empty, a notification will appear.
            this.showNotification = false;
        }, 4500)
    } else {
        // If it is not empty, all data will be stored in the task object.
        let task = {
            id,
            tit,
            concluded: false,
            dateCreate: factory.BuildDate(new Date()), // It will create a custom date according to the current date.
            hourCreate: factory.BuildTime(new Date()), // It will create a custom time according to the current date.
            concludedDate: String,
            concludedHour: String,
        }
        // It will emit an event that will be heard by the parent component (Home) and the task will be passed to it.
        this.$emit('taskAdded', {
            task: task
        })
        // Finally, the modal will close.
        this.modal = false
    }

},
```

## addTask(task)
```javascript
addTask(task) { // receiving task and pushing to tasks array
    this.tasks.push(task)
    console.log(this.tasks)
}
```

All tasks will be stored in the __task array__ in the home component and also in the browser's __local storage__.

## Tasks array

```javascript
data() {
 return {
    tasks: [] //Tasks array
  }
},
```

## Local storage

```javascript
watch:{ // stoing task to local storage
    tasks:{
      deep: true,
      handler(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  }, 
created(){ // receiving tasks from local storage
    const json = localStorage.getItem('tasks')
    const array = JSON.parse(json) 
    this.tasks = Array.isArray(array) ? array : []
  },
```

## <a name="Texteditor"></a>✏ Text editor

![image](https://user-images.githubusercontent.com/82424777/117817673-344b5200-b23e-11eb-919c-d0424ca3f5a1.png)

__Obs:__ This application uses [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand). This feature is deprecated!

The toDoList text editor is very simple, there is the option to:

* Make text bold
```javascript
boldFunc() {
    document.execCommand("bold", false, null)
},
```
* Italicize the text
```javascript
italicFunc() {
    document.execCommand("italic", false, null)
},
```
* Underline the text
```javascript
underlineFunc() {
    document.execCommand("underline", false, null)
},
```
* Insert ordered list
```javascript
orderNumFunc() {
    document.execCommand("insertOrderedList", false, null)
},
```
* Insert unordered list
```javascript
unorderedNumFunc() {
    document.execCommand("insertUnorderedList", false, null)
},
```
* Justify to left
```javascript
justifyleftFunc() {
    document.execCommand("justifyleft", false, null)
},
```
* Justify to center
```javascript
justifycenterFunc() {
    document.execCommand("justifycenter", false, null)
},
```
* Justify to right
```javascript
justifyrightFunc() {
    document.execCommand("justifyright", false, null)
},
```

## <a name="Changestatus"></a>📈 Change status
To change the status of the task to completed or to pending just click on the card.

![image](https://user-images.githubusercontent.com/82424777/117817346-e46c8b00-b23d-11eb-97fa-0323970afc2e.png)


The responsibility for this change lies with the ```donetask()``` method.
```javascript
donetask() {
    this.task.task.concluded = !this.task.task.concluded // Changing status
    this.task.task.concludedDate = factory.BuildDate(new Date()) // Including task completion date.
    this.task.task.concludedHour = factory.BuildTime(new Date()) // Including task completion time.
},
```

## <a name="dataPanel"></a>📊 Data panel
The data panel data comes from component tasks.

![image](https://user-images.githubusercontent.com/82424777/117817170-b5561980-b23d-11eb-97f2-4b83a2c22d46.png)

The data panel has this data:
* Tasks total
* Tasks to do
* Tasks done
* Percentage of the tasks you have done

```javascript
computed: {
    status() {
        let tasksTotal = this.tasks.length // Task total 
        let tasksToDo = this.tasks.filter(tasks => tasks.task.concluded == false).length // Tasks pending 
        let tasksDone = this.tasks.filter(tasks => tasks.task.concluded == true).length // Tasks done
        let tasksPercent = Math.round(tasksDone / tasksTotal * 100) || 0 // Tasks percent
        return {
            tasksTotal,
            tasksToDo,
            tasksDone,
            tasksPercent
        }
    }
},
```

***
# <a name="Responsive"></a>📱 Responsive Web Design
The ToDoList is fully responsive.

![image](https://user-images.githubusercontent.com/82424777/117744603-6bd6e180-b1df-11eb-9e88-336f65f7951e.png)
![image](https://user-images.githubusercontent.com/82424777/117745231-780f6e80-b1e0-11eb-8116-57c91d3e514b.png)
![image](https://user-images.githubusercontent.com/82424777/117745604-2ddabd00-b1e1-11eb-92d3-bffc6bb91118.png)
![image](https://user-images.githubusercontent.com/82424777/117745662-4c40b880-b1e1-11eb-8142-a0822230c604.png)
![image](https://user-images.githubusercontent.com/82424777/117745674-5367c680-b1e1-11eb-9cc8-0e751b46004d.png)
![image](https://user-images.githubusercontent.com/82424777/117745688-58c51100-b1e1-11eb-9000-d5231895cdf3.png)

***

# <a name="TechnologiesUsed"></a> ⚙ Technologies used

Technologies that were used in the construction of the project:

- [Vue.js](https://vuejs.org)
- [JavaScript](https://www.javascript.com)
- [HTML](https://html.com)
- [SCSS](https://sass-lang.com)

***

# <a name="Contributing"></a>🤝 Contributing

1. Fork the project.
2. Create a new branch with your changes: ```git checkout -b my-feature```
3. Save your changes and create a commit message telling you what you did: ```git commit -m" feature: My new feature "```
4. Submit your changes: ```git push origin my-feature```
5. Now just open your pull request in the repository that you forked describing your changes
6. After the merge of your pull request is done, you can delete yout branch

> If you have any questions check [this guide](https://github.com/unform/unform/blob/main/.github/CONTRIBUTING.md) on how to contribute
 
Feel free to contribute 🙂

***
# <a name="Author"></a>👋 Author

### [Igor Noia Silva](https://github.com/AleNoia)

If you want to contact, mail me or send a message on Twitter

[![Gmail Badge](https://img.shields.io/badge/-igornoiasilva@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:igornoiasilva@gmail.com)](mailto:igornoiasilva@gmail.com)  ![badge](https://img.shields.io/twitter/url?label=%40IgorNoiaSilva&style=social&url=https%3A%2F%2Ftwitter.com%2FIgorNoiaSilva)

***

# <a name="License"></a>🧾 License
Released in 2021. This project is under the [MIT license](https://github.com/AleNoia/todolist/blob/main/LICENSE).

Made by [Igor Noia](https://github.com/AleNoia) 🤙
