export class Model {
    user;
    items;

    constructor() {
        this.user = "Ece";
        this.items = [
           new TodoItem("Spor",true),
           new TodoItem("klahvaltı",false),
           new TodoItem("kitap",false),
           new TodoItem("sinema",false)
          ];
    }

}

export class TodoItem{
    description;
    action;

    constructor(description, action){
        this.description = description;
        this.action = action;
    }
}