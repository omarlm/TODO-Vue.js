var vm = new Vue({
    el: '#task',
    data: {
        newTask: "",
        taskList: []
    },
    methods: {
        addTask: function () {
            var task = this.newTask.trim();
            if(task){
                this.taskList.push({
                    text: task
                });
                this.newTask = "";
            }
        },
        removeTask: function(task) {
            var index = this.taskList.indexOf(task);
            this.taskList.splice(index, 1);
        },
        clearList: function(){
            this.taskList = [];
        }
    }

});