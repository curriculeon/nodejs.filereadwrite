# Project Title

* **Objective** - To create a product...
* **Purpose** - To gain familiarity the following features...




## Objective
* In this assignment, you will be creating a class named `FileReadWrite` that has the ability to read and write to a file.
  * Your task is to implement the `write`, `read`, and `delete` methods in the `FileReadWrite` class.
* You will also be creating a class named `FormSubmitter` that has the ability to handle the submission of a form that allows the user to input a file path and text to write to the file.
  * Your task is to implement the `submitForm` method in the `FormSubmitter` class.


### FileReadWriteClass

Your FileReadWrite class should have the following methods:

```js
class FileReadWrite {
    constructor(filePath) {
        this.filePath = filePath;
    }

    write(textToWriteToFile) {
      // TODO: Implement this method
    }

    read() {
      // TODO: Implement this method
    }

    delete() {
     // TODO: Implement this method
    }
}
```

* The `write` method should take in a string of text and write it to the file specified by the filePath property of the FileReadWrite instance.
* The `read` method should read the contents of the file specified by the filePath property of the FileReadWrite instance and return the contents as a string.
* the `delete` method should delete the file specified by the filePath property of the FileReadWrite instance.




## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Navigating to _forked_ Repository
* Navigate to your github profile to find the _newly forked repository_.
* Copy the URL of the project to the clipboard.

#### Part 3 - Cloning _forked_ repository
* Clone the repository from **your account** into the `~/dev` directory.
  * if you do not have a `~/dev` directory, make one by executing the following command:
    * `mkdir ~/dev`
  * navigate to the `~/dev` directory by executing the following command:
    * `cd ~/dev`
  * clone the project by executing the following command:
    * `git clone https://github.com/MYUSERNAME/NAMEOFPROJECT`

#### Part 4 - Check Build
* Ensure that the tests run upon opening the project.
    * You should see `Tests Failed: 99 of 99 tests`







## How to Submit

#### Part 1 -  _Pushing_ local changes to remote repository
* from a _terminal_ navigate to the root directory of the _cloned_ project.
* from the root directory of the project, execute the following commands:
    * add all changes
      * `git add .`
    * commit changes to be pushed
      * `git commit -m 'I have added changes'`
    * push changes to your repository
      * `git push -u origin master`

#### Part 2 - Submitting assignment
* from the browser, navigate to the _forked_ project from **your** github account.
* click the `Pull Requests` tab.
* select `New Pull Request`
