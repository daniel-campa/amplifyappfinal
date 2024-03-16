import React from "react";

function Form() {
    return (
        <form class="col-4">
            Create new Task
            <div class="form-group">
                <label for="taskTitle">Title</label>
                <input type="text" class="form-control" id="taskTitle" placeholder="Enter title"></input>
            </div>
            <div class="form-group">
                <label for="taskDesc">Description</label>
                <textarea class="form-control" id="taskDesc" rows="3"></textarea>
            </div>
            <div class="form-group col-1">
            Priority
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="priorityRadio" id="priority1" value="option1"></input>
                    <label class="form-check-label" for="priority1">
                        1
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="priorityRadio" id="priority2" value="option2" checked></input>
                    <label class="form-check-label" for="priority2">
                        2
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="priorityRadio" id="priority3" value="option3"></input>
                    <label class="form-check-label" for="priority3">
                        3
                    </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
} 

export default Form;
