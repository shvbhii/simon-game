# 🎮 Simon Memory Game

[![Project Status: Complete](https://img.shields.io/badge/status-complete-success.svg)](https://github.com/shvbhi/simon-game)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

This project is Day 13 of my **#30DaysOfVibeCoding** challenge.

---

### ✨ **Live Demo**

Test your memory with the live, deployed version of the application on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://simon-game-indol-five.vercel.app/)


---

![Simon Game Screenshot](./public/Screenshot%202025-07-14%20005925.png)
![Simon Game Screenshot](./public/Screenshot%202025-07-14%20005940.png)


## 📝 Project Description

This is a fully functional, web-based recreation of the classic electronic memory game, "Simon." The project serves as a deep dive into React's state management capabilities, handling complex game logic, timing, and user interaction entirely on the front end. It’s a fun, nostalgic game that challenges the player's memory with progressively longer sequences of colors and sounds.

### About the #30DaysOfVibeCoding Challenge

This project is an entry in my personal 30-day coding challenge. The goal is to rapidly build and deploy a new project every day, embracing a "vibe coding" philosophy. This approach leverages AI tools as creative collaborators to brainstorm ideas, generate complex logic, and solve problems, allowing me to stay in a state of creative flow and focus on bringing concepts to life.

## 🌟 Key Features

-   **Complex Game Logic:** A robust state machine (`start`, `watching`, `playing`, `gameover`) built with React hooks to manage the entire game flow.
-   **Dynamic Visual Feedback:** The pads light up in sequence and respond instantly to player clicks.
-   **Progressive Difficulty:** The sequence gets one step longer with each successful round, increasing the challenge.
-   **User-Friendly Instructions:** A pop-up modal clearly explains the rules of the game to new players.
-   **Component-Based Architecture:** The UI is cleanly separated into reusable components like `<ColorPad>`, `<InstructionsModal>`, and `<Footer>`.
-   **Polished UI/UX:** A clean, retro-inspired design with a central display for game status and score.

## 💻 Tech Stack

-   **Frontend:** React.js, Vite
-   **Styling:** Pure CSS3 with CSS Grid for the main layout.
-   **Icons:** `react-icons` for modern, clean SVG icons.
-   **Core Logic:** JavaScript (`useState`, `useEffect`, `setTimeout`)
-   **Deployment:** Vercel

## 🛠️ Getting Started Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
- `npm`
  ```sh
  npm install npm@latest -g
  ```

### Cloning the Repository

1.  Fork the project (click the "Fork" button in the top right of the GitHub page).
2.  Clone your forked repository:
    ```sh
    git clone https://github.com/shvbhii/simon-game.git
    ```

### Installation & Running

1.  Navigate to the project directory:
    ```sh
    cd simon-game
    ```
2.  Install the NPM packages:
    ```sh
    npm install
    ```
3.  Run the development server:
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shvbhi/simon-game/issues).

1.  **Fork** the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

## 👤 Creator & Contact

**Shubhi Sharma**

-   **LinkedIn:** [www.linkedin.com/in/shvbhi](https://www.linkedin.com/in/shvbhi)
-   **GitHub:** [@shvbhi](https://github.com/shvbhii)

## 📜 License

Distributed under the MIT License.