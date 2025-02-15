
# Task Management App

![image](https://github.com/user-attachments/assets/8be3c86a-1fc2-456e-ba60-d595a9722e01)


This **Task Management App** allows users to add, edit, delete, and manage tasks effectively with features like search, sort, filters, and a dark mode option. Tasks are saved in **localStorage** for persistence across page refreshes.

## Features

- **Add Tasks**: Create tasks with a name, priority, due date, and optional notes.
- **Delete Tasks**: Easily remove tasks.
- **Mark as Completed**: Toggle tasks between active and completed states.
- **Filter Tasks**: Filter tasks by status (All, Active, Completed).
- **Sort Tasks**: Sort tasks based on priority, due date, or completion status.
- **Search Tasks**: Search tasks by name.
- **Dark Mode**: Toggle between light and dark themes.

## Technologies Used

- **HTML5**: For the structure of the web app.
- **CSS3**: For styling the app and ensuring responsiveness.
- **JavaScript**: For handling functionality and user interactions.
- **localStorage**: For persisting data between sessions.

## Screenshots

### 1. **Main Interface**
This screenshot shows the main user interface with task input, filters, and task list.

![image](https://github.com/user-attachments/assets/37c50f74-fe35-4496-ad2b-efa304965ec1)


### 2. **Dark Mode**
This screenshot demonstrates the app with dark mode enabled for a more comfortable user experience in low-light environments.

![image](https://github.com/user-attachments/assets/83ae81fc-0da2-4bbd-85bd-c056582e5523)


### 3. **Task List**
Here's an example of the task list, showing tasks with different priorities and completion states.

![image](https://github.com/user-attachments/assets/612a0cca-5388-4a5e-8cad-f4f17c002dfc)


## Project Structure

```
/task-management-app
│
├── index.html        # Main HTML file for the app
├── styles.css        # CSS file for styling the app
├── script.js         # JavaScript file for functionality
├── images/
│   ├── screenshot1.png  # Screenshot of the app
│   ├── screenshot2.png  # Screenshot of main interface
│   └── screenshot3.png  # Screenshot of dark mode
├── README.md         # This README file
```

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/st10383731/task-management-app.git
    cd task-management-app
    ```

2. **Open `index.html`**: Double-click the `index.html` file or open it in any web browser to run the app.

3. **Add Tasks**: Enter task details (name, priority, due date, and optional notes) in the input fields and click the **Add Task** button.

4. **Mark Tasks as Completed**: Click on the task name to toggle its completed state (task text will be crossed out).

5. **Delete Tasks**: Click the red **Delete** button next to any task to remove it.

6. **Use Filters**: Click on **All Tasks**, **Active Tasks**, or **Completed Tasks** to filter the task list by status.

7. **Sort Tasks**: Use the **Sort by Priority**, **Sort by Due Date**, or **Sort by Completion** dropdown to arrange tasks in different orders.

8. **Search Tasks**: Type in the **Search tasks** input field to filter tasks by their name.

9. **Enable Dark Mode**: Toggle the **Dark Mode** switch to switch between light and dark themes.

## Persistence

Tasks are stored in **localStorage**, which allows the app to remember tasks even after refreshing the page or reopening the browser. However, clearing your browser's local storage will remove all saved tasks.


## License

This project is open-source and available under the [MIT License](LICENSE).


