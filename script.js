@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    animation: fadeIn 1s ease-in-out;
}

/* Fade-in effect on page load */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Container with Glassmorphism effect */
.container {
    background: rgba(255, 255, 255, 0.1);
    padding: 25px;
    border-radius: 15px;
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 450px;
    animation: slideUp 0.6s ease-in-out;
}

/* Slide-up effect */
@keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Progress Bar */
.progress-bar {
    width: 100%;
    height: 12px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    overflow: hidden;
    margin: 12px 0;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
}

.progress {
    height: 100%;
    background: linear-gradient(90deg, #ff0066, #ff4d94);
    width: 0%;
    transition: width 1s linear;
    border-radius: 6px;
    box-shadow: 0px 0px 12px rgba(255, 0, 102, 0.7);
}

/* Neon Spinner */
.spinner {
    margin: 20px auto;
    width: 50px;
    height: 50px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #ff0066;
    animation: spin 1s linear infinite, pulse 1.5s infinite;
}

/* Spinner Rotation */
@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Neon Pulse Animation */
@keyframes pulse {
    0% { box-shadow: 0 0 10px rgba(255, 0, 102, 0.5); }
    50% { box-shadow: 0 0 20px rgba(255, 0, 102, 1); }
    100% { box-shadow: 0 0 10px rgba(255, 0, 102, 0.5); }
}

/* Buttons */
.subscribe-btn, .cancel-btn {
    display: inline-block;
    padding: 12px 25px;
    margin: 12px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    letter-spacing: 0.5px;
}

.subscribe-btn {
    background: linear-gradient(90deg, #ff0066, #ff4d94);
    color: white;
    box-shadow: 0px 0px 12px rgba(255, 0, 102, 0.7);
}

.subscribe-btn:hover {
    background: linear-gradient(90deg, #ff4d94, #ff0066);
    transform: scale(1.05);
}

.cancel-btn {
    background: linear-gradient(90deg, #ff3333, #ff6666);
    color: white;
    border: none;
    box-shadow: 0px 0px 12px rgba(255, 51, 51, 0.7);
}

.cancel-btn:hover {
    background: linear-gradient(90deg, #ff6666, #ff3333);
    transform: scale(1.05);
}
